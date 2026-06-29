import { Metadata } from 'next';
import { createMetadata } from '../metadata';

export const metadata: Metadata = createMetadata({
  title: 'Services — MVP Development, SaaS, Mobile Apps & AI',
  description: 'From MVP sprints to full SaaS platforms, mobile apps, AI integrations, and startup branding — Odd Shoes delivers production-ready products for faith-driven founders in weeks, not months.',
  path: '/services',
  keywords: [
    'MVP development services',
    'SaaS development company',
    'mobile app development',
    'AI app development',
    'startup branding services',
    'rapid prototyping',
    'product design sprint',
    'full-stack development',
    'React Next.js development',
    'Node.js Python development',
    'cloud infrastructure setup',
    'faith tech development',
    'Christian startup services',
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
