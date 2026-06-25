import { siteConfig } from "./site";

export const skills = [
  "React.js / Next.js",
  "React Native (Mobile)",
  "Node.js / Nest.js",
  "PostgreSQL / MongoDB",
  "Supabase / Firebase",
  "TypeScript / JavaScript",
  "RESTful APIs / GraphQL",
  "Scalable App Architectures",
  "Tailwind CSS / Layouts",
];

export const getTechStack = (language: "en" | "ar") => [
  { 
    name: "HTML5", 
    desc: language === "ar" ? "هيكلة الصفحات" : "Page structure", 
    color: "from-orange-500 to-red-600" 
  },
  { 
    name: "CSS3", 
    desc: language === "ar" ? "التنسيق والتجاوب" : "Styling & Responsive", 
    color: "from-blue-500 to-indigo-600" 
  },
  { 
    name: "JavaScript", 
    desc: language === "ar" ? "التفاعل والحركة" : "Interactivity", 
    color: "from-yellow-400 to-amber-500" 
  },
  { 
    name: "Tailwind CSS", 
    desc: language === "ar" ? "التصميم السريع" : "Rapid Styling", 
    color: "from-sky-400 to-cyan-500" 
  },
  { 
    name: "React.js", 
    desc: language === "ar" ? "تطبيقات الويب" : "Web Apps", 
    color: "from-cyan-500 to-blue-600" 
  },
];

// JSON-LD Course Schema for SEO Search Engines
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Introduction to Web Development - المقدمة في تطوير الويب",
  "description": "Learn HTML5, CSS3, JavaScript, Tailwind CSS, and React.js from scratch to professional with Eng. Muhammed Khaled.",
  "provider": {
    "@type": "Person",
    "name": "Eng. Muhammed Khaled",
    "sameAs": siteConfig.socials.linkedin
  },
  "courseCode": "INTRO-WEB-DEV",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Blended",
    "duration": "P2M",
    "courseWorkload": "8 sessions"
  },
  "offers": {
    "@type": "Offer",
    "price": "2000",
    "priceCurrency": "EGP",
    "category": "Paid"
  }
};
