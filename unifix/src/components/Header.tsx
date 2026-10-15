"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

type Service = {
  href: string
  label: string
  category: string
  desc: string
}

const serviceLinks: Service[] = [
  { href: "/services/structured-cabling", label: "Structured network cabling", category: "Infrastructure", desc: "Fiber and copper cabling built to standard" },
  { href: "/services/network-security",   label: "Network & security",         category: "Infrastructure", desc: "Switching, Wi-Fi, firewalls and protection" },
  { href: "/services/server-cloud",       label: "Server & cloud",             category: "Infrastructure", desc: "On-site servers, hosting and cloud migration" },
  { href: "/services/cctv",               label: "CCTV & surveillance",        category: "Security",       desc: "Cameras and recording you can watch remotely" },
  { href: "/services/access-control",     label: "Access control system",      category: "Security",       desc: "Card, PIN and biometric door entry" },
  { href: "/services/video-intercom",     label: "Video intercom",             category: "Security",       desc: "See and speak to visitors before they enter" },
  { href: "/services/ip-pbx",             label: "IP PABX telephone system",   category: "Communications", desc: "Business phones over your own network" },
  { href: "/services/public-address",     label: "Public address system",      category: "Communications", desc: "Clear announcements across every zone" },
  { href: "/services/conference",         label: "Conference system",          category: "Communications", desc: "Audio and video for meeting rooms" },
  { href: "/services/ups",                label: "Uninterruptible power supply", category: "Energy",       desc: "Backup power that keeps systems running" },
  { href: "/services/led-display",        label: "LED display system",         category: "Operations",     desc: "Signage and video walls for any space" },
  { href: "/services/parking",            label: "Parking system",             category: "Operations",     desc: "Barriers, ticketing and vehicle counting" },
]

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const categories = [...new Set(serviceLinks.map(s => s.category))]
  const filtered = activeCategory
    ? serviceLinks.filter(s => s.category === activeCategory)
    : serviceLinks
  const countFor = (cat: string) => serviceLinks.filter(s => s.category === cat).length

  const closeServices = () => {
    setServicesOpen(false)
    setActiveCategory(null)
  }

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goToQuote = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.getElementById("footer")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        :root {
          --blue:      #3a89dd;
          --blue-dark: #2263a8;
          --blue-deep: #174a80;
          --blue-lt:   #e8f2fd;
          --ink:       #0f1720;
          --ink-2:     #354152;
          --ink-3:     #6b7686;
          --border:    rgba(15,23,32,0.09);
          --font-display: 'Montserrat', system-ui, -apple-system, 'Segoe UI', sans-serif;
          --font-ui:      'Montserrat', system-ui, -apple-system, 'Segoe UI', sans-serif;
        }

        /* ── Shell ── */
        .hdr {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          font-family: var(--font-ui);
          font-feature-settings: "kern", "liga";
          -webkit-font-smoothing: antialiased;
          background:
            linear-gradient(#fff, #fff),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(58,137,221,0.055) 39px, rgba(58,137,221,0.055) 40px),
            repeating-linear-gradient(0deg,  transparent, transparent 39px, rgba(58,137,221,0.055) 39px, rgba(58,137,221,0.055) 40px);
          border-bottom: none;
          transition: box-shadow 0.25s ease;
        }
        .hdr.scrolled { box-shadow: 0 8px 24px rgba(15,23,32,0.05); }
        .hdr.menu-open { box-shadow: none; }

        .hdr a:focus-visible,
        .hdr button:focus-visible {
          outline: 2px solid var(--blue);
          outline-offset: 2px;
        }

        .hdr-inner {
          max-width: none;
          margin: 0 auto;
          padding: 0 var(--page-gutter);
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        /* ── Logo ── */
        .hdr-logo { text-decoration: none; display: flex; align-items: center; flex-shrink: 0; }
        .hdr-logo-image {
          display: block;
          height: 60px;
          width: auto;
          max-width: min(380px, 36vw);
          object-fit: contain;
          filter: drop-shadow(0 1px 3px rgba(15,23,32,0.10));
        }

        /* ── Nav ── */
        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: flex-end;
        }

        .hdr-link,
        .hdr-services-btn {
          position: relative;
          padding: 8px 14px;
          border-radius: 8px;
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0;
          color: var(--ink-2);
          text-decoration: none;
          white-space: nowrap;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.15s;
        }
        .hdr-services-btn { display: flex; align-items: center; gap: 6px; }

        .hdr-link::after,
        .hdr-services-btn::after {
          content: '';
          position: absolute;
          bottom: 3px; left: 14px; right: 14px;
          height: 2px;
          border-radius: 2px;
          background: var(--blue);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.22s ease;
        }
        .hdr-services-btn::after { right: 30px; }
        .hdr-link:hover,
        .hdr-services-btn:hover,
        .hdr-services-btn.open { color: var(--ink); }
        .hdr-link:hover::after,
        .hdr-services-btn:hover::after,
        .hdr-services-btn.open::after { transform: scaleX(1); }

        .hdr-chevron { opacity: 0.5; transition: transform 0.22s ease, opacity 0.15s; flex-shrink: 0; }
        .hdr-services-btn.open .hdr-chevron { transform: rotate(180deg); opacity: 0.9; }

        .hdr-dropdown-wrap { position: relative; }

        /* ── Mega dropdown ── */
        .hdr-dropdown {
          position: fixed;
          top: 70px; left: 0; right: 0;
          background: #fff;
          border-top: none;
          border-bottom: 1px solid var(--border);
          box-shadow: 0 24px 56px rgba(15,23,32,0.12);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(-6px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.2s;
          z-index: 99;
        }
        .hdr-dropdown.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s;
        }

        .hdr-dd-inner {
          max-width: none;
          margin: 0 auto;
          padding: 0 var(--page-gutter);
        }

        .hdr-dd-body {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 2rem;
          padding: 1.5rem 0 1.25rem;
        }

        /* Category rail */
        .hdr-dd-rail {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-right: 1.5rem;
          border-right: 1px solid var(--border);
        }
        .hdr-dd-rail-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 0 0 4px 12px;
        }
        .hdr-dd-rail-sub {
          font-size: 0.84rem;
          line-height: 1.5;
          color: var(--ink-3);
          margin: 0 0 14px 12px;
          max-width: 26ch;
        }
        .hdr-dd-cat {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 9px 12px;
          border: none;
          border-radius: 9px;
          background: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-ui);
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--ink-2);
          transition: background 0.14s, color 0.14s;
        }
        .hdr-dd-cat:hover { background: #f3f7fc; color: var(--ink); }
        .hdr-dd-cat.active { background: var(--blue-lt); color: var(--blue-deep); }
        .hdr-dd-count {
          font-size: 0.78rem;
          font-weight: 500;
          font-variant-numeric: tabular-nums;
          color: var(--ink-3);
          min-width: 22px;
          text-align: center;
          padding: 1px 7px;
          border-radius: 10px;
          background: rgba(15,23,32,0.05);
        }
        .hdr-dd-cat.active .hdr-dd-count { background: #fff; color: var(--blue-dark); }

        /* Service grid */
        .hdr-dd-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px 8px;
          align-content: start;
        }
        .hdr-dd-item {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 12px 14px;
          border-radius: 10px;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background 0.14s, border-color 0.14s;
        }
        .hdr-dd-item:hover { background: #f3f7fc; border-color: rgba(58,137,221,0.18); }
        .hdr-dd-lbl {
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: -0.005em;
          line-height: 1.3;
          color: var(--ink);
          transition: color 0.14s;
        }
        .hdr-dd-item:hover .hdr-dd-lbl { color: var(--blue-dark); }
        .hdr-dd-desc {
          font-size: 0.78rem;
          line-height: 1.5;
          font-weight: 400;
          color: var(--ink-3);
        }

        /* Footer */
        .hdr-dd-footer {
          border-top: 1px solid var(--border);
          padding: 0.9rem 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .hdr-dd-footer-text { font-size: 0.9rem; color: var(--ink-2); }
        .hdr-dd-footer-text strong {
          font-family: var(--font-display);
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--ink);
        }
        .hdr-dd-viewall {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: -0.005em;
          color: var(--blue-dark);
          text-decoration: none;
          padding: 4px 0;
          background: none;
          transition: color 0.15s, gap 0.15s;
          white-space: nowrap;
        }
        .hdr-dd-viewall:hover { color: var(--blue); gap: 9px; }

        /* ── Right / CTA ── */
        .hdr-right { display: flex; align-items: center; gap: 0.5rem; }
        .hdr-divider { width: 1px; height: 24px; background: var(--border); margin: 0 6px; flex-shrink: 0; }

        .hdr-cta {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%);
          color: #fff;
          padding: 10px 22px;
          border-radius: 9999px;
          font-family: var(--font-display);
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: -0.005em;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 2px 8px rgba(58,137,221,0.35), inset 0 1px 0 rgba(255,255,255,0.18);
        }
        .hdr-cta:hover {
          opacity: 0.94;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(58,137,221,0.42), inset 0 1px 0 rgba(255,255,255,0.18);
        }
        .hdr-cta:active { transform: translateY(0); }

        /* ── Mobile toggle ── */
        .hdr-mobile-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 7px;
          color: var(--ink);
          border-radius: 8px;
          transition: background 0.15s;
        }
        .hdr-mobile-btn:hover { background: rgba(15,23,32,0.06); }

        /* ── Mobile menu ── */
        .hdr-mobile {
          display: none;
          flex-direction: column;
          background: #fff;
          border-top: none;
          padding: 1rem var(--page-gutter) 2rem;
          gap: 2px;
          max-height: calc(100vh - 70px);
          max-height: calc(100dvh - 70px);
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        .hdr-mobile.open { display: flex; }

        .hdr-mobile-link {
          font-family: var(--font-display);
          font-size: 1.02rem;
          font-weight: 500;
          letter-spacing: -0.005em;
          color: var(--ink);
          text-decoration: none;
          padding: 11px 12px;
          border-radius: 9px;
          transition: background 0.13s, color 0.13s;
        }
        .hdr-mobile-link:hover { background: #f3f7fc; color: var(--blue-dark); }

        .hdr-mobile-section {
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: var(--blue-dark);
          padding: 18px 12px 6px;
          margin-top: 6px;
          border-top: 1px solid var(--border);
        }
        .hdr-mobile-sublink {
          font-size: 0.95rem;
          font-weight: 400;
          color: var(--ink-2);
          text-decoration: none;
          padding: 9px 12px;
          border-radius: 9px;
          transition: background 0.13s, color 0.13s;
        }
        .hdr-mobile-sublink:hover { background: #f3f7fc; color: var(--blue-dark); }

        .hdr-mobile-cta {
          margin-top: 1rem;
          background: linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%);
          color: #fff;
          text-align: center;
          padding: 13px;
          border-radius: 9999px;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.2s;
          box-shadow: 0 2px 12px rgba(58,137,221,0.30);
        }
        .hdr-mobile-cta:hover { opacity: 0.9; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .hdr-dd-body { grid-template-columns: 210px 1fr; gap: 1.5rem; }
          .hdr-dd-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 1100px) {
          .hdr-nav, .hdr-divider, .hdr-cta { display: none; }
          .hdr-mobile-btn { display: flex; }
          .hdr-logo-image { height: 54px; max-width: 72vw; }
        }
        @media (max-width: 480px) {
          .hdr-inner { gap: 0.75rem; }
        }
        @media (min-width: 1101px) {
          .hdr-mobile { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hdr *, .hdr-dropdown { transition: none !important; }
        }
      `}</style>

      <header className={`hdr${servicesOpen ? " menu-open" : ""}${scrolled ? " scrolled" : ""}`}>
        <div className="hdr-inner">

          <Link href="/" className="hdr-logo">
            <img src="/logo.png" alt="UNIFIX ICT Solutions logo" className="hdr-logo-image" />
          </Link>

          <nav className="hdr-nav" aria-label="Main">
            <Link href="/" className="hdr-link">Home</Link>
            <Link href="/about" className="hdr-link">About us</Link>

            <div className="hdr-dropdown-wrap" ref={dropdownRef}>
              <button
                className={`hdr-services-btn${servicesOpen ? " open" : ""}`}
                onClick={() => setServicesOpen(v => !v)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className="hdr-chevron" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2.5 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={`hdr-dropdown${servicesOpen ? " open" : ""}`} role="menu">
                <div className="hdr-dd-inner">
                  <div className="hdr-dd-body">

                    <div className="hdr-dd-rail">
                      <p className="hdr-dd-rail-title">Our services</p>
                      <p className="hdr-dd-rail-sub">Pick an area to narrow the list, or browse everything we install and support.</p>

                      <button
                        className={`hdr-dd-cat${activeCategory === null ? " active" : ""}`}
                        onClick={() => setActiveCategory(null)}
                      >
                        All services
                        <span className="hdr-dd-count">{serviceLinks.length}</span>
                      </button>
                      {categories.map(cat => (
                        <button
                          key={cat}
                          className={`hdr-dd-cat${activeCategory === cat ? " active" : ""}`}
                          onClick={() => setActiveCategory(c => (c === cat ? null : cat))}
                        >
                          {cat}
                          <span className="hdr-dd-count">{countFor(cat)}</span>
                        </button>
                      ))}
                    </div>

                    <div className="hdr-dd-grid">
                      {filtered.map(({ href, label, desc }) => (
                        <Link
                          key={href}
                          href={href}
                          className="hdr-dd-item"
                          onClick={closeServices}
                          role="menuitem"
                        >
                          <span className="hdr-dd-lbl">{label}</span>
                          <span className="hdr-dd-desc">{desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="hdr-dd-footer">
                    <span className="hdr-dd-footer-text">
                      <strong>Not sure what you need?</strong> We can help you choose.
                    </span>
                    <Link href="/services" className="hdr-dd-viewall" onClick={closeServices}>
                      View all services
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                        <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="hdr-right">
            <span className="hdr-divider" />
            <a className="hdr-cta" onClick={goToQuote} href="#footer">
              Request a quote
            </a>
            <button
              className="hdr-mobile-btn"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M3 6.5h16M3 11h16M3 15.5h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div id="mobile-navigation" className={`hdr-mobile${mobileOpen ? " open" : ""}`}>
          <Link href="/" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>About us</Link>

          {categories.map(cat => (
            <div key={cat} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <div className="hdr-mobile-section">{cat}</div>
              {serviceLinks.filter(s => s.category === cat).map(({ href, label }) => (
                <Link key={href} href={href} className="hdr-mobile-sublink" onClick={() => setMobileOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
          ))}

          <a className="hdr-mobile-cta" onClick={goToQuote} href="#footer">
            Request a quote
          </a>
        </div>
      </header>
    </>
  )
}