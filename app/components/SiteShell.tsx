import Link from "./InternalLink";
import { ArrowRight, Camera, ExternalLink, Mail, Menu, PlaySquare, Share2 } from "lucide-react";

const nav = [
  ["About", "/about"],
  ["Programmes", "/programmes"],
  ["Impact", "/impact"],
  ["Chapters", "/chapters"],
  ["Stories", "/stories"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-link" href="/" aria-label="Elevate Development Foundation home">
        <img src="/images/elevate-logo.png" alt="Elevate Development Foundation" />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="nav-cta" href="/donate">Donate <ArrowRight size={17} /></Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><Menu size={25} /></summary>
        <nav aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/leadership">Leadership</Link>
          <Link href="/theory-of-change">Theory of change</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/get-involved">Get involved</Link>
          <Link className="mobile-donate" href="/donate">Donate</Link>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow">Educating. Enlightening. Empowering.</p>
        <h2>Potential is everywhere.<br /><span>Opportunity should be too.</span></h2>
        <div className="footer-cta-row">
          <Link className="button button-orange" href="/get-involved">Build with us <ArrowRight size={18} /></Link>
          <Link className="text-link text-link-light" href="/impact">See the evidence</Link>
        </div>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/images/elevate-logo-transparent.png" alt="Elevate Development Foundation" />
          <p>Youth-led, community-rooted work across Lagos and the Federal Capital Territory.</p>
          <p className="registration">Registered nonprofit · RC 123041</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/leadership">Leadership</Link>
          <Link href="/theory-of-change">Theory of change</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/get-involved">Get involved</Link>
          <Link href="/donate">Donate</Link>
        </div>
        <div>
          <p className="footer-label">Connect</p>
          <a href="mailto:hello@elevateng.org"><Mail size={15} /> hello@elevateng.org</a>
          <a href="https://www.instagram.com/elevateng/" target="_blank" rel="noreferrer"><Camera size={15} /> Instagram</a>
          <a href="https://www.youtube.com/@elevateng" target="_blank" rel="noreferrer"><PlaySquare size={15} /> YouTube</a>
          <a href="https://ng.linkedin.com/company/elevatedevelopmentfoundation" target="_blank" rel="noreferrer"><Share2 size={15} /> LinkedIn</a>
        </div>
        <div>
          <p className="footer-label">Locations</p>
          <p>Lagos, Nigeria</p>
          <p>FCT / Abuja, Nigeria</p>
          <a href="mailto:hello@elevateng.org?subject=Partnership%20with%20Elevate">Start a partnership <ExternalLink size={14} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Elevate Development Foundation</p>
        <p>Dignity · agency · measurable change</p>
      </div>
    </footer>
  );
}

export function PageHero({
  number,
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  tone = "orange",
}: {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  image?: string;
  imageAlt?: string;
  tone?: "orange" | "cyan" | "navy" | "paper";
}) {
  return (
    <section className={`page-hero page-hero-${tone} ${image ? "page-hero-with-image" : ""}`}>
      <div className="page-hero-copy">
        <div className="page-hero-meta"><span>{number}</span><p>{eyebrow}</p></div>
        <h1>{title}</h1>
        <p className="page-hero-intro">{intro}</p>
      </div>
      {image && <div className="page-hero-image"><img src={image} alt={imageAlt || ""} /></div>}
    </section>
  );
}

export function StatementCta({
  eyebrow,
  title,
  text,
  href,
  label,
}: {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <section className="statement-cta">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{text}</p>
        <Link className="button button-ink" href={href}>{label} <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
