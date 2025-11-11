import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';

import templeImage from '../assets/images/get_of_temple.webp';
import InsideTheTemple from '../assets/images/InsideTheTemple.webp';
import FrontViewOfTemple from '../assets/images/FrontViewOfTemple.webp';
import Prasadalay from '../assets/images/Prasadalay.webp';
import Yatra2 from '../assets/images/Yatra2.webp';

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEO />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40" />
        <ImageWithFallback
          src={templeImage}
          alt="Shani Mandal Temple"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            {t('home.welcome')}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 max-w-2xl opacity-90"
          >
            {t('home.subtitle')}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/visit"
              className="px-8 py-3 bg-white text-amber-600 rounded-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              {t('home.visitButton')}
            </Link>
            <Link
              to="/history"
              className="px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors border-2 border-white"
            >
              {t('home.exploreButton')}
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-gray-900">{t('home.aboutTitle')}</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              {t('home.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src={InsideTheTemple}
                alt="Temple Interior"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="mb-3 text-gray-900">{t('home.timingsTitle')}</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <span>{t('home.morning')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <span>{t('home.evening')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="mb-3 text-gray-900">{t('home.specialTitle')}</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <span>{t('home.saturday')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <span>{t('home.festivals')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-gray-900">{t('gallery.title')}</h2>
            <p className="text-gray-600">{t('gallery.subtitle')}</p>
          </motion.div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[Yatra2, Prasadalay, FrontViewOfTemple].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <ImageWithFallback
                  src={src}
                  alt={`Temple ${index + 1}`}
                  className="
                    w-full
                    h-[250px] sm:h-[280px] md:h-[320px] 
                    object-cover object-center
                    hover:scale-105 
                    transition-transform duration-500
                  "
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
              {t('nav.gallery')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}