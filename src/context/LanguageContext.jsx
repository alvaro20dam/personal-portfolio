import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      testimonials: "Testimonials",
      contactBtn: "Contact Me"
    },
    hero: {
      badge: "Computational Economist • Quantitative Architect",
      titlePart1: "Crafting",
      titleHighlight: "economic",
      titlePart2: "insights with",
      titleItalic: "precision",
      description: "Hi, I am Alvaro Gonzalez. My work operates at the intersection of Economics, Artificial Intelligence, and Software Engineering. As an Economist and AI Researcher, I leverage full-stack development and advanced econometrics to model complex systems in monetary policy, international commerce, and business strategy.",
      contactBtn: "Contact Me",
      downloadCv: "Download CV",
      followMe: "Follow me:",
      availableForWork: "Available for work",
      yearsExp: "Years Exp.",
      techText: "Technologies I work with:",
      scroll: "Scroll"
    },
    about: {
      badge: "About Me",
      titlePart1: "Modeling the Future,",
      titleItalic: "one algorithm at a time.",
      p1: "I am a Computational Economist and AI Researcher operating at the intersection of macroeconomic theory and advanced technology. Unlike traditional analysts, I possess the engineering capability to not only derive insights but to build the very systems that process them. My work focuses on decoding complex dynamics in monetary policy, international commerce, and business strategy using rigorous econometrics and machine learning.",
      p2: "My technical approach is multidisciplinary. I leverage a full-stack background (React, Node.js, TypeScript) to architect scalable analytical platforms, while utilizing Python and AI agents to drive deep data analysis. I view code not merely as a way to build applications, but as a medium to construct robust computational frameworks that solve real-world economic challenges.",
      p3: "Driven by the conviction that innovation requires continuous evolution, I maintain a relentless focus on learning. In the rapidly shifting landscapes of AI and global markets, I constantly assimilate emerging methodologies—from advanced deep learning architectures to the latest econometric models—ensuring my work always remains at the cutting edge of the field.",
      quote: "\"With a unique perspective on complex systems and efficiency, I look past the syntax to understand the 'why' behind the code.\"",
      highlights: [
        { title: "Econometric Analysis", description: "Decoding market dynamics and monetary policy through rigorous quantitative modeling." },
        { title: "AI & Machine Learning", description: "Developing intelligent agents and predictive models to automate complex research." },
        { title: "Full-Stack Architecture", description: "Building scalable platforms to process, visualize, and interact with economic data." },
        { title: "Global Strategy", description: "Applying data-driven insights to solve challenges in international commerce and business." }
      ]
    },
    projects: {
      badge: "Selected Work",
      titlePart1: "Featured",
      titleItalic: "Projects",
      description: "A selection of my recent work, combining quantitative models and full-stack development.",
      allProjectsBtn: "All Projects",
      items: [
        { title: "Global Human Day Analysis", description: "Analysis of how people allocate their time globally, visualized through an interactive web interface.", tags: ["HTML", "Data Science", "Data Visualization"], category: "Data Science", liveUrl: "https://alvaro20dam.github.io/global-human-day/", githubUrl: "https://github.com/alvaro20dam/global-human-day", image: "/projects/global-human-day.png" },
        { title: "Augusta Global Terminal v6.0", description: "An institutional-grade financial intelligence platform featuring real-time macro analysis, equities quant scoring, portfolio construction lab, strategy vault, backtesting engine, and AI-powered institutional reports.", tags: ["React", "Vite", "TailwindCSS", "Real-Time Data", "AI Reports"], category: "Full Stack", liveUrl: "https://augusta-terminal.vercel.app/", githubUrl: "", image: "/projects/augusta-terminal.png" },
        { title: "Child Mortality Analytics", description: "A data engineering pipeline and interactive dashboard analyzing global child mortality trends (1751-2024). Features automated Python extraction from Our World in Data, SQL modeling, and a Power BI report visualizing demographics and policy impacts.", tags: ["Python", "SQL", "Power BI", "Data Engineering", "ETL"], category: "Data Science", liveUrl: "", githubUrl: "https://github.com/alvaro20dam/Beautiful-News-Story-Analytics", image: "/projects/beautiful-news-story-analytics.png" },
        { title: "The Price of Power vs. The Cost of Care", description: "A macro-data analysis and proportional visualization comparing global military expenditures against the total cost of global humanitarian crisis relief.", tags: ["Data Visualization", "Data Journalism", "Macroeconomics", "Python", "Figma"], category: "Data Viz", liveUrl: "https://alvaro20dam.github.io/price-of-power-vs-cost-of-peace/", githubUrl: "https://github.com/alvaro20dam/price-of-power-vs-cost-of-peace", image: "/projects/price-of-power-vs-cost-of-care.png" }
      ],
      allProjects: {
        titlePart1: "Project",
        titleItalic: "Library",
        description: "A comprehensive collection of my technical and analytical work.",
        backBtn: "Back to Home",
        categories: { all: "All", fullstack: "Full Stack", ai: "AI / ML", dataViz: "Data Viz", dataScience: "Data Science" }
      }
    },
    experience: {
      badge: "Career Journey",
      titlePart1: "Experience that",
      titleItalic: "speaks volumes.",
      description: "A snapshot of my professional journey, showcasing roles that have shaped my skills and expertise.",
      items: [
        { title: "Technical Support Engineer", company: "GroTool, LLC", duration: "Apr 2021 - Present", description: "Providing specialized engineering support for a cloud-based agricultural management platform. Leveraging SQL and Python scripts to validate complex payroll data and generate custom labor reports for the US sector. Utilizing AWS to monitor real-time data flows and troubleshooting React-based frontend interfaces.", technologies: ["React", "Python", "SQL", "AWS"], current: true },
        { title: "Fintech & Digital Asset Analyst", company: "Comunicaciones Fintech", duration: "Oct 2017 - Oct 2020", description: "Led the strategic analysis of international financial markets to optimize corporate resources. Specialized in the emerging blockchain ecosystem, managing technical infrastructure for Proof-of-Work (mining) and Proof-of-Stake validation. Audited and interacted with Smart Contracts to execute yield farming strategies and manage digital asset portfolios.", technologies: ["Blockchain", "Smart Contracts", "DeFi Protocols", "Technical Analysis"], current: false },
        { title: "Operations & Cost Data Manager", company: "Sercoinfal, C.A.", duration: "Dec 2010 - Nov 2013", description: "Directed the resource optimization strategy for a conglomerate of 20+ industrial locations. Architected and maintained a centralized database to track raw materials and inventory flow. Utilized advanced Excel formulas and data modeling to identify inefficiencies, directly increasing the company's profit margins.", technologies: ["Excel", "Database Management", "Cost Optimization", "Logistics"], current: false },
        { title: "Macroeconomic Statistics Analyst", company: "Banco Central de Venezuela", duration: "Jun 2008 - Dec 2009", description: "Contributed to the calculation of the National GDP by processing large-scale datasets from the mining industry. Developed automated workflows using Excel VBA and Macros to streamline statistical analysis. Designed complex pivot tables and data models to support the 2008 monetary reconversion strategy.", technologies: ["Excel VBA", "Advanced Statistics", "Macroeconomics", "Pivot Tables"], current: false }
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
      titleItalic: "something great.",
      description: "Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.",
      labels: { name: "Name", email: "Email", message: "Message" },
      placeholders: { name: "Your name...", email: "your@email.com", message: "Your message..." },
      submitBtn: "Send Message",
      sendingBtn: "Sending...",
      successMsg: "Message sent successfully! I'll get back to you soon",
      errorMsg: "Failed to send message. Please try again later.",
      infoTitle: "Contact Information",
      infoItems: { email: "Email", phone: "Phone", location: "Location", locationValue: "San Francisco, CA" },
      availableTitle: "Currently Available",
      availableDesc: "I'm currently open to new opportunities and exciting projects. Whether you need a full-time computational economist, data specialist, or analytical consultant, let's talk!"
    },
    footer: { copyright: "Alvaro Gonzalez. All rights reserved." },
    cvModal: {
      title: "Request CV",
      description: "To protect personal data privacy (phone and address), please enter your name and professional email to request a digital copy of my CV.",
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
      projects: "Proyectos",
      experience: "Experiencia",
      testimonials: "Testimonios",
      contactBtn: "Contáctame"
    },
    hero: {
      badge: "Economista Computacional • Arquitecto Cuantitativo",
      titlePart1: "Diseñando",
      titleHighlight: "insights económicos",
      titlePart2: "con",
      titleItalic: "precisión",
      description: "Hola, soy Álvaro González. Mi trabajo se desarrolla en la intersección de la Economía, la Inteligencia Artificial y la Ingeniería de Software. Como Economista e Investigador en IA, aprovecho el desarrollo full-stack y la econometría avanzada para modelar sistemas complejos en política monetaria, comercio internacional y estrategia de negocios.",
      contactBtn: "Contáctame",
      downloadCv: "Descargar CV",
      followMe: "Sígueme:",
      availableForWork: "Disponible para trabajar",
      yearsExp: "Años Exp.",
      techText: "Tecnologías que utilizo:",
      scroll: "Deslizar"
    },
    about: {
      badge: "Sobre Mí",
      titlePart1: "Modelando el Futuro,",
      titleItalic: "un algoritmo a la vez.",
      p1: "Soy un Economista Computacional e Investigador en IA que opera en la intersección de la teoría macroeconómica y la tecnología avanzada. A diferencia de los analistas tradicionales, poseo la capacidad de ingeniería no solo para obtener conocimientos, sino para construir los sistemas mismos que los procesan. Mi trabajo se centra en decodificar dinámicas complejas en política monetaria, comercio internacional y estrategia de negocios utilizando econometría rigurosa y aprendizaje automático.",
      p2: "Mi enfoque técnico es multidisciplinario. Aprovecho mi experiencia full-stack (React, Node.js, TypeScript) para diseñar plataformas analíticas escalables, mientras utilizo Python y agentes de IA para impulsar el análisis de datos profundo. Veo el código no solo como una forma de construir aplicaciones, sino como un medio para construir marcos computacionales robustos que resuelvan desafíos económicos del mundo real.",
      p3: "Impulsado por la convicción de que la innovación requiere una evolución continua, mantengo un enfoque implacable en el aprendizaje. En los panoramas rápidamente cambiantes de la IA y los mercados globales, asimilo constantemente metodologías emergentes, desde arquitecturas avanzadas de aprendizaje profundo hasta los últimos modelos econométricos, asegurando que mi trabajo permanezca siempre a la vanguardia del campo.",
      quote: "\"Con una perspectiva única sobre los sistemas complejos y la eficiencia, miro más allá de la sintaxis para comprender el 'por qué' detrás del código.\"",
      highlights: [
        { title: "Análisis Econométrico", description: "Decodificando la dinámica del mercado y la política monetaria a través de un riguroso modelado cuantitativo." },
        { title: "IA y Machine Learning", description: "Desarrollando agentes inteligentes y modelos predictivos para automatizar investigaciones complejas." },
        { title: "Arquitectura Full-Stack", description: "Construyendo plataformas escalables para procesar, visualizar e interactuar con datos económicos." },
        { title: "Estrategia Global", description: "Aplicando conocimientos basados en datos para resolver desafíos en el comercio y negocios internacionales." }
      ]
    },
    projects: {
      badge: "Trabajos Destacados",
      titlePart1: "Proyectos",
      titleItalic: "Destacados",
      description: "Una selección de mi trabajo reciente, combinando modelos cuantitativos y desarrollo full-stack.",
      allProjectsBtn: "Todos los Proyectos",
      items: [
        { title: "Análisis del Día Humano Global", description: "Análisis de cómo las personas utilizan el tiempo a nivel global, visualizado mediante una interfaz web interactiva.", tags: ["HTML", "Data Science", "Data Visualization"], category: "Data Science", liveUrl: "https://alvaro20dam.github.io/global-human-day/", githubUrl: "https://github.com/alvaro20dam/global-human-day", image: "/projects/global-human-day.png" },
        { title: "Augusta Global Terminal v6.0", description: "Una plataforma de inteligencia financiera de grado institucional que incluye análisis macro en tiempo real, puntuación cuantitativa de acciones, motor de backtesting y reportes impulsados por IA.", tags: ["React", "Vite", "TailwindCSS", "Real-Time Data", "AI Reports"], category: "Full Stack", liveUrl: "https://augusta-terminal.vercel.app/", githubUrl: "", image: "/projects/augusta-terminal.png" },
        { title: "Analítica de Mortalidad Infantil", description: "Un pipeline de ingeniería de datos y dashboard interactivo que analiza tendencias globales de mortalidad infantil (1751-2024). Incluye extracción automatizada en Python desde Our World in Data, modelado SQL y un reporte en Power BI.", tags: ["Python", "SQL", "Power BI", "Data Engineering", "ETL"], category: "Data Science", liveUrl: "", githubUrl: "https://github.com/alvaro20dam/Beautiful-News-Story-Analytics", image: "/projects/beautiful-news-story-analytics.png" },
        { title: "El Precio del Poder vs. El Costo del Cuidado", description: "Un análisis de macrodatos y visualización proporcional que compara el gasto militar mundial con el costo total de la ayuda para crisis humanitarias mundiales.", tags: ["Data Visualization", "Data Journalism", "Macroeconomics", "Python", "Figma"], category: "Data Viz", liveUrl: "https://alvaro20dam.github.io/price-of-power-vs-cost-of-peace/", githubUrl: "https://github.com/alvaro20dam/price-of-power-vs-cost-of-peace", image: "/projects/price-of-power-vs-cost-of-care.png" }
      ],
      allProjects: {
        titlePart1: "Biblioteca de",
        titleItalic: "Proyectos",
        description: "Una colección completa de mi trabajo técnico y analítico.",
        backBtn: "Volver al Inicio",
        categories: { all: "Todos", fullstack: "Full Stack", ai: "IA / ML", dataViz: "Data Viz", dataScience: "Data Science" }
      }
    },
    experience: {
      badge: "Trayectoria Profesional",
      titlePart1: "Experiencia que",
      titleItalic: "habla por sí misma.",
      description: "Un vistazo a mi trayectoria profesional, mostrando roles que han dado forma a mis habilidades y experiencia.",
      items: [
        { title: "Ingeniero de Soporte Técnico", company: "GroTool, LLC", duration: "Abr 2021 - Presente", description: "Proporcionando soporte de ingeniería especializado para una plataforma de gestión agrícola basada en la nube. Aprovechando scripts de SQL y Python para validar datos complejos de nómina y generar informes laborales personalizados para el sector de EE. UU. Utilizando AWS para monitorear flujos de datos en tiempo real y solucionar problemas en interfaces frontend basadas en React.", technologies: ["React", "Python", "SQL", "AWS"], current: true },
        { title: "Analista Fintech y de Activos Digitales", company: "Comunicaciones Fintech", duration: "Oct 2017 - Oct 2020", description: "Lideré el análisis estratégico de los mercados financieros internacionales para optimizar los recursos corporativos. Me especialicé en el ecosistema emergente de blockchain, administrando la infraestructura técnica para la validación Proof-of-Work (minería) y Proof-of-Stake. Audité e interactué con Smart Contracts para ejecutar estrategias de yield farming y gestionar portafolios de activos digitales.", technologies: ["Blockchain", "Smart Contracts", "Protocolos DeFi", "Análisis Técnico"], current: false },
        { title: "Gerente de Operaciones y Datos de Costos", company: "Sercoinfal, C.A.", duration: "Dic 2010 - Nov 2013", description: "Dirigí la estrategia de optimización de recursos para un conglomerado de más de 20 ubicaciones industriales. Diseñé y mantuve una base de datos centralizada para rastrear materias primas y flujo de inventario. Utilicé fórmulas avanzadas de Excel y modelado de datos para identificar ineficiencias, aumentando directamente los márgenes de beneficio de la empresa.", technologies: ["Excel", "Gestión de BD", "Optimización de Costos", "Logística"], current: false },
        { title: "Analista de Estadísticas Macroeconómicas", company: "Banco Central de Venezuela", duration: "Jun 2008 - Dic 2009", description: "Contribuí al cálculo del PIB Nacional procesando grandes conjuntos de datos de la industria minera. Desarrollé flujos de trabajo automatizados utilizando Excel VBA y Macros para agilizar el análisis estadístico. Diseñé tablas dinámicas complejas y modelos de datos para apoyar la estrategia de reconversión monetaria de 2008.", technologies: ["Excel VBA", "Estadística Avanzada", "Macroeconomía", "Tablas Dinámicas"], current: false }
      ]
    },
    testimonials: {
      badge: "Lo que Dicen de Mí",
      titlePart1: "Palabras amables de",
      titleItalic: "personas increíbles",
      items: [
        { quote: "Alvaro va mucho más allá del soporte técnico estándar. Su capacidad para escribir consultas SQL personalizadas y scripts de Python para validar nuestros datos laborales ha sido crítica para la precisión de nuestras operaciones de nómina en EE. UU.", name: "Sarah Miller", title: "Directora de Operaciones en GroTool, LLC" },
        { quote: "En el volátil mundo de las criptomonedas, Álvaro era la voz de la razón. No solo hacía trading; comprendió la arquitectura subyacente de la blockchain y los smart contracts, ayudándonos a navegar de forma segura por protocolos DeFi complejos.", name: "Carlos Mendez", title: "Socio Senior en Comunicaciones Fintech" },
        { quote: "Transformó nuestro sistema de inventario disperso en una base de datos centralizada. Álvaro utilizó un modelado de datos avanzado para identificar ineficiencias en más de 20 ubicaciones, reduciendo significativamente nuestros costos operativos.", name: "Elena Rodriguez", title: "Gerente General en Sercoinfal, C.A." },
        { quote: "Álvaro aportó un enfoque computacional a nuestro departamento económico. Sus modelos automatizados en VBA para el cálculo del PIB redujeron el tiempo de procesamiento manual en semanas durante la reconversión monetaria de 2008.", name: "Dr. Hector Silva", title: "Economista Jefe en el Banco Central de Venezuela" }
      ]
    },
    contact: {
      badge: "Ponte en Contacto",
      titlePart1: "Construyamos",
      titleItalic: "algo genial.",
      description: "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Envíame un mensaje y discutamos cómo podemos trabajar juntos.",
      labels: { name: "Nombre", email: "Correo", message: "Mensaje" },
      placeholders: { name: "Tu nombre...", email: "tu@correo.com", message: "Tu mensaje..." },
      submitBtn: "Enviar Mensaje",
      sendingBtn: "Enviando...",
      successMsg: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
      errorMsg: "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
      infoTitle: "Información de Contacto",
      infoItems: { email: "Correo Electrónico", phone: "Teléfono", location: "Ubicación", locationValue: "San Francisco, CA" },
      availableTitle: "Disponible Actualmente",
      availableDesc: "Actualmente estoy abierto a nuevas oportunidades y proyectos emocionantes. Ya sea que necesites un economista computacional a tiempo completo, un especialista en datos o un consultor analítico, ¡hablemos!"
    },
    footer: { copyright: "Alvaro Gonzalez. Todos los derechos reservados." },
    cvModal: {
      title: "Solicitar CV",
      description: "Para proteger la privacidad de mis datos personales (teléfono y dirección), por favor ingresa tu nombre y correo profesional para solicitar una copia digital de mi CV.",
      labels: { name: "Nombre / Empresa", email: "Correo Laboral" },
      placeholders: { name: "ej. Reclutador en Empresa X...", email: "tu@empresa.com" },
      submitBtn: "Solicitar CV",
      sendingBtn: "Enviando solicitud...",
      successBtn: "¡Enviado!",
      successMsg: "¡Solicitud enviada! Me pondré en contacto contigo en breve.",
      errorMsg: "Error al enviar la solicitud. Por favor, intenta de nuevo."
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Detectar preferencia guardada o idioma del navegador
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

  // Helper para acceder a textos anidados (ej. t("nav.about"))
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (value[k] === undefined) return key; // Retorna la key si no existe traducción
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
