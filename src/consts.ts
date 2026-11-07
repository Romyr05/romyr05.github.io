import type { Metadata, NavLink, Site, Social } from "@types";

// Every "TODO:" in this repo is a placeholder for you to replace.
// List them all with: grep -rn "TODO:" src public

export const SITE: Site = {
  TITLE: "Romyr Lopez",
  DESCRIPTION: "TODO: One-sentence description of you for search engines.",
  AUTHOR: "Romyr Lopez",
  ROLE: "Computer Science Student · Developer",
  TAGLINE:
    "TODO: I build web apps and learn by shipping them. 3rd-year CS, based in the Philippines.",
  EMAIL: "TODO@example.com",
  GITHUB_USERNAME: "romyr05",
  AVATAR: undefined, // TODO: e.g. "/images/avatar.png"
  SOURCE_URL: "https://github.com/romyr05/romyr05.github.io",
  NUM_PROJECTS_ON_HOMEPAGE: 4,
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const SOCIALS: Social[] = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/romyr05",
    ICON: "simple-icons:github",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/TODO",
    ICON: "simple-icons:linkedin",
  },
  { NAME: "Email", HREF: `mailto:${SITE.EMAIL}`, ICON: "lucide:mail" },
];

/** Top header links (the mockup's page links). */
export const NAV_LINKS: NavLink[] = [
  { LABEL: "projects", HREF: "/projects" },
  { LABEL: "blog", HREF: "/blog" },
  { LABEL: "achievements", HREF: "/achievements" },
  { LABEL: "cv", HREF: "/cv" },
];

// Pinned ids decide what shows on the home page, in this order.
// Ids must match a file/entry id in src/content or src/data.
export const PINNED_PROJECTS = [
  "campusqueue",
  "budgetly",
  "thesis-finder",
  "portfolio-v1",
];
export const PINNED_WORK = ["sample-company", "cs-student-org"];
export const PINNED_ACHIEVEMENTS = ["university-hackathon", "regional-ctf"];
/** Skills shown in the home page marquee (keys from src/data/skills.ts). */
export const PINNED_SKILLS = [
  "typescript",
  "react",
  "nextjs",
  "nodejs",
  "python",
  "fastapi",
  "postgresql",
  "supabase",
  "tailwind",
  "aws",
  "docker",
  "n8n",
] as const;

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: SITE.DESCRIPTION,
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Everything I've built, newest first.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Notes on what I'm building and learning.",
};

export const ACHIEVEMENTS: Metadata = {
  TITLE: "Achievements",
  DESCRIPTION: "Competitions and awards, each with the story behind it.",
};

export const SKILLS: Metadata = {
  TITLE: "Skills",
  DESCRIPTION: "Grouped by area. The number is how many of my projects use it.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "My CV as a web page, with a PDF version.",
};
