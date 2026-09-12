"use client";

import { Download, ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, Target } from "lucide-react";
import Link from "./InternalLink";
import { useState } from "react";

export type ReportData = {
  year: string;
  title: string;
  subtitle: string;
  location: string;
  pdf: string;
  metrics: { value: string; label: string }[];
  overview: string[];
  outcomes: string[];
  learning: string[];
  next: string[];
};

export function ReportExperience({ report }: { report: ReportData }) {
  const [active, setActive] = useState<"overview" | "outcomes" | "learning" | "next">("overview");
  return (
    <>
      <section className="report-experience-hero">
        <div className="report-nav"><Link href="/impact"><ArrowLeft size={16} /> Impact library</Link><span>{report.year}</span></div>
        <p className="eyebrow">Interactive impact report</p>
        <h1>{report.title}</h1>
        <p>{report.subtitle}</p>
        <div className="report-hero-actions"><a className="button button-orange" href={report.pdf} download>Download the full PDF <Download size={17} /></a><span>{report.location}</span></div>
      </section>

      <section className="report-metric-grid">
        {report.metrics.map((metric) => <article key={metric.label}><strong>{metric.value}</strong><p>{metric.label}</p></article>)}
      </section>

      <section className="report-tabs-wrap section-pad">
        <div className="report-tabs">
          <div className="report-tabs-list" role="tablist" aria-label="Explore report sections">
            {([['overview', 'Overview'], ['outcomes', 'Outcomes'], ['learning', 'What we learned'], ['next', 'Next steps']] as const).map(([value, label]) => <button key={value} id={`tab-${value}`} role="tab" aria-selected={active === value} aria-controls={`panel-${value}`} onClick={() => setActive(value)}>{label}</button>)}
          </div>
          <div className="report-tab-panel" role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}>
            <div className="report-tab-icon">{active === "overview" ? <Target /> : active === "outcomes" ? <CheckCircle2 /> : active === "learning" ? <Lightbulb /> : <ArrowRight />}</div>
            {active === "overview" && <div><p className="eyebrow">Programme overview</p>{report.overview.map((item) => <p key={item}>{item}</p>)}</div>}
            {active === "outcomes" && <div><p className="eyebrow">Recorded outcomes</p><ul>{report.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></div>}
            {active === "learning" && <div><p className="eyebrow">What the data says</p><ul>{report.learning.map((item) => <li key={item}>{item}</li>)}</ul></div>}
            {active === "next" && <div><p className="eyebrow">Recommendations</p><ol>{report.next.map((item) => <li key={item}>{item}</li>)}</ol></div>}
          </div>
        </div>
      </section>

      <section className="report-source-note"><p><strong>Source note.</strong> This experience summarises the original Elevate report. Percentages reflect the samples and methods described in that report and should not be read as population-wide claims.</p><a href={report.pdf} target="_blank" rel="noreferrer">Open the original document <ArrowRight size={17} /></a></section>
    </>
  );
}
