import type { Metadata } from "next";
import { ReportExperience, type ReportData } from "../../components/ReportExperience";
export const metadata: Metadata = { title: "Project A.C.E. 2021 Impact Report", description: "Explore the outcomes and learning from Project A.C.E.'s Mental Liberation Conference and Social Impact Accelerator." };
const report: ReportData = {
  year: "2021", title: "Project A.C.E. Progress & Impact Report", subtitle: "A visual reading of the Mental Liberation Conference and Social Impact Accelerator records since Project A.C.E. launched in Makoko.", location: "Makoko · Lagos", pdf: "/reports/project-ace-2021.pdf",
  metrics: [{ value: "27", label: "Mental Liberation participants" }, { value: "20h", label: "storytelling and inspiration" }, { value: "10", label: "accelerator participants" }, { value: "5", label: "community project concepts" }],
  overview: ["Project A.C.E. combines reorientation, education and community development to support young people aged 16–35 in Makoko.", "The interim report focuses on two linked programmes: a five-day Mental Liberation Conference and a five-week Social Impact Accelerator."],
  outcomes: ["70% demonstrated an adequate understanding of global citizenship.", "80% identified an entitlement mindset they wanted to unlearn.", "Thirteen participants formed the Makoko Student Association.", "Every accelerator participant drafted a response to waste, education or unemployment challenges.", "One participant received a pilot grant for a waste-management project."],
  learning: ["Mindset learning worked best when connected to practical community action.", "Participants moved from identifying problems to pitching structured solutions.", "Long-term career support, digital skills and community expansion were identified as the next layer of work."],
  next: ["Continue mentorship and career development.", "Build specialist digital-skills pathways.", "Deepen community-project incubation and seed support.", "Expand from Adogbo into Oko-Agbon and waterside communities."],
};
export default function Page() { return <ReportExperience report={report} />; }
