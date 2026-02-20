import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import PodRequestForm from '@/components/PodRequestForm';

export const metadata = {
  title: 'Billy Pods — Odd Shoes',
  description: 'Intern Pods (1–3 vetted interns + coordinator) to help startups ship without hiring.'
};

export default function BillyPodsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="label label--coral">Billy Pods</p>
          <h1>For startups that need shipping capacity fast</h1>
          <p>Add a pod to your sprint — without hiring. Intern Pods: 1–3 vetted interns + a Pod Coordinator + weekly reporting.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">Meet the Intern Pod</p>
          </FadeUp>

          <div className="pod-features" style={{ marginTop: '1.5rem' }}>
            <div className="pod-feature">
              <Image src="/icons/clock.svg" alt="Shortlist" width={48} height={48} />
              <h4>Shortlist in 3–5 days</h4>
              <p>We send 3–5 matched profiles quickly so you can pick and kick off.</p>
            </div>
            <div className="pod-feature">
              <Image src="/icons/rocket.svg" alt="Kickoff" width={48} height={48} />
              <h4>Kickoff in ~7 days</h4>
              <p>Pod Coordinator handles daily rhythm — you assign tasks like a teammate.</p>
            </div>
            <div className="pod-feature">
              <Image src="/icons/document.svg" alt="Report" width={48} height={48} />
              <h4>Weekly Pod Report</h4>
              <p>Weekly status, tasks shipped, and blockers — without babysitting.</p>
            </div>
            <div className="pod-feature">
              <Image src="/icons/shield.svg" alt="Guarantee" width={48} height={48} />
              <h4>Replacement guarantee</h4>
              <p>If an intern isn't working out we replace them quickly.</p>
            </div>
          </div>

          

          <div style={{ marginTop: '2rem' }}>
            <h3>Choose Your Track</h3>
            <div className="tracks-grid">
              <div className="track-card">
                <Image src="/icons/check.svg" alt="QA" width={36} height={36} />
                <h4>QA Pod</h4>
                <p>Test cases • regression passes • bug triage • release checklists</p>
                <p className="muted">Best for teams shipping weekly who want fewer surprises</p>
              </div>
              <div className="track-card">
                <Image src="/icons/code.svg" alt="React" width={36} height={36} />
                <h4>React Pod</h4>
                <p>UI tickets • component cleanup • bugfixes • page builds</p>
                <p className="muted">Best for teams drowning in UI backlog</p>
              </div>
              <div className="track-card">
                <Image src="/icons/chart.svg" alt="Python/Data" width={36} height={36} />
                <h4>Python/Data Pod</h4>
                <p>Dashboards • ETL cleanup • reporting automation • data QA</p>
                <p className="muted">Best for founders who need visibility without manual reporting</p>
              </div>
              <div className="track-card">
                <Image src="/icons/settings.svg" alt="Support" width={36} height={36} />
                <h4>Support Engineering Pod</h4>
                <p>Docs • internal tools • integration support • ticket cleanup</p>
                <p className="muted">Best for reducing support load and operational drag</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <div style={{ marginTop: '1.25rem' }}>
              <PodRequestForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <p className="muted">© 2026 Billy by Blue Ox Kampus · Mbarara, Uganda</p>
        </div>
      </section>
    </>
  );
}
