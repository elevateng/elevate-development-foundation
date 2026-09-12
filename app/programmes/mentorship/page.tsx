import type { Metadata } from "next";
import { programmes } from "../../data";
import { ProjectDetail } from "../../components/ProjectDetail";
export const metadata: Metadata = { title: "A.C.E. Mentorship", description: programmes[2].summary };
export default function Page() { return <ProjectDetail project={programmes[2]} index="03" />; }
