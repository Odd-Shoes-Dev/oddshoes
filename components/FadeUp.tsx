'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeUp({ children, className = '', style }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`fade-up ${className}`} style={style}>
      {children}
    </div>
  );
}
