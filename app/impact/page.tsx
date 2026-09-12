import type { Metadata } from "next";
import Link from "../components/InternalLink";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import ImpactExplorer from "../components/ImpactExplorer";
import { PageHero, StatementCta } from "../components/SiteShell";
import { reportLinks } from "../data";

export const metadata: Metadata = { title: "Impact", description: "Explore Elevate's programme evidence, methodology and downloadable impact reports." };

export default function ImpactPage() {
  return (
    <>
      <PageHero number="05" eyebrow="Impact and accountability" title={<>Beyond attendance.<br />Towards lasting change.</>} intro="Explore programme-level evidence, read the underlying reports and see how Elevate separates reach from impact." image="/images/makoko-group.webp" imageAlt="Young people taking part in an Elevate community programme" tone="navy" />

      <section className="impact-philosophy section-pad">
        <div className="section-label"><span>Our standard</span><p>Evidence with context</p></div>
        <div className="intro-grid"><h2>A big number is not automatically a meaningful one.</h2><div><p>We track reach—the number of people who participate—and impact—the measurable change that follows. Completion, self-reported growth, demonstrated skill and applied learning tell us more than attendance alone.</p><p>Our internal strategy uses a 10:1 reach-to-impact ratio as a planning guide. It is a target for discipline, not a shortcut for claiming transformation.</p></div></div>
      </section>

      <section className="historic-reach-band"><div><p className="eyebrow">Documented early reach</p><strong>7,216</strong><p>lives reached in Elevate's early programme records</p></div><div><strong>7,100</strong><p>people received food and relief items across three years</p><strong>50</strong><p>young people received vocational skills, business learning or equipment grants</p><strong>51</strong><p>children learned about sustainable development</p></div></section>

      <section className="explorer-section" id="explorer">
        <div className="explorer-head"><p className="eyebrow">Interactive evidence explorer</p><h2>Filter the records.</h2><p>Every card names the year, location and basis for the claim.</p></div>
        <ImpactExplorer />
      </section>

      <section className="methodology-section section-pad" id="methodology">
        <div><p className="eyebrow">How to read our numbers</p><h2>Clear labels. Honest limits.</h2></div>
        <div className="method-grid">
          <article><span>01</span><h3>Reach</h3><p>People registered, attended or directly participated in an activity.</p></article>
          <article><span>02</span><h3>Completion</h3><p>People who completed the programme or a defined learning journey.</p></article>
          <article><span>03</span><h3>Outcome</h3><p>A reported or observed change connected to the programme.</p></article>
          <article><span>04</span><h3>Impact</h3><p>Sustained change over time. This requires follow-up, not assumption.</p></article>
        </div>
        <p className="method-note"><ShieldCheck size={20} /> Records on this site are programme-specific and should not be added together as a deduplicated lifetime total.</p>
      </section>

      <section className="report-library section-pad" id="report-library">
        <div className="report-head"><div><p className="eyebrow">Report library</p><h2>Read the source, not just the summary.</h2></div><p>Published here so supporters, participants and partners can inspect the evidence behind the numbers.</p></div>
        <div className="report-list">{reportLinks.map((report) => <Link key={report.title} href={`/impact/${report.slug}`}><span>{report.year}</span><div><h3>{report.title}</h3><p>{report.summary}</p><small>Interactive summary + PDF download</small></div><ArrowRight size={22} /></Link>)}</div>
      </section>

      <section className="accountability-panel">
        <div><p className="eyebrow">The next layer of transparency</p><h2>A living impact and financial ledger.</h2></div>
        <div><p>Elevate is designing a more open way to show where resources go, what each project delivers and what changes over time. Until that system is ready, our reports and direct conversations remain the source of truth.</p><a href="mailto:hello@elevateng.org?subject=Elevate%20impact%20or%20financial%20information">Request more information <ArrowUpRight size={18} /></a></div>
      </section>

      <section className="references-section section-pad" id="references">
        <p className="eyebrow">Sources and references</p><h2>What informed this page</h2>
        <ol><li>Project A.C.E. Progress & Impact Report, 2021.</li><li>Mental Liberation Programme Impact Report, 2022.</li><li>Impact Report on A.C.E. Mentorship Programme, 2023–2024.</li><li>Elevate 2025 Strategy Review: Road to 1 Million Africans.</li><li>Elevate 2026 Vision and Implementation Plan.</li></ol>
      </section>

      <StatementCta eyebrow="Fund what can be measured" title="Help us deepen the work—and the evidence behind it." text="Support data collection, follow-up and community-rooted programme delivery alongside the direct work with young people." href="/donate" label="Explore giving" />
    </>
  );
}
