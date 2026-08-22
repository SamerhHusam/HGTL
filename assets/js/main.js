(function(){
"use strict";

/* ==========================================================================
   1. CONTENT — singular text keys (data-key attributes in the DOM)
   ========================================================================== */

var CONTENT = {
  ar: {
    "nav.cta": "اطلب استشارة",
    "hero.title1": "حلول تقنية متكاملة",
    "hero.title2": "لمستقبل أعمالك",
    "hero.lede": "اكتشف حلولاً تقنية متكاملة تساعد أعمالك على النمو بكفاءة وأمان، من البنية التحتية والأنظمة الذكية إلى البرمجيات والأمن السيبراني والدعم الفني.",
    "hero.ctaPrimary": "استكشف حلولنا",
    "hero.ctaSecondary": "تواصل معنا",
    "about.eyebrow": "من نحن",
    "about.title": "التقنية التي تدفع أعمالك إلى الأمام",
    "about.lede": "في HGTL نقدّم حلولاً تقنية متكاملة للشركات على اختلاف احتياجاتها لتحقيق النمو والكفاءة.",
    "about.body": "تقدّم HGTL (High Grade Tech Line) الأجهزة والبرمجيات والحلول الذكية والخدمات السحابية والدعم الفني المتميز، وتسعى لبناء شراكات طويلة الأمد مع عملائها في القطاعين الحكومي والخاص.",
    "about.visionLabel": "الرؤية",
    "about.visionText": "أن نكون الخيار الأول في تقديم حلول تقنية مبتكرة وموثوقة للمستقبل.",
    "about.missionLabel": "الرسالة",
    "about.missionText": "تقديم حلول تقنية متكاملة بجودة عالية واحترافية تساهم في نجاح أعمال عملائنا وتحقيق طموحاتهم.",
    "solutions.eyebrow": "حلولنا",
    "solutions.title": "حلول متكاملة. شريك تقني واحد.",
    "solutions.lede": "تجمع HGTL بين الأجهزة والبرمجيات والخدمات في حلول مصممة حول احتياجات أعمالك.",
    "ecosystem.eyebrow": "منظومة HGTL",
    "ecosystem.title": "منظومة تقنية مترابطة لأعمال أكثر كفاءة",
    "ecosystem.lede": "تقنيات مختلفة، وشريك تقني واحد يربطها معاً.",
    "why.eyebrow": "لماذا HGTL",
    "why.title": "لماذا HGTL؟",
    "how.eyebrow": "أسلوب العمل",
    "how.title": "كيف نعمل معك؟",
    "industries.eyebrow": "القطاعات",
    "industries.title": "حلول تقنية تناسب طبيعة قطاعك",
    "brands.eyebrow": "تقنيات نوفرها",
    "brands.title": "علامات وتقنيات نوفرها لعملائنا",
    "commit.eyebrow": "التزاماتنا",
    "commit.title": "التزام يتجاوز التنفيذ",
    "cta.eyebrow": "لنبدأ",
    "cta.title": "جاهزون لبناء الحل التقني المناسب لأعمالك؟",
    "cta.lede": "شاركنا احتياجاتك، ودع فريق HGTL يساعدك في بناء منظومة تقنية أكثر كفاءة وأماناً واستعداداً للمستقبل.",
    "cta.primary": "ابدأ معنا",
    "cta.secondary": "تواصل مع فريق HGTL",
    "contact.eyebrow": "تواصل معنا",
    "contact.title": "لنبدأ الحديث عن مشروعك التقني",
    "contact.location": "جدة – المملكة العربية السعودية",
    "form.name": "الاسم الكامل",
    "form.company": "اسم الشركة",
    "form.phone": "رقم الجوال",
    "form.email": "البريد الإلكتروني",
    "form.service": "الخدمة المطلوبة",
    "form.message": "رسالتك",
    "form.submit": "إرسال الطلب",
    "form.note": "سيتم فتح برنامج البريد الإلكتروني لإرسال طلبك مباشرة إلى فريق HGTL.",
    "footer.tagline": "حلول تقنية متكاملة لمستقبل أعمالك.",
    "footer.navTitle": "التنقل",
    "footer.solTitle": "حلولنا",
    "footer.contactTitle": "تواصل معنا",
    "footer.copyright": "© HGTL — High Grade Tech Line. جميع الحقوق محفوظة.",
    "hw.hero.eyebrow": "حلول الأجهزة",
    "hw.hero.title": "الأجهزة والبنية التقنية",
    "hw.hero.lede": "حلول متكاملة للأجهزة والبنية التقنية تشمل أجهزة الكمبيوتر والخوادم، حلول التخزين والطباعة، تقنيات الاجتماعات الذكية والشبكات والملحقات.",
    "hw.hero.ctaPrimary": "استكشف الفئات",
    "hw.hero.ctaSecondary": "تواصل معنا",
    "hw.categories.eyebrow": "فئات الأجهزة",
    "hw.categories.title": "بنية تقنية متكاملة لكل بيئة عمل",
    "hw.categories.lede": "من محطات العمل إلى الخوادم والشبكات، نوفر كل ما تحتاجه بيئة عملك التقنية ضمن منظومة واحدة متكاملة.",
    "hw.cta.title": "جاهز لتجهيز بيئة عملك بأحدث الأجهزة؟",
    "hw.cta.lede": "شاركنا احتياجاتك، وسيساعدك فريق HGTL في بناء بنية تقنية متكاملة تناسب أعمالك.",
    "hw.cta.primary": "تواصل مع فريق HGTL",
    "hw.computers.title": "أجهزة الكمبيوتر تشمل",
    "hw.accessories.title": "ملحقات الأجهزة تشمل",
    "sol.breadcrumb.home": "الرئيسية",
    "sol.breadcrumb.solutions": "حلولنا",
    "sol.hero.ctaPrimary": "اطلب استشارة",
    "sol.hero.ctaSecondary": "اكتشف التفاصيل",
    "sol.features.eyebrow": "التفاصيل",
    "sol.features.title": "ما يشمله هذا الحل",
    "sol.features.lede": "مجموعة متكاملة من الخدمات مصممة لتغطية احتياجاتك بالكامل.",
    "sol.outcomes.eyebrow": "القيمة المضافة",
    "sol.outcomes.title": "ماذا يعني هذا لأعمالك",
    "sol.visual.eyebrow": "لمحة بصرية",
    "sol.related.eyebrow": "حلول أخرى",
    "sol.related.title": "حلول ذات صلة",
    "sol.panel.imagePlaceholder": "أضف صورة توضيحية لهذا الحل",
    "cyber.hero.eyebrow": "حلول الأمن السيبراني",
    "cyber.overview.eyebrow": "نظرة عامة",
    "cyber.overview.title": "حماية شاملة لأعمالك الرقمية",
    "cyber.overview.text": "الأمن السيبراني وحماية البيانات هو حلّ متكامل يهدف إلى حماية أنظمة أعمالك وبياناتك من التهديدات الرقمية المتزايدة. نساعدك على معالجة نقاط الضعف الأمنية قبل استغلالها، وضمان استمرارية عملك دون انقطاع. هذا الحل موجّه للشركات والمؤسسات التي تتعامل مع بيانات حساسة وتحتاج إلى حماية موثوقة لأنظمتها وشبكاتها.",
    "cyber.visual.caption": "منظومة أمن سيبراني تحمي أعمالك من كل زاوية.",
    "cyber.cta.title": "جاهز لتعزيز أمان أعمالك؟",
    "cyber.cta.lede": "شاركنا احتياجاتك، وسيساعدك فريق HGTL في بناء منظومة أمن سيبراني متكاملة تحمي أعمالك.",
    "sw.hero.eyebrow": "حلول البرمجيات",
    "sw.overview.eyebrow": "نظرة عامة",
    "sw.overview.title": "برمجيات ذكية تدير أعمالك بكفاءة",
    "sw.overview.text": "البرمجيات والحلول الذكية هي مجموعة من الأنظمة المترابطة التي تنظّم عمليات أعمالك اليومية وتقلل الاعتماد على الأدوات المتفرقة. نساعدك على توحيد بياناتك وعملياتك في منظومة واحدة سهلة الإدارة. هذا الحل موجّه للشركات التي تبحث عن أدوات موثوقة لإدارة أعمالها بكفاءة أكبر.",
    "sw.visual.caption": "أنظمة ذكية تعمل بانسجام لخدمة أعمالك.",
    "sw.cta.title": "جاهز لتطوير أعمالك ببرمجيات ذكية؟",
    "sw.cta.lede": "شاركنا احتياجاتك، وسيساعدك فريق HGTL في اختيار وبناء الحلول البرمجية المناسبة لأعمالك.",
    "web.hero.eyebrow": "حلول تصميم المواقع",
    "web.overview.eyebrow": "نظرة عامة",
    "web.overview.title": "مواقع احترافية تعكس هوية أعمالك",
    "web.overview.text": "تصميم وتطوير المواقع هو خدمة متكاملة لبناء حضور رقمي احترافي يعكس هوية علامتك التجارية. نساعدك على الوصول إلى عملائك بموقع سريع ومتجاوب يعمل بسلاسة على جميع الأجهزة. هذا الحل موجّه للشركات التي تريد موقعاً احترافياً يمثلها بالشكل الصحيح على الإنترنت.",
    "web.visual.caption": "مواقع تعكس احترافية علامتك التجارية.",
    "web.cta.title": "جاهز لإطلاق موقعك الاحترافي؟",
    "web.cta.lede": "شاركنا احتياجاتك، وسيساعدك فريق HGTL في تصميم وتطوير الموقع المناسب لأعمالك."
  },
  en: {
    "nav.cta": "Request Consultation",
    "hero.title1": "Integrated Technology Solutions",
    "hero.title2": "for a Smarter Future",
    "hero.lede": "Empowering organizations with secure, integrated technology solutions — from infrastructure and intelligent systems to software, cybersecurity, and technical support.",
    "hero.ctaPrimary": "Explore Our Solutions",
    "hero.ctaSecondary": "Contact Us",
    "about.eyebrow": "About HGTL",
    "about.title": "Technology That Moves Your Business Forward",
    "about.lede": "At HGTL, we provide integrated technology solutions tailored to the diverse needs of businesses, driving growth and efficiency.",
    "about.body": "High Grade Tech Line (HGTL) supplies and implements hardware, software, smart solutions, cloud services, and exceptional technical support — building long-term partnerships with clients across the public and private sectors.",
    "about.visionLabel": "Vision",
    "about.visionText": "To be the first choice for delivering innovative and reliable technology solutions for the future.",
    "about.missionLabel": "Mission",
    "about.missionText": "To provide high-quality, professional, and integrated technology solutions that contribute to the success of our clients' businesses and the realization of their ambitions.",
    "solutions.eyebrow": "Our Solutions",
    "solutions.title": "Integrated Solutions. One Technology Partner.",
    "solutions.lede": "HGTL brings together technologies, systems, and services into solutions built around your business requirements.",
    "ecosystem.eyebrow": "HGTL Ecosystem",
    "ecosystem.title": "One Connected Technology Ecosystem",
    "ecosystem.lede": "Different technologies. One integrated partner connecting them all.",
    "why.eyebrow": "Why HGTL",
    "why.title": "Why HGTL?",
    "how.eyebrow": "Our Process",
    "how.title": "How We Work With You",
    "industries.eyebrow": "Industries",
    "industries.title": "Technology Built Around Your Industry",
    "brands.eyebrow": "Technologies We Supply",
    "brands.title": "Brands & Technologies We Supply",
    "commit.eyebrow": "Our Commitments",
    "commit.title": "Built on Trust. Delivered with Confidence.",
    "cta.eyebrow": "Let's Talk",
    "cta.title": "Ready to Build the Right Technology Solution for Your Business?",
    "cta.lede": "Share your needs, and let the HGTL team help you build a more efficient, secure, and future-ready technology ecosystem.",
    "cta.primary": "Start a Conversation",
    "cta.secondary": "Talk to the HGTL Team",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's Talk About Your Technology Project",
    "contact.location": "Jeddah – Saudi Arabia",
    "form.name": "Full Name",
    "form.company": "Company",
    "form.phone": "Phone Number",
    "form.email": "Email Address",
    "form.service": "Required Service",
    "form.message": "Message",
    "form.submit": "Send Request",
    "form.note": "Your email client will open to send this request directly to the HGTL team.",
    "footer.tagline": "Integrated technology solutions for a smarter future.",
    "footer.navTitle": "Navigation",
    "footer.solTitle": "Solutions",
    "footer.contactTitle": "Contact",
    "footer.copyright": "© HGTL — High Grade Tech Line. All Rights Reserved.",
    "hw.hero.eyebrow": "Hardware Solutions",
    "hw.hero.title": "Hardware & Technology Infrastructure",
    "hw.hero.lede": "Integrated hardware and technology infrastructure solutions covering computers, servers, storage, printing, smart meeting technologies, networking, and accessories.",
    "hw.hero.ctaPrimary": "Explore Categories",
    "hw.hero.ctaSecondary": "Contact Us",
    "hw.categories.eyebrow": "Hardware Categories",
    "hw.categories.title": "A Complete Technology Infrastructure for Every Workplace",
    "hw.categories.lede": "From workstations to servers and networks, everything your workplace needs — brought together in one integrated ecosystem.",
    "hw.cta.title": "Ready to Equip Your Workplace with the Right Hardware?",
    "hw.cta.lede": "Share your needs, and the HGTL team will help you build the right technology infrastructure for your business.",
    "hw.cta.primary": "Talk to the HGTL Team",
    "hw.computers.title": "Computers Include",
    "hw.accessories.title": "Device Accessories Include",
    "sol.breadcrumb.home": "Home",
    "sol.breadcrumb.solutions": "Solutions",
    "sol.hero.ctaPrimary": "Request a Consultation",
    "sol.hero.ctaSecondary": "See Details",
    "sol.features.eyebrow": "Details",
    "sol.features.title": "What This Solution Includes",
    "sol.features.lede": "A complete set of services designed to fully cover your needs.",
    "sol.outcomes.eyebrow": "Added Value",
    "sol.outcomes.title": "What This Means for Your Business",
    "sol.visual.eyebrow": "Visual Snapshot",
    "sol.related.eyebrow": "More Solutions",
    "sol.related.title": "Related Solutions",
    "sol.panel.imagePlaceholder": "Add a visual for this solution",
    "cyber.hero.eyebrow": "Cybersecurity Solutions",
    "cyber.overview.eyebrow": "Overview",
    "cyber.overview.title": "Comprehensive Protection for Your Digital Business",
    "cyber.overview.text": "Cybersecurity & Data Protection is an integrated solution that safeguards your business systems and data from growing digital threats. We help you address security weaknesses before they can be exploited, keeping your operations running without interruption. It's built for companies and organizations that handle sensitive data and need reliable protection for their systems and networks.",
    "cyber.visual.caption": "A cybersecurity framework protecting your business from every angle.",
    "cyber.cta.title": "Ready to Strengthen Your Business Security?",
    "cyber.cta.lede": "Share your needs, and the HGTL team will help you build an integrated cybersecurity framework to protect your business.",
    "sw.hero.eyebrow": "Software Solutions",
    "sw.overview.eyebrow": "Overview",
    "sw.overview.title": "Smart Software That Runs Your Business Efficiently",
    "sw.overview.text": "Software & Smart Solutions bring together connected systems that organize your day-to-day operations and reduce reliance on scattered tools. We help you unify your data and processes into one manageable system. It's built for businesses looking for reliable tools to run their operations more efficiently.",
    "sw.visual.caption": "Smart systems working in harmony for your business.",
    "sw.cta.title": "Ready to Grow Your Business with Smart Software?",
    "sw.cta.lede": "Share your needs, and the HGTL team will help you choose and build the right software solutions for your business.",
    "web.hero.eyebrow": "Web Design Solutions",
    "web.overview.eyebrow": "Overview",
    "web.overview.title": "Professional Websites That Reflect Your Brand",
    "web.overview.text": "Web Design & Development is a complete service for building a professional digital presence that reflects your brand identity. We help you reach your customers with a fast, responsive website that works smoothly across every device. It's built for businesses that want a professional website that represents them the right way online.",
    "web.visual.caption": "Websites that reflect your brand's professionalism.",
    "web.cta.title": "Ready to Launch Your Professional Website?",
    "web.cta.lede": "Share your needs, and the HGTL team will help you design and build the right website for your business."
  }
};

/* ==========================================================================
   2. DATA — repeating collections
   ========================================================================== */

var NAV_ITEMS = [
  { href:"#home", ar:"الرئيسية", en:"Home" },
  { href:"#about", ar:"من نحن", en:"About" },
  { href:"#why", ar:"لماذا HGTL؟", en:"Why HGTL" },
  { href:"#solutions", ar:"حلولنا", en:"Solutions" },
  { href:"hardware.html", isPage:true, ar:"الأجهزة", en:"Hardware" },
  { href:"#industries", ar:"القطاعات", en:"Industries" },
  { href:"#contact", ar:"تواصل معنا", en:"Contact" }
];

var TRUST_ITEMS = [
  { ar:"الأمن السيبراني", en:"Cybersecurity" },
  { ar:"البرمجيات", en:"Software" },
  { ar:"البنية التحتية", en:"Infrastructure" },
  { ar:"الحوسبة السحابية", en:"Cloud" },
  { ar:"الحلول الذكية", en:"Smart Solutions" },
  { ar:"الدعم الفني", en:"Support" }
];

var VALUES = [
  { num:"01", ar:"النزاهة", en:"Integrity" },
  { num:"02", ar:"الابتكار", en:"Innovation" },
  { num:"03", ar:"الجودة", en:"Quality" },
  { num:"04", ar:"الالتزام", en:"Commitment" }
];

var SOLUTIONS = [
  {
    size:"l", icon:"icon-shield", tag:"01", key:"cyber", href:"cybersecurity.html",
    ar:{ title:"الأمن السيبراني وحماية البيانات", desc:"نحمي أعمالك من التهديدات الرقمية ونضمن أمان واستمرارية بياناتك.",
      list:["تقييم الثغرات والمخاطر","حماية الشبكات والجدران النارية","حماية البيانات والتشفير","حلول النسخ الاحتياطي والتعافي","مراقبة الأنظمة والتهديدات","اختبار الاختراق","الاستجابة للحوادث والدعم الفني"],
      cta:"استعراض الحل" },
    en:{ title:"Cybersecurity & Data Protection", desc:"We protect your business from digital threats and ensure the security and continuity of your data.",
      list:["Vulnerability & Risk Assessment","Network Security & Firewalls","Data Protection & Encryption","Backup & Disaster Recovery","System & Threat Monitoring","Penetration Testing","Incident Response & Technical Support"],
      cta:"View the Solution" }
  },
  {
    size:"l", icon:"icon-layers", tag:"02", key:"software", href:"software-solutions.html",
    ar:{ title:"البرمجيات والحلول الذكية", desc:"نقدّم برمجيات موثوقة وحلولاً ذكية لتحسين أداء أعمالك وزيادة إنتاجيتك.",
      list:["أنظمة إدارة الأعمال (ERP)","إدارة علاقات العملاء (CRM)","أنظمة المحاسبة والمالية","برامج الموارد البشرية","حلول إدارة المشاريع","أدوات التعاون والإنتاجية","تكامل الأنظمة والتخصيص","الدعم الفني والتحديثات المستمرة","تثبيت مايكروسوفت أوفيس","تثبيت نظام ويندوز"],
      cta:"عرض التفاصيل" },
    en:{ title:"Software & Smart Solutions", desc:"Reliable software and smart solutions that improve business performance and productivity.",
      list:["Enterprise Resource Planning (ERP)","Customer Relationship Management (CRM)","Accounting & Financial Systems","Human Resources Software","Project Management Solutions","Collaboration & Productivity Tools","System Integration & Customization","Technical Support & Regular Updates","Install Microsoft Office","Install Windows"],
      cta:"View Details" }
  },
  {
    size:"m", icon:"icon-code", tag:"03", key:"web", href:"web-design.html",
    ar:{ title:"تصميم وتطوير المواقع", desc:"مواقع احترافية متجاوبة وسريعة تعكس هوية أعمالك.",
      list:["تصميم واجهات UI/UX","تطوير مواقع متجاوبة","متاجر إلكترونية متكاملة","تحسين محركات البحث SEO","صيانة وتحديث المواقع","ربط النطاق والاستضافة"],
      cta:"اكتشف المزيد" },
    en:{ title:"Web Design & Development", desc:"Professional, responsive, and fast websites that reflect your brand identity.",
      list:["UI/UX Design","Responsive Website Development","E-Commerce Solutions","Search Engine Optimization","Website Maintenance","Domain & Hosting Integration"],
      cta:"Discover More" }
  },
  {
    size:"m", icon:"icon-server", tag:"04", key:"hardware", isLink:true, href:"hardware.html",
    ar:{ title:"الأجهزة والبنية التقنية",
      desc:"حلول متكاملة للأجهزة والبنية التقنية تشمل أجهزة الكمبيوتر والخوادم، حلول التخزين والطباعة، تقنيات الاجتماعات الذكية والشبكات والملحقات.",
      chips:["أجهزة الكمبيوتر","الخوادم والتخزين","الطابعات وحلول الطباعة","الاجتماعات الذكية","الشبكات","ملحقات الأجهزة"],
      computers:["أجهزة مكتبية","أجهزة محمولة","أجهزة All-in-One","أجهزة لوحية — Tablets"],
      accessories:["لوحة المفاتيح","الفأرة","سماعات الرأس","سماعات خارجية","كاميرا ويب","ميكروفون","شواحن ومحولات","موزع منافذ USB / USB-C","وحدات تخزين خارجية (SSD/HDD)","فلاش ميموري USB","قارئ بطاقات الذاكرة","قواعد وحوامل اللابتوب","قواعد تبريد اللابتوب","حقائب وأغطية حماية اللابتوب","كابلات HDMI / DisplayPort / USB-C","ماوس باد","شاشات"],
      cta:"استكشف حلول الهاردوير" },
    en:{ title:"Hardware & Technology Infrastructure",
      desc:"Integrated hardware and technology infrastructure solutions covering computers, servers, storage, printing, smart meeting technologies, networking, and accessories.",
      chips:["Computers","Servers & Storage","Printers and Printing Solutions","Smart Meetings","Networking","Device Accessories"],
      computers:["Desktop Computers","Laptops","All-in-One Computers","Tablets"],
      accessories:["Keyboard","Mouse","Headset","Speakers","Webcam","Microphone","Chargers & Adapters","USB / USB-C Hub","External Storage (SSD/HDD)","USB Flash Drive","Memory Card Reader","Laptop Stands and Mounts","Laptop Cooling Pads","Laptop Bags and Protective Covers","HDMI / DisplayPort / USB-C Cables","Mouse Pad","Screens"],
      cta:"Explore Hardware Solutions" }
  }
];

/* Per-solution-page data — hero orbit visual nodes + benefit/outcome cards.
   Keyed by SOLUTIONS[i].key, consumed by renderSolutionPage() on each
   dedicated solution page (cybersecurity.html, software-solutions.html,
   web-design.html). Feature lists are NOT duplicated here — those pages
   render SOLUTIONS[i].list directly so the card and its page never drift. */
var SOLUTION_PAGE_DATA = {
  cyber:{
    nodes:[
      { icon:"icon-search", ar:"تقييم الثغرات", en:"Vulnerability Assessment" },
      { icon:"icon-network", ar:"حماية الشبكات", en:"Network Security" },
      { icon:"icon-shield", ar:"تشفير البيانات", en:"Data Encryption" },
      { icon:"icon-cloud", ar:"النسخ الاحتياطي", en:"Backup & Recovery" },
      { icon:"icon-code", ar:"اختبار الاختراق", en:"Penetration Testing" },
      { icon:"icon-headset", ar:"الاستجابة للحوادث", en:"Incident Response" }
    ],
    outcomes:[
      { ar:"تقليل التعرض للمخاطر الرقمية والهجمات الإلكترونية.", en:"Reduced exposure to digital risks and cyber threats." },
      { ar:"استمرارية الأعمال وحماية البيانات في جميع الأوقات.", en:"Business continuity and data protection at all times." },
      { ar:"اطمئنان دائم بأن أنظمتك تحت مراقبة ودعم مستمر.", en:"Lasting peace of mind with monitored, supported systems." }
    ]
  },
  software:{
    nodes:[
      { icon:"icon-layers", ar:"إدارة الأعمال (ERP)", en:"ERP" },
      { icon:"icon-users", ar:"علاقات العملاء (CRM)", en:"CRM" },
      { icon:"icon-bank", ar:"المحاسبة والمالية", en:"Accounting & Finance" },
      { icon:"icon-briefcase", ar:"الموارد البشرية", en:"Human Resources" },
      { icon:"icon-badge", ar:"إدارة المشاريع", en:"Project Management" },
      { icon:"icon-headset", ar:"الدعم الفني", en:"Technical Support" }
    ],
    outcomes:[
      { ar:"أداء أعمال أعلى كفاءة وإنتاجية.", en:"Higher operational efficiency and productivity." },
      { ar:"أنظمة موحّدة ومتكاملة بدلاً من أدوات متفرقة.", en:"Unified, integrated systems instead of scattered tools." },
      { ar:"قرارات أدق مبنية على بيانات منظمة.", en:"Sharper decisions built on organized data." }
    ]
  },
  web:{
    nodes:[
      { icon:"icon-bulb", ar:"تصميم UI/UX", en:"UI/UX Design" },
      { icon:"icon-code", ar:"تطوير متجاوب", en:"Responsive Development" },
      { icon:"icon-cart", ar:"متاجر إلكترونية", en:"E-Commerce" },
      { icon:"icon-search", ar:"تحسين SEO", en:"SEO" },
      { icon:"icon-globe", ar:"النطاق والاستضافة", en:"Domain & Hosting" }
    ],
    outcomes:[
      { ar:"حضور رقمي احترافي يعكس هوية علامتك.", en:"A professional digital presence that reflects your brand." },
      { ar:"تجربة مستخدم سلسة على جميع الأجهزة.", en:"A smooth user experience across every device." },
      { ar:"موقع جاهز للنمو مع دعم وصيانة مستمرة.", en:"A site built to grow, with ongoing support and maintenance." }
    ]
  }
};

var HARDWARE_ECO_NODES = [
  { icon:"icon-laptop", ar:"أجهزة الكمبيوتر", en:"Computers" },
  { icon:"icon-server", ar:"الخوادم والتخزين", en:"Servers & Storage" },
  { icon:"icon-printer", ar:"حلول الطباعة", en:"Printing" },
  { icon:"icon-meeting", ar:"الاجتماعات الذكية", en:"Smart Meetings" },
  { icon:"icon-network", ar:"الشبكات", en:"Networking" }
];

var HARDWARE_CATEGORIES = [
  {
    icon:"icon-server", tag:"01",
    ar:{ title:"أجهزة الكمبيوتر والخوادم", desc:"أحدث أجهزة الكمبيوتر والخوادم عالية الجودة لجميع احتياجات الأعمال.",
      list:["أجهزة مكتبية ومحمولة","خوادم ووحدات تخزين","مكونات وملحقات أصلية"] },
    en:{ title:"Computers & Servers", desc:"The latest high-quality computers and servers for all business needs.",
      list:["Desktops & Laptops","Servers & Storage Units","Original Components & Accessories"] }
  },
  {
    icon:"icon-printer", tag:"02",
    ar:{ title:"الطابعات وحلول الطباعة", desc:"مجموعة شاملة من الطابعات والملحقات وحلول الطباعة لجميع القطاعات.",
      list:["طابعات متعددة الوظائف","طابعات ليزر وحبر","أحبار وتونر أصلية"] },
    en:{ title:"Printers and Printing Solutions", desc:"A comprehensive range of printers, accessories, and printing solutions for every sector.",
      list:["Multifunction Printers","Laser & Inkjet Printers","Original Ink & Toner"] }
  },
  {
    icon:"icon-meeting", tag:"03",
    ar:{ title:"الحلول الذكية للاجتماعات والشركات", desc:"تقنيات حديثة تساعد الشركات على التواصل بكفاءة وزيادة الإنتاجية.",
      list:["شاشات تفاعلية وذكية","أنظمة مؤتمرات الفيديو","كاميرات وحلول الصوت","أدوات التعاون الذكي"] },
    en:{ title:"Smart Solutions for Meetings & Businesses", desc:"Modern technologies that help companies communicate efficiently and boost productivity.",
      list:["Interactive Smart Displays","Video Conferencing Systems","Cameras & Audio Solutions","Smart Collaboration Tools"] }
  },
  {
    icon:"icon-network", tag:"04",
    ar:{ title:"الشبكات والاتصالات", desc:"حلول شبكات واتصالات تربط بين مختلف أنظمة أعمالك.", list:[] },
    en:{ title:"Networks & Communications", desc:"Networking and communication solutions connecting your business systems.", list:[] }
  },
  {
    icon:"icon-laptop", tag:"05", size:"l",
    ar:{ title:"ملحقات الأجهزة", desc:"تشكيلة متكاملة من ملحقات الأجهزة لتحسين تجربتك اليومية مع الحاسوب والأجهزة المكتبية.",
      list:["لوحة المفاتيح","الماوس","سماعة الرأس","مكبرات صوت خارجية","كاميرا ويب","ميكروفون","الشواحن والمحولات","موزع USB / USB-C","وحدات تخزين خارجية (SSD/HDD)","فلاش ميموري USB","قارئ بطاقات الذاكرة","حوامل وقواعد اللابتوب","قواعد تبريد اللابتوب","حقائب وأغطية حماية اللابتوب","كابلات HDMI / DisplayPort / USB-C","قاعدة الماوس (ماوس باد)"] },
    en:{ title:"Device Accessories", desc:"A complete range of device accessories to enhance your everyday computer and workspace experience.",
      list:["Keyboard","Mouse","Headset","External Speakers","Webcam","Microphone","Chargers & Adapters","USB/USB-C Hub","External Storage (SSD/HDD)","USB Flash Drive","Memory Card Reader","Laptop Stands and Mounts","Laptop Cooling Pads","Laptop Bags and Protective Covers","HDMI/DisplayPort/USB-C Cables","Mouse Pad"] }
  }
];

var ECOSYSTEM_NODES = [
  { icon:"icon-shield", ar:"الأمن السيبراني", en:"Cybersecurity" },
  { icon:"icon-layers", ar:"البرمجيات", en:"Software" },
  { icon:"icon-code", ar:"المواقع", en:"Web" },
  { icon:"icon-server", ar:"الخوادم", en:"Servers" },
  { icon:"icon-cloud", ar:"الحوسبة السحابية", en:"Cloud" },
  { icon:"icon-printer", ar:"الطباعة", en:"Printing" },
  { icon:"icon-meeting", ar:"الاجتماعات الذكية", en:"Smart Meetings" },
  { icon:"icon-network", ar:"الشبكات", en:"Networks" },
  { icon:"icon-headset", ar:"الدعم الفني", en:"Support" }
];

var WHY_ITEMS = [
  { num:"01", ar:{ t:"حلول تقنية متكاملة", d:"نجمع الأجهزة والبرمجيات والخدمات في حل واحد مصمم حول أعمالك." }, en:{ t:"Integrated Technology Solutions", d:"Hardware, software, and services combined into one solution built around your business." } },
  { num:"02", ar:{ t:"فريق فني متخصص", d:"خبرة فنية متخصصة تدعم كل مرحلة من مشروعك." }, en:{ t:"Specialized Technical Team", d:"Specialized technical expertise supporting every stage of your project." } },
  { num:"03", ar:{ t:"منتجات أصلية", d:"أجهزة وبرمجيات أصلية 100% من موردين معتمدين." }, en:{ t:"Original Products", d:"100% original hardware and software from authorized suppliers." } },
  { num:"04", ar:{ t:"أسعار تنافسية", d:"تسعير شفاف وتنافسي بلا مقابل مخفي." }, en:{ t:"Competitive Pricing", d:"Transparent, competitive pricing with no hidden costs." } },
  { num:"05", ar:{ t:"احترافية", d:"تنفيذ منظم ومحترف من أول تواصل حتى تسليم المشروع." }, en:{ t:"Professionalism", d:"Organized, professional execution from first contact to project delivery." } },
  { num:"06", ar:{ t:"دعم فني متواصل", d:"فريق دعم فني متواصل بعد التسليم لضمان استمرارية أعمالك." }, en:{ t:"Continuous Technical Support", d:"Ongoing technical support after delivery to keep your business running." } }
];

var TIMELINE_STEPS = [
  { icon:"icon-ear", ar:{ t:"نستمع لاحتياجاتك", d:"نبدأ بفهم أعمالك وأهدافك التقنية عن قرب." }, en:{ t:"Listen to Your Needs", d:"We start by closely understanding your business and technical goals." } },
  { icon:"icon-search", ar:{ t:"نحلل المتطلبات", d:"نحلل المتطلبات لتحديد الحل الأنسب لأعمالك." }, en:{ t:"Analyze Your Requirements", d:"We analyze requirements to define the right fit for your business." } },
  { icon:"icon-bulb", ar:{ t:"نقترح الحلول المثلى", d:"نقترح حلولاً تقنية متكاملة تناسب احتياجاتك وموازنتك." }, en:{ t:"Propose Optimal Solutions", d:"We propose integrated solutions that match your needs and budget." } },
  { icon:"icon-badge", ar:{ t:"ننفذ باحترافية", d:"ننفذ المشروع بمعايير احترافية وضمن الجدول الزمني المتفق عليه." }, en:{ t:"Execute Professionally", d:"We deliver the project to a professional standard, on schedule." } },
  { icon:"icon-headset", ar:{ t:"ندعمك باستمرار", d:"نستمر في دعمك فنياً لضمان استمرارية أعمالك بعد التسليم." }, en:{ t:"Provide Continuous Support", d:"We continue providing technical support after delivery." } }
];

var INDUSTRIES = [
  { icon:"icon-building", ar:"الحكومة", en:"Government" },
  { icon:"icon-book", ar:"التعليم", en:"Education" },
  { icon:"icon-heart", ar:"الرعاية الصحية", en:"Healthcare" },
  { icon:"icon-briefcase", ar:"الشركات والمؤسسات", en:"Companies & Institutions" },
  { icon:"icon-bank", ar:"القطاع المصرفي", en:"Banking" },
  { icon:"icon-cart", ar:"التجزئة والتجارة", en:"Retail & Trade" },
  { icon:"icon-users", ar:"القطاعات العامة", en:"Public Sectors" }
];

var BRANDS = ["dell","hp","lenovo","acer","samsung","sony","toshiba","canon","xerox","sharp","epson","konica"];

var COMMITMENTS = [
  { ar:"منتجات أصلية 100% من موردين معتمدين", en:"100% original products from authorized suppliers" },
  { ar:"جودة عالية ومعايير عالمية", en:"High quality and international standards" },
  { ar:"أسعار تنافسية وشفافة", en:"Competitive and transparent pricing" },
  { ar:"دعم فني متواصل", en:"Continuous technical support" },
  { ar:"ضمان على جميع المنتجات والخدمات", en:"Warranty on all products and services" },
  { ar:"سرية وأمان بيانات العملاء", en:"Customer data confidentiality and security" },
  { ar:"الالتزام بالمواعيد وتسليم المشاريع في الوقت المحدد", en:"Commitment to schedules and timely project delivery" }
];

var SERVICE_OPTIONS = [
  { ar:"الأمن السيبراني", en:"Cybersecurity" },
  { ar:"البرمجيات وإدارة الأعمال (ERP)", en:"Software & ERP" },
  { ar:"تصميم وتطوير المواقع", en:"Web Development" },
  { ar:"أجهزة الكمبيوتر والخوادم", en:"Computers & Servers" },
  { ar:"حلول الطباعة", en:"Printing Solutions" },
  { ar:"الحلول الذكية للاجتماعات", en:"Smart Meetings" },
  { ar:"الشبكات والاتصالات", en:"Networks & Communications" },
  { ar:"أخرى", en:"Other" }
];

/* ==========================================================================
   3. Language engine
   ========================================================================== */

var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var currentLang = localStorage.getItem("hgtl-lang") || "ar";

function t(key){ return (CONTENT[currentLang] && CONTENT[currentLang][key]) || key; }
function tt(item){ return item[currentLang]; }

var ARABIC_DIGITS = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
function localizeNum(n){
  var s = String(n);
  return currentLang === "ar" ? s.replace(/[0-9]/g, function(d){ return ARABIC_DIGITS[+d]; }) : s;
}

function applyStaticText(){
  document.querySelectorAll("[data-key]").forEach(function(el){
    var key = el.getAttribute("data-key");
    var val = CONTENT[currentLang][key];
    if (val !== undefined) el.textContent = val;
  });
  if (!isSubpage()){
    document.title = currentLang === "ar" ? "HGTL | حلول تقنية متكاملة للأعمال" : "HGTL | Integrated Technology Solutions";
  }
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc){
    metaDesc.setAttribute("content", currentLang === "ar"
      ? "HGTL تقدم حلولاً تقنية متكاملة تشمل الأمن السيبراني والبرمجيات والبنية التحتية والحلول الذكية والخوادم والدعم الفني في المملكة العربية السعودية."
      : "HGTL provides integrated technology solutions including cybersecurity, software, infrastructure, smart systems, servers, business solutions and technical support in Saudi Arabia.");
  }
}

function setLang(lang){
  currentLang = lang;
  localStorage.setItem("hgtl-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll(".lang-switch button").forEach(function(b){
    b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
  });

  applyStaticText();
  renderHardwareHeroVisual();
  renderHardwareCategories();
  renderNav();
  renderTrust();
  renderValues();
  renderSolutions();
  renderSolutionPanels();
  renderSolutionPage();
  renderRelatedSolutions();
  renderEcosystem();
  renderWhy();
  renderTimeline();
  renderIndustries();
  renderBrands();
  renderCommitments();
  renderContactInfo();
  renderServiceOptions();
  renderFooterLists();
}

