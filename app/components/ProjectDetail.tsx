import Link from "./InternalLink";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Programme } from "../data";
import { StatementCta } from "./SiteShell";

export function ProjectDetail({ project, index }: { project: Programme; index: string }) {
  const external = project.evidence?.href.startsWith("http");
  return (
    <>
      <section className="project-hero">
        <div className="project-hero-image"><img src={project.image} alt={project.imageAlt} /></div>
        <div className="project-hero-copy">
          <Link className="project-back" href="/programmes"><ArrowLeft size={16} /> All programmes</Link>
          <div className="project-kicker"><span>{index}</span><p>{project.pillar}</p></div>
          <h1>{project.title}</h1>
          <p className="project-statement">{project.statement}</p>
          <div className="project-meta"><span>{project.location}</span><span>{project.period}</span></div>
        </div>
      </section>

      <section className="project-overview section-pad">
        <div><p className="eyebrow">The work</p><h2>{project.summary}</h2></div>
        <div className="project-story">{project.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <section className="project-metrics" aria-label={`${project.title} key figures`}>
        {project.metrics.map((metric) => <article key={metric.label}><strong>{metric.value}</strong><p>{metric.label}</p></article>)}
      </section>

      <section className="project-approach section-pad">
        <div><p className="eyebrow">How it works</p><h2>Designed around the whole journey.</h2></div>
        <ol>{project.approach.map((step, i) => <li key={step}><span>0{i + 1}</span><strong>{step}</strong></li>)}</ol>
      </section>

      {project.evidence && <section className="project-evidence-band"><div><p className="eyebrow">Go deeper</p><h2>Follow the evidence behind the programme.</h2></div>{external ? <a className="button button-light" href={project.evidence.href} target="_blank" rel="noreferrer">{project.evidence.label} <ExternalLink size={17} /></a> : <Link className="button button-light" href={project.evidence.href}>{project.evidence.label} <ArrowRight size={17} /></Link>}</section>}

      <StatementCta eyebrow="Move the work forward" title="Help the next cohort go further." text="Fund a cohort, volunteer your expertise or open a school, community or employer partnership." href="/get-involved" label="Build with Elevate" />
    </>
  );
}
