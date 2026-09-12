import Link from "./components/InternalLink";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { StatementCta } from "./components/SiteShell";

const pathways = [
  ["01", "Mindset", "Build the self-knowledge and confidence to imagine a different future."],
  ["02", "Education", "Turn learning into practical choices, skills and community action."],
  ["03", "Employment", "Connect capability to mentors, livelihoods and economic opportunity."],
  ["04", "Innovation", "Back young people to solve real problems in ways that can grow."],
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Youth-led change · Nigeria · Since 2016</p>
          <h1>Potential is everywhere. <span>Opportunity should be too.</span></h1>
          <p className="hero-lead">Elevate works alongside young people in underserved communities to build the mindset, skills and access they need to shape their own futures.</p>
          <div className="button-row">
            <Link className="button button-ink" href="/programmes">Explore our work <ArrowRight size={18} /></Link>
            <Link className="text-link" href="/impact">See the evidence</Link>
          </div>
        </div>
        <div className="home-hero-visual">
          <img src="/images/level-up-1330.webp" alt="Young footballers standing together during Level Up Makoko" />
          <div className="anniversary-card"><span>2016—2026</span><strong>10 years<br />of showing up.</strong></div>
          <a className="watch-chip" href="https://www.youtube.com/watch?v=KowXOQzyLoc" target="_blank" rel="noreferrer"><Play size={17} fill="currentColor" /> Meet Elevate · 4:59</a>
        </div>
      </section>

      <section className="home-bento" aria-label="Elevate at a glance">
        <article className="bento-stat bento-stat-cyan"><strong>7,216</strong><span>lives reached in Elevate's documented early programme records</span></article>
        <article className="bento-stat"><strong>10</strong><span>years of community-rooted work</span></article>
        <article className="bento-stat bento-stat-photo"><img src="/images/level-up-0381.webp" alt="A coach leading young footballers during Level Up Makoko" /><span>Makoko → Lagos → Abuja</span></article>
        <article className="bento-stat"><strong>179</strong><span>teenagers in two 2024 EmpowerED editions</span></article>
        <Link className="bento-link" href="/impact"><span>Explore the evidence</span><ArrowRight size={24} /></Link>
      </section>

      <section className="site-map-hub section-pad" aria-label="Explore Elevate">
        <div className="site-map-title"><p className="eyebrow">Explore Elevate</p><h2>Go beyond the overview.</h2></div>
        <div className="site-map-links">
          <Link href="/programmes"><span>01</span><strong>Projects</strong><small>Six programme stories</small><ArrowRight /></Link>
          <Link href="/impact"><span>02</span><strong>Impact</strong><small>Interactive reports</small><ArrowRight /></Link>
          <Link href="/leadership"><span>03</span><strong>Leadership</strong><small>Team and governance</small><ArrowRight /></Link>
          <Link href="/theory-of-change"><span>04</span><strong>Theory of change</strong><small>How the model works</small><ArrowRight /></Link>
          <Link href="/chapters"><span>05</span><strong>Chapters</strong><small>Lagos, Abuja and next</small><ArrowRight /></Link>
          <Link href="/gallery"><span>06</span><strong>Gallery</strong><small>The work up close</small><ArrowRight /></Link>
        </div>
      </section>

      <div className="manifesto-strip" aria-label="Educating. Enlightening. Empowering.">
        <div className="manifesto-track" aria-hidden="true">
          <div><p>Educating.</p><i>✦</i><p>Enlightening.</p><i>✦</i><p>Empowering.</p><i>✦</i></div>
          <div><p>Educating.</p><i>✦</i><p>Enlightening.</p><i>✦</i><p>Empowering.</p><i>✦</i></div>
        </div>
      </div>

      <section className="home-intro section-pad" id="about">
        <div className="section-label"><span>01</span><p>The opportunity gap</p></div>
        <div className="intro-grid">
          <h2>Where a young person starts should not determine how far they can go.</h2>
          <div>
            <p>Our work began in Makoko, Lagos. Today, Elevate is a youth-led Nigerian nonprofit building community-rooted pathways across Lagos and the Federal Capital Territory.</p>
            <p>Our mission is to lift one million young Africans out of multidimensional poverty through mindset shifts, education, employment and innovation.</p>
            <Link className="arrow-link" href="/about">Who we are <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="pathway-section section-pad" id="programmes">
        <div className="pathway-title">
          <p className="eyebrow">Four connected levers</p>
          <h2>Change is not one intervention.</h2>
        </div>
        <div className="pathway-grid">
          {pathways.map(([number, title, text]) => (
            <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="ace-feature">
        <div className="ace-photo"><img src="/images/community-team.webp" alt="Elevate participants and volunteers gathered after a community programme" /></div>
        <div className="ace-copy">
          <p className="eyebrow">Our strategic platform</p>
          <h2>Project <span>A.C.E.</span></h2>
          <p className="large-copy">Access. Community development. Education.</p>
          <p>A framework launched in 2019 for bringing knowledge, opportunity and locally shaped solutions closer to the young people who need them.</p>
          <div className="ace-letters"><span><b>A</b> Access</span><span><b>C</b> Community</span><span><b>E</b> Education</span></div>
          <Link className="button button-light" href="/programmes">Explore the programmes <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="impact-ribbon" id="impact">
        <div className="impact-ribbon-head"><p className="eyebrow">Documented programme records</p><h2>Participation matters. Change matters more.</h2></div>
        <div className="impact-ribbon-grid">
          <article><strong>7,100</strong><p>people received food and relief items across three years of Christmas in Makoko</p></article>
          <article><strong>43</strong><p>young people in a ten-month mentorship journey</p></article>
          <article><strong>59</strong><p>young people reached through the 2022 Mental Liberation programme</p></article>
          <article><strong>95%</strong><p>of sampled mentees reported confidence and new skills</p></article>
        </div>
        <Link className="button button-orange" href="/impact">Explore impact and reports <ArrowRight size={18} /></Link>
      </section>

      <section className="story-teaser section-pad" id="story">
        <div className="story-collage">
          <img src="/images/legacy-collage.webp" alt="Collage from Elevate's early community programmes" />
          <img src="/images/makoko-group.webp" alt="Young people gathered for an Elevate programme in Makoko" />
        </div>
        <div className="story-teaser-copy">
          <p className="eyebrow"><Sparkles size={15} /> A decade in motion</p>
          <h2>Started in Makoko. Built to travel.</h2>
          <p>Every chapter starts by listening. Every programme is designed around the people, place and opportunity in front of us.</p>
          <Link className="arrow-link" href="/stories">Watch and read the stories <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="action-grid" id="join">
        <article><p className="eyebrow">Give your time</p><h2>Volunteer</h2><p>Find the team where your strengths can travel furthest.</p><Link href="/get-involved">Match your role <ArrowRight size={18} /></Link></article>
        <article><p className="eyebrow">Build together</p><h2>Partner</h2><p>Bring funding, expertise, access or a community challenge.</p><Link href="/get-involved#partner">Start a conversation <ArrowRight size={18} /></Link></article>
        <article><p className="eyebrow">Fund opportunity</p><h2>Donate</h2><p>Back youth-led pathways with accountable, evidence-led giving.</p><Link href="/donate">Explore ways to give <ArrowRight size={18} /></Link></article>
      </section>

      <StatementCta eyebrow="The next chapter" title="One million young Africans. One opportunity at a time." text="Join a growing community of volunteers, partners and supporters building the conditions for young people to thrive." href="/get-involved" label="Build with Elevate" />
    </>
  );
}
