import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Search, BookOpen, Users } from 'lucide-react';

const StatsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const stats = [
    { 
      number: '50+', 
      label: t('yearsExperience'), 
      icon: Award 
    },
    { 
      number: '200+', 
      label: t('researchProjects'), 
      icon: Search 
    },
    { 
      number: '500+', 
      label: t('publications'), 
      icon: BookOpen 
    },
    { 
      number: '10K+', 
      label: t('farmers'), 
      icon: Users 
    }
  ];

  return (
    <section className="py-16 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-green-200" />
              </div>
              <div className={`text-4xl font-bold mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                {stat.number}
              </div>
              <div className={`text-green-100 ${isRTL ? 'font-arabic' : ''}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;