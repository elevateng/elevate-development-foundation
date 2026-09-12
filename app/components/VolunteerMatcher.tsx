"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const interests = [
  { id: "ideas", label: "I turn messy ideas into clear plans", scores: { "Programme design": 4, "Project delivery": 2, "Research & insights": 2 } },
  { id: "people", label: "I love bringing people together", scores: { "People operations": 4, "Community engagement": 3, "Project delivery": 2 } },
  { id: "data", label: "I look for evidence and patterns", scores: { "Research & insights": 4, "Monitoring & evaluation": 4, "Programme design": 1 } },
  { id: "story", label: "I communicate through words or visuals", scores: { "Media & storytelling": 5, "Partnerships & fundraising": 2 } },
  { id: "teach", label: "I enjoy guiding or teaching others", scores: { "Facilitation & mentorship": 5, "Curriculum development": 4, "Community engagement": 1 } },
  { id: "organise", label: "I keep timelines and logistics moving", scores: { "Project delivery": 5, "People operations": 2, "Monitoring & evaluation": 1 } },
  { id: "fund", label: "I can open doors and mobilise resources", scores: { "Partnerships & fundraising": 5, "Media & storytelling": 1 } },
  { id: "field", label: "I want to work directly with communities", scores: { "Community engagement": 5, "Facilitation & mentorship": 3, "Project delivery": 2 } },
] as const;

export default function VolunteerMatcher() {
  const [selected, setSelected] = useState<string[]>([]);
  const results = useMemo(() => {
    const totals: Record<string, number> = {};
    interests.filter((item) => selected.includes(item.id)).forEach((item) => {
      Object.entries(item.scores).forEach(([role, score]) => { totals[role] = (totals[role] || 0) + score; });
    });
    return Object.entries(totals).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([role]) => role);
  }, [selected]);

  const toggle = (id: string) => setSelected((current) =>
    current.includes(id) ? current.filter((item) => item !== id) : current.length < 4 ? [...current, id] : current
  );

  return (
    <div className="matcher">
      <div className="matcher-copy">
        <p className="eyebrow">Volunteer role matcher</p>
        <h2>Where could you make your best contribution?</h2>
        <p>Choose up to four statements. We’ll suggest three Elevate teams where your strengths could travel furthest.</p>
      </div>
      <div className="matcher-tool">
        <div className="choice-grid">
          {interests.map((item) => (
            <button
              key={item.id}
              className={selected.includes(item.id) ? "selected" : ""}
              onClick={() => toggle(item.id)}
              aria-pressed={selected.includes(item.id)}
            >
              <span>{selected.includes(item.id) && <Check size={15} />}</span>{item.label}
            </button>
          ))}
        </div>
        <div className="matcher-result">
          <p>Your strongest matches</p>
          {results.length ? (
            <ol>{results.map((role) => <li key={role}>{role}</li>)}</ol>
          ) : <p className="matcher-placeholder">Choose a few statements to reveal your matches.</p>}
          <a className="button button-orange" href="https://lnkd.in/dYRc4zcX" target="_blank" rel="noreferrer">
            View volunteer opportunities <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
