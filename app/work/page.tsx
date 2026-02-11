'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import { projects } from './projectsData';
import './hexagon.css';

export default function WorkPage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '45vh', paddingTop: '5rem', paddingBottom: '2rem' }}>
        <div className="hero__content container">
          <p className="label label--coral hero__label">Portfolio</p>
          <h1>Our Work</h1>
          <p className="hero__subtitle">
            MVPs, SaaS platforms, and mobile apps we've built for Kingdom-driven founders and businesses.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
        <div className="container">
          {/* Filter Buttons */}
          <FadeUp>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem', 
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <button 
                className={`btn btn--small ${filter === 'all' ? 'btn--primary' : 'btn--outline'}`}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button 
                className={`btn btn--small ${filter === 'saas-ai' ? 'btn--primary' : 'btn--outline'}`}
                onClick={() => setFilter('saas-ai')}
              >
                SaaS & AI
              </button>
              <button 
                className={`btn btn--small ${filter === 'web' ? 'btn--primary' : 'btn--outline'}`}
                onClick={() => setFilter('web')}
              >
                Web Platforms
              </button>
              <button 
                className={`btn btn--small ${filter === 'mobile' ? 'btn--primary' : 'btn--outline'}`}
                onClick={() => setFilter('mobile')}
              >
                Mobile Apps
              </button>
            </div>
          </FadeUp>

          {/* Hexagonal Grid */}
          <div className="hex-grid-wrapper">
            <ul className="hexagon-grid">
              {filteredProjects.map((project, index) => {
                // Determine hex class based on position for offset pattern
                let hexClass = 'hex';
                if (index % 10 >= 5) hexClass += ' secondary';
                
                // Larger logos for specific projects
                let logoSize = '60%';
                if (project.slug === 'nextgenhims') logoSize = '95%';
                else if (['davinci-analytics', 'lightbeam-media'].includes(project.slug)) logoSize = '80%';
                else if (['picflair', 'headshotcam'].includes(project.slug)) logoSize = '70%';
                
                return (
                  <li key={project.id} className={hexClass}>
                    <div className="hex-in">
                      <Link 
                        href={`/work/${project.slug}`} 
                        className={`hex-link ${project.logoText ? 'hex-text-logo' : ''}`}
                        style={{ 
                          backgroundImage: project.logoText ? 'none' : `url(${project.logoPath})`,
                          backgroundColor: project.logoBackgroundColor || '#ffffff',
                          backgroundSize: project.logoText ? 'auto' : logoSize
                        }}
                      >
                        {project.logoText && (
                          <span className="hex-logo-text">
                            {project.slug === 'glosacco' ? (
                              <>Glo <span style={{ color: '#4ade80' }}>SACCO</span></>
                            ) : project.slug === 'instantugc' ? (
                              <>Instant<span style={{ fontWeight: '700' }}>UGC</span></>
                            ) : project.slug === 'devfest-qa' ? (
                              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', height: '60px' }}>
                                <div style={{ width: '12px', height: '100%', backgroundColor: '#3b82f6', borderRadius: '20px' }}></div>
                                <div style={{ width: '12px', height: '100%', backgroundColor: '#22c55e', borderRadius: '20px' }}></div>
                                <div style={{ width: '12px', height: '100%', backgroundColor: '#eab308', borderRadius: '20px' }}></div>
                                <div style={{ width: '12px', height: '100%', backgroundColor: '#ef4444', borderRadius: '20px' }}></div>
                              </div>
                            ) : (
                              project.logoText
                            )}
                          </span>
                        )}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <FadeUp className="container">
          <h2>Ready to build something<br />that matters?</h2>
          <p>Start with our project planner to share your vision, or book a call if you prefer to chat first.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/planner" className="btn btn--outline-white">Launch Project Planner</Link>
            <a href="https://calendly.com/builtbyoddshoes" target="_blank" rel="noopener noreferrer" className="btn btn--outline-white">Book a Call</a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
