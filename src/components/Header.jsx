import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import '../utils/i18n';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isResearchDropdownOpen, setIsResearchDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsResearchDropdownOpen(false);
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { href: '#home', label: t('home') || 'Home' },
    { 
      href: '#research', 
      label: t('research') || 'Research',
      hasDropdown: true,
      dropdownItems: [
        { href: '#research-papers', label: t('researchPapers') || 'Research Papers' },
        { href: '#phd-theses', label: t('phdTheses') || 'PhD Theses' },
        { href: '#masters-theses', label: t('mastersTheses') || 'Master\'s Theses' },
        { href: '#books', label: t('books') || 'Books' }
      ]
    },
    { href: '#projects', label: t('projects') || 'Projects' },
    { href: '#news', label: t('news') || 'News' },
    { href: '#researchers', label: t('researchers') || 'Researchers' },
  ];

  const isRTL = i18n.language === 'ar';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-green-100/50' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Center - Logo and Navigation */}
          <div className="flex items-center justify-center flex-1">
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'} logo-group`}>
              {/* Left Logo */}
              <div className="relative">
                <img 
                  src='assets/img/logo/logo.png' 
                  alt="Research Logo" 
                  className="h-12 w-12 object-contain transition-transform duration-300 logo-group:hover:scale-110" 
                />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full opacity-0 logo-group:hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <div key={index} className="relative">
                    {item.hasDropdown ? (
                      <div className="dropdown-container">
                        <button
                          onClick={() => setIsResearchDropdownOpen(!isResearchDropdownOpen)}
                          onMouseEnter={() => setIsResearchDropdownOpen(true)}
                          className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                            isRTL ? 'font-arabic space-x-reverse' : ''
                          } text-gray-700 hover:text-green-600 hover:bg-green-50`}
                        >
                          <span className="relative z-10">{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            isResearchDropdownOpen ? 'rotate-180' : ''
                          }`} />
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
                        </button>

                        {/* Research Dropdown */}
                        {isResearchDropdownOpen && (
                          <div 
                            className={`absolute top-full mt-2 w-52 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-green-100/50 overflow-hidden z-50 ${
                              isRTL ? 'right-0' : 'left-0'
                            }`}
                            onMouseLeave={() => setIsResearchDropdownOpen(false)}
                          >
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                className={`block w-full px-4 py-3 transition-all duration-300 ${
                                  isRTL ? 'font-arabic text-right' : 'text-left'
                                } text-gray-700 hover:text-green-600 hover:bg-green-50 border-b border-green-50 last:border-b-0`}
                                onClick={() => setIsResearchDropdownOpen(false)}
                              >
                                <span className="font-medium">{dropdownItem.label}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                          isRTL ? 'font-arabic' : ''
                        } text-gray-700 hover:text-green-600 hover:bg-green-50`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
                      </a>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right Logo */}
              <div className="relative">
                <img 
                  src='assets/img/logo/cotton.gif' 
                  alt="Cotton Logo" 
                  className="h-12 w-12 object-contain transition-transform duration-300 logo-group:hover:scale-110" 
                />
                <div className="absolute inset-0 bg-green-400/20 rounded-full opacity-0 logo-group:hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg bg-green-50 hover:bg-green-100 transition-all duration-300 group ${
                  isRTL ? 'space-x-reverse' : ''
                }`}
              >
                <Globe className="w-5 h-5 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium text-green-700">
                  {i18n.language === 'ar' ? 'العربية' : 'English'}
                </span>
                <ChevronDown className={`w-4 h-4 text-green-600 transition-transform duration-300 ${
                  isLanguageDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className={`absolute mt-2 w-40 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-green-100/50 overflow-hidden z-50 ${
                  isRTL ?  'left-0' : 'right-0'
                }`}>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full px-4 py-3 text-left transition-all duration-300 ${
                      i18n.language === 'en' 
                        ? 'bg-green-500 text-white' 
                        : 'text-gray-700 hover:bg-green-50'
                    }`}
                  >
                    <span className="font-medium">English</span>
                  </button>
                  <button
                    onClick={() => changeLanguage('ar')}
                    className={`w-full px-4 py-3 text-left transition-all duration-300 ${
                      i18n.language === 'ar' 
                        ? 'bg-green-500 text-white' 
                        : 'text-gray-700 hover:bg-green-50'
                    }`}
                  >
                    <span className="font-medium">العربية</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-green-600" />
              ) : (
                <Menu className="w-6 h-6 text-green-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-green-100/50 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsResearchDropdownOpen(!isResearchDropdownOpen)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                            isRTL ? 'font-arabic text-right' : 'text-left'
                          } text-gray-700 hover:text-green-600 hover:bg-green-50`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            isResearchDropdownOpen ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {isResearchDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                  isRTL ? 'font-arabic text-right' : 'text-left'
                                } text-gray-600 hover:text-green-600 hover:bg-green-50`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsResearchDropdownOpen(false);
                                }}
                              >
                                {dropdownItem.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          isRTL ? 'font-arabic text-right' : 'text-left'
                        } text-gray-700 hover:text-green-600 hover:bg-green-50`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;