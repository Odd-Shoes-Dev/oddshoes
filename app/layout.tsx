import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';
import { createMetadata } from './metadata';

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Odd Shoes',
    url: 'https://oddshoes.dev',
    logo: 'https://oddshoes.dev/logo.svg',
    description: 'The startup studio for faith-driven founders and investors worldwide. We build MVPs, SaaS platforms, and mobile apps — 50% of profits fund Kingdom work.',
    areaServed: 'Worldwide',
    knowsLanguage: 'en',
    sameAs: [
      'https://twitter.com/oddshoes',
      'https://www.linkedin.com/company/oddshoes',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Business',
      email: 'hello@oddshoes.dev',
      url: 'https://oddshoes.dev/contact',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UG',
      addressLocality: 'Mbarara',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#e05a3a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Odd Shoes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
