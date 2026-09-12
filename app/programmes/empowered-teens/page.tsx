import type { Metadata } from "next";
import { programmes } from "../../data";
import { ProjectDetail } from "../../components/ProjectDetail";
export const metadata: Metadata = { title: "EmpowerED Teens", description: programmes[3].summary };
export default function Page() { return <ProjectDetail project={programmes[3]} index="04" />; }
