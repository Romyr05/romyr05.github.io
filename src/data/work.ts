import type { SkillKey } from "@data/skills";

export type WorkItem = {
  id: string;
  title: string;
  company: string;
  companyURL?: string;
  /** Name of an SVG in src/icons/ (without .svg) */
  companyLogo?: string;
  employmentType?: string;
  location?: string;
  /** "YYYY-MM" */
  startDate: string;
  /** "YYYY-MM", leave out if current */
  endDate?: string;
  /** One line, shown on the home page row */
  description?: string;
  /** Bullets shown on the detail page ("What I worked on") */
  highlights?: string[];
  skills?: SkillKey[];
  /** Path under /public, e.g. "/images/work/sample/photo.jpg" */
  image?: string;
  /** Certificate / recommendation link */
  proofURL?: string;
  /** Blog post ids for the "in my own words" story */
  relatedPosts?: string[];
  /** Project ids */
  relatedProjects?: string[];
};

// TODO: replace with your experience (newest first).
export const work: WorkItem[] = [
  {
    id: "sample-company",
    title: "Web Developer Intern",
    company: "TODO: Sample Company",
    companyURL: "https://example.com",
    employmentType: "Internship",
    location: "Remote",
    startDate: "2026-06",
    endDate: "2026-08",
    description:
      "TODO: Built internal dashboard pages and cut report generation from a manual hour to one click.",
    highlights: [
      "TODO: Built 4 dashboard pages in React for the operations team.",
      "TODO: Wrote the API endpoint that turned an hour of manual reporting into one click.",
      "TODO: Fixed accessibility issues flagged in our first audit.",
    ],
    skills: ["react", "nodejs", "postgresql"],
    relatedPosts: ["first-internship-notes"],
  },
  {
    id: "cs-student-org",
    title: "Tech Officer",
    company: "TODO: CS Student Org",
    employmentType: "Organization",
    location: "On-site",
    startDate: "2025-08",
    description:
      "TODO: Run the org's website and lead beginner web dev workshops each semester.",
    highlights: [
      "TODO: Maintain the org website.",
      "TODO: Lead beginner web dev workshops.",
    ],
    skills: ["html", "css", "javascript"],
    relatedProjects: ["org-website"],
  },
];
