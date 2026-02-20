"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function PodRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    track: 'Not sure',
    stack: '',
    tasks: '',
    duration: '8',
    podSize: '1'
  });
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/submit-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: `Billy Pod - ${formData.track}`,
          description: `Website: ${formData.website}\n\nStack & Tools: ${formData.stack}\n\nTop tasks:\n${formData.tasks}\n\nDuration: ${formData.duration} weeks\nPod size: ${formData.podSize}`,
          services: [`Billy Pod: ${formData.track}`]
        })
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 4000);
        setFormData({ name: '', email: '', company: '', website: '', track: 'Not sure', stack: '', tasks: '', duration: '8', podSize: '1' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form className="planner-form" onSubmit={handleSubmit} style={{ maxWidth: 820 }}>
      <div className="planner-section">
        <h3 className="planner-section__title">Request Your Pod Profiles</h3>
        <p className="planner-section__lead">Tell us the essentials and we’ll send 3–5 matched intern profiles within a few business days.</p>
        <div className="planner-grid">
          <div className="form-group">
            <label htmlFor="name">Full name *</label>
            <input id="name" name="name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Work email *</label>
            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" value={formData.company} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" value={formData.website} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="track">Which Pod lane *</label>
          <select id="track" name="track" value={formData.track} onChange={handleChange}>
            <option>Not sure</option>
            <option>QA</option>
            <option>React</option>
            <option>Python/Data</option>
            <option>Support Engineering</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="stack">Your stack & tools</label>
          <input id="stack" name="stack" placeholder="e.g. React + Next.js + TypeScript + Jira + GitHub" value={formData.stack} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="tasks">Top 3–5 tasks (brief)</label>
          <textarea id="tasks" name="tasks" rows={4} value={formData.tasks} onChange={handleChange} placeholder="Short task list or ticket links" />
        </div>

        <div style={{ display: 'flex', gap: '.75rem' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label>Duration</label>
            <select name="duration" value={formData.duration} onChange={handleChange}>
              <option value="8">8 weeks</option>
              <option value="12">12 weeks</option>
              <option value="16">16 weeks</option>
            </select>
          </div>
          <div className="form-group" style={{ width: 160 }}>
            <label>Pod size</label>
            <select name="podSize" value={formData.podSize} onChange={handleChange}>
              <option value="1">Solo Pod (1)</option>
              <option value="3">Team Pod (3)</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', marginTop: '1rem' }}>
          <button type="submit" className="btn btn--primary" disabled={status === 'sending' || status === 'success'} style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
            {status === 'sending' && 'Sending…'}
            {status === 'success' && (
              <>
                <Image src="/icons/check.svg" alt="" width={18} height={18} style={{ filter: 'brightness(0) invert(1)' }} />
                Request received
              </>
            )}
            {status === 'idle' && 'Request Pod Profiles'}
            {status === 'error' && 'Request Pod Profiles'}
          </button>
          {status === 'success' && <div style={{ color: 'var(--green)', fontWeight: 600 }}>Request received — check your email.</div>}
          {status === 'error' && <div style={{ color: 'var(--coral)', fontWeight: 600 }}>Failed to send. Try again later.</div>}
        </div>
      </div>
    </form>
  );
}
