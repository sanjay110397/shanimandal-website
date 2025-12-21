import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import emailjs from '@emailjs/browser';

export function Visit() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // 1️⃣ Send email to Temple (Contact Us)
    await emailjs.send(
      'service_shanidev',
      'template_v4cq1x2',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'EuZ1O9JLuhAWEqhPV'
    );

    // 2️⃣ Send Auto-Reply to Visitor (Marathi)
    await emailjs.send(
      'service_shanidev',
      'template_g9aayxr',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'EuZ1O9JLuhAWEqhPV'
    );

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 4000);

  } catch (error) {
    console.error('EmailJS Error:', error);
    alert('संदेश पाठवता आला नाही. कृपया पुन्हा प्रयत्न करा.');
  } finally {
    setLoading(false);
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const guidelines = [
    t('visit.guideline1'),
    t('visit.guideline2'),
    t('visit.guideline3'),
    t('visit.guideline4'),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title={t('visit.title')} description={t('visit.subtitle')} />
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-amber-500 to-orange-600 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            {t('visit.title')}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="opacity-90"
          >
            {t('visit.subtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h2 className="mb-4 text-gray-900 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-amber-500" />
                  {t('visit.addressTitle')}
                </h2>
                <p className="text-gray-600">{t('visit.address')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h2 className="mb-4 text-gray-900">{t('visit.contactTitle')}</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>{t('visit.phone')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>{t('visit.email')}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h2 className="mb-4 text-gray-900 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-amber-500" />
                  {t('visit.timingsTitle')}
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p>{t('visit.morningTiming')}</p>
                  <p>{t('visit.eveningTiming')}</p>
                  <p className="text-amber-600 mt-3">
                    {t('visit.saturdayNote')}
                  </p>
                </div>
              </motion.div>
            </div>

           {/* Map and Guidelines */}
            <div className="space-y-6">

              {/* Temple Location Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative w-full h-64 md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237936.56264569497!2d74.17902476911631!3d21.2810135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf05bd55b35a59%3A0xd4d2b0d0a7b0b6e0!2sShri.%20Shani%20Sadesati%20Muktisthan%20Mandir%2C%20Shanimandal!5e0!3m2!1sen!2sin!4v1766300275832!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shri Shani Sadesati Muktisthan Mandir Location"
                  />
                </div>
              </motion.div>

              {/* Guidelines */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h2 className="mb-4 text-gray-900">
                  {t('visit.guidelinesTitle')}
                </h2>

                <ul className="space-y-3">
                  {guidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{guideline}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-2xl mx-auto"
          >
            <h2 className="mb-6 text-gray-900 text-center">
              {t('visit.contactFormTitle')}
            </h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('visit.namePlaceholder')}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('visit.emailPlaceholder')}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('visit.messagePlaceholder')}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-60"
              >
                {loading ? 'Sending...' : t('visit.submitButton')}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}