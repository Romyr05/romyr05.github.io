export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  AUTHOR: string;
  ROLE: string;
  TAGLINE: string;
  EMAIL: string;
  GITHUB_USERNAME: string;
  /** Path under /public, or undefined to show the placeholder circle. */
  AVATAR?: string;
  /** Link shown as "Source code" in the footer. */
  SOURCE_URL: string;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  NUM_POSTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Social = {
  NAME: string;
  HREF: string;
  /** Iconify name, e.g. "simple-icons:github" */
  ICON: string;
};

export type NavLink = {
  LABEL: string;
  HREF: string;
};
