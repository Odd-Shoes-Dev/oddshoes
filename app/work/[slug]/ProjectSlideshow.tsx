'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProjectSlideshow({ 
  imageFolder, 
  screenshotCount 
}: { 
  imageFolder: string; 
  screenshotCount: number;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    if (screenshotCount <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshotCount);
    }, 8000);

    return () => clearInterval(interval);
  }, [screenshotCount]);

  if (screenshotCount === 0) {
    return null;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Screenshot Image */}
      <div style={{ 
        position: 'relative',
        width: '100%',
        height: '350px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
        backgroundColor: '#f8f6f2'
      }}>
        {Array.from({ length: screenshotCount }).map((_, index) => (
          <Image
            key={index}
            src={`/images/${imageFolder}/${index + 1}.png`}
            alt={`Screenshot ${index + 1}`}
            fill
            style={{ 
              objectFit: 'contain',
              transition: 'opacity 0.8s ease-in-out',
              opacity: currentSlide === index ? 1 : 0,
              position: 'absolute',
              top: 0,
              left: 0
            }}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
