export type Skill = {
  name: string;
  /** Iconify name. Leave out to show a text badge instead. */
  icon?: string;
};

// TODO: add/remove skills. The key is what you reference elsewhere.
export const skills = {
  typescript: { name: "TypeScript", icon: "simple-icons:typescript" },
  javascript: { name: "JavaScript", icon: "simple-icons:javascript" },
  python: { name: "Python", icon: "simple-icons:python" },
  java: { name: "Java", icon: "simple-icons:openjdk" },
  react: { name: "React", icon: "simple-icons:react" },
  nextjs: { name: "Next.js", icon: "simple-icons:nextdotjs" },
  astro: { name: "Astro", icon: "simple-icons:astro" },
  tailwind: { name: "Tailwind", icon: "simple-icons:tailwindcss" },
  html: { name: "HTML", icon: "simple-icons:html5" },
  css: { name: "CSS", icon: "simple-icons:css" },
  nodejs: { name: "Node.js", icon: "simple-icons:nodedotjs" },
  express: { name: "Express", icon: "simple-icons:express" },
  fastapi: { name: "FastAPI", icon: "simple-icons:fastapi" },
  postgresql: { name: "PostgreSQL", icon: "simple-icons:postgresql" },
  supabase: { name: "Supabase", icon: "simple-icons:supabase" },
  firebase: { name: "Firebase", icon: "simple-icons:firebase" },
  aws: { name: "AWS", icon: "simple-icons:amazonwebservices" },
  docker: { name: "Docker", icon: "simple-icons:docker" },
  vercel: { name: "Vercel", icon: "simple-icons:vercel" },
  githubActions: { name: "GitHub Actions", icon: "simple-icons:githubactions" },
  pandas: { name: "Pandas", icon: "simple-icons:pandas" },
  sklearn: { name: "Scikit-learn", icon: "simple-icons:scikitlearn" },
  n8n: { name: "n8n", icon: "simple-icons:n8n" },
  git: { name: "Git", icon: "simple-icons:git" },
  figma: { name: "Figma", icon: "simple-icons:figma" },
} as const satisfies Record<string, Skill>;

export type SkillKey = keyof typeof skills;

export const skillKeys = Object.keys(skills) as [SkillKey, ...SkillKey[]];

/** Groups shown on /skills, in this order. */
export const skillGroups = {
  Languages: ["typescript", "javascript", "python", "java"],
  Frontend: ["react", "nextjs", "astro", "tailwind", "html", "css"],
  Backend: ["nodejs", "express", "fastapi"],
  Databases: ["postgresql", "supabase", "firebase"],
  "DevOps / Cloud": ["aws", "docker", "vercel", "githubActions"],
  "AI / ML": ["pandas", "sklearn"],
  Automation: ["n8n"],
  Tools: ["git", "figma"],
} satisfies Record<string, readonly SkillKey[]>;
