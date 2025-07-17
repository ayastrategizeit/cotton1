import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, ArrowRight, BookOpen, Leaf, Award } from 'lucide-react';

const NewsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // News data with categories and additional information
  const news = [
    {
      id: 0,
      title: '    الدورة التدريبية الثالثة نحو استدامة القطن  ',
      excerpt: 'معهد بحوث القطن ينظم الدورة التدريبية الثالثة نحو استدامة القطن في قارة أفريقيا بالتعاون مع وزارة الخارجية الوكالة المصرية للشراكة من أجل التنمية',
      date: '2022-10-09',
      category: 'sustainability',
      
      image: 'sustainability'
    },
    {
      id: 1,
      title: ' اول مزاد علني للقطن    ',
      excerpt: 'انطلاق اول مزاد علني للقطن في الفيوم 2023 و2024',
      date: '2023-09-22',
      category: 'sustainability',
      image: 'sustainability'
    },
    { 
      id: 2,
      title: 'بحوث القطن يستقبل 20 مبعوث ',
      excerpt: 'بحوث القطن يستقبل 20مبعوث من 12 دولة افريقية للتدريب',
      date: '2023-10-01',
      category: 'sustainability',
      image: 'sustainability'
    },
    { 
      id: 3,
      title: '    وفد افريقي بمحطة سخا بكفر الشيخ',
      excerpt: 'معهد بحوث القطن يستقبل وفد افريقي بمحطة سخا بكفر الشيخ',
      date: '2023-10-10',
      category: 'sustainability',
      image: 'sustainability'
    },
    { 
      id: 4,
      title: 'جامعة برج العرب التكنولوجية تستضيف وفد معهد القطن والوفد الافريقي المرافق',
      excerpt: 'Read More',
      date: '2023-10-17',
      category: 'sustainability',
      image: 'sustainability'
    },
    {
      id: 7,
      title: 'معهد القطن يكرم 18متدربا من 12 دولة افريقية بالتعاون مع الوكالة المصرية الشراكة من أجل التنمية بوزارة الخارجية',
      excerpt: '',
      date: '2023-10-21',
      category: 'sustainability',
      image: 'sustainability'
    },
    {
      id: 8,
      title: 'أحدث اصدار كتاب عن القطن لمدير معهد بحوث القطن الاسبق',
      excerpt: '',
      date: '2023-12-15',
      category: 'sustainability',
      image: 'sustainability'
    },
    {
      id: 9,
      title: 'تفاصيل مزاد القطن رقم 11 في محافظات الوجة البحري',
      excerpt: '',
      date: '2024-02-15',
      category: 'sustainability',
      image: 'sustainability'
    },
    {
      id: 10,
      title: 'مجلس الوزارء يوافق في اجتماع برئاسة الدكتور مصطفي مدبولي رئيس الوزراء علي تحديد سعر ضمان لتوريد القطن لهذا العام 2024 و 2025',
      excerpt: '',
      date: '2024-02-15',
      category: 'sustainability',
      image: 'sustainability'
    },
    {
      id: 11,
      title: 'معهد القطن يطلق اول تدريب للاخصائين والمرشدين بالفيوم',
      excerpt: '',
      date: '2024-03-01',
      category: 'sustainability',
      image: 'sustainability'
    },
    {
      id: 12,
      title: 'معهد القطن ينظم اول دورة تدريبية للاخصائين والمرشدين بمحافظة بني سويف',
      excerpt: '',
      date: '2024-03-01',
      category: 'sustainability',
      image: 'sustainability'
    },
    {
      id: 13,
      title: 'صدور القرار الوزاري رقم 88 لسنه 2024 بشأن تحديد مناطق زراعة أصناف القطن لموسم 2024',
      excerpt: '',
      date: '2024-03-15',
      category: 'sustainability',
      image: 'sustainability'
    },
    { 
      id: 5,
      title: t('newsItem5'),
      excerpt: t('newsExcerpt5'),
      date: '2024-01-08',
      category: 'innovation',
      readTime: '4 min',
      image: 'innovation'
    },
    { 
      id: 6,
      title: t('newsItem6'),
      excerpt: t('newsExcerpt6'),
      date: '2024-01-03',
      category: 'sustainability',
      readTime: '5 min',
      image: 'sustainability'
    }
  ];

  const categories = [
    { id: 'all', name: t('allNews'), icon: BookOpen },
    { id: 'research', name: t('research'), icon: Award },
    { id: 'innovation', name: t('innovation'), icon: Leaf },
    { id: 'sustainability', name: t('sustainability'), icon: Leaf }
  ];

  // Pagination logic
  const totalPages = Math.ceil(news.length / itemsPerPage);
  const paginatedNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getImageGradient = (imageType) => {
    const gradients = {
      research: 'from-blue-400 to-blue-600',
      innovation: 'from-green-400 to-green-600',
      sustainability: 'from-yellow-400 to-yellow-600'
    };
    return gradients[imageType] || 'from-gray-400 to-gray-600';
  };

  const getImageIcon = (imageType) => {
    const icons = {
      research: Award,
      innovation: Leaf,
      sustainability: Leaf
    };
    const IconComponent = icons[imageType] || BookOpen;
    return <IconComponent className="w-16 h-16 text-white opacity-80" />;
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
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'font-arabic' : ''}`}>
          {t('newsTitle')}
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedNews.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Image/Icon Section */}
              <div className={`h-48 bg-gradient-to-br ${getImageGradient(item.image)} flex items-center justify-center`}>
                {getImageIcon(item.image)}
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                {/* Date and Read Time */}
                <div className={`flex items-center justify-between mb-3 text-sm text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                    
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold text-gray-900 mb-3 line-clamp-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className={`text-gray-600 mb-4 line-clamp-3 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {item.excerpt}
                </p>

                {/* Read More Button */}
                <button className={`flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors group ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}>
                  <span>{t('readMore')}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
            >
              {isRTL ? 'التالي' : 'Previous'}
            </button>
            <span className="font-bold text-lg">{currentPage} / {totalPages}</span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
            >
              {isRTL ? 'السابق' : 'Next'}
            </button>
          </div>
        )}

        {/* No Results Message */}
        {news.length === 0 && (
          <div className={`text-center py-12 ${isRTL ? 'font-arabic' : ''}`}>
            <p className="text-gray-500 text-lg">{t('noNewsFound')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
