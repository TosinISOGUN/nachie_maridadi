import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "Nachie Maridadi — Bespoke African Fashion | Nairobi",
  description = "Nachie Maridadi creates bespoke women's clothing with premium Ankara and curated fabrics in Nairobi, Kenya. Customized with love.",
  image = "https://nachiemaridadi.vercel.app/og-image.jpg",
  url = "https://nachiemaridadi.vercel.app/",
  type = "website",
}: SEOProps) => {
  const siteName = "Nachie Maridadi";
  const twitterHandle = "@nachiemaridadi"; // Replace if you have one

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
    </Helmet>
  );
};

export default SEO;
