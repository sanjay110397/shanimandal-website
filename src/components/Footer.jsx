import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/history', label: t('nav.history') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/visit', label: t('nav.visit') },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Temple Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-8 h-8 text-amber-500" />
              <span className="text-xl">{t('home.title')}</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span>Tal. Nandurbar, Dist. Nandurbar, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>info@shanimandal.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
