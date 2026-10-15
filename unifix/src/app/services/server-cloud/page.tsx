export const metadata = {
  title: "Server & Cloud | Unifix ICT Solutions",
}

const features = [
  {
    title: "Server Infrastructure",
    desc: "Design, deployment, and optimization of physical and virtual server environments to support critical business workloads with performance and reliability in mind.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="32" height="20" rx="3" stroke="currentColor" strokeWidth="3"/>
        <path d="M16 20H32M16 28H28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M24 34V42M18 42H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Cloud Migration",
    desc: "Seamless transition of your applications, data, and business processes to secure cloud platforms with minimal downtime and strong governance.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 34C9.5 34 5 29.5 5 24C5 19 8.5 15 13.5 14.5C15.2 10 19.3 7 24 7C30.6 7 36 12.4 36 19C39.3 19.4 42 22.3 42 26C42 30.1 38.6 33.5 34.5 33.5H15Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M24 22V30M20 26H28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Virtualization & Backup",
    desc: "Smart virtualization strategies and backup systems that improve utilization, reduce hardware overhead, and protect your organization from data loss.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="3"/>
        <rect x="26" y="12" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="3"/>
        <rect x="26" y="26" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="3"/>
        <path d="M22 19H26M22 29H26" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Monitoring & Support",
    desc: "Continuous monitoring, maintenance, and technical support to keep your infrastructure stable, secure, and ready for growth as your business evolves.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8V18M24 40V22M8 24H18M30 24H40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
  },
]

export default function ServerCloudPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --blue: #3a89dd;
          --blue-dark: #2263a8;
          --blue-lt: #e8f3fd;
          --ink: #0d1117;
          --ink-2: #2d3748;
          --ink-3: #718096;
          --rule: rgba(13,17,23,0.08);
        }

        .sc-root { font-family: 'Outfit', sans-serif; color: var(--ink-2); }

        .sc-hero {
          position: relative;
          min-height: 48vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0d1117;
          text-align: center;
        }

        .sc-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          opacity: 0.35;
        }

        .sc-hero-inner {
          position: relative;
          max-width: 820px;
          margin: 0 auto;
          padding: 5rem 1.5rem 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sc-hero-h1 {
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 1rem;
        }

        .sc-hero-p {
          font-size: 1.0625rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.65);
          max-width: 500px;
          margin: 0;
        }

        .sc-about {
          background: #fff;
          padding: 4rem 1.25rem;
        }

        .sc-about-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }

        .sc-about-left { position: static; }

        @media (min-width: 769px) {
          .sc-hero-inner { padding: 6rem 2.5rem 5rem; }
          .sc-about { padding: 6rem 2.5rem; }
          .sc-about-inner { grid-template-columns: 1fr 2fr; gap: 5rem; }
          .sc-about-left { position: sticky; top: 100px; }
        }

        .sc-section-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 0.75rem;
        }

        .sc-about-h2 {
          font-size: clamp(1.9rem, 3vw, 2.6rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        .sc-about-h2 em {
          font-style: italic;
          color: var(--blue);
        }

        .sc-about-p {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.85;
          color: var(--ink-3);
          margin: 0;
        }

        .sc-rule {
          width: 40px;
          height: 2px;
          background: var(--blue);
          border-radius: 1px;
          margin-top: 1.5rem;
        }

        .sc-features {
          display: flex;
          flex-direction: column;
          gap: 1px;
          border: 1px solid var(--rule);
          border-radius: 18px;
          overflow: hidden;
        }

        .sc-feat-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 1.4rem 1.5rem;
          background: #fff;
          border-bottom: 1px solid var(--rule);
          transition: background 0.2s, transform 0.2s;
        }

        .sc-feat-row:last-child { border-bottom: none; }
        .sc-feat-row:hover { background: #f8fafc; }

        .sc-feat-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 12px;
          background: var(--blue-lt);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          margin-top: 1px;
        }

        .sc-feat-title {
          font-size: 1.05rem;
          color: var(--ink);
          margin: 0 0 4px;
          letter-spacing: -0.01em;
        }

        .sc-feat-desc {
          font-size: 0.875rem;
          font-weight: 300;
          line-height: 1.75;
          color: var(--ink-3);
          margin: 0;
        }
      `}</style>

      <div className="sc-root">
        <section className="sc-hero">
          <div className="sc-hero-bg" />
          <div className="sc-hero-inner">
            <h1 className="sc-hero-h1">Server &amp; Cloud</h1>
            <p className="sc-hero-p">High-performing, secure infrastructure designed to keep your business agile, resilient, and ready for growth.</p>
          </div>
        </section>

        <section className="sc-about">
          <div className="sc-about-inner">
            <div className="sc-about-left">
              <span className="sc-section-tag">What we do</span>
              <h2 className="sc-about-h2">Powering your business with <em>reliable digital infrastructure</em></h2>
              <p className="sc-about-p">
                We provide server, cloud, and virtualization solutions that help organizations run applications smoothly, protect critical data, and scale without unnecessary complexity. From deployment to optimization, our approach keeps your infrastructure dependable, secure, and aligned to business needs.
              </p>
              <div className="sc-rule" />
            </div>

            <div className="sc-features">
              {features.map((feat) => (
                <div key={feat.title} className="sc-feat-row">
                  <div className="sc-feat-icon">{feat.icon}</div>
                  <div>
                    <p className="sc-feat-title">{feat.title}</p>
                    <p className="sc-feat-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

