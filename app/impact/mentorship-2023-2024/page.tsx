import type { Metadata } from "next";
import { ReportExperience, type ReportData } from "../../components/ReportExperience";
export const metadata: Metadata = { title: "Mentorship 2023–2024 Impact Report", description: "Explore ten months of A.C.E. mentorship outcomes, participant feedback and lessons." };
const report: ReportData = {
  year: "2023–24", title: "A.C.E. Mentorship Impact Report", subtitle: "A ten-month journey pairing young people in Makoko with volunteer mentors for guidance, behaviour modelling and skills development.", location: "Makoko · Virtual", pdf: "/reports/mentorship-2023-2024.pdf",
  metrics: [{ value: "43", label: "mentees participated" }, { value: "20", label: "volunteer mentors" }, { value: "95%", label: "gained confidence and skills" }, { value: "68.1%", label: "applied learning to life or career" }],
  overview: ["The programme began in May 2023 and ended in April 2024. Mentors and mentees met weekly, mainly online, using a curriculum built around behaviour, guidance, career planning and skills transfer.", "Pairing considered each mentee's interests and the mentor's experience. Feedback, regular check-ins and biweekly mentor reports supported learning."],
  outcomes: ["100% of sampled mentees reported receiving support and understanding from mentors.", "95% reported increased confidence and skill development.", "95% reported stronger interpersonal skills.", "68.1% reported advancement or successful application in life and career.", "100% of sampled mentees understood the curriculum topics."],
  learning: ["The quantitative analysis sampled 51% of mentees; results should be read in that context.", "Lack of internet access was the most frequently named communication barrier.", "School commitments and work-life balance also disrupted regular contact.", "Participants asked for physical meet-ups, bootcamps, encouragement and spaces to showcase talent."],
  next: ["Blend virtual mentoring with physical learning and meet-ups.", "Add time-management and emotional-intelligence support.", "Strengthen internet and device access where possible.", "Continue matching mentors to specific education and career goals."],
};
export default function Page() { return <ReportExperience report={report} />; }
