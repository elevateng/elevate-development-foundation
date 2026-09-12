import type { Metadata } from "next";
import Link from "../components/InternalLink";
import { ArrowRight } from "lucide-react";
import { PageHero, StatementCta } from "../components/SiteShell";

export const metadata: Metadata = { title: "Theory of Change", description: "How Elevate connects community insight, mindset, education, opportunity and youth agency." };

const chain = [
  { step: "01", title: "Listen", text: "Understand local priorities, assets and barriers with the people closest to them." },
  { step: "02", title: "Shift mindset", text: "Build self-awareness, confidence, purpose and the belief that change is possible." },
  { step: "03", title: "Grow capability", text: "Teach practical knowledge, digital skills, leadership and problem-solving." },
  { step: "04", title: "Connect opportunity", text: "Open access to mentors, education, networks, resources and livelihood pathways." },
  { step: "05", title: "Back agency", text: "Help young people apply learning, lead projects and solve problems in their communities." },
];

export default function TheoryPage() {
  return <>
    <PageHero number="03" eyebrow="Theory of change" title={<>Opportunity works when every link holds.</>} intro="Elevate's model connects internal change, practical capability and external access—because no single intervention can break a multidimensional cycle of poverty." image="/images/level-up-0353.webp" imageAlt="A Level Up Makoko coach speaking with young players on the field" tone="cyan" />
    <section className="toc-intro section-pad"><div className="section-label"><span>The proposition</span><p>From potential to agency</p></div><div className="intro-grid"><h2>When young people build belief and capability—and can reach real opportunity—they are better positioned to change their own lives and shape their communities.</h2><div><p>This theory of change synthesises the principles visible across Project A.C.E., EmpowerED Teens, mentorship, digital learning and Elevate's current expansion strategy.</p><p>It is a learning framework: each programme tests parts of the chain and the evidence informs what Elevate improves next.</p></div></div></section>
    <section className="toc-chain section-pad"><div className="toc-chain-head"><p className="eyebrow">The pathway</p><h2>Five connected moves.</h2></div><div className="toc-chain-grid">{chain.map((item, i) => <article key={item.title}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p>{i < chain.length - 1 && <ArrowRight aria-hidden="true" />}</article>)}</div></section>
    <section className="toc-outcomes"><div><p className="eyebrow">Near-term outcomes</p><h2>What should change first</h2><ul><li>Greater self-awareness and confidence</li><li>Practical knowledge and skills</li><li>Clearer education and career direction</li><li>Stronger mentor and peer networks</li></ul></div><div><p className="eyebrow">Longer-term contribution</p><h2>What that change can unlock</h2><ul><li>Education and livelihood progress</li><li>Youth-led community solutions</li><li>Economic participation and resilience</li><li>Locally owned programmes that can grow</li></ul></div></section>
    <section className="toc-learning section-pad"><div><p className="eyebrow">The learning loop</p><h2>Reach is a starting point. Follow-up is the proof.</h2></div><div><p>Elevate separates attendance, completion, outcome and sustained impact. Programme data is reviewed with its sample, location and timeframe so success is not overstated.</p><Link className="button button-ink" href="/impact">Explore the evidence <ArrowRight size={17} /></Link></div></section>
    <StatementCta eyebrow="Test the model with us" title="Community knowledge makes the theory real." text="Partners can help strengthen evaluation, longitudinal follow-up, programme design and access to opportunity." href="/get-involved#partner" label="Partner with Elevate" />
  </>;
}
