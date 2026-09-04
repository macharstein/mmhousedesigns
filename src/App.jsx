import { useEffect, useMemo, useState } from 'react';

const brand = 'MM&HouseDesigns';
const defaultLanguage = 'ka';
const contactEmail = 'mmhousedesigns@gmail.com';
const contactPhone = '+995 599 196 259';
const contactPhoneHref = 'tel:+995599196259';
const assetBase = `${import.meta.env.BASE_URL}assets`;

const languages = [
  { code: 'ka', flag: '🇬🇪', label: 'ქართული' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'ru', flag: '🇷🇺', label: 'Русский' },
];

const heroImages = [
  `${assetBase}/project-exterior.jpg`,
  `${assetBase}/hero-secondary.jpg`,
  `${assetBase}/hero-tertiary.jpg`,
];

const translations = {
  ka: {
    htmlLang: 'ka',
    metaTitle: brand,
    metaDescription: `არქიტექტურისა და სახლის დიზაინის პორტფოლიო ${brand}-ისთვის.`,
    nav: {
      home: 'მთავარი',
      projects: 'პროექტები',
      contact: 'კონტაქტი',
    },
    languageAria: 'ენის არჩევა',
    navAria: 'ძირითადი ნავიგაცია',
    homeAria: `${brand} მთავარი გვერდი`,
    heroAria: 'არქიტექტურული პორტფოლიოს შესავალი',
    heroDotsAria: 'მთავარი ფოტოს არჩევა',
    showSlideLabel: (number, eyebrow) => `სლაიდი ${number}: ${eyebrow}`,
    heroSlides: [
      {
        eyebrow: 'საცხოვრებელი არქიტექტურა',
        title: brand,
        copy: 'არქიტექტურა, ექსტერიერის კონცეფციები და ინტერიერის დაგეგმარება სახლებისთვის.',
      },
      {
        eyebrow: 'სახლის დიზაინის სტუდია',
        title: 'თანამედროვე სახლები',
        copy: 'პირველი იდეიდან დასრულებულ ვიზუალურ კონცეფციამდე, ყოველი პროექტი იწყება პროპორციით, სინათლით და ყოველდღიური კომფორტით.',
      },
      {
        eyebrow: 'პორტფოლიოს საფუძველი',
        title: 'მომავალი პროექტების სივრცე',
        copy: 'სუფთა და მშვიდი გარემო დასრულებული რენდერებისთვის, პროექტის აღწერებისთვის, კლიენტის დეტალებისა და საკონტაქტო ინფორმაციისთვის.',
      },
    ],
    projectsPage: {
      eyebrow: 'შერჩეული ნამუშევრები',
      title: 'პროექტების გალერეა',
    },
    projectTypes: {
      Exterior: {
        title: 'ექსტერიერის პროექტი',
        category: 'ექსტერიერის არქიტექტურა',
        description: (title) =>
          `${title} წარმოადგენს საცხოვრებელი სახლის ექსტერიერის კონცეფციას, სადაც ყურადღება ექცევა ფორმას, ფასადის რიტმს, ლანდშაფტს და შესასვლელის გამოცდილებას.`,
      },
      Interior: {
        title: 'ინტერიერის პროექტი',
        category: 'ინტერიერის ვიზუალიზაცია',
        description: (title) =>
          `${title} აჩვენებს ინტერიერის კონცეფციას მასალების ბალანსით, განათებით, ავეჯის განლაგებით და ყოველდღიური მოძრაობის ლოგიკით.`,
      },
    },
    openProjectLabel: (title) => `${title} გახსნა`,
    projectImageAlt: (title) => `${title} არქიტექტურული რენდერი`,
    projectFullImageAlt: (title) => `${title} სრული არქიტექტურული რენდერი`,
    closeProjectLabel: 'პროექტის სურათის დახურვა',
    contactPage: {
      eyebrow: 'დაგვიკავშირდით',
      title: 'კონტაქტი',
      intro: 'თუ გაინტერესებთ ახალი სახლი, რემონტი, ინტერიერი ან ვიზუალური კონცეფცია, დაგვიკავშირდით ქვემოთ მოცემული ინფორმაციის გამოყენებით.',
      phoneLabel: 'ტელ.:',
      emailLabel: 'ელ. ფოსტა:',
      closing: 'მოხარული ვიქნები გავიგო თქვენი მომავალი პროექტის შესახებ.',
    },
  },
  en: {
    htmlLang: 'en',
    metaTitle: brand,
    metaDescription: `Architecture and house design portfolio for ${brand}.`,
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
    },
    languageAria: 'Choose language',
    navAria: 'Primary navigation',
    homeAria: `${brand} home`,
    heroAria: 'Architecture portfolio introduction',
    heroDotsAria: 'Hero image selector',
    showSlideLabel: (number, eyebrow) => `Show slide ${number}: ${eyebrow}`,
    heroSlides: [
      {
        eyebrow: 'Residential architecture',
        title: brand,
        copy: 'Architecture, exterior concepts, and interior planning for homes with a clear sense of place.',
      },
      {
        eyebrow: 'House design studio',
        title: 'Modern homes, carefully planned',
        copy: 'From first idea to polished visual concept, every project starts with proportion, light, and everyday comfort.',
      },
      {
        eyebrow: 'Portfolio foundation',
        title: 'Built for future project stories',
        copy: 'A clean space for finished renders, project descriptions, client details, and contact information.',
      },
    ],
    projectsPage: {
      eyebrow: 'Selected work',
      title: 'Project showcase',
    },
    projectTypes: {
      Exterior: {
        title: 'Exterior Study',
        category: 'Exterior architecture',
        description: (title) =>
          `${title} presents a residential exterior concept with attention to the building form, facade rhythm, landscape setting, and arrival experience.`,
      },
      Interior: {
        title: 'Interior Study',
        category: 'Interior visualization',
        description: (title) =>
          `${title} explores an interior room concept through material balance, lighting, furniture placement, and everyday flow.`,
      },
    },
    openProjectLabel: (title) => `Open ${title}`,
    projectImageAlt: (title) => `${title} architecture render`,
    projectFullImageAlt: (title) => `${title} full architecture render`,
    closeProjectLabel: 'Close project image',
    contactPage: {
      eyebrow: 'Start a conversation',
      title: 'Contact me',
      intro: 'If you are interested in discussing a new home, renovation, interior, or visual concept, use the details below to get in touch.',
      phoneLabel: 'Tel.:',
      emailLabel: 'Email:',
      closing: 'I look forward to learning about the next project.',
    },
  },
  ru: {
    htmlLang: 'ru',
    metaTitle: brand,
    metaDescription: `Портфолио архитектуры и дизайна домов для ${brand}.`,
    nav: {
      home: 'Главная',
      projects: 'Проекты',
      contact: 'Контакты',
    },
    languageAria: 'Выбрать язык',
    navAria: 'Основная навигация',
    homeAria: `${brand} главная страница`,
    heroAria: 'Вступление к архитектурному портфолио',
    heroDotsAria: 'Выбор главного изображения',
    showSlideLabel: (number, eyebrow) => `Показать слайд ${number}: ${eyebrow}`,
    heroSlides: [
      {
        eyebrow: 'Жилая архитектура',
        title: brand,
        copy: 'Архитектура, концепции экстерьера и планирование интерьера для домов с ясным характером и ощущением места.',
      },
      {
        eyebrow: 'Студия дизайна домов',
        title: 'Продуманные современные дома',
        copy: 'От первой идеи до готовой визуальной концепции каждый проект начинается с пропорций, света и повседневного комфорта.',
      },
      {
        eyebrow: 'Основа портфолио',
        title: 'Пространство будущих проектов',
        copy: 'Чистая и спокойная среда для готовых рендеров, описаний проектов, деталей для клиентов и контактной информации.',
      },
    ],
    projectsPage: {
      eyebrow: 'Избранные работы',
      title: 'Галерея проектов',
    },
    projectTypes: {
      Exterior: {
        title: 'Проект экстерьера',
        category: 'Архитектура экстерьера',
        description: (title) =>
          `${title} показывает концепцию экстерьера жилого дома с вниманием к форме здания, ритму фасада, ландшафту и входной зоне.`,
      },
      Interior: {
        title: 'Проект интерьера',
        category: 'Визуализация интерьера',
        description: (title) =>
          `${title} раскрывает интерьерную концепцию через баланс материалов, освещение, расстановку мебели и удобное движение в пространстве.`,
      },
    },
    openProjectLabel: (title) => `Открыть ${title}`,
    projectImageAlt: (title) => `${title}: архитектурный рендер`,
    projectFullImageAlt: (title) => `${title}: полный архитектурный рендер`,
    closeProjectLabel: 'Закрыть изображение проекта',
    contactPage: {
      eyebrow: 'Связаться',
      title: 'Контакты',
      intro: 'Если вы хотите обсудить новый дом, ремонт, интерьер или визуальную концепцию, свяжитесь с нами по указанным ниже данным.',
      phoneLabel: 'Тел.:',
      emailLabel: 'Эл. почта:',
      closing: 'Будем рады узнать о вашем следующем проекте.',
    },
  },
};

