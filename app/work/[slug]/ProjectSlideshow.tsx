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

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    if (screenshotCount <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshotCount);
    }, 3000);

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
        height: '500px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
      }}>
        <Image
          src={`/images/${imageFolder}/${currentSlide + 1}.png`}
          alt={`Screenshot ${currentSlide + 1}`}
          fill
          style={{ objectFit: 'cover' }}
          priority={currentSlide === 0}
        />
      </div>
    </div>
  );
}
