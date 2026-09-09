import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      about: "About",
      products: "Ventures",
      projects: "Projects",
      experience: "Experience",
      testimonials: "Testimonials",
      contactBtn: "Contact Me"
    },
    hero: {
      badge: "Valora Labs • AI & Software Studio",
      titlePart1: "Engineering",
      titleHighlight: "valuable products",
      titlePart2: "with data &",
      titleItalic: "precision",
      description: "Hi, I am Alvaro Gonzalez — Founder at Valora Labs. My work operates at the intersection of Economics, Artificial Intelligence, and Software Engineering. I leverage quantitative modeling and full-stack architecture to build intelligent SaaS and data-driven systems.",
      contactBtn: "Let's Talk",
      downloadCv: "Request CV",
      followMe: "Follow me:",
      availableForWork: "Open for ventures & consulting",
      yearsExp: "Years Exp.",
      techText: "Core technologies powering Valora Labs:",
      scroll: "Scroll"
    },
    about: {
      badge: "About Me & Valora Labs",
      titlePart1: "Bridging Economics & Code,",
      titleItalic: "one venture at a time.",
      p1: "I am a Computational Economist and Full-Stack Architect operating at the convergence of economic theory, data modeling, and modern software engineering. At Valora Labs, I don't just write code; I design sustainable digital products with deep domain logic and market-driven architecture.",
      p2: "From building high-performance sports analytics platforms to real-time institutional financial terminals and biometric health systems, my approach integrates React/Next.js, Python, TypeScript, and AI agents into production-ready platforms that deliver measurable value.",
      p3: "Driven by analytical rigor and continuous innovation, I engineer software that scales — whether modeling macroeconomic shocks for central banking or building scalable consumer applications.",
      quote: "\"Code is the instrument; real-world economic value and system efficiency are the objective.\"",
      highlights: [
        { title: "Venture Architecture", description: "Designing end-to-end digital products from mathematical foundation to production SaaS." },
        { title: "AI & Machine Learning", description: "Developing intelligent agents and predictive engines to automate complex domain workflows." },
        { title: "Full-Stack Engineering", description: "Building ultra-fast, resilient web and mobile applications using React, Next.js, and Python." },
        { title: "Quantitative Economics", description: "Applying rigorous econometric analysis, time-series forecasting, and strategic modeling." }
      ]
    },
    projects: {
      badge: "Valora Labs Ventures & Research",
      titlePart1: "Featured",
      titleItalic: "Ventures & Projects",
      description: "A selection of live products and analytical systems built by Valora Labs across HealthTech, SportsTech, and Fintech.",
      allProjectsBtn: "All Projects & Archive",
      items: [
        {
          title: "Apex Coach",
          description: "All-in-one platform for fitness coaches: client routine programming, ACSM hydration & chrononutrition engine, and real-time biometric readiness tracking via Apple Health, Garmin & Oura.",
          tags: ["HealthTech", "SaaS", "Biometrics", "React Native", "Node.js", "AI"],
          category: "Full Stack",
          badgeStatus: "In Development",
          liveUrl: "",
          githubUrl: "",
          image: "/projects/apex-coach.png"
        },
        {
          title: "Quinigol Club",
          description: "Live sports prediction and gamification platform for soccer fans worldwide. Features exact score predictions, weekly gameweeks across top leagues, real-time scoring, and reward mechanics.",
          tags: ["SportsTech", "PWA", "Live Product", "Gamification", "Real-Time Data"],
          category: "Full Stack",
          badgeStatus: "Live",
          liveUrl: "https://www.quinigolclub.lat/",
          githubUrl: "",
          image: "/projects/quinigol-club.png"
        },
        {
          title: "Augusta Global Terminal v6.0",
          description: "An institutional-grade financial intelligence platform featuring real-time macro analysis, equities quant scoring, portfolio construction lab, strategy vault, backtesting engine, and AI-powered institutional reports.",
          tags: ["Fintech", "React", "Vite", "TailwindCSS", "Real-Time Data", "AI Reports"],
          category: "Full Stack",
          badgeStatus: "Live",
          liveUrl: "https://augusta-terminal.vercel.app/",
          githubUrl: "",
          image: "/projects/augusta-terminal.png"
        },
        {
          title: "Global Human Day Analysis",
          description: "Quantitative analysis and interactive visualization of how global humanity allocates its 24 daily hours across economic, biological, and cultural activities.",
          tags: ["HTML", "Data Science", "Data Visualization", "Macroeconomics"],
          category: "Data Science",
          badgeStatus: "Research",
          liveUrl: "https://alvaro20dam.github.io/global-human-day/",
          githubUrl: "https://github.com/alvaro20dam/global-human-day",
          image: "/projects/global-human-day.png"
        },
        {
          title: "The Price of Power vs. The Cost of Care",
          description: "Macro-data analysis and proportional visualization comparing global military expenditures against the total cost of global humanitarian crisis relief.",
          tags: ["Data Visualization", "Data Journalism", "Macroeconomics", "Python", "Figma"],
          category: "Data Viz",
          badgeStatus: "Research",
          liveUrl: "https://alvaro20dam.github.io/price-of-power-vs-cost-of-peace/",
          githubUrl: "https://github.com/alvaro20dam/price-of-power-vs-cost-of-peace",
          image: "/projects/price-of-power-vs-cost-of-care.png"
        },
        {
          title: "Child Mortality Analytics",
          description: "Data engineering pipeline and interactive dashboard analyzing global child mortality trends (1751-2024). Features automated Python extraction from Our World in Data and SQL modeling.",
          tags: ["Python", "SQL", "Power BI", "Data Engineering", "ETL"],
          category: "Data Science",
          badgeStatus: "Research",
          liveUrl: "",
          githubUrl: "https://github.com/alvaro20dam/Beautiful-News-Story-Analytics",
          image: "/projects/beautiful-news-story-analytics.png"
        }
      ],
      allProjects: {
        titlePart1: "Ventures &",
        titleItalic: "Project Library",
        description: "A comprehensive collection of software products, ventures, and computational research.",
        backBtn: "Back to Home",
        categories: { all: "All", fullstack: "Ventures & SaaS", ai: "AI / ML", dataViz: "Data Viz", dataScience: "Data Science" }
      }
    },
    experience: {
      badge: "Career Journey",
      titlePart1: "Experience that",
      titleItalic: "speaks volumes.",
      description: "A snapshot of my professional journey, showcasing roles that shaped Valora Labs and my engineering foundation.",
      items: [
        { title: "Founder & Lead Architect", company: "Valora Labs", duration: "2024 - Present", description: "Leading the development of specialized digital ventures including Apex Coach (HealthTech SaaS), Quinigol Club (SportsTech), and institutional financial tools. Architecting scalable full-stack applications with AI agent integration.", technologies: ["React", "Next.js", "Python", "TypeScript", "AI Agents", "PostgreSQL"], current: true },
        { title: "Technical Support Engineer", company: "GroTool, LLC", duration: "Apr 2021 - Present", description: "Providing specialized engineering support for a cloud-based agricultural management platform. Leveraging SQL and Python scripts to validate complex payroll data and generate custom labor reports for the US sector. Utilizing AWS to monitor real-time data flows and troubleshooting React-based frontend interfaces.", technologies: ["React", "Python", "SQL", "AWS"], current: true },
        { title: "Fintech & Digital Asset Analyst", company: "Comunicaciones Fintech", duration: "Oct 2017 - Oct 2020", description: "Led strategic analysis of international financial markets. Specialized in blockchain infrastructure, PoW mining, and PoS validation. Audited Smart Contracts to execute yield farming strategies and digital asset portfolios.", technologies: ["Blockchain", "Smart Contracts", "DeFi Protocols", "Technical Analysis"], current: false },
        { title: "Operations & Cost Data Manager", company: "Sercoinfal, C.A.", duration: "Dec 2010 - Nov 2013", description: "Directed the resource optimization strategy for a conglomerate of 20+ industrial locations. Architected centralized databases to track raw materials and inventory flow, cutting operational costs.", technologies: ["Excel", "Database Management", "Cost Optimization", "Logistics"], current: false },
        { title: "Macroeconomic Statistics Analyst", company: "Banco Central de Venezuela", duration: "Jun 2008 - Dec 2009", description: "Contributed to the calculation of the National GDP by processing mining industry datasets. Developed automated statistical modeling workflows using Excel VBA for the 2008 monetary reconversion.", technologies: ["Excel VBA", "Advanced Statistics", "Macroeconomics", "Pivot Tables"], current: false }
      ]
    },
    testimonials: {
      badge: "What People Say",
      titlePart1: "Kinds Words from",
      titleItalic: "amazing people",
      items: [
        { quote: "Alvaro goes far beyond standard technical support. His ability to write custom SQL queries and Python scripts to validate our labor data has been critical for the accuracy of our US payroll operations.", name: "Sarah Miller", title: "Operations Director at GroTool, LLC" },
        { quote: "In the volatile world of crypto, Alvaro was the voice of reason. He didn't just trade; he understood the underlying blockchain architecture and smart contracts, helping us navigate complex DeFi protocols safely.", name: "Carlos Mendez", title: "Senior Partner at Comunicaciones Fintech" },
        { quote: "He transformed our scattered inventory system into a centralized database. Alvaro used advanced data modeling to identify inefficiencies across 20+ locations, significantly cutting our operational costs.", name: "Elena Rodriguez", title: "General Manager at Sercoinfal, C.A." },
        { quote: "Alvaro brought a computational approach to our economic department. His automated VBA models for GDP calculation reduced manual processing time by weeks during the 2008 monetary reconversion.", name: "Dr. Hector Silva", title: "Chief Economist at Banco Central de Venezuela" }
      ]
    },
    contact: {
      badge: "Get In Touch",
      titlePart1: "Let's Build",
      titleItalic: "something valuable.",
      description: "Interested in collaborating on a venture, commissioning custom software, or discussing Valora Labs products? Let's connect.",
      labels: { name: "Name", email: "Email", message: "Message" },
      placeholders: { name: "Your name...", email: "your@email.com", message: "Your message..." },
      submitBtn: "Send Message",
      sendingBtn: "Sending...",
      successMsg: "Message sent successfully! I'll get back to you soon.",
      errorMsg: "Failed to send message. Please try again later.",
      infoTitle: "Contact Information",
      infoItems: { email: "Email", phone: "Phone", location: "Location", locationValue: "Valencia, Venezuela • Remote Global" },
      availableTitle: "Ventures & Advisory",
      availableDesc: "Available for high-impact software projects, SaaS ventures, and quantitative consulting under the Valora Labs umbrella."
    },
    footer: { copyright: "Valora Labs • Alvaro Gonzalez. All rights reserved." },
    cvModal: {
      title: "Request CV",
      description: "To protect personal data privacy, please enter your name and professional email to receive a digital copy of my CV.",
      labels: { name: "Name / Company", email: "Work Email" },
      placeholders: { name: "e.g. Recruiter at Company X...", email: "you@company.com" },
      submitBtn: "Request CV",
      sendingBtn: "Sending request...",
      successBtn: "Sent!",
      successMsg: "Request sent! I will get in touch with you shortly.",
      errorMsg: "Failed to send request. Please try again."
    }
  },
  es: {
    nav: {
      about: "Sobre mí",
      products: "Ventures",
      projects: "Proyectos",
      experience: "Experiencia",
      testimonials: "Testimonios",
      contactBtn: "Contáctame"
    },
    hero: {
      badge: "Valora Labs • Estudio de Software e Inteligencia Artificial",
      titlePart1: "Construyendo",
      titleHighlight: "productos con valor",
      titlePart2: "con datos y",
      titleItalic: "precisión",
      description: "Hola, soy Álvaro González — Fundador en Valora Labs. Mi trabajo se desarrolla en la intersección de la Economía, la Inteligencia Artificial y la Ingeniería de Software. Combino modelado cuantitativo y arquitectura full-stack para crear SaaS inteligentes y plataformas escalables.",
      contactBtn: "Hablemos",
      downloadCv: "Solicitar CV",
      followMe: "Sígueme:",
      availableForWork: "Disponible para ventures y consultoría",
      yearsExp: "Años Exp.",
      techText: "Tecnologías centrales de Valora Labs:",
      scroll: "Deslizar"
    },
    about: {
      badge: "Sobre Mí y Valora Labs",
      titlePart1: "Uniendo Economía y Código,",
      titleItalic: "un venture a la vez.",
      p1: "Soy Economista Computacional y Arquitecto Full-Stack en la convergencia de la teoría económica, la ciencia de datos y la ingeniería de software moderna. En Valora Labs, no solo escribo código: diseño productos digitales sostenibles, con lógica profunda de negocio y arquitectura orientada al mercado.",
      p2: "Desde la creación de plataformas de analítica y pronósticos deportivos hasta terminales financieros institucionales en tiempo real y sistemas biométricos de salud, mi enfoque integra React/Next.js, Python, TypeScript y agentes de IA en plataformas de producción que generan valor medible.",
      p3: "Impulsado por el rigor analítico y la innovación continua, desarrollo software que escala — ya sea modelando variables macroeconómicas para la banca central o construyendo aplicaciones de alto impacto.",
      quote: "\"El código es el instrumento; el valor económico real y la eficiencia del sistema son el objetivo.\"",
      highlights: [
        { title: "Arquitectura de Ventures", description: "Diseño de productos digitales de punta a punta: desde la base matemática hasta el SaaS en producción." },
        { title: "IA y Machine Learning", description: "Desarrollo de agentes inteligentes y motores predictivos para automatizar flujos complejos de negocio." },
        { title: "Ingeniería Full-Stack", description: "Construcción de aplicaciones web y móviles rápidas y seguras con React, Next.js y Python." },
        { title: "Economía Cuantitativa", description: "Modelado econométrico riguroso, pronósticos de series temporales y estrategia cuantitativa." }
      ]
    },
    projects: {
      badge: "Ventures y Proyectos de Valora Labs",
      titlePart1: "Ventures y",
      titleItalic: "Proyectos Destacados",
      description: "Una selección de productos en vivo y sistemas analíticos construidos por Valora Labs en HealthTech, SportsTech y Fintech.",
      allProjectsBtn: "Ver Todos los Proyectos",
      items: [
        {
          title: "Apex Coach",
          description: "Plataforma integral para entrenadores: programación de rutinas, motor ACSM de hidratación y crononutrición, y monitoreo biométrico diario (Readiness Score basado en HRV y sueño vía Apple Health, Garmin y Oura).",
          tags: ["HealthTech", "SaaS", "Biometría", "React Native", "Node.js", "IA"],
          category: "Full Stack",
          badgeStatus: "En Desarrollo",
          liveUrl: "",
          githubUrl: "",
          image: "/projects/apex-coach.png"
        },
        {
          title: "Quinigol Club",
          description: "Plataforma de pronósticos deportivos y gamificación para fanáticos del fútbol. Permite predecir marcadores exactos en las principales ligas del mundo, competir semanalmente y ganar premios en créditos.",
          tags: ["SportsTech", "PWA", "En Vivo", "Gamificación", "Datos en Tiempo Real"],
          category: "Full Stack",
          badgeStatus: "En Vivo",
          liveUrl: "https://www.quinigolclub.lat/",
          githubUrl: "",
          image: "/projects/quinigol-club.png"
        },
        {
          title: "Augusta Global Terminal v6.0",
          description: "Plataforma institucional de inteligencia financiera con análisis macro en tiempo real, scoring cuantitativo de acciones, laboratorio de portafolios, motor de backtesting y reportes automatizados por IA.",
          tags: ["Fintech", "React", "Vite", "TailwindCSS", "Datos en Tiempo Real", "Reportes IA"],
          category: "Full Stack",
          badgeStatus: "En Vivo",
          liveUrl: "https://augusta-terminal.vercel.app/",
          githubUrl: "",
          image: "/projects/augusta-terminal.png"
        },
        {
          title: "Análisis del Día Humano Global",
          description: "Análisis cuantitativo y visualización interactiva de cómo la humanidad distribuye sus 24 horas diarias en actividades económicas, biológicas y culturales a nivel mundial.",
          tags: ["HTML", "Data Science", "Visualización de Datos", "Macroeconomía"],
          category: "Data Science",
          badgeStatus: "Investigación",
          liveUrl: "https://alvaro20dam.github.io/global-human-day/",
          githubUrl: "https://github.com/alvaro20dam/global-human-day",
          image: "/projects/global-human-day.png"
        },
        {
          title: "El Precio del Poder vs. El Costo del Cuidado",
          description: "Análisis de macrodatos y visualización proporcional que compara el gasto militar mundial frente al costo total de la ayuda humanitaria global contra crisis.",
          tags: ["Data Visualization", "Periodismo de Datos", "Macroeconomía", "Python", "Figma"],
          category: "Data Viz",
          badgeStatus: "Investigación",
          liveUrl: "https://alvaro20dam.github.io/price-of-power-vs-cost-of-peace/",
          githubUrl: "https://github.com/alvaro20dam/price-of-power-vs-cost-of-peace",
          image: "/projects/price-of-power-vs-cost-of-care.png"
        },
        {
          title: "Analítica de Mortalidad Infantil",
          description: "Pipeline de ingeniería de datos y dashboard interactivo sobre tendencias globales de mortalidad infantil (1751-2024). Extracción automatizada en Python desde Our World in Data y modelado SQL.",
          tags: ["Python", "SQL", "Power BI", "Data Engineering", "ETL"],
          category: "Data Science",
          badgeStatus: "Investigación",
          liveUrl: "",
          githubUrl: "https://github.com/alvaro20dam/Beautiful-News-Story-Analytics",
          image: "/projects/beautiful-news-story-analytics.png"
        }
      ],
      allProjects: {
        titlePart1: "Biblioteca de",
        titleItalic: "Ventures y Proyectos",
        description: "Colección completa de productos de software, ventures comerciales e investigación computacional de Valora Labs.",
        backBtn: "Volver al Inicio",
        categories: { all: "Todos", fullstack: "Ventures y SaaS", ai: "IA / ML", dataViz: "Data Viz", dataScience: "Data Science" }
      }
    },
    experience: {
      badge: "Trayectoria Profesional",
      titlePart1: "Experiencia que",
      titleItalic: "respalda cada línea.",
      description: "Roles y trayectoria profesional que han moldeado mi visión técnica y la fundación de Valora Labs.",
      items: [
        { title: "Fundador y Arquitecto Principal", company: "Valora Labs", duration: "2024 - Presente", description: "Liderando la arquitectura y desarrollo de productos digitales propios como Apex Coach (HealthTech), Quinigol Club (SportsTech) y plataformas de inteligencia financiera. Integración de agentes IA y arquitecturas full-stack modernas.", technologies: ["React", "Next.js", "Python", "TypeScript", "Agentes IA", "PostgreSQL"], current: true },
        { title: "Ingeniero de Soporte Técnico", company: "GroTool, LLC", duration: "Abr 2021 - Presente", description: "Soporte de ingeniería especializado para plataforma SaaS de gestión agrícola en EE. UU. Scripts de SQL y Python para validación de nóminas complejas y reportes laborales. Monitoreo en AWS y resolución de incidencias frontend en React.", technologies: ["React", "Python", "SQL", "AWS"], current: true },
        { title: "Analista Fintech y de Activos Digitales", company: "Comunicaciones Fintech", duration: "Oct 2017 - Oct 2020", description: "Análisis estratégico de mercados financieros e infraestructura blockchain (minería PoW y validación PoS). Auditoría de Smart Contracts para estrategias de yield farming y gestión de portafolios digitales.", technologies: ["Blockchain", "Smart Contracts", "Protocolos DeFi", "Análisis Técnico"], current: false },
        { title: "Gerente de Operaciones y Datos de Costos", company: "Sercoinfal, C.A.", duration: "Dic 2010 - Nov 2013", description: "Estrategia de optimización de recursos en conglomerado de 20+ plantas industriales. Diseño de bases de datos centralizadas de inventario y modelado de datos para reducción de costos operativos.", technologies: ["Excel", "Gestión de BD", "Optimización de Costos", "Logística"], current: false },
        { title: "Analista de Estadísticas Macroeconómicas", company: "Banco Central de Venezuela", duration: "Jun 2008 - Dic 2009", description: "Cálculo del PIB Nacional procesando grandes volúmenes de datos del sector minero. Automatización de modelos estadísticos en Excel VBA para la estrategia de reconversión monetaria de 2008.", technologies: ["Excel VBA", "Estadística Avanzada", "Macroeconomía", "Tablas Dinámicas"], current: false }
      ]
    },
    testimonials: {
      badge: "Lo que Dicen",
      titlePart1: "Testimonios y",
      titleItalic: "referencias",
      items: [
        { quote: "Álvaro va mucho más allá del soporte técnico estándar. Su capacidad para escribir consultas SQL complejas y scripts en Python para validar nuestros datos de nómina ha sido crítica para nuestras operaciones en EE. UU.", name: "Sarah Miller", title: "Directora de Operaciones en GroTool, LLC" },
        { quote: "En el volátil mundo de las criptomonedas, Álvaro era la voz de la razón. Comprendió a profundidad la arquitectura de smart contracts y DeFi, guiando nuestras decisiones con total seguridad.", name: "Carlos Méndez", title: "Socio Senior en Comunicaciones Fintech" },
        { quote: "Transformó nuestro inventario disperso en una base de datos centralizada. Su modelado de costos identificó ineficiencias en más de 20 plantas industriales, mejorando drásticamente nuestros márgenes.", name: "Elena Rodríguez", title: "Gerente General en Sercoinfal, C.A." },
        { quote: "Álvaro aportó una visión computacional a nuestro departamento. Sus modelos automatizados para el PIB ahorraron semanas de procesamiento durante la reconversión de 2008.", name: "Dr. Héctor Silva", title: "Economista Jefe en el Banco Central de Venezuela" }
      ]
    },
    contact: {
      badge: "Contacto",
      titlePart1: "Construyamos",
      titleItalic: "algo con valor.",
      description: "¿Interesado en colaborar en un venture, solicitar desarrollo especializado o consultar sobre los productos de Valora Labs? Hablemos.",
      labels: { name: "Nombre", email: "Correo", message: "Mensaje" },
      placeholders: { name: "Tu nombre...", email: "tu@correo.com", message: "Tu mensaje..." },
      submitBtn: "Enviar Mensaje",
      sendingBtn: "Enviando...",
      successMsg: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
      errorMsg: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
      infoTitle: "Información de Contacto",
      infoItems: { email: "Correo Electrónico", phone: "Teléfono", location: "Ubicación", locationValue: "Valencia, Venezuela • Remoto Global" },
      availableTitle: "Ventures y Asesoría",
      availableDesc: "Disponible para proyectos de software de alto impacto, ventures tecnológicos y consultoría cuantitativa bajo Valora Labs."
    },
    footer: { copyright: "Valora Labs • Álvaro González. Todos los derechos reservados." },
    cvModal: {
      title: "Solicitar CV",
      description: "Para proteger la privacidad de datos personales, ingresa tu nombre y correo profesional para recibir una copia de mi CV.",
      labels: { name: "Nombre / Empresa", email: "Correo Laboral" },
      placeholders: { name: "ej. Reclutador en Empresa X...", email: "tu@empresa.com" },
      submitBtn: "Solicitar CV",
      sendingBtn: "Enviando solicitud...",
      successBtn: "¡Enviado!",
      successMsg: "¡Solicitud enviada! Me comunicaré contigo en breve.",
      errorMsg: "Error al enviar la solicitud. Por favor, intenta de nuevo."
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.startsWith("es") ? "es" : "en";
      setLanguage(browserLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("portfolio-language", newLang);
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (value[k] === undefined) return key;
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};