/* ==========================================================================
   4. Renderers
   ========================================================================== */

/* All dedicated solution pages live one level down, in /solutions/, so
   links back into the homepage need a "../" prefix while links to a
   sibling solution page (solutionHref) don't need any prefix at all. */
var SUBPAGE_CLASSES = ["page-hardware", "page-cyber", "page-software", "page-web"];
function isSubpage(){ return SUBPAGE_CLASSES.some(function(c){ return document.body.classList.contains(c); }); }
function pageHref(href){ return (href.charAt(0) === "#" && isSubpage()) ? "../index.html" + href : href; }
function solutionHref(filename){ return isSubpage() ? filename : "solutions/" + filename; }
function currentPageSolutionKey(){
  for (var i = 0; i < SUBPAGE_CLASSES.length; i++){
    var c = SUBPAGE_CLASSES[i];
    if (document.body.classList.contains(c)) return c.replace("page-", "");
  }
  return null;
}

function iconSvg(id, cls){
  return '<svg class="icon' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><use href="#' + id + '"></use></svg>';
}

function renderNav(){
  var lists = document.querySelectorAll("#mainNav ul, #drawerNav ul");
  var html = NAV_ITEMS.map(function(item){
    var href = item.isPage ? solutionHref(item.href) : pageHref(item.href);
    return '<li><a href="' + href + '">' + tt(item) + "</a></li>";
  }).join("");
  lists.forEach(function(ul){ ul.innerHTML = html; });
}

