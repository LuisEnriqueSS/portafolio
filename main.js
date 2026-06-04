// Traducciones - Responsabilidad: Manejo de i18n
const translations = {
    es: {
        'nav-experience': 'Experiencia',
        'nav-skills': 'Stack',
        'hero-title': 'Construyo los',
        'hero-engines': 'Motores.',
        'hero-subtitle': 'Backend Engineer con 3+ años construyendo sistemas en producción. Liderando actualmente la arquitectura de un ERP multi-tenant para el sector construcción. Especializado en arquitecturas limpias y sistemas escalables.',
        'hero-contact': 'Conversemos',
        'hero-download': 'Descargar CV',
        'stats-years': 'Años Exp',
        'stats-optimization': 'Optimización',
        'stats-remote': 'Remoto/Híbrido',
        'projects-title': 'Proyectos de Alto Impacto',
        'projects-subtitle': 'Resolviendo problemas reales con arquitecturas robustas',
        'card1-label': '🏗️ ACTUAL • INGENIERO LÍDER',
        'card1-title': 'ERP Multi-tenant desde Cero',
        'card1-description': 'Diseñé aislamiento multi-tenant con esquemas PostgreSQL para garantizar cero filtración de datos entre clientes. Capa de dominio primero (DDD), luego API, luego UI. Full stack dockerizado con estructura lista para CI/CD.',
        'card2-label': '🚀 LOGRO TÉCNICO',
        'card2-seconds': 'Segundos',
        'card2-description': 'Reduje un proceso crítico de backend de 20 minutos a segundos mediante multi-threading, optimización de queries SQL y caching inteligente con Redis en Enovate.',
        'card3-label': '🤖 IA & AUTOMATIZACIÓN',
        'card3-title': 'Bot WhatsApp + LLM',
        'card3-description': 'Desarrollé servicio conversacional para WhatsApp integrando FastAPI con modelos LLM (Ollama). Procesamiento de lenguaje natural en tiempo real.',
        'card5-label': '♻️ REFACTORIZACIÓN',
        'card5-title': 'Monolito → Clean Arch',
        'card5-description': 'Lideré migración de sistema legacy a arquitectura limpia, reduciendo deuda técnica y estableciendo estándares de código.',
        'experience-title': 'Trayectoria',
        'experience-subtitle': 'De Full-Stack a Backend Architect',
        'job1-date': 'Ago 2025 - Presente',
        'job1-role': 'Ingeniero de Software Líder',
        'job1-summary': 'Responsable técnico del desarrollo de un ERP desde cero para el sector construcción. Gestiono el ciclo completo de desarrollo (SDLC).',
        'job1-ach1': 'Diseñé arquitectura Multi-tenant con Python (FastAPI) bajo Clean Architecture y DDD',
        'job1-ach2': 'Implementé Dockerización completa y pipelines CI/CD para garantizar paridad entre entornos',
        'job1-ach3': 'Desarrollo de interfaces con Angular y Tailwind CSS enfocadas en UX',
        'job1-ach4': 'Migré MVP de Power Apps a desarrollo custom, eliminando limitaciones técnicas',
        'job2-date': 'Mar 2025 - Ago 2025',
        'job2-role': 'Desarrollador Full-Stack Freelance',
        'job2-summary': 'Desarrollé MVP completo de plataforma de IA conversacional aplicando SOLID y patrones de diseño.',
        'job2-ach1': 'Arquitecté servicio conversacional para WhatsApp integrando FastAPI con LLMs (Ollama)',
        'job2-ach2': 'Construí núcleo backend con NestJS y TypeORM creando módulos reutilizables',
        'job2-ach3': 'Desarrollé SPA en Angular estructurada bajo Atomic Design con Tailwind CSS',
        'job2-ach4': 'Implementé modelo relacional PostgreSQL y MongoDB para casos específicos',
        'job3-date': 'Jun 2024 - Mar 2025',
        'job3-role': 'Desarrollador Backend',
        'job3-summary': 'Modernización y optimización crítica del backend de plataforma SaaS.',
        'job3-ach1': 'Logro clave: Reduje proceso crítico de 20 minutos a segundos mediante multi-threading y optimización de DB',
        'job3-ach2': 'Lideré migración arquitectónica de monolito legacy a Clean Architecture',
        'job3-ach3': 'Implementé caché con Redis para endpoints de alta concurrencia',
        'job3-ach4': 'Desarrollé middleware para procesamiento automático de CSV con validación',
        'job4-date': 'Mar 2023 - Ene 2024',
        'job4-role': 'Desarrollador Full-Stack',
        'job4-summary': 'Mantenimiento evolutivo y optimización del aplicativo misional "Pandora".',
        'job4-ach1': 'Logré reducción del 90% en latencia de consultas SQL mediante indexación estratégica',
        'job4-ach2': 'Automaticé generación de reportes (Excel/PDF), eliminando horas de carga manual',
        'job4-ach3': 'Implementé funcionalidades end-to-end con Laravel y jQuery',
        'skills-title': 'Stack Técnico',
        'skills-subtitle': 'Herramientas que domino para resolver problemas complejos',
        'skills-backend': 'Backend & APIs',
        'skills-databases': 'Bases de Datos',
        'skills-sql-opt': 'Optimización SQL',
        'skills-architecture': 'Arquitectura & Patrones',
        'skills-testing': 'Pruebas Unitarias',
        'skills-patterns': 'Patrones de Diseño',
        'principles-title': 'Cómo Trabajo',
        'principles-subtitle': 'Principios de ingeniería detrás de cada sistema que construyo',
        'principle1-title': 'La complejidad es el último recurso',
        'principle1-desc': 'Empiezo con la solución más simple que funcione, y refactorizo hacia patrones solo cuando el dolor es real.',
        'principle2-title': 'Midió, luego optimizó',
        'principle2-desc': 'En Enovate perfilé antes de tocar código. "20 min → segundos" surgió de datos, no de intuición.',
        'principle3-title': 'La lógica de negocio define la arquitectura',
        'principle3-desc': 'El diseño multi-tenant del ERP nació de la necesidad de aislar datos financieros por cliente, no de un blog post.',
        'principle4-title': 'Infraestructura como código',
        'principle4-desc': 'Docker y CI/CD desde el día uno. No hago deploys manuales.',
        'footer-title': 'Disponible para roles de Backend Engineer & Software Architect',
        'footer-subtitle': 'Construyendo sistemas escalables para equipos de alto impacto.<br>Abierto a oportunidades remotas e híbridas.',
        'footer-linkedin': 'Conectemos en LinkedIn',
        'footer-copy': '© 2025 Luis Supelano. Construido con ❤️ y principios de Clean Code.'
    },
    en: {
        'nav-experience': 'Experience',
        'nav-skills': 'Stack',
        'hero-title': 'I Build the',
        'hero-engines': 'Engines.',
        'hero-subtitle': 'Backend Engineer with 3+ years shipping production systems. Currently leading architecture of a multi-tenant ERP for the construction sector. Specialized in clean architectures and scalable systems.',
        'hero-contact': "Let's Talk",
        'hero-download': 'Download Resume',
        'stats-years': 'Years Exp',
        'stats-optimization': 'Optimization',
        'stats-remote': 'Remote/Hybrid',
        'projects-title': 'High-Impact Projects',
        'projects-subtitle': 'Solving real problems with robust architectures',
        'card1-label': '🏗️ CURRENT • LEAD ENGINEER',
        'card1-title': 'Multi-tenant ERP from Scratch',
        'card1-description': 'Designed multi-tenant data isolation using PostgreSQL schemas to guarantee zero data leakage between clients. Domain layer first (DDD), then API, then UI. Dockerized full stack with CI/CD-ready structure.',
        'card2-label': '🚀 TECHNICAL ACHIEVEMENT',
        'card2-seconds': 'Seconds',
        'card2-description': 'Reduced a critical backend process from 20 minutes to seconds through multi-threading, SQL query optimization, and intelligent caching with Redis at Enovate.',
        'card3-label': '🤖 AI & AUTOMATION',
        'card3-title': 'WhatsApp Bot + LLM',
        'card3-description': 'Developed conversational service for WhatsApp integrating FastAPI with LLM models (Ollama). Real-time natural language processing.',
        'card5-label': '♻️ REFACTORING',
        'card5-title': 'Monolith → Clean Arch',
        'card5-description': 'Led migration from legacy system to clean architecture, reducing technical debt and establishing code standards.',
        'experience-title': 'Career Journey',
        'experience-subtitle': 'From Full-Stack to Backend Architect',
        'job1-date': 'Aug 2025 - Present',
        'job1-role': 'Lead Software Engineer',
        'job1-summary': 'Technical lead for developing an ERP from scratch for the construction sector. Managing complete development lifecycle (SDLC).',
        'job1-ach1': 'Designed Multi-tenant architecture with Python (FastAPI) under Clean Architecture and DDD',
        'job1-ach2': 'Implemented complete Dockerization and CI/CD pipelines to ensure environment parity',
        'job1-ach3': 'Developed interfaces with Angular and Tailwind CSS focused on UX',
        'job1-ach4': 'Migrated MVP from Power Apps to custom development, eliminating technical limitations',
        'job2-date': 'Mar 2025 - Aug 2025',
        'job2-role': 'Freelance Full-Stack Developer',
        'job2-summary': 'Developed complete MVP for conversational AI platform applying SOLID and design patterns.',
        'job2-ach1': 'Architected conversational service for WhatsApp integrating FastAPI with LLMs (Ollama)',
        'job2-ach2': 'Built backend core with NestJS and TypeORM creating reusable modules',
        'job2-ach3': 'Developed SPA in Angular structured under Atomic Design with Tailwind CSS',
        'job2-ach4': 'Implemented relational model with PostgreSQL and MongoDB for specific cases',
        'job3-date': 'Jun 2024 - Mar 2025',
        'job3-role': 'Backend Developer',
        'job3-summary': 'Modernization and critical optimization of SaaS platform backend.',
        'job3-ach1': 'Key achievement: Reduced critical process from 20 minutes to seconds through multi-threading and DB optimization',
        'job3-ach2': 'Led architectural migration from legacy monolith to Clean Architecture',
        'job3-ach3': 'Implemented Redis caching for high-concurrency endpoints',
        'job3-ach4': 'Developed middleware for automatic CSV processing with validation',
        'job4-date': 'Mar 2023 - Jan 2024',
        'job4-role': 'Full-Stack Developer',
        'job4-summary': 'Evolutionary maintenance and optimization of mission-critical "Pandora" application.',
        'job4-ach1': 'Achieved 90% reduction in SQL query latency through strategic indexing',
        'job4-ach2': 'Automated report generation (Excel/PDF), eliminating hours of manual work',
        'job4-ach3': 'Implemented end-to-end functionalities with Laravel and jQuery',
        'skills-title': 'Tech Stack',
        'skills-subtitle': 'Tools I master to solve complex problems',
        'skills-backend': 'Backend & APIs',
        'skills-databases': 'Databases',
        'skills-sql-opt': 'SQL Optimization',
        'skills-architecture': 'Architecture & Patterns',
        'skills-testing': 'Unit Testing',
        'skills-patterns': 'Design Patterns',
        'principles-title': 'How I Work',
        'principles-subtitle': 'Engineering principles behind every system I build',
        'principle1-title': 'Complexity is a last resort',
        'principle1-desc': 'I start with the simplest solution that works, and refactor into patterns only when the pain is real.',
        'principle2-title': 'Measure, then optimize',
        'principle2-desc': 'At Enovate, I profiled before touching code. "20 min → seconds" came from data, not intuition.',
        'principle3-title': 'Business logic owns the architecture',
        'principle3-desc': "The ERP's multi-tenant design came from the need to isolate financial data per client, not from a blog post.",
        'principle4-title': 'Infrastructure as code',
        'principle4-desc': "Docker and CI/CD from day one. I don't deploy manually.",
        'footer-title': 'Available for Backend Engineer & Software Architect roles',
        'footer-subtitle': 'Building scalable systems for high-impact teams.<br>Open to remote and hybrid opportunities.',
        'footer-linkedin': "Let's Connect on LinkedIn",
        'footer-copy': '© 2025 Luis Supelano. Built with ❤️ and Clean Code principles.'
    }
};

// Estado global de la aplicación - Responsabilidad: Gestión de estado
let currentLang = 'es';

// Responsabilidad: Gestión de internacionalización (i18n)
function changeLanguage(lang) {
    currentLang = lang;

    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Actualizar textos en el DOM
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;
}

// Responsabilidad: Inicialización de eventos de idioma
function initLanguageToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });
}

// Responsabilidad: Gestión de animaciones de scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar todos los elementos con clase fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Responsabilidad: Gestión de navegación suave
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Responsabilidad: Inicialización de la aplicación
function init() {
    initLanguageToggle();
    initScrollAnimations();
    initSmoothScroll();
}

// Ejecutar inicialización cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Detectar idioma del navegador para visitantes internacionales
const userLang = navigator.language || navigator.userLanguage;
if (userLang && userLang.startsWith('en')) {
    changeLanguage('en');
}
