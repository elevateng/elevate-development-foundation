import type { Metadata } from "next";
import { ReportExperience, type ReportData } from "../../components/ReportExperience";
export const metadata: Metadata = { title: "Mental Liberation 2022 Impact Report", description: "Explore participant learning, confidence and recommendations from the 2022 Mental Liberation Programme." };
const report: ReportData = {
  year: "2022", title: "Mental Liberation Programme Impact Report", subtitle: "Three days of interactive learning designed to help young people in Makoko examine limiting ideas, build self-awareness and act as change agents.", location: "Makoko · Lagos", pdf: "/reports/mental-liberation-2022.pdf",
  metrics: [{ value: "59", label: "young people reached" }, { value: "5", label: "sessions delivered" }, { value: "82%", label: "gained adequate knowledge" }, { value: "75%", label: "requested continued counselling" }],
  overview: ["The programme addressed the personal and community limitations participants identified around them. Sessions covered aspiration, purpose, self-esteem, mental re-engineering, self-awareness and community needs.", "Pre- and post-programme questionnaires were used to compare understanding and self-reported confidence."],
  outcomes: ["Adequate understanding of mental liberation rose from 54.5% at baseline to 87.5% after the programme.", "High self-esteem ratings rose from 45.5% to 75%.", "More than 80% could articulate why mental liberation matters.", "All post-programme respondents had gained some understanding of mental liberation."],
  learning: ["Financial hardship remained the most widely reported limiting factor.", "Participants also named limited education, illiteracy, early marriage and cultural beliefs.", "The request for counselling showed that short sessions needed a longer support pathway.", "The programme reached 59 people against an initial target of 150, making expansion a clear priority."],
  next: ["Integrate continued professional counselling.", "Expand outreach while protecting programme quality.", "Build partnerships with schools, churches and local organisations.", "Connect mindset work to education, livelihood and community infrastructure."],
};
export default function Page() { return <ReportExperience report={report} />; }
