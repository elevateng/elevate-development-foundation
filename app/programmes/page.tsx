import type { Metadata } from "next";
import Link from "../components/InternalLink";
import { ArrowRight } from "lucide-react";
import { PageHero, StatementCta } from "../components/SiteShell";
import { programmes } from "../data";

export const metadata: Metadata = { title: "Programmes", description: "Explore Elevate's project portfolio across mindset, mentorship, digital skills, sport and community development." };

export default function ProgrammesPage() {
  return <>
    <PageHero number="04" eyebrow="Programme portfolio" title={<>Different doors.<br />One direction.</>} intro="Each programme addresses a different part of the opportunity gap. Open a project to explore its design, story, evidence and place in the wider Elevate model." image="/images/level-up-1343.webp" imageAlt="Young footballers training during Level Up Makoko" tone="orange" />

    <section className="programme-index-intro section-pad"><div><p className="eyebrow">The portfolio</p><h2>From immediate relief to long-term agency.</h2></div><div><p>Elevate's work has evolved as its relationships and evidence deepened. Christmas in Makoko created trust; Project A.C.E. built a long-term platform; mentorship, digital learning, EmpowerED Teens and Level Up respond to specific pathways.</p><Link className="arrow-link" href="/theory-of-change">See how the programmes connect <ArrowRight size={17} /></Link></div></section>

    <section className="project-index-grid">
      {programmes.map((project, i) => <Link className={`project-index-card project-index-card-${(i % 3) + 1}`} href={`/programmes/${project.slug}`} key={project.slug}>
        <div className="project-index-photo"><img src={project.image} alt={project.imageAlt} /></div>
        <div className="project-index-copy"><div><span>{String(i + 1).padStart(2, "0")}</span><p>{project.location}</p></div><p className="eyebrow">{project.pillar}</p><h2>{project.shortTitle}</h2><p>{project.summary}</p><strong>{project.metrics[0].value} <small>{project.metrics[0].label}</small></strong><span className="project-index-open">Open project <ArrowRight size={18} /></span></div>
      </Link>)}
    </section>

    <section className="programme-gallery programme-gallery-pro"><img src="/images/level-up-0381.webp" alt="A coach speaking with Level Up Makoko participants" /><img src="/images/empowered-session.webp" alt="Teenagers engaged in an EmpowerED Teens session" /><img src="/images/level-up-1339.webp" alt="A Level Up Makoko coach on the football field" /></section>

    <section className="delivery-model section-pad"><div><p className="eyebrow">How every project moves</p><h2>Community-rooted by design.</h2></div><ol><li><strong>Listen</strong><span>Understand people, place, assets and priorities.</span></li><li><strong>Design</strong><span>Build a relevant pathway with local insight.</span></li><li><strong>Deliver</strong><span>Mobilise facilitators, mentors and partners.</span></li><li><strong>Learn</strong><span>Track reach, completion, outcomes and what changes next.</span></li></ol></section>

    <StatementCta eyebrow="Bring a programme closer" title="A school, community or idea can be the next starting point." text="If you can open a door, fund a cohort, contribute expertise or help us listen better, we would like to hear from you." href="/get-involved#partner" label="Build a programme with us" />
  </>;
}