function renderTrust(){
  var el = document.getElementById("trustTrack");
  if (!el) return;
  el.innerHTML = TRUST_ITEMS.map(function(item, i){
    return (i > 0 ? '<span class="dot"></span>' : "") + "<span>" + tt(item) + "</span>";
  }).join("");
}

function renderValues(){
  var el = document.getElementById("valuesRail");
  if (!el) return;
  el.innerHTML = VALUES.map(function(v){
    return '<span class="value-chip"><span class="num">' + localizeNum(v.num) + "</span>" + tt(v) + "</span>";
  }).join("");
}

function renderSolutions(){
  var el = document.getElementById("solutionsGrid");
  if (!el) return;
  el.innerHTML = SOLUTIONS.map(function(s){
    var c = s[currentLang];

    if (s.isLink){
      var chips = (c.chips || []).map(function(chip){ return '<span class="hw-chip">' + chip + "</span>"; }).join("");
      var visual = buildRadialSvg({
        size:200, coreR:26, nodeR:20, orbit:72, nodes:HARDWARE_ECO_NODES, lang:null, idPrefix:"hwcard-" + s.tag,
        lineColor:"#1fc8ff", pulseColor:"#1fc8ff", nodeFill:"#0a2247", nodeStroke:"rgba(199,205,217,0.3)",
        iconColor:"#6fd8ff", coreFill:"#0b7fff", coreText:"#ffffff", labelOffset:0
      });
      return (
        '<a class="sol-card sol-card--hardware size-' + s.size + '" href="#solution-' + s.key + '" aria-label="' + c.title + '">' +
          '<div class="hw-card-content">' +
            '<span class="sol-card-tag">' + localizeNum(s.tag) + "</span>" +
            '<div class="sol-icon">' + iconSvg(s.icon) + "</div>" +
            "<h3>" + c.title + "</h3>" +
            '<p class="sol-desc">' + c.desc + "</p>" +
            '<div class="hw-chip-row">' + chips + "</div>" +
            '<span class="hw-cta"><span>' + c.cta + "</span>" + iconSvg("icon-arrow", "sol-card-arrow") + "</span>" +
          "</div>" +
          '<div class="hw-card-visual">' + visual + "</div>" +
        "</a>"
      );
    }

    var list = c.list.length ? '<ul class="sol-list">' + c.list.map(function(li){
      return "<li>" + iconSvg("icon-check") + "<span>" + li + "</span></li>";
    }).join("") + "</ul>" : "";
    var cta = s.href ? '<span class="hw-cta"><span>' + (c.cta || (currentLang === "ar" ? "اكتشف المزيد" : "Discover More")) + "</span>" + iconSvg("icon-arrow", "sol-card-arrow") + "</span>" : "";
    var tag = s.href ? "a" : "article";
    var hrefAttr = s.href ? ' href="#solution-' + s.key + '"' : "";
    return (
      "<" + tag + ' class="sol-card size-' + s.size + '"' + hrefAttr + ">" +
        '<span class="sol-card-tag">' + localizeNum(s.tag) + "</span>" +
        '<div class="sol-icon">' + iconSvg(s.icon) + "</div>" +
        "<h3>" + c.title + "</h3>" +
        '<p class="sol-desc">' + c.desc + "</p>" +
        list +
        cta +
      "</" + tag + ">"
    );
  }).join("");
}

