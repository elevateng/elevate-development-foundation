import type { Metadata } from "next";
import { programmes } from "../../data";
import { ProjectDetail } from "../../components/ProjectDetail";
export const metadata: Metadata = { title: "Project A.C.E.", description: programmes[1].summary };
export default function Page() { return <ProjectDetail project={programmes[1]} index="02" />; }
