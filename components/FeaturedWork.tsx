'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import { projects, Project } from '@/app/work/projectsData';
import ProjectSideSheet from '@/components/ProjectSideSheet';

const categoryLabels: Record<string, string> = {
  'saas-ai': 'SaaS & AI',
  'web': 'Web Platform',
  'mobile': 'Mobile App',
};

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      {/* Stats strip */}
      <FadeUp>
        <div className="work-summary" style={{ marginBottom: '2.5rem' }}>
          <div className="work-summary__grid">
            <div className="work-summary__item">
              <span className="work-summary__num">14</span>
              <span className="work-summary__label">Projects Shipped</span>
            </div>
            <div className="work-summary__item">
              <span className="work-summary__num">100+</span>
              <span className="work-summary__label">MVPs Launched</span>
            </div>
            <div className="work-summary__item">
              <span className="work-summary__num">15+</span>
              <span className="work-summary__label">Products Live</span>
            </div>
            <div className="work-summary__item">
              <span className="work-summary__num">50%</span>
              <span className="work-summary__label">To His Kingdom</span>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Cards */}
      <FadeUp>
        <div className="project-cards-grid">
          {projects.slice(0, 6).map(project => (
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

      <FadeUp style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Link href="/work" className="btn btn--outline btn--small">View All 14 Projects →</Link>
      </FadeUp>

      <ProjectSideSheet project={selectedProject} onClose={handleClose} />
    </>
  );
}