/* Fills the four inline solution panels on the homepage (#solution-cyber,
   #solution-software, #solution-web, #solution-hardware) — each a full
   section living directly in the "حلولنا" page, not a separate route. */
function renderSolutionPanels(){
  SOLUTIONS.forEach(function(s){
    var c = s[currentLang];

    var tagEl = document.getElementById("solutionPanelTag-" + s.key);
    if (tagEl) tagEl.textContent = localizeNum(s.tag);

    var titleEl = document.getElementById("solutionPanelTitle-" + s.key);
    if (titleEl) titleEl.textContent = c.title;

    var descEl = document.getElementById("solutionPanelDesc-" + s.key);
    if (descEl) descEl.textContent = c.desc;

    var featuresEl = document.getElementById("solutionPanelFeatures-" + s.key);
    if (featuresEl){
      var features = (c.list && c.list.length) ? c.list : (c.chips || []);
      featuresEl.innerHTML = features.map(function(li){
        return "<li>" + iconSvg("icon-check") + "<span>" + li + "</span></li>";
      }).join("");
    }

    ["computers", "accessories"].forEach(function(group){
      var groupEl = document.getElementById("solutionPanel" + group.charAt(0).toUpperCase() + group.slice(1) + "-" + s.key);
      if (groupEl && c[group]){
        groupEl.innerHTML = c[group].map(function(item){
          return '<span class="hw-chip">' + item + "</span>";
        }).join("");
      }
    });
  });
}

