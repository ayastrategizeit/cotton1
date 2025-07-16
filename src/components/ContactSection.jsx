import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Send, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'font-arabic' : ''}`}>
          {t('contactTitle')}
        </h2>
        <div className="max-w-6xl mx-auto">
          <p className={`text-lg text-gray-600 text-center mb-12 ${isRTL ? 'font-arabic' : ''}`}>
            {t('contactDescription')}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className={`text-2xl font-semibold text-gray-900 mb-8 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {t('getInTouch')}
              </h3>
              
              <div className="space-y-6">
                <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''} space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold text-gray-900 mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {t('address')}
                    </h4>
                    <p className={`text-gray-600 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {t('addressText')}
                    </p>
                  </div>
                </div>

                <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''} space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold text-gray-900 mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {t('phone')}
                    </h4>
                    <p className={`text-gray-600 ${isRTL ? 'text-right' : ''}`}>
                      {t('phoneNumber')}
                    </p>
                  </div>
                </div>

                <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''} space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold text-gray-900 mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {t('email')}
                    </h4>
                    <p className={`text-gray-600 ${isRTL ? 'text-right' : ''}`}>
                      {t('emailAddress')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <h4 className={`text-lg font-semibold text-gray-900 mb-4 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('officeHours')}
                </h4>
                <div className={`space-y-2 text-gray-600 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{t('weekdays')}</span>
                    <span>{t('weekdaysHours')}</span>
                  </div>
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{t('saturday')}</span>
                    <span>{t('saturdayHours')}</span>
                  </div>
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{t('friday')}</span>
                    <span>{t('fridayHours')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className={`text-2xl font-semibold text-gray-900 mb-6 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {t('sendMessage')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('fullName')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isRTL ? 'text-right pr-12' : 'pl-12'}`}
                      placeholder={t('fullNamePlaceholder')}
                      required
                    />
                    <User className={`absolute top-3.5 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('email')}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isRTL ? 'text-right pr-12' : 'pl-12'}`}
                      placeholder={t('emailPlaceholder')}
                      required
                    />
                    <Mail className={`absolute top-3.5 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('subject')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${isRTL ? 'text-right font-arabic' : ''}`}
                    placeholder={t('subjectPlaceholder')}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('message')}
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none ${isRTL ? 'text-right pr-12 font-arabic' : 'pl-12'}`}
                      placeholder={t('messagePlaceholder')}
                      required
                    ></textarea>
                    <MessageSquare className={`absolute top-3.5 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                >
                  <Send className="w-5 h-5" />
                  <span className={isRTL ? 'font-arabic' : ''}>{t('sendMessage')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;