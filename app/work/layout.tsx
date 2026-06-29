import { Metadata } from 'next';
import { createMetadata } from '../metadata';

export const metadata: Metadata = createMetadata({
  title: 'Portfolio — MVPs, SaaS & Mobile Apps We\'ve Built',
  description: 'Explore 40+ MVPs, SaaS platforms, and mobile apps built by Odd Shoes for faith-driven founders worldwide. From POS systems to AI tools — shipped fast, built to last.',
  path: '/work',
  keywords: [
    'startup portfolio',
    'MVP examples',
    'SaaS products built for founders',
    'mobile app portfolio',
    'shipped products startup studio',
    'AI app development',
    'faith tech products',
    'Christian startup portfolio',
    'school management software',
    'hospital management system',
    'SACCO management platform',
    'expense tracker app',
  ],
});

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
