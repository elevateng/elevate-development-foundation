import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { PageHero, StatementCta } from "../components/SiteShell";

export const metadata: Metadata = { title: "Gallery", description: "Photographs from Elevate programmes in Makoko, Lagos and Abuja." };
const images = [
  ["/images/level-up-1343.webp", "Young footballers training during Level Up Makoko", "Level Up Makoko · Training"],
  ["/images/level-up-1330.webp", "Level Up Makoko participants standing together", "Level Up Makoko · Team"],
  ["/images/level-up-0381.webp", "Coach speaking with young footballers", "Level Up Makoko · Coaching"],
  ["/images/level-up-0353.webp", "Football match on the Makoko community field", "Level Up Makoko · Match day"],
  ["/images/empowered-speaker.webp", "Facilitator leading teenagers in an Elevate session", "EmpowerED Teens · Facilitation"],
  ["/images/empowered-session.webp", "Teenagers taking part in a group learning session", "EmpowerED Teens · Learning"],
  ["/images/community-team.webp", "Participants and volunteers gathered together", "Project A.C.E. · Community"],
  ["/images/makoko-portrait.webp", "Young person photographed in Makoko", "Makoko · Portrait"],
  ["/images/makoko-group.webp", "Young people gathered at an Elevate programme", "Makoko · Programme"],
];
export default function GalleryPage() { return <>
  <PageHero number="08" eyebrow="Project gallery" title={<>The work, seen up close.</>} intro="Photographs from programmes, fields, classrooms and communities—shared with context and with young people at the centre of their own stories." image="/images/level-up-1343.webp" imageAlt="Young footballers training during Level Up Makoko" tone="navy" />
  <section className="gallery-intro section-pad"><Camera size={36} /><div><p className="eyebrow">Visual archive</p><h2>Dignity before drama.</h2><p>Elevate documents talent, learning, relationships and action. Every image belongs to a programme story—not a stereotype.</p></div></section>
  <section className="gallery-masonry">{images.map(([src, alt, caption], i) => <figure key={src} className={`gallery-item gallery-item-${(i % 4) + 1}`}><img src={src} alt={alt} /><figcaption>{caption}</figcaption></figure>)}</section>
  <StatementCta eyebrow="Follow the live story" title="More moments. More voices. More work in motion." text="Follow @elevateng for current programme updates, calls for volunteers and stories from the field." href="https://www.instagram.com/elevateng/" label="Open Instagram" />
  </>; }
