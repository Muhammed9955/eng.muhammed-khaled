export interface Course {
  id: string;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  image: string;
  badge?: { en: string; ar: string };
  duration: { en: string; ar: string };
  targetAudience: { en: string; ar: string };
  longDesc: { en: string; ar: string };
  outcomes: { en: string[]; ar: string[] };
  syllabus: { 
    en: { title: string; desc: string }[]; 
    ar: { title: string; desc: string }[] 
  };
  originalPrice: string;
  discountedPrice: string;
  priceCurrency: string;
  whatsappMessage: { en: string; ar: string };
}

export const coursesData: Course[] = [
  {
    id: "intro-to-web-dev",
    title: {
      en: "Introduction to Web Development",
      ar: "اساسيات تطوير الويب من الصفر إلى الاحتراف"
    },
    desc: {
      en: "Learn to build modern, responsive web applications with HTML5, CSS3, JavaScript, Tailwind CSS, and React.js from scratch.",
      ar: "تعلم بناء مواقع وتطبيقات ويب حديثة وسريعة الاستجابة بأحدث التقنيات المطلوبة في سوق العمل (HTML, CSS, JS, Tailwind, React)."
    },
    image: "/course-flyer.png",
    badge: {
      en: "50% OFF - New Batch",
      ar: "خصم 50% لأول دفعة"
    },
    duration: {
      en: "8 comprehensive sessions",
      ar: "مدة الكورس: 8 حصص مكثفة"
    },
    targetAudience: {
      en: "Absolute beginners, students, career switchers, and aspiring front-end developers.",
      ar: "مناسب للمبتدئين تماماً بدون أي خبرة برمجية سابقة أو للراغبين في تعلم البرمجة بشكل صحيح."
    },
    longDesc: {
      en: "A comprehensive bootcamp designed to take you from absolute zero to building responsive user interfaces and full web applications using industry-standard tools like React and Tailwind CSS. The course is fully practical, ensuring you build projects and compose your own professional developer portfolio.",
      ar: "كورس شامل وتطبيقي مصمم خصيصاً ليأخذك من الصفر تماماً خطوة بخطوة إلى بناء واجهات مستخدم وتطبيقات ويب كاملة متجاوبة باستخدام أحدث التقنيات، مع التركيز على التطبيق العملي والمتابعة الشخصية وبناء مشروع تخرج متكامل لمعرض أعمالك."
    },
    originalPrice: "4000",
    discountedPrice: "2000",
    priceCurrency: "EGP",
    whatsappMessage: {
      en: "Hello Eng. Muhammed, I would like to reserve a spot in the Web Development Course!",
      ar: "مرحباً م. محمد، أريد التسجيل في كورس تطوير الويب الشامل والبدء بالدفعة الأولى!"
    },
    outcomes: {
      en: [
        "Create responsive, clean, and interactive websites",
        "Build modern user interfaces using React.js",
        "Construct a professional Portfolio to present to employers",
        "Apply for junior Frontend Developer roles and internships",
        "Start freelancing and bidding on international web projects"
      ],
      ar: [
        "إنشاء مواقع ويب احترافية ومتجاوبة مع مختلف الشاشات والأجهزة.",
        "بناء واجهات مستخدم حديثة وتفاعلية باستخدام مكتبة React.js.",
        "إنشاء معرض أعمال (Portfolio) احترافي لعرض مشروعاتك البرمجية.",
        "التقديم على فرص تدريب ووظائف مطور واجهات أمامية (Frontend Developer).",
        "العمل الحر (Freelancing) وبدء تقديم خدماتك لعملاء دوليين وجني الأرباح."
      ]
    },
    syllabus: {
      en: [
        {
          title: "HTML5 Structure",
          desc: "Learn to build semantic, accessible, and correctly structured web documents."
        },
        {
          title: "CSS3 & Styling",
          desc: "Master layout techniques (Flexbox, Grid), animations, and responsive layouts."
        },
        {
          title: "JavaScript Core",
          desc: "Inject interactivity, DOM manipulation, functional program logic, and API calls."
        },
        {
          title: "Tailwind CSS Layouts",
          desc: "Rapidly style modern web applications with utility-first layouts and responsive states."
        },
        {
          title: "React.js Framework",
          desc: "Build highly responsive component-based UIs, handle states, and route pages like a pro."
        },
        {
          title: "Real-World Projects",
          desc: "Build hands-on production websites and compile your portfolio from scratch."
        }
      ],
      ar: [
        {
          title: "هيكلة صفحات الويب HTML5",
          desc: "هيكلة وتصميم صفحات الويب بشكل قياسي، متوافق مع معايير الـ SEO وسهولة الوصول."
        },
        {
          title: "تصميم واجهات احترافية CSS3",
          desc: "احتراف التنسيق، التجاوب مع جميع الأجهزة (Flexbox, Grid), والمؤثرات البصرية الحديثة."
        },
        {
          title: "أساسيات لغة JavaScript",
          desc: "إضافة التفاعل والحركة وبناء منطق برمجي قوي والتعامل مع البيانات والـ APIs."
        },
        {
          title: "تصميم عصري باستخدام Tailwind CSS",
          desc: "بناء واجهات عصرية وجذابة بسرعة فائقة باستخدام إطار العمل الأكثر طلباً."
        },
        {
          title: "برمجة تطبيقات الويب React.js",
          desc: "بناء تطبيقات تفاعلية أحادية الصفحة (SPA)، وإدارة الحالات (State) والمكونات البرمجية."
        },
        {
          title: "مشاريع عملية متكاملة",
          desc: "التطبيق العملي على مشاريع حقيقية من البداية حتى النهاية لبناء معرض أعمالك الخاص."
        }
      ]
    }
  },
  {
    id: "react-native-dev",
    title: {
      en: "Mobile App Development with React Native",
      ar: "تطوير تطبيقات الموبايل باستخدام React Native"
    },
    desc: {
      en: "Build high-performance, native iOS and Android applications from a single JavaScript/TypeScript codebase.",
      ar: "تعلم بناء تطبيقات هاتف ذكي احترافية وحقيقية لنظامي iOS و Android باستخدام كود برمجى موحد مع React Native."
    },
    image: "/sehapracto_screenshot.png",
    badge: {
      en: "New Launch",
      ar: "انطلاقة جديدة"
    },
    duration: {
      en: "10 interactive sessions",
      ar: "مدة الكورس: 10 حصص تفاعلية"
    },
    targetAudience: {
      en: "JavaScript developers, students, and front-end engineers looking to expand into mobile.",
      ar: "لمطوري الويب الراغبين في دخول مجال برمجة الهواتف الذكية وبناء تطبيقات سريعة وعالية الأداء."
    },
    longDesc: {
      en: "An intensive mobile bootcamp teaching Expo, React Native CLI, structural layouts, state management with Redux/Zustand, native device APIs, push notifications, and deploying apps to the App Store and Google Play.",
      ar: "كورس مكثف وعملي لتطوير تطبيقات الهواتف باستخدام بيئة عمل Expo و React Native. ستتعلم إدارة الحالات باستخدام Zustand/Redux، وربط مستشعرات الهاتف، وإرسال الإشعارات، ورفع التطبيقات للمتاجر الرسمية."
    },
    originalPrice: "5000",
    discountedPrice: "2500",
    priceCurrency: "EGP",
    whatsappMessage: {
      en: "Hello Eng. Muhammed, I would like to reserve a spot in the React Native Mobile Course!",
      ar: "مرحباً م. محمد، أريد التسجيل في كورس تطوير تطبيقات الهاتف React Native!"
    },
    outcomes: {
      en: [
        "Build and deploy native iOS & Android applications",
        "Master responsive design layouts across mobile viewports",
        "Integrate camera, location, and storage hardware features",
        "Implement secure offline state management and storage",
        "Launch applications on Apple App Store & Google Play Store"
      ],
      ar: [
        "برمجة وبناء تطبيقات حقيقية للأندرويد والأيفون بشكل متزامن.",
        "التعامل مع تصميمات الواجهات المتجاوبة مع مختلف مقاسات الهواتف.",
        "الربط مع مستشعرات الهاتف مثل الكاميرا، تحديد الموقع، والتخزين المحلي.",
        "بناء نظام إشعارات (Push Notifications) تفاعلي.",
        "تهيئة ورفع التطبيقات للمتاجر الرسمية Google Play و App Store."
      ]
    },
    syllabus: {
      en: [
        {
          title: "React Native Core & Expo Setup",
          desc: "Understand CLI vs Expo, directory structures, and native emulation styling."
        },
        {
          title: "Navigation Architecture",
          desc: "Implement Tabs, Drawers, Stack navigators, and deep link configurations."
        },
        {
          title: "Device APIs & Components",
          desc: "Utilize device location, storage, camera controls, and native permissions."
        },
        {
          title: "Global State Management",
          desc: "Manage synchronous API states and persistent memory stores using Zustand."
        },
        {
          title: "App Stores & Publishing",
          desc: "Manage certificate flows, configure app icons, bundle binaries, and submit build reviews."
        }
      ],
      ar: [
        {
          title: "أساسيات React Native وتجهيز البيئة",
          desc: "الفرق بين Expo و CLI، إعداد محاكيات الهواتف، وبناء أول واجهة مستخدم."
        },
        {
          title: "نظام التنقل وحركة الصفحات Navigation",
          desc: "بناء أنظمة التنقل المعقدة (Stack Navigation, Tabs, Drawer Navigation)."
        },
        {
          title: "التعامل مع ميزات الهاتف الأساسية Device APIs",
          desc: "استخدام الكاميرا، حساسات الموقع GPS، والتخزين المحلي المباشر."
        },
        {
          title: "إدارة الحالات المعقدة وسرعة الاستجابة",
          desc: "استخدام Zustand أو Redux لإدارة البيانات بكفاءة عبر شاشات التطبيق."
        },
        {
          title: "تجهيز ورفع التطبيق للمتاجر الرسمية",
          desc: "تصدير الملفات بصيغة AAB و IPA، وتهيئة التطبيق على منصات المطورين للنشر."
        }
      ]
    }
  },
  {
    id: "fullstack-next-nest",
    title: {
      en: "Advanced Full-Stack with Next.js & Nest.js",
      ar: "كورس الويب المتكامل Next.js & Nest.js"
    },
    desc: {
      en: "Master enterprise web architectures. Build SEO-optimized Next.js frontends and secure Nest.js API backends.",
      ar: "احترف بناء الأنظمة السحابية المتكاملة. واجهات مستخدم فائقة السرعة بـ Next.js وخلفية برمجية آمنة وقوية بـ Nest.js."
    },
    image: "/kitchens_screenshot.png",
    badge: {
      en: "Advanced Bootcamp",
      ar: "مستوى متقدم"
    },
    duration: {
      en: "12 detailed sessions",
      ar: "مدة الكورس: 12 حصة تفصيلية"
    },
    targetAudience: {
      en: "React developers, backend enthusiasts, and developers aiming for Senior Full-Stack roles.",
      ar: "لمطوري الويب الساعين لاحتراف كتابة الكود الخلفي وقواعد البيانات وتطوير تطبيقات كاملة وآمنة."
    },
    longDesc: {
      en: "Build real enterprise grade apps. Cover SSR/ISR architectures in Next.js 16, dependency injection in Nest.js, PostgreSQL relational design, Prisma ORM, Redis caching, microservices, and Docker containers.",
      ar: "تعلم بناء تطبيقات ويب حقيقية بمقاييس الشركات الكبرى. يغطي الكورس ميزات Next.js المتقدمة، وهيكلية Nest.js القوية، وقواعد بيانات PostgreSQL مع Prisma ORM، ونظام الحماية JWT والتعامل مع Docker."
    },
    originalPrice: "6000",
    discountedPrice: "3500",
    priceCurrency: "EGP",
    whatsappMessage: {
      en: "Hello Eng. Muhammed, I would like to reserve a spot in the Advanced Fullstack Course!",
      ar: "مرحباً م. محمد، أريد التسجيل في كورس الويب المتكامل Next.js & Nest.js!"
    },
    outcomes: {
      en: [
        "Architect clean scalable Node/Nest backend REST APIs",
        "Implement enterprise authentication with JWT, cookies, and OAuth",
        "Design relational database schemas with PostgreSQL and Prisma",
        "Containerize fullstack applications using Docker",
        "Configure caching layers with Redis and host on AWS/VPS"
      ],
      ar: [
        "بناء واجهات برمجية REST APIs مرنة وقابلة للتوسع باستخدام Nest.js.",
        "تصميم وتطبيق أنظمة الحماية والصلاحيات المعقدة والـ JWT.",
        "تصميم وإدارة قواعد البيانات العلاقية PostgreSQL باستخدام Prisma ORM.",
        "بناء حاويات التطوير والتشغيل باستخدام Docker.",
        "استخدام Redis لتسريع الاستجابة والتعامل مع خوادم السحابية VPS."
      ]
    },
    syllabus: {
      en: [
        {
          title: "Next.js Server Actions & SSR",
          desc: "Leverage Server Components, rendering performance optimization, and caching."
        },
        {
          title: "Nest.js Modular Architecture",
          desc: "Master dependency injection, controllers, providers, modules, and guards."
        },
        {
          title: "Database Modeling with Prisma",
          desc: "Design relational PostgreSQL schemas, optimize query lookups, and handle transactions."
        },
        {
          title: "Authentication & Security",
          desc: "Establish cookie-based authentication, JWT signatures, role privileges, and helmet configs."
        },
        {
          title: "Docker Containerization & CI/CD",
          desc: "Build dockerfiles, define multi-stage environments, and configure server deploy pipelines."
        }
      ],
      ar: [
        {
          title: "ميزات Next.js المتقدمة والمخدم Server Actions",
          desc: "تطوير واجهات فائقة السرعة مع تهيئة محركات البحث وكود يعمل على الخادم مباشرة."
        },
        {
          title: "هيكلية Nest.js ونظام حقن الاعتماديات",
          desc: "فهم الوحدات Modules، المتحكمات Controllers، والخدمات Services وكتابة كود منظم."
        },
        {
          title: "تصميم قواعد البيانات مع Prisma ORM",
          desc: "بناء الجداول، العلاقات المعقدة، وربطها بقاعدة بيانات PostgreSQL السحابية."
        },
        {
          title: "الحماية والتوثيق والتحقق من الصلاحيات",
          desc: "إنشاء نظام حماية متكامل للبيانات، وجلسات تسجيل الدخول المشفرة والـ Auth Middleware."
        },
        {
          title: "حاويات Docker ونشر التطبيق على الخادم",
          desc: "إنشاء حاويات معزولة للتطبيق وقاعدة البيانات، ورفعها على خوادم VPS وتشغيلها."
        }
      ]
    }
  }
];
