import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white transition-colors duration-200"
      aria-label="Toggle Language"
    >
      <Globe className="w-4 h-4" />
      <span className="hidden sm:inline">
        {i18n.language === 'en' ? '🇮🇳 मराठी' : '🇬🇧 English'}
      </span>
      <span className="sm:hidden">
        {i18n.language === 'en' ? 'मर' : 'EN'}
      </span>
    </button>
  );
}
