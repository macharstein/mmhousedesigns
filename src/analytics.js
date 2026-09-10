const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

let initialized = false;

function initializeAnalytics() {
  if (initialized || !measurementId?.startsWith('G-')) {
    return Boolean(initialized);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false,
  });

  initialized = true;
  return true;
}

export function trackPageView() {
  if (!initializeAnalytics()) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    page_title: document.title,
  });
}
