import type { Metadata } from "next";
import { programmes } from "../../data";
import { ProjectDetail } from "../../components/ProjectDetail";
export const metadata: Metadata = { title: "Christmas in Makoko", description: programmes[0].summary };
export default function Page() { return <ProjectDetail project={programmes[0]} index="01" />; }
