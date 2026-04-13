'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/app/work/projectsData';

const categoryLabels: Record<string, string> = {
  'saas-ai': 'SaaS & AI',
  'web': 'Web Platform',
  'mobile': 'Mobile App',
};

export default function ProjectSideSheet({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [slide, setSlide] = useState(0);
  const isOpen = project !== null;
  const folder = project ? (project.imageFolder || project.slug) : '';
  const count = project?.screenshotCount || 0;

  useEffect(() => { setSlide(0); }, [project?.slug]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`side-sheet-overlay${isOpen ? ' side-sheet-overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`side-sheet${isOpen ? ' side-sheet--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={project?.name}
      >
        {project && (
          <>
            {/* Top bar */}
            <div className="side-sheet__topbar">
              <button className="side-sheet__back" onClick={onClose}>
                ← All Projects
              </button>
              <button className="side-sheet__close" onClick={onClose} aria-label="Close">
                ✕
              </button>
            </div>

            {/* Screenshots */}
            {count > 0 && (
              <div className="side-sheet__slides">
                {Array.from({ length: count }).map((_, i) => (
                  <div key={i} className={`side-sheet__slide${slide === i ? ' active' : ''}`}>
                    <Image
                      src={`/images/${folder}/${i + 1}.png`}
                      alt={`${project.name} screenshot ${i + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      priority={i === 0}
                    />
                  </div>
                ))}
                {count > 1 && (
                  <div className="side-sheet__slide-dots">
                    {Array.from({ length: count }).map((_, i) => (
                      <button
                        key={i}
                        className={`side-sheet__dot${slide === i ? ' active' : ''}`}
                        onClick={() => setSlide(i)}
                        aria-label={`Screenshot ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Body */}
            <div className="side-sheet__body">

              {/* Header */}
              <div className="side-sheet__header">
                <span className="project-badge project-badge--coral">
                  {categoryLabels[project.category]}
                </span>
                <h2 className="side-sheet__title">{project.name}</h2>
                <p className="side-sheet__subtitle">{project.subtitle}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--small"
                  style={{ display: 'inline-flex' }}
                >
                  View Live Site ↗
                </a>
              </div>

              {/* Overview */}
              <div className="side-sheet__section">
                <h3 className="side-sheet__section-title">Overview</h3>
                <p>{project.overview}</p>
              </div>

              {/* Tech Stack */}
              <div className="side-sheet__section">
                <h3 className="side-sheet__section-title">Tech Stack</h3>
                <div className="side-sheet__pills">
                  {project.techStack.map(tech => (
                    <span key={tech} className="side-sheet__pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="side-sheet__two-col">
                <div>
                  <div className="label" style={{ color: 'var(--coral)', marginBottom: '.5rem' }}>
                    The Challenge
                  </div>
                  <p style={{ fontSize: '.875rem', color: 'var(--gray-600)', lineHeight: '1.7', margin: 0 }}>
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <div className="label" style={{ marginBottom: '.5rem' }}>Our Solution</div>
                  <p style={{ fontSize: '.875rem', color: 'var(--gray-600)', lineHeight: '1.7', margin: 0 }}>
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="side-sheet__section">
                <h3 className="side-sheet__section-title">Key Features</h3>
                <ul className="side-sheet__features">
                  {project.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <div className="side-sheet__section">
                  <h3 className="side-sheet__section-title">Results</h3>
                  <div className="side-sheet__results">
                    {project.results.map(r => (
                      <div key={r.metric} className="side-sheet__result">
                        <div className="side-sheet__result-metric">{r.metric}</div>
                        <div className="side-sheet__result-desc">{r.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="side-sheet__cta">
                <Link href="/planner" className="btn btn--primary">Start Your Project</Link>
                <a
                  href="https://calendly.com/builtbyoddshoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
