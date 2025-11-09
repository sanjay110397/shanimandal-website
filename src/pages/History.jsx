import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Building2, Heart, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';

export function History() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Building2,
      title: t('history.establishment'),
      content: t('history.establishmentText'),
    },
    {
      icon: Sparkles,
      title: t('history.significance'),
      content: t('history.significanceText'),
    },
    {
      icon: Heart,
      title: t('history.architecture'),
      content: t('history.architectureText'),
    },
    {
      icon: Users,
      title: t('history.community'),
      content: t('history.communityText'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title={t('history.title')} description={t('history.subtitle')} />
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[300px] bg-gradient-to-r from-amber-500 to-orange-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1668770109988-24fe041e6b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI2NzI1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Temple History"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            {t('history.title')}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl opacity-90"
          >
            {t('history.subtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-3 text-gray-900">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1736522657079-6e3c283590f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjB3b3JzaGlwJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjcyNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Temple Ceremony"
                className="w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718086843191-bbf8dca8c225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBldmVuaW5nJTIwbGlnaHRzfGVufDF8fHx8MTc2MjY3MjU2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Temple Evening"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}