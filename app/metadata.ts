import { Metadata } from 'next';

export const siteMetadata = {
  title: 'Odd Shoes — Christian Founders Startup Accelerator',
  description: 'We build MVPs, craft brands, and accelerate growth for founders who want to honour God with their business. Based in Kampala, serving Christian founders worldwide.',
  url: 'https://oddshoes.co',
  siteName: 'Odd Shoes',
  locale: 'en_US',
  type: 'website',
};

export function createMetadata({
  title,
  description,
  path = '',
  image = '/og-image.svg',
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const pageTitle = title 
    ? `${title} — Odd Shoes`
    : siteMetadata.title;
  
  const pageDescription = description || siteMetadata.description;
  const pageUrl = `${siteMetadata.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    applicationName: siteMetadata.siteName,
    keywords: [
      'Christian startup accelerator',
      'MVP development',
      'startup studio',
      'faith-based business',
      'Kampala startups',
      'Christian founders',
      'Kingdom business',
      'startup branding',
      'tech for good',
    ],
    authors: [{ name: 'Odd Shoes' }],
    creator: 'Odd Shoes',
    publisher: 'Odd Shoes',
    formatDetection: {
      telephone: false,
    },
    metadataBase: new URL(siteMetadata.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      locale: siteMetadata.locale,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteMetadata.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${pageTitle} — Odd Shoes`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [image],
      creator: '@oddshoes',
    },
    icons: {
      icon: [
        { url: '/logo.svg', type: 'image/svg+xml' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  };
}
