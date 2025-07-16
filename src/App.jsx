import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Leaf, Award, Users, BookOpen, Search, Globe, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StateSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Import i18n configuration
import './utils/i18n';

// Main App Component
const App = () => {
  const { t, i18n, ready } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'ar');
  const isRTL = language === 'ar';

  // Debug logs
  useEffect(() => {
    console.log('i18n ready:', ready);
    console.log('Current language:', i18n.language);
    console.log('Available languages:', i18n.languages);
    console.log('Resources:', i18n.options.resources);
    console.log('Test translation for "home":', t('home'));
    console.log('Test translation for "heroTitle":', t('heroTitle'));
  }, [ready, i18n, t]);

  // Update language when it changes
  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  // Function to change language
  const changeLanguage = (lng) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  // Show loading state if i18n is not ready
  if (!ready) {
    return <div>Loading translations...</div>;
  }

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header language={language} setLanguage={changeLanguage} t={t} />
      <HeroSection t={t} isRTL={isRTL} />
      <StatsSection t={t} />
      <AboutSection t={t} isRTL={isRTL} />
      <ServicesSection t={t} isRTL={isRTL} />
      <NewsSection t={t} isRTL={isRTL} />
      <ContactSection t={t} isRTL={isRTL} />
      <Footer t={t} isRTL={isRTL} />
    </div>
  );
};

export default App;