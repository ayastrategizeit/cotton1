// utils/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Inline translations for testing
const resources = {
  en: { 
    common: {
      "home": "Home",
      "researchers": "Researchers",
      "research": "Research",
      "projects": "Projects",
      "news": "News",
      "contact": "Contact",
      "heroTitle": "Cotton Research Institute",
      "heroSubtitle": "Agricultural Research Center",
      "heroDescription": "We lead innovation in cotton research to develop high-quality and disease-resistant varieties, contributing to improved agricultural production and environmental sustainability.",
      "learnMore": "Learn More",
      "ourServices": "Our Services",
      "aboutTitle": "About Cotton Research Institute",
      "aboutDescription": "The Cotton Research Institute is a leading institution in scientific research and technological development for cotton crops. We work on developing improved cotton varieties characterized by high quality and resistance to pests and diseases.",
      "servicesTitle": "Our Services",
      "researchDevelopment": "Research & Development",
      "researchDesc": "Developing new high-quality cotton varieties",
      "qualityTesting": "Quality Testing",
      "qualityDesc": "Testing and analyzing fiber and seed quality",
      "consultation": "Technical Consultation",
      "consultationDesc": "Providing technical advice to farmers and institutions",
      "training": "Training & Qualification",
      "trainingDesc": "Specialized training programs in cotton cultivation",
      "yearsExperience": "Years of Experience",
      "researchProjects": "Research Projects",
      "publications": "Scientific Publications",
      "farmers": "Beneficiary Farmers",
      "newsTitle": "Latest News",
      "newsItem1": "Launch of New Drought-Resistant Cotton Variety",
      "newsItem2": "International Conference on Cotton Cultivation Development",
      "newsItem3": "New Training Program for Farmers",
      "readMore": "Read More",
      "contactTitle": "Contact Us",
      "contactDescription": "We are here to help you and answer your inquiries",
      "address": "Address",
      "addressText": "Agricultural Research Center, Giza, Egypt",
      "phone": "Phone",
      "email": "Email",
      "footerDescription": "Cotton Research Institute - Agricultural Research Center. We work on developing scientific research in cotton field to serve farmers and agricultural economy.",
      "quickLinks": "Quick Links",
      "followUs": "Follow Us",
      "rights": "All Rights Reserved",
      "researchPapers":"Research Papers",
      "phdTheses":"PhD Theses",
      "mastersTheses":"Master\'s Theses",
      "books":"Books"
    }
  },
  ar: { 
    common: {
      "home": "الرئيسية",
      "researchers": " الباحثين",
      "research": "البحوث",
      "projects": "المشاريع",
      "news": "الأخبار",
      "contact": "اتصل بنا",
      "heroTitle": "معهد بحوث القطن",
      "heroSubtitle": "معهد البحوث الزراعية",
      "heroDescription": "نحن نقود الابتكار في بحوث القطن لتطوير أصناف عالية الجودة ومقاومة للأمراض، مساهمين في تحسين الإنتاج الزراعي والاستدامة البيئية.",
      "learnMore": "اعرف المزيد",
      "ourServices": "خدماتنا",
      "aboutTitle": "عن معهد بحوث القطن",
      "aboutDescription": "معهد بحوث القطن هو مؤسسة رائدة في مجال البحث العلمي والتطوير التكنولوجي لمحصول القطن. نعمل على تطوير أصناف محسنة من القطن تتميز بالجودة العالية والمقاومة للآفات والأمراض.",
      "servicesTitle": "خدماتنا",
      "researchDevelopment": "البحث والتطوير",
      "researchDesc": "تطوير أصناف جديدة من القطن عالية الجودة",
      "qualityTesting": "اختبارات الجودة",
      "qualityDesc": "فحص وتحليل جودة الألياف والبذور",
      "consultation": "الاستشارات الفنية",
      "consultationDesc": "تقديم المشورة الفنية للمزارعين والمؤسسات",
      "training": "التدريب والتأهيل",
      "trainingDesc": "برامج تدريبية متخصصة في زراعة القطن",
      "yearsExperience": "سنة خبرة",
      "researchProjects": "مشروع بحثي",
      "publications": "منشور علمي",
      "farmers": "مزارع مستفيد",
      "newsTitle": "آخر الأخبار",
      "newsItem1": "إطلاق صنف جديد من القطن مقاوم للجفاف",
      "newsItem2": "مؤتمر دولي حول تطوير زراعة القطن",
      "newsItem3": "برنامج تدريبي جديد للمزارعين",
      "readMore": "اقرأ المزيد",
      "contactTitle": "اتصل بنا",
      "contactDescription": "نحن هنا لمساعدتك والإجابة على استفساراتك",
      "address": "العنوان",
      "addressText": "مركز البحوث الزراعية، الجيزة، مصر",
      "phone": "الهاتف",
      "email": "البريد الإلكتروني",
      "footerDescription": "معهد بحوث القطن - مركز البحوث الزراعية. نعمل على تطوير البحث العلمي في مجال القطن لخدمة المزارعين والاقتصاد الزراعي.",
      "quickLinks": "روابط سريعة",
      "followUs": "تابعنا",
      "rights": "جميع الحقوق محفوظة",
      "researchPapers":"أوراق بحثية",
      "phdTheses":" رسائل دكتوراه",
      "mastersTheses":"رسائل ماجيستير",
      "books":"كتب"
    }
  },
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true, // Enable debug mode
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Update direction and persist language on change
i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('i18nextLng', lng);
});

// Set initial language and direction
const savedLang = localStorage.getItem('i18nextLng') || 'ar';
console.log('Initial language:', savedLang);
i18n.changeLanguage(savedLang);
document.documentElement.lang = savedLang;
document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';

export default i18n;