import { Metadata } from 'next';
import { createMetadata } from '../metadata';

export const metadata: Metadata = createMetadata({
  title: 'Contact Us — Start Your Project Today',
  description: 'Get in touch with Odd Shoes. Whether you have a fully baked idea or a napkin sketch, we\'ll turn it into a live product. Serving faith-driven founders and investors worldwide.',
  path: '/contact',
  keywords: [
    'hire startup studio',
    'contact Odd Shoes',
    'MVP development quote',
    'build my app',
    'hire faith tech developers',
    'startup consultation',
    'book a call startup studio',
    'Christian startup help',
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
