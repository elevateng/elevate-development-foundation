"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const records = [
  {
    category: "Relief",
    year: "2016–19",
    place: "Makoko",
    value: "7,100",
    label: "people received food and relief items",
    detail: "Recorded across three years of Christmas in Makoko activities.",
    source: "/programmes/christmas-in-makoko",
  },
  {
    category: "Mindset",
    year: "2021",
    place: "Makoko",
    value: "27",
    label: "Mental Liberation participants",
    detail: "Five days and 20 hours of guided reflection, leadership and purpose learning.",
    source: "/impact/project-ace-2021",
  },
  {
    category: "Leadership",
    year: "2021",
    place: "Makoko",
    value: "10",
    label: "Social Impact Accelerator participants",
    detail: "Five community project concepts developed across waste, education and unemployment.",
    source: "/impact/project-ace-2021",
  },
  {
    category: "Mentorship",
    year: "2023–24",
    place: "Makoko",
    value: "43",
    label: "young people mentored",
    detail: "A ten-month journey with 20 volunteer mentors and weekly virtual sessions.",
    source: "/impact/mentorship-2023-2024",
  },
  {
    category: "Mentorship",
    year: "2023–24",
    place: "Makoko",
    value: "95%",
    label: "reported confidence and new skills",
    detail: "Mentee feedback also recorded 95% improvement in interpersonal skills.",
    source: "/impact/mentorship-2023-2024",
  },
  {
    category: "Mentorship",
    year: "2023–24",
    place: "Makoko",
    value: "68.1%",
    label: "applied learning to life or career",
    detail: "Reported implementation or advancement after the programme.",
    source: "/impact/mentorship-2023-2024",
  },
  {
    category: "Teens",
    year: "2024",
    place: "Abuja",
    value: "179",
    label: "teenagers reached",
    detail: "Two EmpowerED Teens editions in Kado Village and Government Science Technical College, Garki.",
    source: "#report-library",
  },
  {
    category: "Digital",
    year: "2024",
    place: "Paikon-Kore",
    value: "25",
    label: "digital learners completed",
    detail: "Of 48 registrations recorded in the Digital Transformation Programme.",
    source: "#methodology",
  },
];

const filters = ["All", "Relief", "Mindset", "Leadership", "Mentorship", "Teens", "Digital"];

export default function ImpactExplorer() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? records : records.filter((item) => item.category === active);

  return (
    <div className="impact-explorer">
      <div className="filter-row" aria-label="Filter impact records">
        {filters.map((filter) => (
          <button
            key={filter}
            className={active === filter ? "active" : ""}
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="evidence-grid" aria-live="polite">
        {visible.map((item) => (
          <article className="evidence-card" key={`${item.value}-${item.label}`}>
            <div className="evidence-meta"><span>{item.year}</span><span>{item.place}</span></div>
            <strong>{item.value}</strong>
            <h3>{item.label}</h3>
            <p>{item.detail}</p>
            <a href={item.source}>
              Evidence <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