function renderSolutionPage(){
  var key = currentPageSolutionKey();
  var data = key && SOLUTION_PAGE_DATA[key];
  if (!data) return;
  var sol = SOLUTIONS.filter(function(s){ return s.key === key; })[0];
  if (!sol) return;
  var c = sol[currentLang];

  var crumb = document.getElementById("solBreadcrumbCurrent");
  if (crumb) crumb.textContent = c.title;

  var titleEl = document.getElementById("solHeroTitle");
  if (titleEl) titleEl.textContent = c.title;

  var ledeEl = document.getElementById("solHeroLede");
  if (ledeEl) ledeEl.textContent = c.desc;

  var visualEl = document.getElementById("solHeroVisual");
  if (visualEl){
    visualEl.innerHTML = buildRadialSvg({
      size:500, coreR:46, nodeR:34, orbit:190, nodes:data.nodes, lang:currentLang, idPrefix:"solhero-" + key,
      lineColor:"#1fc8ff", pulseColor:"#1fc8ff", nodeFill:"#0a2247", nodeStroke:"rgba(199,205,217,0.3)",
      iconColor:"#6fd8ff", coreFill:"#0b7fff", coreText:"#ffffff", labelOffset:0
    });
  }

  var featuresEl = document.getElementById("solFeatures");
  if (featuresEl){
    featuresEl.innerHTML = c.list.map(function(li){
      return '<div class="commit-item"><span class="commit-check">' + iconSvg("icon-check") + "</span><p>" + li + "</p></div>";
    }).join("");
  }

  var outcomesEl = document.getElementById("solOutcomes");
  if (outcomesEl){
    outcomesEl.innerHTML = data.outcomes.map(function(o){
      return '<div class="outcome-card"><span class="outcome-icon">' + iconSvg("icon-check") + "</span><p>" + tt(o) + "</p></div>";
    }).join("");
  }
}

