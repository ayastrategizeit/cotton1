import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Sparkles, CircleDot } from 'lucide-react';

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Animated Title */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className={`text-5xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''} relative`}>
              {t('aboutTitle')}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            </h2>
            <p className={`text-xl text-gray-600 mt-8 ${isRTL ? 'font-arabic' : ''}`}>
              {t('aboutSubtitle')}
            </p>
          </div>

          {/* Main Content with Animated Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className={`${isRTL ? 'lg:order-2' : ''} ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="space-y-6">
                <h3 className={`text-3xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('aboutMainFeatureTitle')}
                </h3>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('aboutMainFeatureDesc')}
                </p>
                
                {/* Feature Tags */}
                <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''} mt-8`}>
                  {[
                    { key: 'aboutFeatureQualityTesting', gradient: 'from-green-500 to-emerald-500' },
                    { key: 'aboutFeatureSustainability', gradient: 'from-blue-500 to-cyan-500' },
                    { key: 'aboutFeatureInnovation', gradient: 'from-purple-500 to-pink-500' }
                  ].map((feature, index) => (
                    <div
                      key={feature.key}
                      className={`px-6 py-3 rounded-full bg-gradient-to-r ${feature.gradient} text-white shadow-lg transform hover:scale-105 transition-all duration-300 ${isRTL ? 'font-arabic' : ''}`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {t(feature.key)}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Animated Image Section */}
            <div className={`${isRTL ? 'lg:order-1' : ''} ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600 animate-gradient-shift"></div>
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4=')] animate-pulse"></div>
                  </div>
                  
                  {/* Main Image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl transform group-hover:scale-110 transition-all duration-700 animate-float">
                      <img 
                        src="assets/img/about/about1.jpg" 
                        alt="Cotton Research"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Animated Elements */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-full animate-bounce-slow backdrop-blur-sm"></div>
                  <div className="absolute bottom-8 left-8 w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 left-4 w-6 h-6 bg-white/25 rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/3 right-4 w-10 h-10 bg-white/20 rounded-full animate-bounce"></div>
                  
                  {/* Animated Icons */}
                  <Leaf className="absolute top-1/4 left-1/4 w-8 h-8 text-white/40 animate-pulse" />
                  <Sparkles className="absolute top-3/4 right-1/4 w-6 h-6 text-white/50 animate-spin-slow" />
                  <CircleDot className="absolute bottom-1/4 left-1/3 w-5 h-5 text-white/40 animate-ping" />
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/20 animate-pulse"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>

                {/* Decorative Elements Around Image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60 animate-bounce-slow"></div>
                <div className="absolute top-1/2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-50 animate-ping"></div>
                <div className="absolute top-1/4 -left-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-50 animate-bounce"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            {[
              { 
                key: 'yearsExperience', 
                label: 'yearsExperienceLabel', 
                color: 'green',
                icon: '📊',
                gradient: 'from-green-400 to-emerald-500'
              },
              { 
                key: 'researchProjects', 
                label: 'researchProjectsLabel', 
                color: 'blue',
                icon: '🔬',
                gradient: 'from-blue-400 to-cyan-500'
              },
              { 
                key: 'partnerships', 
                label: 'partnershipsLabel', 
                color: 'yellow',
                icon: '🤝',
                gradient: 'from-yellow-400 to-orange-500'
              }
            ].map((stat, index) => (
              <div 
                key={stat.key}
                className={`relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden ${isRTL ? 'font-arabic' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 animate-bounce-slow">{stat.icon}</div>
                  <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent `}>
                    {t(stat.key)}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {t(stat.label)}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;