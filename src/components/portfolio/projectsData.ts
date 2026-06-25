export interface Project {
  id: string;
  name: { en: string; ar: string };
  desc: { en: string; ar: string };
  image: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "al-dyar",
    name: {
      en: "Al Dyar Design & Construction",
      ar: "شركة الديار للتصميم الهندسي والتشطيبات"
    },
    desc: {
      en: "Developed an elegant, high-end portfolio site for Al Dyar, a premier interior design and construction firm. Includes categories showcase for apartments, villas, and showrooms, interactive material selection galleries, and budget estimations request forms.",
      ar: "قمت بتطوير موقع تعريفي ومعرض أعمال راقي لشركة الديار للتصميم والتشطيبات الفاخرة. يحتوي الموقع على تصنيفات مخصصة للمشروعات السكنية والتجارية، وعرض للمواد المستخدمة، مع نموذج مخصص لطلب وحساب التكلفة التقديرية."
    },
    image: "/aldyar_screenshot.png",
    link: "https://al-dyar.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
  },
  {
    id: "lanfawzy",
    name: {
      en: "Lan Fawzy Furniture Catalog",
      ar: "معرض وموبيليا لان فوزي للأخشاب"
    },
    desc: {
      en: "Built a modern, bilingual digital catalog showroom for Lan Fawzy, displaying high-end custom-made home furniture and woodwork products. Designed dynamic filtering categories, responsive zoom galleries, and direct WhatsApp customer ordering channels.",
      ar: "صممت ونفذت معرضاً وكتالوجاً إلكترونياً تفاعلياً لمنتجات ومصنوعات شركة لان فوزي للموبيليا والأثاث الراقي. يدعم الموقع عرض التفاصيل بدقة عالية، التصفية المتقدمة للموديلات، والتواصل المباشر عبر واتساب لتخصيص الطلبات."
    },
    image: "/lanfawzy_screenshot.png",
    link: "https://lanfawzy.vercel.app/en",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "i18n"]
  },
  {
    id: "kinder-garden-academy",
    name: {
      en: "Kinder Garden International Academy",
      ar: "منصة أكاديمية كيندر جاردن التعليمية"
    },
    desc: {
      en: "Engineered an educational platform for the Kinder Garden preschool academy. Designed clean registration forms for new admissions, structural modules for subject curriculums, school activities photo galleries, and parent notification centers.",
      ar: "قمت ببناء وتطوير بوابة تعليمية وتعريفية لأكاديمية كيندر جاردن الدولية لتعليم الأطفال. يتميز الموقع بنماذج تسجيل إلكترونية سلسة للطلاب الجدد، واستعراض تفاعلي للمناهج التعليمية، وألبومات الأنشطة، ولوحة تنبيهات أولياء الأمور."
    },
    image: "/kindergarden_screenshot.png",
    link: "https://kinder-garden-academy.vercel.app/",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Firebase", "TypeScript"]
  },
  {
    id: "psychologist-portal",
    name: {
      en: "Dr. Maha Fathy Consultant Portal",
      ar: "بوابة المستشارة النفسية د. مها فتحي"
    },
    desc: {
      en: "Created a private client portal and session scheduling architecture for consultant psychologist Dr. Maha Fathy. Integrated custom consultation request systems, interactive PDF resource worksheets downloads, client testimonials grid, and a secure dashboard for session booking management.",
      ar: "منصة استشارات وجدولة جلسات مخصصة للدكتورة مها فتحي. قمت ببناء نظام طلب الاستشارات، ونظام تحميل الموارد وكتيبات العمل التفاعلية بصيغة PDF، مع لوحة تحكم كاملة وسهلة لإدارة المواعيد والجلسات."
    },
    image: "/psychologist_screenshot.png",
    link: "https://psychologist-maha-fathy.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase", "TypeScript"]
  }
];
