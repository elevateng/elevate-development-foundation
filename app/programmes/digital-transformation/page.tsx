import type { Metadata } from "next";
import { programmes } from "../../data";
import { ProjectDetail } from "../../components/ProjectDetail";
export const metadata: Metadata = { title: "Digital Transformation Programme", description: programmes[4].summary };
export default function Page() { return <ProjectDetail project={programmes[4]} index="05" />; }
