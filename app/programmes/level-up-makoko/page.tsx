import type { Metadata } from "next";
import { programmes } from "../../data";
import { ProjectDetail } from "../../components/ProjectDetail";
export const metadata: Metadata = { title: "Level Up Makoko", description: programmes[5].summary };
export default function Page() { return <ProjectDetail project={programmes[5]} index="06" />; }
