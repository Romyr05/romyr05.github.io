export type Achievement = {
  id: string;
  title: string;
  organizer?: string;
  /** e.g. "Champion", "Finalist", "Dean's Lister" */
  position: string;
  type: "Hackathon" | "CTF" | "Competition" | "Academic" | "Award" | "Other";
  /** "YYYY-MM-DD" or "YYYY-MM" or "YYYY" */
  date: string;
  url?: string;
  /** Blog post id with the write-up */
  relatedPost?: string;
  /** Project id built for this */
  relatedProject?: string;
};

// TODO: replace with your achievements (newest first).
export const achievements: Achievement[] = [
  {
    id: "university-hackathon",
    title: "TODO: University Hackathon 2026",
    organizer: "TODO: CS Society",
    position: "Champion",
    type: "Hackathon",
    date: "2026-03-14",
    relatedPost: "university-hackathon-2026",
    relatedProject: "campusqueue",
  },
  {
    id: "regional-ctf",
    title: "TODO: Regional Capture the Flag",
    organizer: "TODO: Sample Org",
    position: "Finalist",
    type: "CTF",
    date: "2025-11-20",
  },
  {
    id: "deans-list",
    title: "TODO: 1st Semester, AY 2025–2026",
    position: "Dean's Lister",
    type: "Academic",
    date: "2025-12",
  },
];
