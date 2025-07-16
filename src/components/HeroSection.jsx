import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Zap, Leaf } from 'lucide-react';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`absolute animate-bounce ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="assets/img/hero/hero.jpeg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Green gradient overlay */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent"></div>
      </div>

      {/* Floating Decorative Elements */}
      <FloatingElement delay={0} className="top-20 left-10 text-green-300/30">
        <Sparkles size={24} />
      </FloatingElement>
      <FloatingElement delay={1} className="top-40 right-20 text-emerald-300/30">
        <Zap size={32} />
      </FloatingElement>
      <FloatingElement delay={2} className="bottom-40 left-20 text-green-400/30">
        <Leaf size={28} />
      </FloatingElement>
      <FloatingElement delay={1.5} className="top-60 right-10 text-emerald-400/30">
        <Sparkles size={20} />
      </FloatingElement>

      {/* Hero Image Container */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-green-400/20 backdrop-blur-sm border border-green-400/30 text-green-100 text-sm font-medium mb-8 transform transition-all duration-700 delay-200 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <Sparkles className="w-4 h-4 mr-2" />
            <span>{t('newFeature') || 'New & Innovative'}</span>
          </div>

          {/* Main Title */}
          <h1 className={`text-5xl md:text-7xl font-bold text-white  mb-6 leading-tight ${
            isRTL ? 'font-arabic' : ''
          } transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span style={{color:"#fff"}} className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent text-green-600">
              {t('heroTitle') || 'Revolutionary'}
            </span>
            {/* <br />
            <span className="text-white">
              {t('heroTitleSecond') || 'Green Solutions'}
            </span> */}
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-white mb-6 font-light ${
            isRTL ? 'font-arabic' : ''
          } transform transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {t('heroSubtitle') || 'Transforming the future with sustainable technology'}
          </p>

          {/* Description */}
          <p className={`text-lg text-green-200/80 mb-10 max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'font-arabic' : ''
          } transform transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {t('heroDescription') || 'Discover innovative solutions that blend cutting-edge technology with environmental consciousness. Join us in building a sustainable future for generations to come.'}
          </p>

          {/* CTA Buttons */}
          {/* <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button className={`group relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 ${
              isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'
            }`}>
              <span className="relative z-10">{t('learnMore') || 'Get Started'}</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
              }`} />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            
            <button className="group relative bg-white/10 backdrop-blur-sm border border-green-400/30 text-green-100 hover:bg-white/20 hover:border-green-400/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              <span className="relative z-10">{t('ourServices') || 'Explore Services'}</span>
              <div className="absolute inset-0 bg-green-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div> */}

          {/* Stats or Features */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-700 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              { number: '500+', label: t('projectsCompleted') || 'Projects Completed' },
              { number: '98%', label: t('clientSatisfaction') || 'Client Satisfaction' },
              { number: '24/7', label: t('support') || 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-green-200/80 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;