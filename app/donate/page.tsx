import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, LockKeyhole, Mail } from "lucide-react";
import { PageHero } from "../components/SiteShell";

export const metadata: Metadata = { title: "Donate", description: "Support youth-led, community-rooted opportunity through Elevate Development Foundation." };

const routes = [
  ["One-time", "Back an immediate programme need or contribute to the general mission."],
  ["Monthly", "Give the team more certainty to plan, deliver and follow up."],
  ["Project", "Fund a defined cohort, location, research need or programme component."],
  ["In kind", "Contribute devices, learning materials, space, transport or professional services."],
];

export default function DonatePage() {
  return (
    <>
      <PageHero number="10" eyebrow="Donate" title={<>Fund the bridge<br />between potential<br />and opportunity.</>} intro="Support youth-led, community-rooted pathways across mindset, learning, skills and innovation." image="/images/empowered-session.webp" imageAlt="Young people learning together during an Elevate programme" tone="orange" />

      <section className="give-routes section-pad">
        <div className="give-head"><p className="eyebrow">Choose how you give</p><h2>Every useful contribution starts with clarity.</h2></div>
        <div className="give-grid">{routes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="giving-panel">
        <div className="giving-panel-copy"><p className="eyebrow">Give securely</p><h2>Request the current giving details.</h2><p>We are confirming Elevate&apos;s current secure online checkout before publishing a payment button. Until then, the team will provide verified bank or payment details directly.</p><a className="button button-ink" href="mailto:hello@elevateng.org?subject=Request%20secure%20Elevate%20giving%20details&body=Hello%20Elevate%2C%0A%0AI%20would%20like%20to%20make%20a%20%5Bone-time%2Fmonthly%2Fproject%5D%20gift.%0APlease%20share%20the%20current%20secure%20giving%20details.%0A%0AThank%20you."><Mail size={18} /> Request secure giving details</a><p className="security-note"><LockKeyhole size={17} /> Only use details sent from hello@elevateng.org and independently confirm large transfers.</p></div>
        <div className="giving-panel-side"><p className="eyebrow">What your support can strengthen</p><ul><li><CheckCircle2 size={18} /> Facilitators, mentors and programme delivery</li><li><CheckCircle2 size={18} /> Learning materials and digital access</li><li><CheckCircle2 size={18} /> Community mobilisation and participant support</li><li><CheckCircle2 size={18} /> Monitoring, follow-up and evidence</li><li><CheckCircle2 size={18} /> New chapter and programme development</li></ul></div>
      </section>

      <section className="donor-trust section-pad">
        <div><p className="eyebrow">Accountability</p><h2>Support should come with a line of sight.</h2></div>
        <div className="trust-grid"><article><span>01</span><h3>Defined purpose</h3><p>Project-restricted support is agreed in writing before funds move.</p></article><article><span>02</span><h3>Evidence</h3><p>Published programme reports let supporters inspect claims, methods and limitations.</p></article><article><span>03</span><h3>Direct access</h3><p>Partners can request programme, impact or financial information from the team.</p></article></div>
        <a className="arrow-link" href="/impact#report-library">Read impact reports <ArrowRight size={18} /></a>
      </section>

      <section className="large-gift-band"><div><p className="eyebrow">Institutional and major support</p><h2>Planning a larger or multi-year partnership?</h2></div><div><p>Speak with the team about scope, outcomes, reporting and the most useful structure before making a commitment.</p><a className="button button-light" href="mailto:hello@elevateng.org?subject=Major%20gift%20or%20institutional%20partnership">Start a conversation <ArrowRight size={18} /></a></div></section>
    </>
  );
}
