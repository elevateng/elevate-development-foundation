import type { Metadata } from "next";
import Link from "../components/InternalLink";
import { ArrowRight, Quote } from "lucide-react";
import { PageHero, StatementCta } from "../components/SiteShell";

export const metadata: Metadata = { title: "About", description: "The origin, mission, vision and values of Elevate Development Foundation." };

const timeline = [
  ["2016", "Elevate begins in Makoko, Lagos."],
  ["2018", "Community learning and youth development work deepens."],
  ["2019", "Project A.C.E. launches as Elevate's strategic platform."],
  ["2021", "Mental Liberation and Social Impact Accelerator cohorts are documented."],
  ["2023", "A ten-month mentorship journey begins with volunteer mentors."],
  ["2024", "EmpowerED Teens reaches young people in Kado Village and GSTC Garki."],
  ["2026", "Elevate marks ten years and prepares for a chapter-led model."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero number="01" eyebrow="Who we are" title={<>Youth-led.<br />Community-rooted.<br />Built for possibility.</>} intro="Elevate Development Foundation is a Nigerian nonprofit working so a young person's starting point does not limit their destination." image="/images/makoko-portrait.webp" imageAlt="A young person in Makoko looking towards the camera" tone="cyan" />

      <section className="origin-section section-pad">
        <div className="section-label"><span>Our origin</span><p>Makoko · Lagos · 2016</p></div>
        <div className="intro-grid">
          <h2>It started with a simple refusal: talent should not be wasted because opportunity is uneven.</h2>
          <div><p>Founded by Abiola Adebiyi in 2016, Elevate began by showing up for young people in Makoko. Not with a story of rescue, but with a belief in capability—and the responsibility to help build access.</p><p>That belief now shapes programmes in Lagos and the Federal Capital Territory, with a model designed to learn from communities and grow through local chapters.</p></div>
        </div>
      </section>

      <section className="mission-vision-grid">
        <article><p className="eyebrow">Our mission</p><h2>Lift one million young Africans out of multidimensional poverty.</h2><p>Through mindset shifts, education, employment and innovation.</p></article>
        <article><p className="eyebrow">Our vision</p><h2>Young Africans with the mindset, tools and opportunities to break cycles of poverty.</h2><p>And the agency to transform their communities.</p></article>
      </section>

      <section className="about-route-cards section-pad">
        <Link href="/leadership"><span>01</span><h3>Leadership</h3><p>Meet the youth-led operating team and volunteer trustees responsible for the work.</p><strong>Meet the team <ArrowRight size={17} /></strong></Link>
        <Link href="/theory-of-change"><span>02</span><h3>Theory of change</h3><p>See how mindset, capability, access and youth agency connect across programmes.</p><strong>Explore the model <ArrowRight size={17} /></strong></Link>
        <Link href="/chapters"><span>03</span><h3>Chapters</h3><p>Understand the Lagos and Abuja chapters—and how Elevate plans to grow responsibly.</p><strong>See the network <ArrowRight size={17} /></strong></Link>
      </section>

      <section className="values-section section-pad">
        <div className="values-heading"><p className="eyebrow">How we show up</p><h2>Values are only useful when they change the work.</h2></div>
        <div className="values-grid">
          <article><span>01</span><h3>Faith in Jesus</h3><p>Our Christian faith grounds our hope, dignity and commitment to service.</p></article>
          <article><span>02</span><h3>Commitment</h3><p>We keep showing up, especially when durable change takes time.</p></article>
          <article><span>03</span><h3>A servant&apos;s heart</h3><p>We listen before acting and treat service as a privilege.</p></article>
          <article><span>04</span><h3>Honesty</h3><p>We name what we know, what we are learning and what still needs work.</p></article>
        </div>
      </section>

      <section className="timeline-section">
        <div className="timeline-head"><p className="eyebrow">A decade in motion</p><h2>Built one chapter at a time.</h2></div>
        <ol className="timeline-list">{timeline.map(([year, event]) => <li key={year}><strong>{year}</strong><span>{event}</span></li>)}</ol>
      </section>

      <section className="founder-note section-pad">
        <Quote size={42} />
        <blockquote>“To serve is a privilege. Elevate exists because we believe young people already carry possibility; our work is to help opportunity meet it.”</blockquote>
        <p>Abiola Adebiyi · Founder</p>
        <Link className="arrow-link" href="/stories">See Elevate in action <ArrowRight size={18} /></Link>
      </section>

      <StatementCta eyebrow="Our 2026 direction" title="Local chapters. Flagship projects. Practical innovation." text="Elevate's current direction is to deepen local ownership, deliver one flagship project per active location each quarter and test social technology that can extend access." href="/get-involved#partner" label="Partner on the next chapter" />
    </>
  );
}