function renderRelatedSolutions(){
  var el = document.getElementById("solRelated");
  if (!el) return;
  var key = currentPageSolutionKey();
  var others = SOLUTIONS.filter(function(s){ return s.key !== key; }).slice(0, 3);
  el.innerHTML = others.map(function(s){
    var c = s[currentLang];
    return (
      '<a class="related-card" href="' + solutionHref(s.href) + '">' +
        '<div class="sol-icon">' + iconSvg(s.icon) + "</div>" +
        '<div class="related-card-body">' +
          "<h3>" + c.title + "</h3>" +
          "<span>" + (currentLang === "ar" ? "عرض التفاصيل" : "View Details") + iconSvg("icon-arrow") + "</span>" +
        "</div>" +
      "</a>"
    );
  }).join("");
}

function polarPoint(cx, cy, r, angleDeg){
  var a = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function buildRadialSvg(opts){
  var size = opts.size, cx = size/2, cy = size/2;
  var coreR = opts.coreR, nodeR = opts.nodeR, orbit = opts.orbit;
  var nodes = opts.nodes;
  var n = nodes.length;
  var paths = [], nodeGroups = [], pulses = [];

  nodes.forEach(function(node, i){
    var angle = (360 / n) * i;
    var p = polarPoint(cx, cy, orbit, angle);
    var pathId = opts.idPrefix + "-path-" + i;

    paths.push('<path id="' + pathId + '" class="eco-path" d="M' + cx + ',' + cy + ' L' + p.x.toFixed(1) + ',' + p.y.toFixed(1) + '" stroke="' + opts.lineColor + '" stroke-width="1.4" stroke-opacity="0.55" fill="none"/>');

    if (!reducedMotion){
      pulses.push('<circle r="2.6" fill="' + opts.pulseColor + '"><animateMotion dur="' + (3 + (i % 3)) + 's" repeatCount="indefinite" path="M' + cx + ',' + cy + ' L' + p.x.toFixed(1) + ',' + p.y.toFixed(1) + '"/></circle>');
    }

    var label = node[opts.lang] ? '<text x="' + p.x.toFixed(1) + '" y="' + (p.y + nodeR + opts.labelOffset).toFixed(1) + '" text-anchor="middle" class="eco-node-label" font-family="inherit">' + node[opts.lang] + "</text>" : "";

    nodeGroups.push(
      '<g transform="translate(' + p.x.toFixed(1) + "," + p.y.toFixed(1) + ')">' +
        '<circle r="' + nodeR + '" fill="' + opts.nodeFill + '" stroke="' + opts.nodeStroke + '"/>' +
        '<g transform="translate(' + (-nodeR*0.46) + "," + (-nodeR*0.46) + ') scale(' + (nodeR*0.92/24) + ')">' +
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="' + opts.iconColor + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><use href="#' + node.icon + '"></use></svg>' +
        "</g>" +
      "</g>" + label
    );
  });

  var core =
    '<g>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + (coreR+18) + '" fill="none" stroke="' + opts.lineColor + '" stroke-opacity="0.25" stroke-dasharray="2 8"/>' +
      '<rect x="' + (cx-coreR) + '" y="' + (cy-coreR) + '" width="' + (coreR*2) + '" height="' + (coreR*2) + '" rx="14" fill="' + opts.coreFill + '" stroke="' + opts.pulseColor + '" stroke-opacity="0.6" transform="rotate(45 ' + cx + ' ' + cy + ')"/>' +
      '<text x="' + cx + '" y="' + (cy+5) + '" text-anchor="middle" font-size="' + (size*0.034) + '" font-weight="700" fill="' + opts.coreText + '" font-family="Inter, sans-serif" letter-spacing="1">HGTL</text>' +
    "</g>";

  return '<svg viewBox="0 0 ' + size + ' ' + size + '" fill="none" role="img" aria-hidden="true">' + paths.join("") + core + nodeGroups.join("") + pulses.join("") + "</svg>";
}

function renderHardwareHeroVisual(){
  var el = document.getElementById("hardwareHeroVisual");
  if (!el) return;
  el.innerHTML = buildRadialSvg({
    size:500, coreR:46, nodeR:34, orbit:190, nodes:HARDWARE_ECO_NODES, lang:currentLang, idPrefix:"hwhero",
    lineColor:"#1fc8ff", pulseColor:"#1fc8ff", nodeFill:"#0a2247", nodeStroke:"rgba(199,205,217,0.3)",
    iconColor:"#6fd8ff", coreFill:"#0b7fff", coreText:"#ffffff", labelOffset:0
  });
}

function renderHardwareCategories(){
  var el = document.getElementById("hardwareCategoryGrid");
  if (!el) return;
  el.innerHTML = HARDWARE_CATEGORIES.map(function(cat){
    var c = cat[currentLang];
    var list = c.list.length ? '<ul class="sol-list">' + c.list.map(function(li){
      return "<li>" + iconSvg("icon-check") + "<span>" + li + "</span></li>";
    }).join("") + "</ul>" : "";
    return (
      '<article class="sol-card size-' + (cat.size || "m") + '">' +
        '<span class="sol-card-tag">' + localizeNum(cat.tag) + "</span>" +
        '<div class="sol-icon">' + iconSvg(cat.icon) + "</div>" +
        "<h3>" + c.title + "</h3>" +
        '<p class="sol-desc">' + c.desc + "</p>" +
        list +
      "</article>"
    );
  }).join("");
}

function renderEcosystem(){
  var el = document.getElementById("ecosystemVisual");
  if (!el) return;
  el.innerHTML = buildRadialSvg({
    size:640, coreR:52, nodeR:34, orbit:255, nodes:ECOSYSTEM_NODES, lang:currentLang, idPrefix:"eco",
    lineColor:"#1fc8ff", pulseColor:"#1fc8ff", nodeFill:"#0a2247", nodeStroke:"rgba(199,205,217,0.3)",
    iconColor:"#6fd8ff", coreFill:"#0b7fff", coreText:"#ffffff", labelOffset:20
  });
}

function renderWhy(){
  var listEl = document.getElementById("whyList");
  var markersEl = document.getElementById("whyMarkers");
  if (!listEl) return;

  listEl.innerHTML = WHY_ITEMS.map(function(w, i){
    var c = w[currentLang];
    return (
      '<div class="why-item' + (i === 0 ? " is-active" : "") + '" data-index="' + i + '" tabindex="0">' +
        '<span class="why-num">' + localizeNum(w.num) + "</span>" +
        "<div><h3>" + c.t + "</h3><p>" + c.d + "</p></div>" +
      "</div>"
    );
  }).join("");

  if (markersEl){
    var n = WHY_ITEMS.length, r = 168, cx = 200, cy = 200;
    markersEl.innerHTML = WHY_ITEMS.map(function(w, i){
      var p = polarPoint(cx, cy, r, (360/n)*i);
      return '<circle class="why-marker' + (i === 0 ? " is-active" : "") + '" data-index="' + i + '" cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="7" fill="#0a2247" stroke="#0b7fff"/>';
    }).join("");
  }

  var items = listEl.querySelectorAll(".why-item");
  function activate(idx){
    items.forEach(function(el){ el.classList.toggle("is-active", Number(el.getAttribute("data-index")) === idx); });
    if (markersEl){
      markersEl.querySelectorAll(".why-marker").forEach(function(m){
        m.classList.toggle("is-active", Number(m.getAttribute("data-index")) === idx);
      });
    }
  }
  items.forEach(function(el){
    el.addEventListener("mouseenter", function(){ activate(Number(el.getAttribute("data-index"))); });
    el.addEventListener("focus", function(){ activate(Number(el.getAttribute("data-index"))); });
    el.addEventListener("click", function(){ activate(Number(el.getAttribute("data-index"))); });
  });
}

var timelineObserver;
function renderTimeline(){
  var el = document.getElementById("timelineSteps");
  if (!el) return;
  el.innerHTML = TIMELINE_STEPS.map(function(step, i){
    var c = step[currentLang];
    return (
      '<div class="tl-step" data-index="' + i + '">' +
        '<div class="tl-node"></div>' +
        '<div class="tl-icon">' + iconSvg(step.icon) + "</div>" +
        '<div class="tl-index">' + localizeNum("0" + (i+1)) + "</div>" +
        "<h3>" + c.t + "</h3>" +
        "<p>" + c.d + "</p>" +
      "</div>"
    );
  }).join("");

  if (timelineObserver) timelineObserver.disconnect();
  var steps = el.querySelectorAll(".tl-step");
  var fill = document.getElementById("timelineFill");
  timelineObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        var idx = Number(entry.target.getAttribute("data-index"));
        entry.target.classList.add("is-active");
        if (fill) fill.style.width = (((idx+1)/steps.length)*100) + "%";
      }
    });
  }, { threshold:0.6, rootMargin:"0px 0px -10% 0px" });
  steps.forEach(function(s){ timelineObserver.observe(s); });
}

