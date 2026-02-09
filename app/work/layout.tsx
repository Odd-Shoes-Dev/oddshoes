import { Metadata } from 'next';
import { createMetadata } from '../metadata';

export const metadata: Metadata = createMetadata({
  title: 'Our Work',
  description: 'Every project is a partnership. Every product is a ministry. See the startups we\'ve helped bring to life — from napkin sketch to launched product.',
  path: '/work',
});

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
