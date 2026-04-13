'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import { projects, Project } from './projectsData';
import ProjectSideSheet from '@/components/ProjectSideSheet';

const categoryLabels: Record<string, string> = {
  'saas-ai': 'SaaS & AI',
  'web': 'Web Platform',
  'mobile': 'Mobile App',
};

const filters = [
  { key: 'all', label: 'All Work' },
  { key: 'saas-ai', label: 'SaaS & AI' },
  { key: 'web', label: 'Web Platforms' },
  { key: 'mobile', label: 'Mobile Apps' },
];

// ─── Main Page ────────────────────────────────────────────────
export default function WorkPage() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '5rem', paddingBottom: '2rem' }}>
        <div className="hero__content container">
          <p className="label label--coral hero__label">Portfolio</p>
          <h1>Our Work</h1>
          <p className="hero__subtitle">
            MVPs, SaaS platforms, and mobile apps built for Kingdom-driven founders and businesses.
          </p>
        </div>
      </section>


      {/* Filter Tabs */}
      <div className="filter-bar">
        <div className="container">
          <div className="filter-tabs">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                className={`filter-tab${filter === key ? ' active' : ''}`}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <FadeUp>
            <div className="project-cards-grid">
              {filteredProjects.map(project => (
                <button
                  key={project.id}
                  className="project-card-v2"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open ${project.name} details`}
                  style={{ '--card-gradient': project.gradient } as React.CSSProperties}
                >
                  <div className="project-card-v2__body">
                    <div className="project-card-v2__name">{project.name}</div>
                    <div className="project-card-v2__tag">{project.tag}</div>
                    <span className="project-badge">{categoryLabels[project.category]}</span>
                  </div>
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <FadeUp className="container">
          <h2>Ready to build something<br />that matters?</h2>
          <p>Start with our project planner or book a call if you prefer to chat first.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/planner" className="btn btn--outline-white">Launch Project Planner</Link>
            <a
              href="https://calendly.com/builtbyoddshoes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-white"
            >
              Book a Call
            </a>
          </div>
        </FadeUp>
      </section>

      {/* Side Sheet */}
      <ProjectSideSheet project={selectedProject} onClose={handleClose} />
    </>
  );
}