function renderIndustries(){
  var el = document.getElementById("industryGrid");
  if (!el) return;
  el.innerHTML = INDUSTRIES.map(function(ind, i){
    return (
      '<div class="industry-card">' +
        '<div class="industry-icon">' + iconSvg(ind.icon) + "</div>" +
        '<div><span class="industry-index">' + localizeNum("0" + (i+1)) + '</span><h3>' + tt(ind) + "</h3></div>" +
      "</div>"
    );
  }).join("");
}

function renderBrands(){
  var el = document.getElementById("brandGrid");
  if (!el) return;
  el.innerHTML = BRANDS.map(function(b){
    var name = b.charAt(0).toUpperCase() + b.slice(1);
    return '<div class="brand-tile"><img src="assets/images/brands/' + b + '.png" alt="' + name + '" loading="lazy" width="140" height="50"></div>';
  }).join("");
}

function renderCommitments(){
  var el = document.getElementById("commitGrid");
  if (!el) return;
  el.innerHTML = COMMITMENTS.map(function(c){
    return (
      '<div class="commit-item">' +
        '<span class="commit-check">' + iconSvg("icon-check") + "</span>" +
        "<p>" + tt(c) + "</p>" +
      "</div>"
    );
  }).join("");
}

function renderContactInfo(){
  var el = document.getElementById("contactInfo");
  if (!el) return;
  var rows = [
    { icon:"icon-pin", labelAr:"الموقع", labelEn:"Location", value: t("contact.location"), href:null },
    { icon:"icon-phone", labelAr:"الجوال", labelEn:"Phone", value:"+966 59 513 9331", href:"tel:+966595139331" },
    { icon:"icon-mail", labelAr:"البريد الإلكتروني", labelEn:"Email", value:"h.masa@hgtl.org", href:"mailto:h.masa@hgtl.org" },
    { icon:"icon-globe", labelAr:"الموقع الإلكتروني", labelEn:"Website", value:"wwwhgtl.netlify.app", href:"https://wwwhgtl.netlify.app/" }
  ];
  el.innerHTML = rows.map(function(r){
    var label = currentLang === "ar" ? r.labelAr : r.labelEn;
    var inner = '<span class="contact-row-icon">' + iconSvg(r.icon) + '</span><span><span class="contact-row-label">' + label + '</span><span class="contact-row-value">' + r.value + "</span></span>";
    return r.href
      ? '<a class="contact-row is-link" href="' + r.href + '"' + (r.href.indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "") + ">" + inner + "</a>"
      : '<div class="contact-row">' + inner + "</div>";
  }).join("") + '<div class="contact-meta"><span>CR: 7054587196</span><span>VAT: 3148524721</span></div>';
}

