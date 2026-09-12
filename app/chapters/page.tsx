import type { Metadata } from "next";
import { ArrowRight, Building2, MapPin, Network, Rocket } from "lucide-react";
import { PageHero, StatementCta } from "../components/SiteShell";

export const metadata: Metadata = { title: "Chapters", description: "Explore Elevate Lagos, Elevate Abuja and the pathway to start a locally led Elevate social franchise." };

const steps = [
  ["01", "Express interest", "Tell us about your city, institution, community and motivation."],
  ["02", "Align", "Explore Elevate's mission, values, safeguarding and social-impact expectations."],
  ["03", "Prepare", "Complete training in project design, operations, brand, fundraising and measurement."],
  ["04", "Co-design", "Listen locally and build a launch project suited to the community—not a copy-and-paste intervention."],
  ["05", "Launch and learn", "Deliver with HQ support, report transparently and improve with the wider chapter network."],
];

export default function ChaptersPage() {
  return <>
    <PageHero number="07" eyebrow="Elevate chapters" title={<>Local leadership. Shared standard. National possibility.</>} intro="Elevate's chapter model equips young leaders to design accountable programmes for the communities they know—supported by a common mission, tools and learning network." image="/images/level-up-1339.webp" imageAlt="A young coach standing on the Level Up Makoko football field" tone="orange" />
    <section className="chapter-map-section section-pad"><div className="chapter-map-copy"><p className="eyebrow">The network today</p><h2>Two flagship chapters. A wider movement taking shape.</h2><p>Nigeria's opportunity gaps look different from city to city. Local chapters make it possible to listen closely, build with local institutions and adapt programmes without diluting Elevate's standard.</p></div><div className="chapter-cards"><article className="chapter-live"><span>Flagship</span><MapPin /><h3>Elevate Lagos</h3><p>Home of Elevate's Makoko relationship, Project A.C.E., mentorship and community-rooted youth programmes.</p></article><article className="chapter-live"><span>Flagship</span><MapPin /><h3>Elevate Abuja</h3><p>Home of EmpowerED Teens, digital learning and emerging programmes across the Federal Capital Territory.</p></article></div></section>
    <section className="chapter-pipeline"><div><p className="eyebrow">Expansion pipeline</p><h2>Kwara · Oyo · Osun · and beyond</h2><p>These locations are in Elevate's emerging franchise pipeline—not presented as active chapters until leadership, training and launch requirements are complete.</p></div><div className="pipeline-orbits"><span>Kwara</span><span>Oyo</span><span>Osun</span><span>Next city?</span></div></section>
    <section className="why-chapters section-pad"><div className="why-head"><p className="eyebrow">Why chapters</p><h2>Scale the capability, not just the logo.</h2></div><div className="why-grid"><article><Building2 /><h3>Local relevance</h3><p>Programmes respond to real priorities, institutions and opportunity pathways in each place.</p></article><article><Network /><h3>Shared infrastructure</h3><p>HQ provides training, templates, mentorship, brand guidance and impact-measurement support.</p></article><article><Rocket /><h3>Youth leadership</h3><p>Undergraduates and recent graduates gain responsibility to build and manage credible social programmes.</p></article></div></section>
    <section className="franchise-process section-pad" id="start"><div><p className="eyebrow">Start an Elevate social franchise</p><h2>A supported path from intent to responsible launch.</h2><p>No franchise fee is required. Local leaders are responsible for ethical delivery and fundraising, while Elevate HQ provides structured training, mentorship and accountability.</p></div><ol>{steps.map(([n, title, text]) => <li key={title}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
    <section className="chapter-standard"><div><p className="eyebrow">What every chapter protects</p><h2>Mission alignment. Measurable impact. Financial integrity. Participant dignity.</h2></div><a className="button button-orange" href="mailto:hello@elevateng.org?subject=I%20want%20to%20start%20an%20Elevate%20chapter">Start the conversation <ArrowRight size={17} /></a></section>
    <StatementCta eyebrow="Your city can be next" title="Know a young leader who should build this?" text="Share the chapter pathway with an undergraduate, recent graduate or community builder ready to lead with discipline." href="mailto:hello@elevateng.org?subject=Elevate%20chapter%20referral" label="Refer a chapter leader" />
  </>;
}
