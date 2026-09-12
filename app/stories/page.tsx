import type { Metadata } from "next";
import { ArrowUpRight, Camera } from "lucide-react";
import { PageHero, StatementCta } from "../components/SiteShell";

export const metadata: Metadata = { title: "Stories", description: "Watch films and explore stories from Elevate's community-rooted work in Nigeria." };

const videos = [
  { id: "KowXOQzyLoc", tag: "Who we are", title: "Meet Elevate Development Foundation", duration: "4:59" },
  { id: "213TfMgoYkg", tag: "Stories of impact", title: "Hear from the people closest to the work", duration: "3:33" },
  { id: "A9v6712rAxM", tag: "From the archive", title: "The #LevelUpMakoko fundraiser", duration: "2:32" },
];

export default function StoriesPage() {
  return (
    <>
      <PageHero number="06" eyebrow="Stories from the work" title={<>See the people.<br />Hear the possibility.</>} intro="Moments from Makoko, Abuja and the communities shaping Elevate with us." image="/images/legacy-collage.webp" imageAlt="A collage of Elevate volunteers and participants across community projects" tone="paper" />

      <section className="story-principle section-pad">
        <div className="section-label"><span>Our promise</span><p>Dignity before drama</p></div>
        <div className="intro-grid"><h2>Young people are protagonists in their own stories.</h2><div><p>We document aspiration, learning, skill and achievement—not pity. Every image should carry context, every story should protect dignity and participation should never be reduced to a fundraising device.</p><p>That is the standard behind the films, photographs and stories we share.</p></div></div>
      </section>

      <section className="video-section section-pad">
        <div className="video-head"><p className="eyebrow">Watch</p><h2>Three windows into Elevate.</h2></div>
        <div className="video-grid">{videos.map((video) => <article key={video.id}><div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${video.id}`} title={video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="video-meta"><span>{video.tag}</span><span>{video.duration}</span></div><h3>{video.title}</h3></article>)}</div>
      </section>

      <section className="photo-stories">
        <article className="photo-story photo-story-wide"><img src="/images/level-up-1330.webp" alt="Level Up Makoko football participants standing as a team" /><div><p className="eyebrow">Makoko</p><h2>The field can become a classroom.</h2><p>Sport creates a shared language for teamwork, discipline, confidence and community.</p></div></article>
        <article className="photo-story"><img src="/images/empowered-session.webp" alt="Teenagers in an EmpowerED learning session" /><div><p className="eyebrow">Abuja</p><h2>A room full of choices.</h2><p>Young people explore strengths, purpose and pathways with facilitators beside them.</p></div></article>
        <article className="photo-story"><img src="/images/level-up-water.webp" alt="A young person standing beside the Makoko waterfront" /><div><p className="eyebrow">The starting point</p><h2>Context matters. Potential travels.</h2><p>Place shapes the work, but never limits our view of what a young person can become.</p></div></article>
      </section>

      <section className="gallery-link-band"><div><p className="eyebrow">Project gallery</p><h2>Stay with the moments longer.</h2></div><a className="button button-ink" href="/gallery">Open the full gallery <ArrowUpRight size={18} /></a></section>

      <section className="social-band"><Camera size={34} /><div><p className="eyebrow">Follow the work as it happens</p><h2>@elevateng</h2><p>Programme moments, calls for volunteers and field updates from the Elevate team.</p></div><a className="button button-light" href="https://www.instagram.com/elevateng/" target="_blank" rel="noreferrer">Open Instagram <ArrowUpRight size={18} /></a></section>

      <StatementCta eyebrow="Share a story" title="Were you part of an Elevate programme?" text="Participants, volunteers and partners can help us tell a fuller story of what changed—and what still needs to." href="mailto:hello@elevateng.org?subject=My%20Elevate%20story" label="Write to the team" />
    </>
  );
}
