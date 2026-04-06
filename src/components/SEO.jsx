import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, type = 'website', image, url, schema }) => {
  const siteTitle = 'Κοντοπούλου Άντρη - Ορθοδοντικό Ιατρείο';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = 'https://antri-orthodontics.gr';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultDescription = 'Εξειδικευμένο ορθοδοντικό ιατρείο στη Λαμία και τη Μακρακώμη. Σύγχρονες θεραπείες Invisalign, σιδεράκια και προληπτική ορθοδοντική για παιδιά και ενήλικες.';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={`${siteUrl}${image}`} />}

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
