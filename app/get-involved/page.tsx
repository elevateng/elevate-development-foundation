import type { Metadata } from "next";
import { ArrowRight, Building2, HandHeart, Megaphone, Users } from "lucide-react";
import VolunteerMatcher from "../components/VolunteerMatcher";
import { PageHero, StatementCta } from "../components/SiteShell";

export const metadata: Metadata = { title: "Get involved", description: "Volunteer, partner or champion opportunity with Elevate Development Foundation." };

const roleAreas = [
  ["Programme design", "Curriculum, research and monitoring & evaluation."],
  ["Project delivery", "Project management, facilitation and community mobilisation."],
  ["Media & storytelling", "Social media, writing, design, photo, video and public relations."],
  ["People & operations", "Volunteer coordination, people support, administration and logistics."],
  ["Fundraising & partnerships", "Grants, partnerships, donor relations and resource mobilisation."],
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero number="09" eyebrow="Get involved" title={<>Bring what you have.<br />Build what is missing.</>} intro="Time, expertise, networks, funding and local knowledge all have a place in the next chapter." image="/images/community-team.webp" imageAlt="Elevate volunteers and participants smiling together" tone="cyan" />

      <section className="ways-grid">
        <article><HandHeart size={28} /><p className="eyebrow">Give time</p><h2>Volunteer</h2><p>Join a team and contribute a specific strength to programme design, delivery or growth.</p><a href="#volunteer">Find your role <ArrowRight size={17} /></a></article>
        <article><Building2 size={28} /><p className="eyebrow">Build together</p><h2>Partner</h2><p>Fund a cohort, open a school or community, contribute expertise or solve a shared challenge.</p><a href="#partner">Explore partnership <ArrowRight size={17} /></a></article>
        <article><Megaphone size={28} /><p className="eyebrow">Expand the circle</p><h2>Champion</h2><p>Tell the story, introduce a supporter or mobilise your network around a project.</p><a href="mailto:hello@elevateng.org?subject=I%20want%20to%20champion%20Elevate">Raise your hand <ArrowRight size={17} /></a></article>
      </section>

      <section className="matcher-section section-pad" id="volunteer"><VolunteerMatcher /></section>

      <section className="role-section section-pad">
        <div className="role-head"><p className="eyebrow">Where volunteers contribute</p><h2>Five teams. Many ways in.</h2></div>
        <div className="role-list">{roleAreas.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="partner-section" id="partner">
        <div className="partner-copy"><p className="eyebrow">Partnerships</p><h2>No single organisation closes an opportunity gap alone.</h2><p>Elevate works with schools, communities, companies, foundations, public institutions and specialist partners. The strongest partnerships begin with a clear problem and an honest view of what each party can contribute.</p><a className="button button-orange" href="mailto:hello@elevateng.org?subject=Partnership%20with%20Elevate&body=Organisation%3A%0AWhat%20we%20would%20like%20to%20explore%3A%0AWhat%20we%20can%20contribute%3A">Start a partnership conversation <ArrowRight size={18} /></a></div>
        <div className="partner-map"><Users size={32} /><p>We are especially interested in partners who can help expand local chapters, fund flagship programmes, strengthen evidence or test social technology.</p><div><span>Schools</span><span>Communities</span><span>Companies</span><span>Foundations</span><span>Public sector</span><span>Specialists</span></div></div>
      </section>

      <section className="champion-note section-pad"><p className="eyebrow">A feature in development</p><h2>Personal fundraising pages for Elevate champions.</h2><p>We are designing a way for supporters to create a personal campaign, mobilise their network and follow what their circle helps fund. Interested in being an early champion?</p><a className="arrow-link" href="mailto:hello@elevateng.org?subject=Elevate%20fundraising%20champion">Register your interest <ArrowRight size={18} /></a></section>

      <StatementCta eyebrow="Prefer to fund the work?" title="Your contribution can move an entire cohort closer to opportunity." text="Explore ways to give, request a secure giving route or speak with the team about project support." href="/donate" label="Go to donate" />
    </>
  );
}