const projectPhotos = [
  { area: 'Exterior', file: 'Outside_1.jpg', number: '01' },
  { area: 'Exterior', file: 'Outside2.jpg', number: '02' },
  { area: 'Exterior', file: 'Outside3.jpg', number: '03' },
  { area: 'Exterior', file: 'Outside4.jpg', number: '04' },
  { area: 'Exterior', file: 'Outside5.jpg', number: '05' },
  { area: 'Exterior', file: 'Outside6.jpg', number: '06' },
  { area: 'Exterior', file: 'Outside7.jpg', number: '07' },
  { area: 'Exterior', file: 'Outside8.jpg', number: '08' },
  { area: 'Exterior', file: 'Outside9.jpg', number: '09' },
  { area: 'Exterior', file: 'Outside10.jpg', number: '10' },
  { area: 'Exterior', file: 'Outside11.jpg', number: '11' },
  { area: 'Exterior', file: 'Outside12.jpg', number: '12' },
  { area: 'Exterior', file: 'Outside13.jpg', number: '13' },
  { area: 'Exterior', file: 'Outside14.jpg', number: '14' },
  { area: 'Exterior', file: 'Outside15.jpg', number: '15' },
  { area: 'Exterior', file: 'Outside16.jpg', number: '16' },
  { area: 'Exterior', file: 'Outside17.jpg', number: '17' },
  { area: 'Exterior', file: 'Outside18.jpg', number: '18' },
  { area: 'Exterior', file: 'Outside19.jpg', number: '19' },
  { area: 'Interior', file: 'Inside1.jpg', number: '01' },
  { area: 'Interior', file: 'Inside2.jpg', number: '02' },
  { area: 'Interior', file: 'Inside3.jpg', number: '03' },
  { area: 'Interior', file: 'Inside4.jpg', number: '04' },
  { area: 'Interior', file: 'Inside5.jpg', number: '05' },
  { area: 'Interior', file: 'Inside6.jpg', number: '06' },
  { area: 'Interior', file: 'Inside7.jpg', number: '07' },
  { area: 'Interior', file: 'Inside8.JPG', number: '08' },
  { area: 'Interior', file: 'Inside9.jpg', number: '09' },
  { area: 'Interior', file: 'Inside10.jpg', number: '10' },
  { area: 'Interior', file: 'Inside11.jpg', number: '11' },
  { area: 'Interior', file: 'Inside12.jpg', number: '12' },
];

