export type Lang = 'en' | 'fr' | 'de' | 'es' | 'ar'

export const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
  { code: 'es', label: 'ES' },
  { code: 'ar', label: 'AR' },
]

export type Translations = {
  nav_about: string
  nav_skills: string
  nav_exp: string
  nav_projects: string
  nav_contact: string
  hero_tag: string
  hero_sub: string
  hero_cta1: string
  hero_cta2: string
  hero_scroll: string
  about_label: string
  about_title: string
  about_p1: string
  about_p2: string
  about_p3: string
  stat1: string
  stat2: string
  stat3: string
  stat4: string
  skills_label: string
  skills_title: string
  sk_adv: string
  sk_inter: string
  exp_label: string
  exp_title: string
  job1_role: string
  job1_desc: string
  job2_role: string
  job2_desc: string
  job3_role: string
  job3_desc: string
  proj_label: string
  proj_title: string
  p1_title: string
  p1_desc: string
  p2_desc: string
  p3_desc: string
  contact_label: string
  contact_title: string
  contact_sub: string
  form_name: string
  form_email: string
  form_msg: string
  form_send: string
  form_ok: string
  footer_txt: string
  footer_top: string
}

export const i18n: Record<Lang, Translations> = {
  en: {
    nav_about: 'About', nav_skills: 'Skills', nav_exp: 'Experience', nav_projects: 'Projects', nav_contact: 'Contact',
    hero_tag: 'Software Developer · Casablanca, Morocco',
    hero_sub: 'Full-stack developer with 4+ years of experience building scalable applications, automation systems, and AI-powered solutions using TypeScript, Python & Angular.',
    hero_cta1: "Let's work together →", hero_cta2: 'View my work',
    hero_scroll: 'Scroll to explore',
    about_label: 'About me', about_title: 'Who I am',
    about_p1: "Hey, I'm Safwane. A software engineer passionate about building things that work elegantly — from complex backend systems to polished frontend experiences.",
    about_p2: 'I thrive at the intersection of engineering and innovation. I leverage AI tools to ship faster, smarter, and better than traditional development cycles allow.',
    about_p3: "Based in Casablanca, I've worked with startups and companies across Morocco, building production-grade systems that solve real problems.",
    stat1: 'Years Experience', stat2: 'Companies', stat3: 'Projects Shipped', stat4: 'Languages',
    skills_label: 'Technical Skills', skills_title: 'What I work with',
    sk_adv: 'Advanced', sk_inter: 'Intermediate',
    exp_label: 'Experience', exp_title: "Where I've worked",
    job1_role: 'Full-stack Developer', job1_desc: 'Built a secure backend with dashboard modules, multi-supplier data synchronization and normalization, and automated order/delivery processes.',
    job2_role: 'Frontend Developer — Angular', job2_desc: 'Developed and maintained enterprise web applications as Angular developer. Built new UIs, connected frontend components to backend APIs, ensuring performance, stability and code quality over 3 years.',
    job3_role: 'Frontend Developer — Angular', job3_desc: 'Participated in developing an HR management system — implemented user interfaces and consumed REST APIs on the frontend side.',
    proj_label: 'Projects', proj_title: "Things I've built",
    p1_title: 'Voucher Automation API', p1_desc: 'Serverless API built on AWS Lambda for full automation of voucher generation and delivery. Handles high throughput with minimal cost and zero server management.',
    p2_desc: 'Food delivery mobile app inspired by Deliveroo — built with React Native. Full order flow, real-time tracking UI, and restaurant browsing experience.',
    p3_desc: 'Full e-commerce website with Stripe payment integration — product catalog, cart, checkout flow with real payment processing.',
    contact_label: 'Contact', contact_title: "Let's build something great.",
    contact_sub: "Available for remote opportunities, freelance projects, and full-time positions. Let's talk.",
    form_name: 'Name', form_email: 'Email', form_msg: 'Message', form_send: 'Send Message →',
    form_ok: "✓ Message sent! I'll get back to you soon.",
    footer_txt: 'Built with precision.', footer_top: 'Back to top ↑',
  },
  fr: {
    nav_about: 'À propos', nav_skills: 'Compétences', nav_exp: 'Expérience', nav_projects: 'Projets', nav_contact: 'Contact',
    hero_tag: 'Développeur Logiciel · Casablanca, Maroc',
    hero_sub: "Développeur fullstack avec plus de 4 ans d'expérience dans la création d'applications, systèmes d'automatisation et solutions IA avec TypeScript, Python & Angular.",
    hero_cta1: 'Travaillons ensemble →', hero_cta2: 'Voir mon travail',
    hero_scroll: 'Défiler pour explorer',
    about_label: 'À propos', about_title: 'Qui je suis',
    about_p1: "Bonjour, je suis Safwane. Ingénieur logiciel passionné par la création de solutions élégantes — des systèmes backend complexes aux interfaces frontend soignées.",
    about_p2: "Je navigue à l'intersection de l'ingénierie et de l'innovation, en utilisant l'IA pour livrer plus vite et mieux.",
    about_p3: "Basé à Casablanca, j'ai travaillé avec des startups et entreprises marocaines, en construisant des systèmes robustes qui résolvent de vrais problèmes.",
    stat1: "Ans d'expérience", stat2: 'Entreprises', stat3: 'Projets livrés', stat4: 'Langues',
    skills_label: 'Compétences Techniques', skills_title: 'Ce avec quoi je travaille',
    sk_adv: 'Avancé', sk_inter: 'Intermédiaire',
    exp_label: 'Expérience', exp_title: "Où j'ai travaillé",
    job1_role: 'Développeur Full-stack', job1_desc: "Développement d'un backend sécurisé avec modules de tableau de bord, synchronisation et normalisation des données multifournisseurs, et automatisation des processus de commande et de livraison.",
    job2_role: 'Développeur Frontend — Angular', job2_desc: "Développement et maintenance d'applications web d'entreprise en tant que développeur Angular. Création de nouvelles UIs, connexion des composants frontend au backend via des API sur 3 ans.",
    job3_role: 'Développeur Frontend — Angular', job3_desc: "Participation au développement d'un système de gestion RH avec implémentation des interfaces utilisateurs et consommation d'API REST.",
    proj_label: 'Projets', proj_title: "Ce que j'ai construit",
    p1_title: 'API Automatisation de Vouchers', p1_desc: "API serverless sur AWS Lambda pour l'automatisation complète de la génération et livraison de vouchers. Haute performance avec coût minimal.",
    p2_desc: "Application mobile de livraison de repas inspirée de Deliveroo — construite avec React Native. Flux de commande complet et UI de suivi en temps réel.",
    p3_desc: "Site e-commerce complet avec intégration Stripe — catalogue produits, panier et processus de paiement réel.",
    contact_label: 'Contact', contact_title: 'Construisons quelque chose.',
    contact_sub: 'Disponible pour des opportunités remote, projets freelance et postes à temps plein. Parlons-en.',
    form_name: 'Nom', form_email: 'Email', form_msg: 'Message', form_send: 'Envoyer →',
    form_ok: '✓ Message envoyé ! Je vous répondrai bientôt.',
    footer_txt: 'Construit avec précision.', footer_top: 'Retour en haut ↑',
  },
  de: {
    nav_about: 'Über mich', nav_skills: 'Fähigkeiten', nav_exp: 'Erfahrung', nav_projects: 'Projekte', nav_contact: 'Kontakt',
    hero_tag: 'Software-Entwickler · Casablanca, Marokko',
    hero_sub: 'Fullstack-Entwickler mit über 4 Jahren Erfahrung im Aufbau skalierbarer Anwendungen, Automatisierungssysteme und KI-gestützter Lösungen mit TypeScript, Python & Angular.',
    hero_cta1: 'Zusammenarbeiten →', hero_cta2: 'Meine Arbeit ansehen',
    hero_scroll: 'Scrollen zum Erkunden',
    about_label: 'Über mich', about_title: 'Wer ich bin',
    about_p1: 'Hallo, ich bin Safwane. Ein Softwareingenieur, der leidenschaftlich gerne elegante Lösungen baut — von komplexen Backend-Systemen bis hin zu polierten Frontend-Erlebnissen.',
    about_p2: 'Ich arbeite an der Schnittstelle von Technik und Innovation und nutze KI-Tools, um schneller und besser zu liefern.',
    about_p3: 'Mit Sitz in Casablanca habe ich mit Startups und Unternehmen in Marokko zusammengearbeitet und produktionsreife Systeme entwickelt.',
    stat1: 'Jahre Erfahrung', stat2: 'Unternehmen', stat3: 'Projekte geliefert', stat4: 'Sprachen',
    skills_label: 'Technische Fähigkeiten', skills_title: 'Womit ich arbeite',
    sk_adv: 'Fortgeschritten', sk_inter: 'Mittelstufe',
    exp_label: 'Erfahrung', exp_title: 'Wo ich gearbeitet habe',
    job1_role: 'Full-stack Entwickler', job1_desc: 'Entwicklung eines sicheren Backends mit Dashboard-Modulen, Multi-Lieferanten-Datensynchronisation und Automatisierung von Bestell- und Lieferprozessen.',
    job2_role: 'Frontend-Entwickler — Angular', job2_desc: 'Entwicklung und Wartung von Unternehmenswebanwendungen als Angular-Entwickler über 3 Jahre, mit API-Integration und Qualitätssicherung.',
    job3_role: 'Frontend-Entwickler — Angular', job3_desc: 'Mitarbeit an der Entwicklung eines HR-Management-Systems mit Implementierung von Benutzeroberflächen und REST-API-Konsumption.',
    proj_label: 'Projekte', proj_title: 'Was ich gebaut habe',
    p1_title: 'Gutschein-Automatisierungs-API', p1_desc: 'Serverlose API auf AWS Lambda zur vollständigen Automatisierung der Gutscheingenerierung und -lieferung mit hohem Durchsatz.',
    p2_desc: 'Mobile Lieferdienst-App inspiriert von Deliveroo — mit React Native. Vollständiger Bestellfluss und Echtzeit-Tracking.',
    p3_desc: 'Vollständige E-Commerce-Website mit Stripe-Zahlungsintegration — Produktkatalog, Warenkorb und echter Checkout.',
    contact_label: 'Kontakt', contact_title: 'Lass uns etwas Großartiges bauen.',
    contact_sub: 'Verfügbar für Remote-Stellen, Freelance-Projekte und Vollzeitpositionen. Sprechen wir.',
    form_name: 'Name', form_email: 'E-Mail', form_msg: 'Nachricht', form_send: 'Senden →',
    form_ok: '✓ Nachricht gesendet! Ich melde mich bald.',
    footer_txt: 'Mit Präzision gebaut.', footer_top: 'Nach oben ↑',
  },
  es: {
    nav_about: 'Sobre mí', nav_skills: 'Habilidades', nav_exp: 'Experiencia', nav_projects: 'Proyectos', nav_contact: 'Contacto',
    hero_tag: 'Desarrollador de Software · Casablanca, Marruecos',
    hero_sub: 'Desarrollador fullstack con más de 4 años de experiencia creando aplicaciones escalables, sistemas de automatización y soluciones con IA usando TypeScript, Python y Angular.',
    hero_cta1: 'Trabajemos juntos →', hero_cta2: 'Ver mi trabajo',
    hero_scroll: 'Desplázate para explorar',
    about_label: 'Sobre mí', about_title: 'Quién soy',
    about_p1: 'Hola, soy Safwane. Un ingeniero de software apasionado por construir soluciones elegantes — desde sistemas backend complejos hasta experiencias frontend pulidas.',
    about_p2: 'Trabajo en la intersección de la ingeniería y la innovación, usando herramientas de IA para entregar más rápido y mejor.',
    about_p3: 'Basado en Casablanca, he trabajado con startups y empresas en Marruecos construyendo sistemas de producción robustos.',
    stat1: 'Años de experiencia', stat2: 'Empresas', stat3: 'Proyectos entregados', stat4: 'Idiomas',
    skills_label: 'Habilidades Técnicas', skills_title: 'Con qué trabajo',
    sk_adv: 'Avanzado', sk_inter: 'Intermedio',
    exp_label: 'Experiencia', exp_title: 'Dónde he trabajado',
    job1_role: 'Desarrollador Full-stack', job1_desc: 'Construcción de un backend seguro con módulos de panel, sincronización de datos de múltiples proveedores y automatización de procesos de pedidos.',
    job2_role: 'Desarrollador Frontend — Angular', job2_desc: 'Desarrollo y mantenimiento de aplicaciones web empresariales como desarrollador Angular durante 3 años, con integración de APIs y aseguramiento de calidad.',
    job3_role: 'Desarrollador Frontend — Angular', job3_desc: 'Participación en el desarrollo de un sistema de gestión de RRHH con implementación de interfaces y consumo de APIs REST.',
    proj_label: 'Proyectos', proj_title: 'Lo que he construido',
    p1_title: 'API de Automatización de Vales', p1_desc: 'API serverless en AWS Lambda para automatización completa de generación y entrega de vales con alto rendimiento.',
    p2_desc: 'App móvil de entrega de comida inspirada en Deliveroo — construida con React Native. Flujo de pedidos completo y UI de seguimiento en tiempo real.',
    p3_desc: 'Sitio e-commerce completo con integración de Stripe — catálogo de productos, carrito y proceso de pago real.',
    contact_label: 'Contacto', contact_title: 'Construyamos algo increíble.',
    contact_sub: 'Disponible para oportunidades remotas, proyectos freelance y posiciones a tiempo completo. Hablemos.',
    form_name: 'Nombre', form_email: 'Correo', form_msg: 'Mensaje', form_send: 'Enviar →',
    form_ok: '✓ ¡Mensaje enviado! Me pondré en contacto pronto.',
    footer_txt: 'Construido con precisión.', footer_top: 'Volver arriba ↑',
  },
  ar: {
    nav_about: 'عني', nav_skills: 'المهارات', nav_exp: 'الخبرة', nav_projects: 'المشاريع', nav_contact: 'تواصل',
    hero_tag: 'مطور برمجيات · الدار البيضاء، المغرب',
    hero_sub: 'مطور fullstack بخبرة تزيد عن 4 سنوات في بناء تطبيقات قابلة للتوسع وأنظمة أتمتة وحلول مدعومة بالذكاء الاصطناعي.',
    hero_cta1: 'لنعمل معاً ←', hero_cta2: 'مشاهدة أعمالي',
    hero_scroll: 'اسحب للاستكشاف',
    about_label: 'عني', about_title: 'من أنا',
    about_p1: 'مرحباً، أنا صفوان. مهندس برمجيات شغوف ببناء حلول أنيقة — من أنظمة الـ backend المعقدة إلى تجارب الـ frontend المصقولة.',
    about_p2: 'أعمل عند تقاطع الهندسة والابتكار، مستخدماً أدوات الذكاء الاصطناعي للتسليم بشكل أسرع وأذكى.',
    about_p3: 'مقيم في الدار البيضاء، عملت مع شركات ناشئة وشركات في المغرب لبناء أنظمة إنتاجية تحل مشاكل حقيقية.',
    stat1: 'سنوات خبرة', stat2: 'شركات', stat3: 'مشاريع مسلّمة', stat4: 'لغات',
    skills_label: 'المهارات التقنية', skills_title: 'ما أعمل به',
    sk_adv: 'متقدم', sk_inter: 'متوسط',
    exp_label: 'الخبرة المهنية', exp_title: 'أين عملت',
    job1_role: 'مطور Full-stack', job1_desc: 'بناء backend آمن مع وحدات لوحة تحكم، مزامنة وتطبيع بيانات متعددة الموردين، وأتمتة عمليات الطلب والتسليم.',
    job2_role: 'مطور Frontend — Angular', job2_desc: 'تطوير وصيانة تطبيقات ويب للمؤسسات كمطور Angular لمدة 3 سنوات، مع ربط المكونات الأمامية بالـ APIs وضمان الجودة.',
    job3_role: 'مطور Frontend — Angular', job3_desc: 'المشاركة في تطوير نظام إدارة الموارد البشرية مع تنفيذ واجهات المستخدم واستهلاك REST APIs.',
    proj_label: 'المشاريع', proj_title: 'ما قمت ببنائه',
    p1_title: 'API أتمتة القسائم', p1_desc: 'API serverless على AWS Lambda لأتمتة توليد وتسليم القسائم بالكامل مع أداء عالٍ وتكلفة منخفضة.',
    p2_desc: 'تطبيق موبايل لتوصيل الطعام مستوحى من Deliveroo — مبني بـ React Native مع تجربة طلب كاملة وتتبع فوري.',
    p3_desc: 'موقع تجارة إلكترونية كامل مع تكامل Stripe — كتالوج المنتجات، السلة، وعملية دفع حقيقية.',
    contact_label: 'تواصل معي', contact_title: 'لنبني شيئاً رائعاً.',
    contact_sub: 'متاح للفرص عن بُعد، مشاريع freelance والوظائف بدوام كامل. لنتحدث.',
    form_name: 'الاسم', form_email: 'البريد الإلكتروني', form_msg: 'الرسالة', form_send: 'إرسال ←',
    form_ok: '✓ تم إرسال الرسالة! سأتواصل معك قريباً.',
    footer_txt: 'مبني بدقة.', footer_top: 'العودة للأعلى ↑',
  },
}
