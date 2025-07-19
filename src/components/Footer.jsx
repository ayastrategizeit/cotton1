import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf } from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className={`flex items-center mb-4 ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${isRTL ? 'font-arabic' : ''}`}>
                  {t('heroTitle')}
                </h3>
                <p className={`text-gray-400 ${isRTL ? 'font-arabic' : ''}`}>
                  {t('heroSubtitle')}
                </p>
              </div>
            </div>
            <p className={`text-gray-400 leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
              {t('footerDescription')}
            </p>
          </div>
          {isRTL ? (
            <>
              <div>
                <h4 className="text-lg font-semibold mb-4 font-arabic text-right">
                  {t('followUs')}
                </h4>
                <div className="flex space-x-4 space-x-reverse">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">t</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">in</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 font-arabic text-right">
                  {t('quickLinks')}
                </h4>
                <nav className="flex flex-col space-y-2 items-end">
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors font-arabic text-right w-full block">
                    {t('home')}
                  </a>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors font-arabic text-right w-full block">
                    {t('footer.about')}
                  </a>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors font-arabic text-right w-full block">
                    {t('footer.services')}
                  </a>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors font-arabic text-right w-full block">
                    {t('contact')}
                  </a>
                </nav>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('quickLinks')}
                </h4>
                <nav className={`flex flex-col space-y-2 ${isRTL ? 'items-end' : ''}`}>
                  <a href="#home" className={`text-gray-400 hover:text-white transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {t('home')}
                  </a>
                  <a href="#about" className={`text-gray-400 hover:text-white transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {t('footer.about')}
                  </a>
                  <a href="#services" className={`text-gray-400 hover:text-white transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {t('footer.services')}
                  </a>
                  <a href="#contact" className={`text-gray-400 hover:text-white transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {t('contact')}
                  </a>
                </nav>
              </div>
              <div>
                <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('followUs')}
                </h4>
                <div className={`flex space-x-4 ${isRTL ? 'justify-end space-x-reverse' : ''}`}>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">t</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">in</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className={`text-gray-400 ${isRTL ? 'font-arabic' : ''}`}>
            © 2024 {t('footer.strateizieit')} {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;