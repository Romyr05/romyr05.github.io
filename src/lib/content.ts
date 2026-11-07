import { getCollection, type CollectionEntry } from "astro:content";
import { achievements, type Achievement } from "@data/achievements";
import type { SkillKey } from "@data/skills";
import { sortByDateDesc } from "@lib/utils";

export type Project = CollectionEntry<"projects">;
export type Post = CollectionEntry<"posts">;

/** Published projects, newest first. Drafts show in `astro dev` only. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection(
    "projects",
    (p) => import.meta.env.DEV || !p.data.draft,
  );
  return sortByDateDesc(all, (p) => p.data.startDate);
}

/** Published posts, newest first. Drafts show in `astro dev` only. */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection(
    "posts",
    (p) => import.meta.env.DEV || !p.data.draft,
  );
  return sortByDateDesc(all, (p) => p.data.date);
}

/** The achievement whose write-up is this post, if any. */
export function getAchievementForPost(postId: string): Achievement | undefined {
  return achievements.find((a) => a.relatedPost === postId);
}

/** Achievements that were won with this project. */
export function getAchievementsForProject(projectId: string): Achievement[] {
  return achievements.filter((a) => a.relatedProject === projectId);
}

/** How many projects use each skill (for the /skills page counts). */
export function countSkillUsage(
  projects: Project[],
): Partial<Record<SkillKey, number>> {
  const counts: Partial<Record<SkillKey, number>> = {};
  for (const project of projects) {
    for (const skill of project.data.skills) {
      counts[skill] = (counts[skill] ?? 0) + 1;
    }
  }
  return counts;
}
