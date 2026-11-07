# Romyr Lopez — Portfolio

Personal site built with [Astro](https://astro.build), Tailwind CSS v4 and MDX.
Structure modelled on [andrianllmm.github.io](https://github.com/andrianllmm/andrianllmm.github.io).

## Quick start

```sh
pnpm install
cp .env.example .env   # optional: GitHub graph + visitor counter
pnpm dev               # http://localhost:4321
```

| Command             | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `pnpm dev`          | Dev server with hot reload                        |
| `pnpm build`        | Type/content check (`astro check`) + static build |
| `pnpm preview`      | Serve `dist/` (search only works here, not `dev`) |
| `pnpm lint`         | ESLint                                            |
| `pnpm format`       | Prettier (write)                                  |
| `pnpm format:check` | Prettier (check only, used in CI)                 |
| `pnpm test`         | Vitest unit tests (`src/**/*.test.ts`)            |

## Replace the placeholders

Every placeholder is marked `TODO:`. List them all:

```sh
grep -rn "TODO:" src public astro.config.mjs
```

## Where things live

```text
src/
├─ consts.ts            # name, role, socials, nav, which items are pinned on home
├─ data/                # short structured records (TypeScript, type-checked)
│  ├─ skills.ts         #   skill key → name + icon, and /skills groups
│  ├─ work.ts           #   experience → home rows + /work/<id> pages
│  ├─ achievements.ts   #   achievements → link to a blog post write-up
│  └─ education.ts      #   degrees + certifications
├─ content/             # long-form writing (MDX, schema-validated)
│  ├─ projects/<id>/index.mdx   → /projects/<id>
│  └─ posts/<id>/index.mdx      → /blog/<id>
├─ content.config.ts    # frontmatter schemas for the folders above
├─ components/          # one component per UI piece (cards, rows, sidebar, ...)
├─ layouts/Layout.astro # <head>, header, footer
├─ lib/                 # helpers (dates, pinning, content queries) + tests
├─ pages/               # file-based routes
└─ styles/global.css    # theme tokens (light/dark) + Tailwind setup
```

### Adding things

- **Project:** create `src/content/projects/<id>/index.mdx` (copy an existing one).
  Put images next to it and reference them as `image: ./preview.png`.
  Add the id to `PINNED_PROJECTS` in `src/consts.ts` to show it on the home page.
- **Blog post:** create `src/content/posts/<id>/index.mdx`.
- **Achievement:** add an entry to `src/data/achievements.ts`; set `relatedPost`
  to a post id for the write-up and `relatedProject` to link a project.
- **Experience:** add an entry to `src/data/work.ts`. Use `relatedPosts` for the
  "in my own words" story.
- **Skill:** add a key to `src/data/skills.ts` (icons: [simple-icons](https://icon-sets.iconify.design/simple-icons/)).
- **Company/school logo:** drop an SVG in `src/icons/` and set `companyLogo` / `logo` to its file name.
- **CV PDF:** put it at `public/cv.pdf`. The `/cv` page itself is generated from the data above.
- **Avatar:** put it in `public/images/` and set `SITE.AVATAR` in `src/consts.ts`.

Set `draft: true` in an MDX file's frontmatter to hide it from production builds.

## Commits

Commits must follow [Conventional Commits](https://www.conventionalcommits.org)
(enforced by commitlint on `git commit`), e.g. `feat: add project page`,
`fix(ui): header wrap`, `content: add hackathon post`. Allowed types:
`feat fix refactor perf style build ci chore docs test content`.

On commit, lint-staged runs Prettier and ESLint on staged files.

## Optional services

### GitHub contribution graph

1. Create a [fine-grained token](https://github.com/settings/personal-access-tokens/new)
   with **public repositories (read-only)** access.
2. Local: set `GITHUB_TOKEN` in `.env`.
3. CI: add it as repository secret `GH_CONTRIBUTIONS_TOKEN`.

Without a token the graph shows a labelled sample.

### Visitor counter (GoatCounter)

1. Sign up at [goatcounter.com](https://www.goatcounter.com) and pick a code (e.g. `romyr`).
2. In its settings, enable **"Allow adding visitor counts on your website"**.
3. Local: set `PUBLIC_GOATCOUNTER_CODE` in `.env`.
4. CI: add repository **variable** (not secret) `PUBLIC_GOATCOUNTER_CODE`.

Counts are cached by GoatCounter for ~30 minutes; localhost visits aren't counted.

## Deploy (GitHub Pages)

1. Create a GitHub repo named **`romyr05.github.io`** and push `main`.
   - Using a different repo name? The site will live at `/<repo>`; set
     `base: "/<repo>"` in `astro.config.mjs` and update links accordingly.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yaml`.
   `.github/workflows/ci.yaml` runs format/lint/test/build on pushes and PRs.
