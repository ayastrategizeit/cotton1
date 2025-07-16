import { translations } from './translations';

export const i18nConfig = {
  defaultLanguage: 'ar',
  supportedLanguages: ['ar', 'en'],
  translations,
  rtlLanguages: ['ar']
};

export const getDirection = (language) => {
  return i18nConfig.rtlLanguages.includes(language) ? 'rtl' : 'ltr';
};

export const getTranslation = (language, key) => {
  return translations[language]?.[key] || key;
};