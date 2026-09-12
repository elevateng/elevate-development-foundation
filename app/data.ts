export type Programme = {
  slug: string;
  title: string;
  shortTitle: string;
  location: string;
  period: string;
  pillar: string;
  summary: string;
  statement: string;
  image: string;
  imageAlt: string;
  metrics: { value: string; label: string }[];
  approach: string[];
  story: string[];
  evidence?: { label: string; href: string };
};

export const programmes: Programme[] = [
  {
    slug: "christmas-in-makoko",
    title: "Christmas in Makoko",
    shortTitle: "Christmas in Makoko",
    location: "Makoko, Lagos",
    period: "2016–2019",
    pillar: "Relief and community trust",
    summary: "The outreach that began Elevate's relationship with Makoko—mobilising volunteers, meals and relief while building the trust that later made long-term programmes possible.",
    statement: "Showing up first. Staying for the longer work.",
    image: "/images/legacy-collage.webp",
    imageAlt: "Archive collage from Elevate's early Christmas in Makoko outreaches",
    metrics: [
      { value: "7,100", label: "people received food and relief items across three years" },
      { value: "100+", label: "volunteers mobilised in programme records" },
      { value: "2016", label: "the year Elevate began in Makoko" },
    ],
    approach: ["Work with community leaders", "Mobilise youth volunteers", "Distribute food and relief with dignity", "Convert trust into sustained programmes"],
    story: [
      "Christmas in Makoko was Elevate's first expression of service. The annual outreach brought young volunteers into a community often described from a distance and asked them to meet people, listen and work alongside local leaders.",
      "The programme's significance is not only its scale. It became the relationship base for Project A.C.E., mentorship, skills programmes and community-designed interventions that followed.",
    ],
  },
  {
    slug: "project-ace",
    title: "Project A.C.E.",
    shortTitle: "Project A.C.E.",
    location: "Makoko, Lagos",
    period: "Since 2019",
    pillar: "Access · Community development · Education",
    summary: "Elevate's long-term platform for helping disadvantaged young people build productive mindsets, career pathways and the capability to solve community problems.",
    statement: "Mindset. Opportunity. Community agency.",
    image: "/images/community-team.webp",
    imageAlt: "Elevate participants and volunteers gathered after a community programme",
    metrics: [
      { value: "27", label: "Mental Liberation Conference participants" },
      { value: "10", label: "Social Impact Accelerator participants" },
      { value: "5", label: "community project concepts developed" },
    ],
    approach: ["Reorientation and mindset learning", "Career and education support", "Social impact masterclasses", "Seed support for community solutions"],
    story: [
      "Project A.C.E. was created when Elevate shifted more of its energy from one-off relief towards trackable, long-term youth development. Its three connected parts address how young people see themselves, the opportunities they can reach and the change they can lead.",
      "The 2021 interim report documents five days of Mental Liberation learning and a five-week Social Impact Accelerator. Participants developed responses to waste, education and unemployment challenges in Makoko.",
    ],
    evidence: { label: "Explore the 2021 interactive report", href: "/impact/project-ace-2021" },
  },
  {
    slug: "mentorship",
    title: "A.C.E. Mentorship",
    shortTitle: "Mentorship",
    location: "Makoko, Lagos",
    period: "2023–2024",
    pillar: "Guidance over time",
    summary: "A structured ten-month relationship connecting young people with volunteer mentors for behaviour modelling, guidance and practical skill development.",
    statement: "A weekly conversation can redirect a future.",
    image: "/images/elevate-workshop.jpg",
    imageAlt: "Young people taking part in an Elevate learning session",
    metrics: [
      { value: "43", label: "mentees participated" },
      { value: "20", label: "volunteer mentors" },
      { value: "95%", label: "reported confidence and new skills" },
    ],
    approach: ["Match by goals and experience", "Meet virtually each week", "Use a shared growth curriculum", "Collect feedback and mentor reports"],
    story: [
      "The programme paired Project A.C.E. mentees with volunteers from education, business, technology and social work. What began as a six-month programme continued for ten months because relationships and learning needed time.",
      "Feedback showed strong gains in confidence, interpersonal skill and applied learning, while unreliable internet access remained the largest communication barrier. That lesson now informs future blended delivery.",
    ],
    evidence: { label: "Explore the 2023–24 interactive report", href: "/impact/mentorship-2023-2024" },
  },
  {
    slug: "empowered-teens",
    title: "EmpowerED Teens",
    shortTitle: "EmpowerED Teens",
    location: "Abuja, FCT",
    period: "Since 2024",
    pillar: "Identity, purpose and pathways",
    summary: "A five-week experience helping teenagers understand themselves, explore future pathways and practise solving problems around them.",
    statement: "Before choosing a career, understand the person choosing it.",
    image: "/images/empowered-speaker.webp",
    imageAlt: "An Elevate facilitator leading an EmpowerED Teens session",
    metrics: [
      { value: "179", label: "teenagers across two 2024 editions" },
      { value: "5", label: "weeks of guided learning" },
      { value: "2", label: "communities and schools in the 2024 record" },
    ],
    approach: ["Self-discovery and identity", "Purpose and soft skills", "Career-pathway exposure", "Capstone community problem-solving"],
    story: [
      "EmpowerED Teens creates room for adolescents to ask better questions about identity, possibility and work. Facilitators introduce pathways across technology, enterprise, arts, skilled trades and care without treating one route as the only definition of success.",
      "The first documented editions reached Kado Village and Government Science Technical College, Garki, establishing a flagship youth-development programme for Elevate Abuja.",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation Programme",
    shortTitle: "Digital Transformation",
    location: "Paikon-Kore, FCT",
    period: "2024",
    pillar: "Digital access and skills",
    summary: "Practical learning that takes digital confidence closer to communities where devices, connectivity and structured training are harder to reach.",
    statement: "Digital confidence should not depend on postcode.",
    image: "/images/elevate-session.jpg",
    imageAlt: "Participants learning in an Elevate digital session",
    metrics: [
      { value: "48", label: "registrations recorded" },
      { value: "25", label: "participants completed" },
      { value: "52%", label: "recorded completion rate" },
    ],
    approach: ["Recruit within the community", "Teach practical digital foundations", "Support learning through completion", "Use completion data to improve access"],
    story: [
      "The Paikon-Kore pilot tested how community-based digital learning could move beyond registration into sustained participation. Twenty-five of 48 registered learners completed the programme.",
      "The gap between interest and completion is important evidence. It keeps Elevate focused on the practical barriers—access, time, devices and continuity—that shape whether training becomes opportunity.",
    ],
  },
  {
    slug: "level-up-makoko",
    title: "Level Up Makoko",
    shortTitle: "Level Up Makoko",
    location: "Makoko, Lagos",
    period: "Community activation",
    pillar: "Sport and development",
    summary: "A football-centred community experience using sport as a shared language for teamwork, discipline, confidence and connection.",
    statement: "The field can become a classroom.",
    image: "/images/level-up-1330.webp",
    imageAlt: "Young footballers in Level Up Makoko team shirts",
    metrics: [
      { value: "1", label: "community field transformed into a learning space" },
      { value: "3", label: "development themes: teamwork, discipline and confidence" },
      { value: "360°", label: "a programme designed around the whole young person" },
    ],
    approach: ["Use sport to create belonging", "Coach teamwork and discipline", "Connect participants with role models", "Celebrate community talent"],
    story: [
      "Level Up Makoko meets young people through something already alive in the community: football. Coaching, team play and shared goals create natural moments for confidence, discipline and conversation.",
      "The programme also produces some of Elevate's strongest visual storytelling—images of young people as athletes, teammates and protagonists rather than passive beneficiaries.",
    ],
    evidence: { label: "Watch the Level Up film", href: "https://www.youtube.com/watch?v=A9v6712rAxM" },
  },
];

export const reportLinks = [
  { slug: "project-ace-2021", year: "2021", title: "Project A.C.E. Progress & Impact Report", summary: "Mental Liberation and the Social Impact Accelerator.", pdf: "/reports/project-ace-2021.pdf" },
  { slug: "mental-liberation-2022", year: "2022", title: "Mental Liberation Programme Impact Report", summary: "Mindset, self-esteem and learning outcomes in Makoko.", pdf: "/reports/mental-liberation-2022.pdf" },
  { slug: "mentorship-2023-2024", year: "2023–24", title: "A.C.E. Mentorship Impact Report", summary: "A ten-month mentorship programme with 43 mentees and 20 mentors.", pdf: "/reports/mentorship-2023-2024.pdf" },
];
