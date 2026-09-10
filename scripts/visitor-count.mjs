import { readFile } from 'node:fs/promises';
import { sign } from 'node:crypto';

const propertyId = process.env.GA4_PROPERTY_ID?.replace(/^properties\//, '').trim();
const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS?.trim();
const [startDate = '30daysAgo', endDate = 'today'] = process.argv.slice(2);
const validDate = /^(?:today|yesterday|\d+daysAgo|\d{4}-\d{2}-\d{2})$/;

function fail(message) {
  console.error(`Visitor report error: ${message}`);
  process.exit(1);
}

function encodeJson(value) {
  return Buffer.from(JSON.stringify(value)).toString('base64url');
}

async function readResponse(response, label) {
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const details = payload.error_description || payload.error?.message || response.statusText;
    throw new Error(`${label} failed (${response.status}): ${details}`);
  }

  return payload;
}

async function getAccessToken(credentials) {
  const issuedAt = Math.floor(Date.now() / 1000);
  const unsignedToken = [
    encodeJson({ alg: 'RS256', typ: 'JWT' }),
    encodeJson({
      aud: 'https://oauth2.googleapis.com/token',
      exp: issuedAt + 3600,
      iat: issuedAt,
      iss: credentials.client_email,
      scope: 'https://www.googleapis.com/auth/analytics.readonly',
    }),
  ].join('.');
  const signature = sign('RSA-SHA256', Buffer.from(unsignedToken), credentials.private_key)
    .toString('base64url');
  const assertion = `${unsignedToken}.${signature}`;
  const body = new URLSearchParams({
    assertion,
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
  });
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  const payload = await readResponse(response, 'Google authentication');

  return payload.access_token;
}

async function run() {
  if (!propertyId || !/^\d+$/.test(propertyId)) {
    fail('set GA4_PROPERTY_ID to the numeric Google Analytics property ID in .env.');
  }

  if (!credentialsPath) {
    fail('set GOOGLE_APPLICATION_CREDENTIALS to the service-account JSON path in .env.');
  }

  if (!validDate.test(startDate) || !validDate.test(endDate)) {
    fail('dates must be YYYY-MM-DD, today, yesterday, or values such as 30daysAgo.');
  }

  let credentials;

  try {
    credentials = JSON.parse(await readFile(credentialsPath, 'utf8'));
  } catch (error) {
    fail(`could not read credentials at ${credentialsPath}: ${error.message}`);
  }

  if (!credentials.client_email || !credentials.private_key) {
    fail('the credentials file is not a valid Google service-account JSON key.');
  }

  try {
    const accessToken = await getAccessToken(credentials);
    const response = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dateRanges: [{ startDate, endDate }],
          metrics: [
            { name: 'activeUsers' },
            { name: 'newUsers' },
            { name: 'sessions' },
            { name: 'screenPageViews' },
          ],
        }),
      },
    );
    const report = await readResponse(response, 'Analytics report');
    const values = report.rows?.[0]?.metricValues ?? [];
    const number = (index) => Number(values[index]?.value ?? 0).toLocaleString('en-US');

    console.log(`MM&HouseDesigns visitor report (${startDate} to ${endDate})`);
    console.log(`Visitors:     ${number(0)}`);
    console.log(`New visitors: ${number(1)}`);
    console.log(`Sessions:     ${number(2)}`);
    console.log(`Page views:   ${number(3)}`);
  } catch (error) {
    fail(error.message);
  }
}

await run();
