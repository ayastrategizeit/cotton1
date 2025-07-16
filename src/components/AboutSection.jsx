import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Sample slides data - you can replace with your actual content
  const slides = [
    {
      title: t('cottonResearch'),
      description: t('aboutDescription'),
      image: 'assets/img/about/about1.jpg',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: t('qualityTesting'),
      description: "Advanced quality testing ensures our cotton meets the highest international standards.",
      image: 'assets/img/about/about1.png',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: t('sustainability'),
      description: "Our sustainable practices protect the environment while delivering exceptional results.",
      image: 'assets/img/about/about1.png',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

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
              Discover our journey of innovation and excellence
            </p>
          </div>

          {/* Main Content with Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className={`${isRTL ? 'lg:order-2' : ''} ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="space-y-6">
                <h3 className={`text-3xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {slides[currentSlide].title}
                </h3>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {slides[currentSlide].description}
                </p>
                
                {/* Feature Tags */}
                <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''} mt-8`}>
                  {slides.map((slide, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                        index === currentSlide
                          ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300'
                      } ${isRTL ? 'font-arabic' : ''}`}
                    >
                      {slide.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider Section */}
            <div className={`${isRTL ? 'lg:order-1' : ''} ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="relative">
                {/* Main Slider Container */}
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Slider Track */}
                  <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((slide, index) => (
                      <div 
                        key={index}
                        className={`min-w-full h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center relative`}
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-20"></div>
                        </div>
                        
                        {/* Image */}
                        <div className="relative z-10 w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                          <img 
                            src={slide.image} 
                            alt={slide.title}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full animate-bounce"></div>
                        <Leaf className="absolute top-1/2 left-8 w-8 h-8 text-white/30 animate-pulse" />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-200 group"
                  >
                    <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-200 group"
                  >
                    <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Auto-play Control */}
                  <button 
                    onClick={toggleAutoPlay}
                    className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                  >
                    {isAutoPlaying ? 
                      <Pause className="w-4 h-4 text-white" /> : 
                      <Play className="w-4 h-4 text-white" />
                    }
                  </button>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                    <div 
                      className="h-full bg-white transition-all duration-700 ease-out"
                      style={{ 
                        width: `${((currentSlide + 1) / slides.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-green-500 to-blue-500 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
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
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;