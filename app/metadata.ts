import { Metadata } from 'next';

export const siteMetadata = {
  title: 'Odd Shoes: The Tech Partner for Christian Founders',
  description: 'The startup studio for faith-driven founders and investors. No tech co-founder? We turn your vision into a live MVP in 5–14 days. 100+ shipped, 50% of profits fund Kingdom work.',
  url: 'https://oddshoes.dev',
  siteName: 'Odd Shoes',
  locale: 'en_US',
  type: 'website',
};

const baseKeywords = [
  'Odd Shoes',
  'MVP development',
  'Christian startup accelerator',
  'faith-based startup studio',
  'Christian founders',
  'Christian tech company',
  'Kingdom business',
  'faith tech',
  'faith-driven investors',
  'Christian venture capital',
  'faith-based tech startup',
  'tech for good',
  'startup studio for Christian founders',
  'build my startup',
  'SaaS development',
  'mobile app development',
  'startup branding',
  'hire startup developers',
  'MVP in 2 weeks',
  'remote startup studio',
  'outsource MVP development',
  'startup CTO as a service',
];

export function createMetadata({
  title,
  description,
  path = '',
  image = '/og-image.svg',
  keywords = [],
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
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
    keywords: [...keywords, ...baseKeywords],
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
