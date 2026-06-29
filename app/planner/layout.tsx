import { Metadata } from 'next';
import { createMetadata } from '../metadata';

export const metadata: Metadata = createMetadata({
  title: 'Project Planner — Tell Us What You Want to Build',
  description: 'Use the Odd Shoes project planner to scope your MVP, SaaS, or mobile app. Answer a few questions and get a free consultation on timeline, budget, and tech stack.',
  path: '/planner',
  keywords: [
    'startup project planner',
    'MVP cost estimator',
    'app development quote',
    'free startup consultation',
    'build my MVP',
    'project scoping tool',
    'app idea to product',
  ],
});

export default function PlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
