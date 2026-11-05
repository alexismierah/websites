export const metadata = {
  title: "Cybersecurity and Network | Unifix ICT Solutions",
  description:
    "Secure, reliable business networks with expert design, firewall configuration, access controls, and ongoing support.",
}

const features = [
  {
    title: "Network Design & Deployment",
    desc: "Plan and deploy reliable wired and wireless networks, with properly configured routers, switches, and Wi-Fi to support your team's needs.",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 28H20L24 18H16L12 28Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <rect
          x="8"
          y="28"
          width="20"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="40" r="3" stroke="currentColor" strokeWidth="3" />
        <circle cx="24" cy="40" r="3" stroke="currentColor" strokeWidth="3" />
        <line
          x1="32"
          y1="12"
          x2="32"
          y2="38"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="34"
          x2="40"
          y2="34"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Secure Network Configuration",
    desc: "Configure network segmentation, Wi-Fi security, and firewall policies to help protect business systems and keep connectivity dependable.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 10H30L34 16V26L30 32H14V10Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M20 32V42H10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="34"
          y1="21"
          x2="42"
          y2="21"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="21"
          x2="10"
          y2="21"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Cybersecurity & Access Controls",
    desc: "Apply practical security controls, including managed user access and secure remote connectivity, to reduce exposure to unauthorized access.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4L6 10V22C6 33 13.5 41 24 44C34.5 41 42 33 42 22V10L24 4Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="24"
          y1="10"
          x2="24"
          y2="38"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Monitoring & Ongoing Support",
    desc: "Get help with network health checks, troubleshooting, configuration updates, and maintenance to keep your environment reliable and protected.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.5 13.5C37.5 16.5 37.5 21.5 34.5 24.5L30 29L19 18L23.5 13.5C26.5 10.5 31.5 10.5 34.5 13.5Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 13L28 17M15 22L12 25"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M19 18L8 29C6 31 6 34 8 36C10 38 13 38 15 36L26 25"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="11.5" cy="32.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
]

export default function NetworkSecurityPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --blue: #3a89dd;
          --blue-dk: #2263a8;
          --blue-lt: #e8f3fd;
          --ink: #0d1117;
          --ink-2: #2d3748;
          --ink-3: #718096;
          --rule: rgba(13, 17, 23, 0.08);
        }

        .sc-root {
          font-family: 'Instrument Sans', sans-serif;
          color: var(--ink-2);
        }

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
          background-image: url('https://www.hotbot.com/articles/wp-content/uploads/2025/11/top-networking-equipment-in-2025-best-routers-switches-access-points-jw-scaled.jpeg');
          background-size: cover;
          background-position: center;
          opacity: 0.35;
          width: 100%;
          height: 100%;
        }

        .sc-hero-inner {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 5rem 1.5rem 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sc-hero-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: transparent;
          border: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: var(--blue);
        }

        .sc-hero-h1 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.1rem;
        }

        .sc-hero-p {
          font-size: 1.0625rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.55);
          max-width: 440px;
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

        /* Mobile-first: no sticky */
        .sc-about-left {
          position: static;
        }

        /* Desktop only: two columns + sticky */
        @media (min-width: 769px) {
          .sc-hero-inner {
            padding: 6rem 2.5rem 5rem;
          }

          .sc-about {
            padding: 6rem 2.5rem;
          }

          .sc-about-inner {
            grid-template-columns: 1fr 2fr;
            gap: 5rem;
          }

          .sc-about-left {
            position: sticky;
            top: 100px;
          }
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
          font-family: 'Instrument Sans', sans-serif;
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

        .sc-feat-row:last-child {
          border-bottom: none;
        }

        .sc-feat-row:hover {
          background: #f8fafc;
        }

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
          font-family: 'Instrument Sans', sans-serif;
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
            <div className="sc-hero-icon-wrap">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                opacity="0"
              >
                <path
                  d="M17 9V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-7c0-1.66-1.34-3-3-3zM9 7c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V7z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
            <h1 className="sc-hero-h1">Cybersecurity and Network</h1>
            <p className="sc-hero-p">
              Connect your business with dependable networks and practical
              cybersecurity built around the way your team works.
            </p>
          </div>
        </section>

        <section className="sc-about">
          <div className="sc-about-inner">
            <div className="sc-about-left">
              <span className="sc-section-tag">What we do</span>
              <h2 className="sc-about-h2">
                Connected networks, <em>stronger security</em>
              </h2>
              <p className="sc-about-p">
                We design, configure, and support secure networks for offices
                and commercial facilities. From wired and wireless connectivity
                to firewalls and access controls, we help keep your systems
                connected, easier to manage, and better protected.
              </p>
              <div className="sc-rule" />
            </div>

            <div className="sc-features">
              {features.map((feature) => (
                <div key={feature.title} className="sc-feat-row">
                  <div className="sc-feat-icon">{feature.icon}</div>
                  <div>
                    <p className="sc-feat-title">{feature.title}</p>
                    <p className="sc-feat-desc">{feature.desc}</p>
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
