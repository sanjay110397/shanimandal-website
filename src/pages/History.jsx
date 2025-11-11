import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Landmark, BookOpenText, Sparkles, Building, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';

import templeImage from '../assets/images/get_of_temple.webp';
import panditImage from '../assets/images/ArunMaharaj.webp';

export function History() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Landmark,
      title: t('history.origin'),
      content: t('history.originText'),
    },
    {
      icon: BookOpenText,
      title: t('history.legend'),
      content: t('history.legendText'),
    },
    {
      icon: Building,
      title: t('history.architecture'),
      content: t('history.architectureText'),
    },
    {
      icon: Sparkles,
      title: t('history.festivals'),
      content: t('history.festivalsText'),
    },
    {
      icon: Users,
      title: t('history.visitorInfo'),
      content: t('history.visitorInfoText'),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      <SEO title={t('history.title')} description={t('history.subtitle')} />

      {/* HEADER */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] bg-gradient-to-r from-amber-500 to-orange-600 overflow-hidden"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Temple image */}
        <img
          src={templeImage}
          alt="Shani Mandal Temple"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
          loading="lazy"
        />

        {/* Text overlay */}
        <div className="relative z-20 flex flex-col justify-center h-full max-w-5xl mx-auto px-6 text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-md"
          >
            {t('history.title')}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl opacity-90 max-w-2xl"
          >
            {t('history.subtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* CONTENT SECTIONS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/90 border border-amber-100 rounded-2xl p-8 shadow-lg hover:shadow-amber-200 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <section.icon className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PANDIT SECTION */}
      <section className="py-20 bg-white border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Pandit Ji Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl bg-amber-50"
          >
            <img
               src={panditImage}
              alt="Shri Shani Sadhak Devendra Arun Pandharkar"
              className="w-full h-[520px] object-cover object-top rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Pandit Ji Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold text-amber-700 mb-3">
              श्री शनिसाधक देवेंद्र अरुण पांढरकर
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('history.panditNote')}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
