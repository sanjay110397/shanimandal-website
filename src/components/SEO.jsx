import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export function SEO({ title, description, image }) {
  const { t } = useTranslation();
  
  const defaultTitle = t('home.title');
  const defaultDescription = t('home.description');
  const defaultImage = 'https://images.unsplash.com/photo-1668770109988-24fe041e6b8f?w=1200&h=630&fit=crop';
  
  const siteTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteImage = image || defaultImage;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      
      {/* Structured Data for Temple */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": "Shani Mandal Temple",
          "alternateName": "शनि मंडळ मंदिर",
          "description": siteDescription,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nandurbar",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Su 06:00-12:00,16:00-21:00",
          "telephone": "+91XXXXXXXXXX",
          "image": siteImage
        })}
      </script>
    </Helmet>
  );
}