const navItems = [
  { id: 'home' },
  { id: 'projects' },
  { id: 'contact' },
];

function isSupportedLanguage(language) {
  return languages.some((item) => item.code === language);
}

function getInitialLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem('portfolio-language');
    return isSupportedLanguage(storedLanguage) ? storedLanguage : defaultLanguage;
  } catch {
    return defaultLanguage;
  }
}

function getInitialPage() {
  const hash = window.location.hash.replace('#', '');
  return navItems.some((item) => item.id === hash) ? hash : 'home';
}

function buildProjects(copy) {
  return projectPhotos.map(({ area, file, number }) => {
    const projectType = copy.projectTypes[area];
    const title = `${projectType.title} ${number}`;

    return {
      title,
      category: projectType.category,
      image: `${assetBase}/projects/${file}`,
      description: projectType.description(title),
    };
  });
}

function updateMetaContent(selector, content) {
  document.querySelector(selector)?.setAttribute('content', content);
}

function Header({ activePage, copy, language, onLanguageChange }) {
  return (
    <header className={`site-header ${activePage === 'home' ? 'is-overlay' : ''}`}>
      <a className="brand-mark" href="#home" aria-label={copy.homeAria}>
        {brand}
      </a>
      <div className="header-actions">
        <nav className="site-nav" aria-label={copy.navAria}>
          {navItems.map((item) => (
            <a
              className={activePage === item.id ? 'is-active' : ''}
              href={`#${item.id}`}
              key={item.id}
            >
              {copy.nav[item.id]}
            </a>
          ))}
        </nav>
        <div className="language-switcher" aria-label={copy.languageAria} role="group">
          {languages.map((item) => (
            <button
              aria-label={item.label}
              aria-pressed={language === item.code}
              className={language === item.code ? 'is-active' : ''}
              key={item.code}
              onClick={() => onLanguageChange(item.code)}
              title={item.label}
              type="button"
            >
              {item.flag}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function HomePage({ copy }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroSlides = copy.heroSlides.map((slide, index) => ({
    ...slide,
    image: heroImages[index],
  }));
  const slide = heroSlides[activeSlide];

  return (
    <main className="home-page">
      <section className="hero" aria-label={copy.heroAria}>
        {heroSlides.map((item, index) => (
          <div
            aria-hidden={activeSlide !== index}
            className={`hero-image ${activeSlide === index ? 'is-active' : ''}`}
            key={item.image}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          <p>{slide.copy}</p>
        </div>
        <div className="hero-dots" aria-label={copy.heroDotsAria}>
          {heroSlides.map((item, index) => (
            <button
              aria-label={copy.showSlideLabel(index + 1, item.eyebrow)}
              aria-pressed={activeSlide === index}
              className={activeSlide === index ? 'is-active' : ''}
              key={item.image}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectsPage({ copy }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const projects = useMemo(() => buildProjects(copy), [copy]);
  const selectedProject =
    selectedProjectIndex === null ? null : projects[selectedProjectIndex];

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSelectedProjectIndex(null);
      }
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <main className="inner-page">
      <section className="page-section" aria-labelledby="projects-title">
        <div className="top-rule" />
        <div className="section-heading">
          <p className="eyebrow">{copy.projectsPage.eyebrow}</p>
          <h1 id="projects-title">{copy.projectsPage.title}</h1>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.image}>
              <button
                aria-label={copy.openProjectLabel(project.title)}
                className="project-button"
                onClick={() => setSelectedProjectIndex(index)}
                type="button"
              >
                <img
                  src={project.image}
                  alt={copy.projectImageAlt(project.title)}
                  loading="lazy"
                  decoding="async"
                />
                <div className="project-card-copy">
                  <p>{project.category}</p>
                  <h2>{project.title}</h2>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>
      {selectedProject && (
        <div
          className="project-modal"
          onClick={() => setSelectedProjectIndex(null)}
          role="presentation"
        >
          <div
            aria-labelledby="project-modal-title"
            aria-modal="true"
            className="project-modal-panel"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label={copy.closeProjectLabel}
              className="modal-close"
              onClick={() => setSelectedProjectIndex(null)}
              type="button"
            >
              X
            </button>
            <figure className="project-modal-figure">
              <img
                alt={copy.projectFullImageAlt(selectedProject.title)}
                src={selectedProject.image}
              />
            </figure>
            <div className="project-modal-copy">
              <p className="eyebrow">{selectedProject.category}</p>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ContactPage({ copy }) {
  return (
    <main className="inner-page">
      <section className="page-section contact-section" aria-labelledby="contact-title">
        <div className="top-rule" />
        <div className="section-heading">
          <p className="eyebrow">{copy.contactPage.eyebrow}</p>
          <h1 id="contact-title">{copy.contactPage.title}</h1>
        </div>
        <div className="contact-layout">
          <div className="contact-copy">
            <p>{copy.contactPage.intro}</p>
            <p>
              {copy.contactPage.phoneLabel}{' '}
              <a href={contactPhoneHref}>{contactPhone}</a>
            </p>
            <p>
              {copy.contactPage.emailLabel}{' '}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
            <p>{copy.contactPage.closing}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [activePage, setActivePage] = useState(getInitialPage);
  const [language, setLanguage] = useState(getInitialLanguage);
  const copy = translations[language] ?? translations[defaultLanguage];

  useEffect(() => {
    function handleHashChange() {
      setActivePage(getInitialPage());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.metaTitle;
    updateMetaContent('meta[name="description"]', copy.metaDescription);
    updateMetaContent('meta[property="og:title"]', copy.metaTitle);
    updateMetaContent('meta[property="og:description"]', copy.metaDescription);
    updateMetaContent('meta[name="twitter:title"]', copy.metaTitle);
    updateMetaContent('meta[name="twitter:description"]', copy.metaDescription);

    try {
      window.localStorage.setItem('portfolio-language', language);
    } catch {
      // Ignore storage failures; the Georgian default still applies.
    }
  }, [copy, language]);

  let page = <HomePage copy={copy} />;

  if (activePage === 'projects') {
    page = <ProjectsPage copy={copy} />;
  }

  if (activePage === 'contact') {
    page = <ContactPage copy={copy} />;
  }

  return (
    <div className="app-shell">
      <Header
        activePage={activePage}
        copy={copy}
        language={language}
        onLanguageChange={setLanguage}
      />
      {page}
    </div>
  );
}

export default App;
