import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Award, Users, BookOpen } from 'lucide-react';

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services = [
    { 
      title: t('researchDevelopment'), 
      description: t('researchDesc'), 
      icon: Search 
    },
    { 
      title: t('qualityTesting'), 
      description: t('qualityDesc'), 
      icon: Award 
    },
    { 
      title: t('consultation'), 
      description: t('consultationDesc'), 
      icon: Users 
    },
    { 
      title: t('training'), 
      description: t('trainingDesc'), 
      icon: BookOpen 
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'font-arabic' : ''}`}>
          {t('servicesTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 mb-4 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {service.title}
              </h3>
              <p className={`text-gray-600 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;