import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, ArrowRight, BookOpen, Leaf, Award } from 'lucide-react';

const NewsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [selectedCategory, setSelectedCategory] = useState('all');

  // News data with categories and additional information
  const news = [
    { 
      id: 1,
      title: t('newsItem1'),
      excerpt: t('newsExcerpt1'),
      date: '2024-01-15',
      category: 'research',
      readTime: '5 min',
      image: 'research'
    },
    { 
      id: 2,
      title: t('newsItem2'),
      excerpt: t('newsExcerpt2'),
      date: '2024-01-10',
      category: 'innovation',
      readTime: '3 min',
      image: 'innovation'
    },
    { 
      id: 3,
      title: t('newsItem3'),
      excerpt: t('newsExcerpt3'),
      date: '2024-01-05',
      category: 'sustainability',
      readTime: '4 min',
      image: 'sustainability'
    },
    { 
      id: 4,
      title: t('newsItem4'),
      excerpt: t('newsExcerpt4'),
      date: '2024-01-12',
      category: 'research',
      readTime: '6 min',
      image: 'research'
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

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

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

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isRTL ? 'font-arabic' : ''}`}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${isRTL ? 'space-x-reverse' : ''}`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
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

        {/* Load More Button */}
        {filteredNews.length > 6 && (
          <div className="text-center mt-12">
            <button className={`bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors ${isRTL ? 'font-arabic' : ''}`}>
              {t('loadMore')}
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredNews.length === 0 && (
          <div className={`text-center py-12 ${isRTL ? 'font-arabic' : ''}`}>
            <p className="text-gray-500 text-lg">{t('noNewsFound')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;