import type { Metadata } from "next";
import Link from "../components/InternalLink";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero, StatementCta } from "../components/SiteShell";

export const metadata: Metadata = { title: "Leadership", description: "Meet the youth-led team and volunteer trustees guiding Elevate Development Foundation." };

const featured = [
  { name: "Abiola Adebiyi", role: "Founder & Co-President, Projects", image: "/images/abiola-adebiyi.png", bio: "Abiola founded Elevate in 2016 after visiting Makoko. She leads programme strategy, partnerships around project delivery and the long-term mission to connect young Africans with mindset, education, employment and innovation pathways." },
  { name: "Fiyinfoluwa Adewumi", role: "Co-President, People & Operations", image: "/images/fiyinfoluwa-adewumi.webp", bio: "Fiyinfoluwa leads the people, culture and operating systems that turn Elevate's strategy into coordinated work across teams and locations." },
  { name: "Francess Oyelade", role: "Digital Innovation Lead", image: "/images/francess-oyelade.webp", bio: "Francess leads digital-product thinking at Elevate, including the development of learning experiences designed to extend practical skills and opportunity." },
  { name: "Oluwapelumi Abodunrin", role: "Media Lead", image: "/images/oluwapelumi-abodunrin.webp", bio: "Oluwapelumi guides Elevate's media practice—helping the organisation document programmes, protect participant dignity and make the work visible with clarity." },
];

const operational = [
  ["Oghenevoke Kefe", "Project Design Lead"],
  ["Joy Nduka", "Project Implementation Coordinator — Lagos"],
  ["Precious Raphael Ogochukwu", "Project Implementation Coordinator — Abuja"],
  ["Mary Abbah", "Special Projects Lead — Agricultural Services"],
  ["Precious Adedeji", "People Experience Lead"],
  ["Adenike-Oloro Akingbelure", "Finance Lead"],
  ["Abiola Bolaji", "Fundraising & Partnerships Lead"],
];

const trustees = [
  ["Abiola Adebiyi", "Chair"], ["Onyinye Emeli", "Secretary"], ["Precious Temowo", "Trustee"], ["Simisola Awoniyi", "Trustee"], ["Esther Adebiyi", "Treasurer"],
];

export default function LeadershipPage() {
  return <>
    <PageHero number="02" eyebrow="Leadership" title={<>Young people are not waiting to lead.</>} intro="Elevate is governed and operated by a youth-led team working across programmes, people, finance, partnerships, media and digital innovation." image="/images/level-up-0381.webp" imageAlt="A coach leading young footballers during Level Up Makoko" tone="paper" />

    <section className="leadership-intro section-pad"><div><p className="eyebrow">Leadership philosophy</p><h2>Close enough to listen. Structured enough to deliver.</h2></div><div><p>Elevate combines a volunteer board of trustees with an operating team whose leaders are responsible for clear functions and local delivery. The structure protects youth voice while creating real accountability.</p><Link className="arrow-link" href="/theory-of-change">See how leadership connects to change <ArrowRight size={17} /></Link></div></section>

    <section className="leadership-featured section-pad"><div className="leadership-section-head"><p className="eyebrow">Featured leadership</p><h2>The people carrying the mission forward.</h2></div><div className="leader-card-grid">{featured.map((person) => <article key={person.name} className="leader-card"><div className="leader-photo"><img src={person.image} alt={`${person.name}, ${person.role}`} /></div><div><p className="eyebrow">{person.role}</p><h3>{person.name}</h3><p>{person.bio}</p></div></article>)}</div></section>

    <section className="leadership-directory section-pad"><div><p className="eyebrow">Operational leadership</p><h2>Clear owners for every function.</h2></div><div className="leadership-list">{operational.map(([name, role], i) => <article key={name}><span>{String(i + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{role}</p></article>)}</div></section>

    <section className="trustee-panel"><div><ShieldCheck size={36} /><p className="eyebrow">Volunteer governance</p><h2>Board of Trustees</h2><p>Four of Elevate's five trustees are under 30 in the organisation's January 2026 governance record.</p></div><div>{trustees.map(([name, role]) => <p key={name}><strong>{name}</strong><span>{role}</span></p>)}</div></section>

    <StatementCta eyebrow="Bring your judgement" title="Leadership at Elevate is service with responsibility." text="Experienced professionals can contribute as mentors, advisers, facilitators and partners without taking agency away from the young people closest to the work." href="/get-involved" label="Explore ways to contribute" />
  </>;
}
