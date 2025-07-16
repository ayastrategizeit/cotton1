import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return [language, setLanguage];
};