"use client"

import Image from "next/image"
import Link from "next/link"
import { services } from "./services/services-data"

const partners = [
  { name: "Ablerex", logo: "/partners/Ablerex.png" },
  { name: "Aiphone", logo: "/partners/Aiphone.png" },
  { name: "APC", logo: "/partners/Apc.png" },
  { name: "Axis", logo: "/partners/Axis.png" },
  { name: "Vertiv", logo: "/partners/Vertiv.png" },
  { name: "Teltonika", logo: "/partners/Teltonika.png" },
  { name: "Western Digital", logo: "/partners/Western Digital.png" },
  { name: "Yeastar", logo: "/partners/Yeastar.png" },
  { name: "ZKTeco", logo: "/partners/ZKTeco.png" },
  { name: "Belden", logo: "/partners/Belden.png" },
  { name: "Synology", logo: "/partners/Synology.png" },
  { name: "Cisco", logo: "/partners/Cisco.png" },
  { name: "CommScope", logo: "/partners/CommScope.png" },
  { name: "WatchGuard", logo: "/partners/WatchGuard.png" },
  { name: "Starlink", logo: "/partners/Starlink.png" },
  { name: "Dahua", logo: "/partners/Dahua.png" },
  { name: "TOA", logo: "/partners/Toa.png" },
  { name: "KSTAR", logo: "/partners/KSTAR.png" },
  { name: "Deltapath", logo: "/partners/Deltapath.png" },
  { name: "Dintek", logo: "/partners/Dintek.png" },
  { name: "D-Link", logo: "/partners/D-link.png" },
  { name: "Eaton", logo: "/partners/Eaton.png" },
  { name: "LG", logo: "/partners/LG.png" },
  { name: "Fortinet", logo: "/partners/Fortinet.png" },
  { name: "Grandstream", logo: "/partners/Grandstream.png" },
  { name: "HID", logo: "/partners/HID.png" },
  { name: "Hikvision", logo: "/partners/Hikvision.png" },
  { name: "Honeywell", logo: "/partners/Honeywell.png" },
  { name: "Ubiquiti", logo: "/partners/Ubiquiti.png" },
  { name: "HPE Aruba", logo: "/partners/HPE Aruba.png" },
  { name: "NEC", logo: "/partners/NEC.png" },
  { name: "Panasonic", logo: "/partners/Panasonic.png" },
  { name: "Panduit", logo: "/partners/Panduit.png" },
  { name: "ITC", logo: "/partners/ITC.png" },
  { name: "Premium Line", logo: "/partners/Premiumline.png" },
  { name: "QNAP", logo: "/partners/Qnap.png" },
  { name: "Ruijie", logo: "/partners/Ruijie.png" },
  { name: "Samsung", logo: "/partners/Samsung.png" },
  { name: "Sangfor", logo: "/partners/Sangfor.png" },
  { name: "Schneider", logo: "/partners/Schneider.png" },
  { name: "Seagate", logo: "/partners/Seagate.png" },
  { name: "Sophos", logo: "/partners/Sophos.png" },
  { name: "TP-Link", logo: "/partners/TP-Link.png" },
]

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --blue:      #3a89dd;
          --blue-dark: #2a6db8;
          --blue-xlt:  #f0f7ff;
          --ink:       #111827;
          --ink-2:     #374151;
          --ink-3:     #6b7280;
          --surface:   #f9fafb;
          --white:     #ffffff;
          --border:    rgba(17,24,39,0.09);
          --border-2:  rgba(17,24,39,0.05);
        }

        .root {
          --home-gutter: calc(var(--content-gutter) + 2rem);
          --font-sans: 'Instrument Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
          --font-heading: var(--font-sans);
          font-family: var(--font-sans);
          background: var(--white);
          color: var(--ink);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        /* ── HERO ── */
        .hero {
          position: relative; min-height: 100vh; min-height: 100svh;
          display: flex; align-items: center; overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80');
          background-size: cover; background-position: center; z-index: 0;
          transform: scale(1.02);
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(100deg, rgba(9,19,33,0.88) 0%, rgba(9,19,33,0.72) 47%, rgba(9,19,33,0.20) 100%);
          z-index: 1;
        }
        .hero-content {
          position: relative; z-index: 2;
          max-width: 1000px; margin: 0;
          padding: 7rem var(--home-gutter) 6rem; width: 100%;
        }
        .hero h1 {
          font-family: var(--font-heading);
          font-size: clamp(2.35rem, 4.2vw, 3.6rem);
          font-weight: 400;
          line-height: 1.08;
          color: #fff;
          max-width: none;
          margin-bottom: 1.25rem;
          letter-spacing: 0;
        }
        .hero h1 em { font-style: italic; font-weight: 400; color: #93c5fd; }
        .hero-title-line { white-space: nowrap; }
        .hero-sub {
          font-size: 1.02rem;
          color: rgba(255,255,255,0.72);
          max-width: 54ch;
          line-height: 1.75;
          margin-bottom: 2rem;
          font-weight: 400;
        }
        .hero-actions {
          display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;
          transform: translateY(1.5rem);
        }
        .btn-primary, .btn-outline, .btn-ghost-white2 {
          display: inline-flex; align-items: center; justify-content: center;
          height: 44px; padding: 0 22px;
          font-family: var(--font-sans); font-size: 0.8125rem; font-weight: 600;
          text-decoration: none;
        }
        .btn-primary {
          background: var(--blue); color: #fff;
          border-radius: 9999px;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 8px 24px rgba(20,91,163,0.25);
        }
        .btn-primary:hover { background: var(--blue-dark); transform: translateY(-1px); box-shadow: 0 12px 28px rgba(20,91,163,0.35); }
        /* ── ABOUT ── */
        .about { background: var(--white); padding: 7rem var(--home-gutter); }
        .about-inner {
          max-width: none; margin: 0;
          display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;
        }
        .eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--blue); margin-bottom: 1.25rem; }
        .about h2 {
          font-family: var(--font-heading);
          font-size: clamp(1.85rem, 3.1vw, 2.7rem);
          font-weight: 400; line-height: 1.1; letter-spacing: -0.02em; color: var(--ink); margin-bottom: 1.25rem;
        }
        .about h2 em { font-style: italic; color: var(--blue); }
        .about p { font-size: 0.9rem; color: var(--ink-3); line-height: 1.85; font-weight: 400; margin-bottom: 1rem; }
        .btn-outline {
          margin-top: 0.75rem;
          border: 1px solid var(--blue);
          background: var(--blue);
          border-radius: 9999px;
          color: #fff;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-outline:hover { border-color: var(--blue-dark); color: #fff; background: var(--blue-dark); }
        .about-image { border-radius: 8px; overflow: hidden; aspect-ratio: 4/3; }
        .about-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
        .about-image:hover img { transform: scale(1.03); }

        /* ── SERVICES ── */
        .services { background: var(--surface); padding: 7rem var(--home-gutter); border-top: 1px solid var(--border-2); }
        .services-inner { max-width: none; margin: 0; }
        .services-head {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 3.5rem; gap: 2rem; flex-wrap: wrap;
        }
        .services-head h2 {
          font-family: var(--font-heading);
          font-size: clamp(1.85rem, 3.1vw, 2.7rem); font-weight: 400; line-height: 1.1; letter-spacing: -0.02em; color: var(--ink);
        }
        .services-head h2 em { font-style: italic; color: var(--blue); }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .svc-card {
          background: var(--white); border: 1px solid var(--border); border-radius: 8px;
          overflow: hidden; display: flex; flex-direction: column;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .svc-card:hover { box-shadow: 0 12px 40px rgba(58,137,221,0.12); transform: translateY(-4px); }
        .svc-img { object-fit: cover; display: block; transition: transform 0.5s ease; }
        .svc-card:hover .svc-img { transform: scale(1.04); }
        .svc-img-wrap { position: relative; height: 210px; overflow: hidden; flex-shrink: 0; }
        .svc-body { padding: 1.75rem; display: flex; flex-direction: column; flex: 1; }
        .svc-num { font-size: 0.78rem; font-style: normal; color: var(--ink-3); margin-bottom: 0.5rem; }
        .svc-card h3 { font-family: var(--font-heading); font-size: 1rem; font-weight: 600; letter-spacing: -0.01em; color: var(--ink); margin-bottom: 0.625rem; }
        .svc-card p { font-size: 0.8125rem; color: var(--ink-3); line-height: 1.75; font-weight: 400; flex: 1; }
        .svc-footer {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-2);
        }
        .svc-tag {
          font-size: 10px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--blue); background: var(--blue-xlt); border-radius: 999px;
          padding: 3px 10px; border: 1px solid rgba(58,137,221,0.15);
        }
        .svc-link {
          font-size: 0.78rem; color: var(--blue); text-decoration: none; font-weight: 600;
          display: inline-flex; align-items: center; gap: 5px; transition: gap 0.2s;
        }
        .svc-card:hover .svc-link { gap: 9px; }

        /* ── PARTNERS ── */
        .partners { padding: 6rem var(--home-gutter); background: var(--white); }
        .partners-inner { max-width: none; margin: 0; }
        .partners-head { text-align: center; margin-bottom: 2.75rem; }
        .partners-head h2 {
          font-family: var(--font-heading);
          font-size: 1.75rem; font-weight: 400; line-height: 1.1; letter-spacing: -0.02em; color: var(--ink); margin-top: 0.5rem;
        }

        /* ── MARQUEE ── */
        .marquee-track {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .marquee-inner {
          display: flex; align-items: center; gap: 2.5rem;
          width: max-content;
          animation: marquee 72s linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partner-logo-wrap {
          position: relative; display: flex; align-items: center; justify-content: center;
          width: 150px; height: 64px; flex-shrink: 0;
        }
        .partner-logo-wrap img { max-width: 120px; max-height: 44px; object-fit: contain; display: block; }
        .partner-logo-wrap img[alt="Panasonic"] { max-width: 144px; max-height: 53px; }
        .partner-logo-wrap.partner-logo-large { width: 180px; }
        .partner-logo-wrap.partner-logo-large img { max-width: 150px; max-height: 56px; }
        .partner-logo-wrap img[alt="Grandstream"],
        .partner-logo-wrap img[alt="Sangfor"],
        .partner-logo-wrap img[alt="Seagate"],
        .partner-logo-wrap img[alt="Panasonic"],
        .partner-logo-wrap img[alt="WatchGuard"] { transform: translateY(-8px); }
        .partner-logo-wrap img[alt="TOA"] { transform: translateY(-7px); }
        .partner-logo-wrap.partner-logo-prominent { width: 200px; }
        .partner-logo-wrap.partner-logo-prominent img { max-width: 180px; max-height: 60px; }
        .partner-logo-wrap.partner-logo-prominent img[alt="Sophos"] { max-width: 150px; max-height: 50px; }
        .partner-logo-wrap.partner-logo-compact-brand { width: 165px; }
        .partner-logo-wrap.partner-logo-compact-brand img { max-width: 135px; max-height: 50px; }
        .partner-text-badge {
          display: none; align-items: center; justify-content: center;
          font-family: var(--font-sans);
          font-size: 0.78rem; font-weight: 600; color: var(--ink-2);
          letter-spacing: -0.01em; white-space: nowrap;
          padding: 6px 14px; border: 1.5px solid var(--border); border-radius: 6px;
        }

        /* ── CTA ── */
        .cta { position: relative; overflow: hidden; padding: 7rem var(--home-gutter); }
        .cta-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80');
          background-size: cover; background-position: center; z-index: 0;
        }
        .cta-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(15,30,60,0.88) 0%, rgba(58,137,221,0.65) 100%);
          z-index: 1;
        }
        .cta-inner {
          position: relative; z-index: 2; max-width: none; margin: 0;
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
        }
        .cta h2 {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 3.1vw, 2.8rem); font-weight: 400; letter-spacing: -0.02em; color: #fff; line-height: 1.1;
        }
        .cta h2 em { font-style: italic; color: #bfdbfe; }
        .cta-right { display: flex; flex-direction: column; gap: 1.25rem; align-items: flex-start; }
        .cta p { font-size: 0.95rem; color: rgba(255,255,255,0.72); line-height: 1.8; font-weight: 400; }
        .cta-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-ghost-white2 {
          border: 1px solid rgba(255,255,255,0.35);
          color: rgba(255,255,255,0.92);
          border-radius: 9999px;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-ghost-white2:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.08); }

        .root a:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }

        @media (max-width: 900px) {
          .about-inner, .cta-inner { grid-template-columns: 1fr; gap: 3rem; }
          .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .services-head { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 1100px) {
          .root { --home-gutter: var(--content-gutter); }
        }
        @media (max-width: 600px) {
          .hero-overlay { background: linear-gradient(90deg, rgba(9,19,33,0.88), rgba(9,19,33,0.54)); }
          .root .hero-content { padding: 6rem var(--home-gutter) 4rem; }
          .hero h1 { font-size: clamp(1.35rem, 6.2vw, 2.35rem); }
          .hero-sub { font-size: 0.94rem; }
          .hero-actions { gap: 1.25rem; transform: translateY(1rem); }
          .about, .services, .partners, .cta { padding-inline: var(--home-gutter); }
          .about-inner { gap: 2rem; }
          .services-grid { grid-template-columns: 1fr; }
          .svc-img-wrap { height: 200px; }
          .cta-inner { gap: 1.75rem; }
          .cta h2 { font-size: 2rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-inner { animation: none; }
          .root * { transition: none !important; animation: none !important; }
        }
      `}</style>

      <div className="root">

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>Smart<em> Solutions</em><br /><span className="hero-title-line">for Smart Operations</span></h1>
            <p className="hero-sub">
              We deliver reliable ICT solutions for businesses of all sizes. From installation to maintenance, our team ensures your communication and security systems stay connected, secure, and running smoothly.
            </p>
            <div className="hero-actions">
              <Link href="/services" className="btn-primary">Explore services</Link>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="about">
          <div className="about-inner">
            <div>
              <div className="eyebrow">About Us</div>
              <h2>Unifix ICT <em>Solutions</em></h2>
              <p>Unifix ICT Solutions by Rich Haven Enterprises (RHE) is a reliable company engaged in the supply of products and services for telecommunications industry since October 2014.</p>
              <p>The company&apos;s primary objective is to provide services that satisfy customer requirements. We ensure that we satisfy even the most specific expectations our clients have by providing comprehensive telecommunications and ICT solutions.</p>
              <Link href="/about" className="btn-outline">Learn More</Link>
            </div>
            <div className="about-image">
              <Image src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Our team at work" width={800} height={600} />
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="services">
          <div className="services-inner">
            <div className="services-head">
              <div>
                <div className="eyebrow">Our Services</div>
                <h2>What we <em>do best</em></h2>
              </div>
              <Link href="/services" className="btn-outline">View Services</Link>
            </div>
            <div className="services-grid">
              {services.slice(0, 3).map((s, index) => (
                <div className="svc-card" key={s.href}>
                  <div className="svc-img-wrap">
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                      className="svc-img"
                      unoptimized={s.href === "/services/cctv"}
                    />
                  </div>
                  <div className="svc-body">
                    <div className="svc-num">{String(index + 1).padStart(2, "0")}</div>
                    <h3>{s.name}</h3>
                    <p>{s.desc}</p>
                    <div className="svc-footer">
                      <span className="svc-tag">{s.tag}</span>
                      <Link href={s.href} className="svc-link">
                        Learn more
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partners ── */}
        <section className="partners">
          <div className="partners-inner">
            <div className="partners-head">
              <div className="eyebrow">Brand Partners</div>
              <h2>Trusted brands we work with</h2>
            </div>
            <div className="marquee-track">
              <div className="marquee-inner">
                {[...partners, ...partners].map((p, i) => {
                  const logoClasses = [
                    "partner-logo-wrap",
                    ["Grandstream", "Sangfor", "Schneider"].includes(p.name) && "partner-logo-large",
                    ["Seagate", "Sophos"].includes(p.name) && "partner-logo-prominent",
                    ["Vertiv", "WatchGuard"].includes(p.name) && "partner-logo-compact-brand",
                  ].filter(Boolean).join(" ")

                  return (
                    <div className={logoClasses} key={i}>
                      <Image
                        src={p.logo}
                        alt={p.name}
                        fill
                        sizes="200px"
                        unoptimized
                        onError={(e) => {
                          const img = e.currentTarget
                          img.style.display = "none"
                          const badge = img.nextElementSibling as HTMLElement
                          if (badge) badge.style.display = "flex"
                        }}
                      />
                      <span className="partner-text-badge">{p.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta">
          <div className="cta-bg" />
          <div className="cta-overlay" />
          <div className="cta-inner">
            <h2>Ready to build something <em>exceptional?</em></h2>
            <div className="cta-right">
              <p>Every project comes with its own needs and challenges. <br />Tell us your priorities, and we&apos;ll fill them to your satisfaction.</p>
              <div className="cta-btns">
                <Link href="/services" className="btn-ghost-white2">View Services</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}