function renderServiceOptions(){
  var el = document.getElementById("fldService");
  if (!el) return;
  var placeholder = currentLang === "ar" ? "اختر الخدمة المطلوبة" : "Select a service";
  el.innerHTML = '<option value="" disabled selected>' + placeholder + "</option>" +
    SERVICE_OPTIONS.map(function(o){ return "<option>" + tt(o) + "</option>"; }).join("");
}

function renderFooterLists(){
  var navEl = document.getElementById("footerNav");
  var solEl = document.getElementById("footerSolutions");
  if (navEl){
    navEl.innerHTML = NAV_ITEMS.map(function(item){ return '<li><a href="' + pageHref(item.href) + '">' + tt(item) + "</a></li>"; }).join("");
  }
  if (solEl){
    solEl.innerHTML = SOLUTIONS.map(function(s){
      var href = s.href ? solutionHref(s.href) : pageHref("#solutions");
      return '<li><a href="' + href + '">' + s[currentLang].title + "</a></li>";
    }).join("");
  }
}

/* ==========================================================================
   5. Header, drawer, reveal, lang switch wiring
   ========================================================================== */

function initHeaderScroll(){
  var header = document.getElementById("siteHeader");
  if (!header) return;
  function update(){ header.classList.toggle("is-scrolled", window.scrollY > 24); }
  update();
  window.addEventListener("scroll", update, { passive:true });
}

function initDrawer(){
  var drawer = document.getElementById("navDrawer");
  var toggle = document.getElementById("navToggle");
  var closeBtn = document.getElementById("navDrawerClose");
  if (!drawer || !toggle) return;

  function open(){ drawer.classList.add("is-open"); toggle.setAttribute("aria-expanded","true"); document.body.style.overflow = "hidden"; }
  function close(){ drawer.classList.remove("is-open"); toggle.setAttribute("aria-expanded","false"); document.body.style.overflow = ""; }

  toggle.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  drawer.querySelectorAll("[data-drawer-close]").forEach(function(el){ el.addEventListener("click", close); });
  drawer.addEventListener("click", function(e){
    if (e.target.tagName === "A") close();
  });
  window.addEventListener("keydown", function(e){ if (e.key === "Escape") close(); });
}

function initLangSwitch(){
  document.querySelectorAll(".lang-switch button").forEach(function(btn){
    btn.addEventListener("click", function(){ setLang(btn.getAttribute("data-lang")); });
  });
}

function initReveal(){
  var targets = document.querySelectorAll(".reveal, .reveal-stagger");
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold:0.16 });
  targets.forEach(function(el){ observer.observe(el); });
}

function initContactForm(){
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", function(e){
    e.preventDefault();
    if (!form.checkValidity()){
      form.reportValidity();
      return;
    }
    var data = new FormData(form);
    var labels = currentLang === "ar"
      ? { name:"الاسم", company:"الشركة", phone:"الجوال", email:"البريد", service:"الخدمة", message:"الرسالة" }
      : { name:"Name", company:"Company", phone:"Phone", email:"Email", service:"Service", message:"Message" };

    var subject = (currentLang === "ar" ? "طلب استشارة تقنية — " : "Technology Consultation Request — ") + data.get("name");
    var body = [
      labels.name + ": " + data.get("name"),
      labels.company + ": " + (data.get("company") || "-"),
      labels.phone + ": " + data.get("phone"),
      labels.email + ": " + data.get("email"),
      labels.service + ": " + data.get("service"),
      "",
      labels.message + ":",
      data.get("message")
    ].join("\n");

    var mailto = "mailto:h.masa@hgtl.org?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    if (status){
      status.textContent = currentLang === "ar" ? "جارٍ فتح برنامج البريد الإلكتروني..." : "Opening your email client...";
      status.classList.remove("is-error");
      status.classList.add("is-success");
    }
    window.location.href = mailto;
  });
}

/* ==========================================================================
   Init
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function(){
  setLang(currentLang);
  initHeaderScroll();
  initDrawer();
  initLangSwitch();
  initReveal();
  initContactForm();
});

})();

