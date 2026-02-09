import { Metadata } from 'next';
import { createMetadata } from '../metadata';

export const metadata: Metadata = createMetadata({
  title: 'Contact',
  description: 'Whether you have a fully baked idea or a napkin sketch, we\'d love to hear about it. Let\'s build something eternal together.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
