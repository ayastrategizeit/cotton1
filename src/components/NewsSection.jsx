import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Leaf, Award, Eye, TrendingUp, Wheat, Sprout, TreePine, Flower2, Sun, Droplets } from 'lucide-react';

const NewsSection = () => {
  const [isRTL, setIsRTL] = useState(true); // Set to Arabic by default
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0);
  const itemsPerPage = 6;

  // Complete translations
  const translations = {
    en: {
      newsTitle: "Latest News",
      allNews: "All News",
      research: "Research",
      innovation: "Innovation", 
      sustainability: "Sustainability",
      readMore: "Read More",
      noNewsFound: "No news found",
      previous: "Previous",
      next: "Next",
      newsItem5: "Advanced Cotton Fiber Analysis Technology",
      newsExcerpt5: "New breakthrough in cotton fiber quality analysis using AI",
      newsItem6: "Sustainable Cotton Farming Initiative",
      newsExcerpt6: "Promoting environmentally friendly cotton cultivation practices"
    },
    ar: {
      newsTitle: "آخر الأخبار",
      allNews: "جميع الأخبار",
      research: "البحوث",
      innovation: "الابتكار",
      sustainability: "الاستدامة",
      readMore: "اقرأ المزيد",
      noNewsFound: "لم يتم العثور على أخبار",
      previous: "السابق",
      next: "التالي",
      newsItem5: "تكنولوجيا متطورة لتحليل ألياف القطن",
      newsExcerpt5: "اختراق جديد في تحليل جودة ألياف القطن باستخدام الذكاء الاصطناعي",
      newsItem6: "مبادرة زراعة القطن المستدامة",
      newsExcerpt6: "تعزيز ممارسات زراعة القطن الصديقة للبيئة"
    }
  };

  const t = (key) => translations[isRTL ? 'ar' : 'en'][key] || key;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced news data with complete information
  const news = [
    {
      id: 0,
      title: 'الدورة التدريبية الثالثة نحو استدامة القطن',
      excerpt: 'معهد بحوث القطن ينظم الدورة التدريبية الثالثة نحو استدامة القطن في قارة أفريقيا بالتعاون مع وزارة الخارجية الوكالة المصرية للشراكة من أجل التنمية',
      date: '2022-10-09',
      category: 'sustainability',
      readTime: '٥ دقائق',
      image: 'sustainability',
      views: '1,234'
    },
    {
      id: 1,
      title: 'أول مزاد علني للقطن',
      excerpt: 'انطلاق أول مزاد علني للقطن في الفيوم ٢٠٢٣ و٢٠٢٤',
      date: '2023-09-22',
      category: 'innovation',
      readTime: '٣ دقائق',
      image: 'innovation',
      views: '892'
    },
    { 
      id: 2,
      title: 'بحوث القطن يستقبل ٢٠ مبعوث',
      excerpt: 'بحوث القطن يستقبل ٢٠ مبعوث من ١٢ دولة أفريقية للتدريب',
      date: '2023-10-01',
      category: 'research',
      readTime: '٤ دقائق',
      image: 'research',
      views: '1,567'
    },
    { 
      id: 3,
      title: 'وفد أفريقي بمحطة سخا بكفر الشيخ',
      excerpt: 'معهد بحوث القطن يستقبل وفد أفريقي بمحطة سخا بكفر الشيخ',
      date: '2023-10-10',
      category: 'sustainability',
      readTime: '٦ دقائق',
      image: 'sustainability',
      views: '743'
    },
    { 
      id: 4,
      title: 'جامعة برج العرب التكنولوجية تستضيف وفد معهد القطن',
      excerpt: 'جامعة برج العرب التكنولوجية تستضيف وفد معهد القطن والوفد الأفريقي المرافق',
      date: '2023-10-17',
      category: 'research',
      readTime: '٤ دقائق',
      image: 'research',
      views: '1,123'
    },
    {
      id: 7,
      title: 'معهد القطن يكرم ١٨ متدرباً من ١٢ دولة أفريقية',
      excerpt: 'معهد القطن يكرم ١٨ متدرباً من ١٢ دولة أفريقية بالتعاون مع الوكالة المصرية للشراكة من أجل التنمية',
      date: '2023-10-21',
      category: 'sustainability',
      readTime: '٥ دقائق',
      image: 'sustainability',
      views: '2,156'
    },
    {
      id: 8,
      title: 'أحدث إصدار كتاب عن القطن',
      excerpt: 'أحدث إصدار كتاب عن القطن لمدير معهد بحوث القطن الأسبق',
      date: '2023-12-15',
      category: 'research',
      readTime: '٧ دقائق',
      image: 'research',
      views: '987'
    },
    {
      id: 9,
      title: 'تفاصيل مزاد القطن رقم ١١',
      excerpt: 'تفاصيل مزاد القطن رقم ١١ في محافظات الوجه البحري',
      date: '2024-02-15',
      category: 'innovation',
      readTime: '٤ دقائق',
      image: 'innovation',
      views: '1,432'
    },
    {
      id: 10,
      title: 'مجلس الوزراء يوافق على تحديد سعر ضمان القطن',
      excerpt: 'مجلس الوزراء يوافق في اجتماع برئاسة الدكتور مصطفى مدبولي على تحديد سعر ضمان لتوريد القطن لعام ٢٠٢٤ و٢٠٢٥',
      date: '2024-02-15',
      category: 'innovation',
      readTime: '٦ دقائق',
      image: 'innovation',
      views: '3,210'
    },
    {
      id: 11,
      title: 'معهد القطن يطلق أول تدريب بالفيوم',
      excerpt: 'معهد القطن يطلق أول تدريب للأخصائيين والمرشدين بالفيوم',
      date: '2024-03-01',
      category: 'sustainability',
      readTime: '٥ دقائق',
      image: 'sustainability',
      views: '876'
    },
    {
      id: 12,
      title: 'أول دورة تدريبية ببني سويف',
      excerpt: 'معهد القطن ينظم أول دورة تدريبية للأخصائيين والمرشدين بمحافظة بني سويف',
      date: '2024-03-01',
      category: 'sustainability',
      readTime: '٤ دقائق',
      image: 'sustainability',
      views: '654'
    },
    {
      id: 13,
      title: 'القرار الوزاري رقم ٨٨ لسنة ٢٠٢٤',
      excerpt: 'صدور القرار الوزاري رقم ٨٨ لسنة ٢٠٢٤ بشأن تحديد مناطق زراعة أصناف القطن لموسم ٢٠٢٤',
      date: '2024-03-15',
      category: 'research',
      readTime: '٨ دقائق',
      image: 'research',
      views: '2,543'
    },
    { 
      id: 5,
      title: t('newsItem5'),
      excerpt: t('newsExcerpt5'),
      date: '2024-01-08',
      category: 'innovation',
      readTime: isRTL ? '٤ دقائق' : '4 min',
      image: 'innovation',
      views: '1,789'
    },
    { 
      id: 6,
      title: t('newsItem6'),
      excerpt: t('newsExcerpt6'),
      date: '2024-01-03',
      category: 'sustainability',
      readTime: isRTL ? '٥ دقائق' : '5 min',
      image: 'sustainability',
      views: '1,345'
    }
  ];

  const categories = [
    { id: 'all', name: t('allNews'), icon: Wheat },
    { id: 'research', name: t('research'), icon: Sprout },
    { id: 'innovation', name: t('innovation'), icon: TreePine },
    { id: 'sustainability', name: t('sustainability'), icon: Leaf }
  ];

  // Filter news by category
  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getImageGradient = (imageType) => {
    const gradients = {
      research: 'from-emerald-400 via-green-500 to-teal-600',
      innovation: 'from-green-400 via-emerald-500 to-green-700',
      sustainability: 'from-lime-400 via-green-500 to-emerald-600'
    };
    return gradients[imageType] || 'from-emerald-400 via-green-500 to-teal-600';
  };

  const getImageIcon = (imageType) => {
    const icons = {
      research: Sprout,
      innovation: TreePine,
      sustainability: Leaf
    };
    const IconComponent = icons[imageType] || Wheat;
    return (
      <div className="relative">
        <IconComponent className="w-16 h-16 text-white drop-shadow-lg animate-pulse" />
        <div className="absolute -top-2 -right-2">
          <Sun className="w-6 h-6 text-yellow-200 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <Droplets className="w-4 h-4 text-blue-200 animate-bounce" />
        </div>
      </div>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isRTL 
      ? date.toLocaleDateString('ar-EG', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      : date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-gradient-to-tr from-teal-200/30 to-green-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-lime-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating agricultural elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Wheat className="w-8 h-8 text-green-600 animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="absolute bottom-32 right-16 opacity-20">
          <Sprout className="w-6 h-6 text-emerald-600 animate-bounce" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-1/3 right-8 opacity-20">
          <Leaf className="w-10 h-10 text-teal-600 animate-bounce" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20">
          <TreePine className="w-7 h-7 text-green-700 animate-bounce" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute top-40 left-1/3 opacity-20">
          <Flower2 className="w-5 h-5 text-lime-600 animate-bounce" style={{ animationDelay: '2.5s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className={`text-5xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('newsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto rounded-full animate-pulse"></div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Wheat className="w-6 h-6 text-green-600 animate-bounce" />
            <Sprout className="w-5 h-5 text-emerald-600 animate-bounce" style={{ animationDelay: '0.2s' }} />
            <Leaf className="w-6 h-6 text-teal-600 animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-white shadow-lg border-2 border-green-300'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-green-50 border-2 border-green-200/50 hover:border-green-300'
                } ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedNews.map((item, index) => (
            <div 
              key={item.id} 
              className={`group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform border-l-4 hover:border-l-8 ${
                item.category === 'research' ? 'border-l-emerald-500 hover:border-l-emerald-400' :
                item.category === 'innovation' ? 'border-l-green-500 hover:border-l-green-400' :
                'border-l-teal-500 hover:border-l-teal-400'
              } hover:bg-white ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ 
                transitionDelay: `${index * 100 + 500}ms`,
                animationDelay: `${index * 100}ms` 
              }}
            >
              {/* Enhanced Image/Icon Section */}
              <div className={`h-52 bg-gradient-to-br ${getImageGradient(item.image)} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="flex items-center justify-center h-full relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {getImageIcon(item.image)}
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 transform group-hover:rotate-12 transition-transform duration-300">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-1 transform group-hover:-rotate-12 transition-transform duration-300">
                  <Sun className="w-3 h-3 text-yellow-200" />
                </div>
                {/* Category badge */}
                <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20`}>
                  <span className={`text-xs font-semibold ${
                    item.category === 'research' ? 'text-emerald-700' :
                    item.category === 'innovation' ? 'text-green-700' :
                    'text-teal-700'
                  } ${isRTL ? 'font-arabic' : ''}`}>
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
              
              {/* Enhanced Content Section */}
              <div className="p-6">
                {/* Enhanced Meta Information */}
                <div className={`flex items-center justify-between mb-4 text-sm text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center gap-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Calendar className="w-4 h-4 text-emerald-500" />
                      <span className={isRTL ? 'font-arabic' : ''}>{formatDate(item.date)}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className={isRTL ? 'font-arabic' : ''}>{item.readTime}</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className={isRTL ? 'font-arabic' : ''}>{item.views}</span>
                  </div>
                </div>

                {/* Enhanced Title */}
                <h3 className={`text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:${
                  item.category === 'research' ? 'text-emerald-600' :
                  item.category === 'innovation' ? 'text-green-600' :
                  'text-teal-600'
                } transition-colors duration-300 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {item.title}
                </h3>

                {/* Enhanced Excerpt */}
                <p className={`text-gray-600 mb-6 line-clamp-3 leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {item.excerpt}
                </p>

                {/* Enhanced Read More Button */}
                <button className={`group/btn flex items-center gap-2 bg-gradient-to-r ${
                  item.category === 'research' ? 'from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700' :
                  item.category === 'innovation' ? 'from-green-400 to-green-600 hover:from-green-500 hover:to-green-700' :
                  'from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700'
                } text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 w-full justify-center relative overflow-hidden ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">{t('readMore')}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 relative z-10 ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Pagination Controls */}
        {totalPages > 1 && (
          <div className={`flex justify-center items-center gap-6 mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                currentPage === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 text-white hover:shadow-lg hover:from-green-500 hover:to-teal-600'
              } ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}
            >
              <ArrowRight className={`w-4 h-4 ${isRTL ? '' : 'rotate-180'}`} />
              <span>{t('previous')}</span>
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full font-bold transition-all duration-300 transform hover:scale-110 relative ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-white shadow-lg border-2 border-green-300'
                      : 'bg-white/80 text-gray-600 hover:bg-green-50 border border-green-200 hover:border-green-300 backdrop-blur-sm'
                  }`}
                >
                  {isRTL ? page.toLocaleString('ar-EG') : page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                currentPage === totalPages 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 text-white hover:shadow-lg hover:from-green-500 hover:to-teal-600'
              } ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}
            >
              <span>{t('next')}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* Enhanced No Results Message */}
        {filteredNews.length === 0 && (
          <div className={`text-center py-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-200 via-emerald-200 to-teal-200 rounded-full flex items-center justify-center">
              <Wheat className="w-10 h-10 text-green-600" />
            </div>
            <p className={`text-gray-500 text-xl ${isRTL ? 'font-arabic' : ''}`}>
              {t('noNewsFound')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;