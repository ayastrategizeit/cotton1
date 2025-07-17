// utils/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enCommon from '../locales/en/common.json';
import arCommon from '../locales/ar/common.json';

const resources = {
  en: { common: enCommon },
  ar: { common: arCommon },
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