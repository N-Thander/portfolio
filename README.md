# Nasiruddin Thander — Portfolio

A minimalist, terminal-themed developer portfolio for an AI/ML engineer.
"A personal operating system, booted in a terminal." Catppuccin Frappé,
JetBrains Mono, BIOS-style boot sequence, and a `⌘K` command palette.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (theme tokens in `app/globals.css`)
- **next/font** — JetBrains Mono (self-hosted, zero layout shift)
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npx eslint .     # lint
```

## Project structure

```
app/                 # routes: /, /projects, /journey, /arsenal, sitemap, robots, og-image, 404
components/
  layout/            # Header (+ mobile menu), Footer, Section, PageLayout, SiteChrome, CommandPalette
  sections/          # Hero, HomeDirectory, About, Experience, Projects, Skills, Certifications, Achievements, Education, Contact
  boot/              # BootSequence + boot lines
  ui/                # TerminalWindow, Tag, Prompt, Cursor, Typewriter, Reveal, ScrambleText
  effects/           # GrainOverlay, Scanlines, GlowBackground
content/
  data/              # typed content (site, nav, experience, projects, skills, …)
public/              # resume.pdf, favicon
```

### Pages

| Route       | Contains                               |
| ----------- | -------------------------------------- |
| `/`         | Hero + directory nav + About + Contact |
| `/projects` | Projects                               |
| `/journey`  | Experience + Education                 |
| `/arsenal`  | Skills + Certifications + Achievements |

## Editing content

All content is **data-driven** — edit the typed files in `content/data/` and the
site updates, no JSX changes needed. **See [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md)
for the full, file-by-file walkthrough** (adding a project, a page, changing the
accent colour, etc.).

**Résumé:** replace `public/resume.pdf` with the real file — the hero button and
the palette's `download resume` command point at it (currently a placeholder).

## Accessibility & motion

- The boot sequence, typewriter, scroll reveals, and grain animation all respect
  `prefers-reduced-motion`.
- The boot sequence is bypassed on repeat visits (`localStorage` flag) and is
  skippable (button or any key).
- Keyboard-navigable command palette (`⌘K` / `Ctrl-K`), visible focus rings.

## Deploying to Vercel

1. Push this repo to GitHub (`N-Thander/portfolio` or similar).
2. In the [Vercel dashboard](https://vercel.com/new), **Import** the repo.
   Framework preset auto-detects Next.js — no build config needed.
3. Deploy. No environment variables are required for the base site.
4. After the first deploy, set the production domain (below) and update
   `siteConfig.url` in `content/data/site.ts` so OG tags / sitemap use the real
   domain.

## Custom domain (purchased from Spaceship)

Add the domain in **Vercel → Project → Settings → Domains**, then point DNS at
Vercel from the Spaceship DNS panel. Two common setups:

**A) Use Vercel's nameservers (simplest):**
In Spaceship, set the domain's nameservers to the ones Vercel shows you
(typically `ns1.vercel-dns.com` / `ns2.vercel-dns.com`). Vercel then manages all
records and issues SSL automatically.

**B) Keep Spaceship DNS, add records manually:**

| Type  | Host / Name | Value                  |
| ----- | ----------- | ---------------------- |
| A     | `@`         | `76.76.21.21`          |
| CNAME | `www`       | `cname.vercel-dns.com` |

> Vercel displays the exact, current values for your project in the Domains tab —
> always use those if they differ from the table above. DNS propagation can take
> up to a few hours; SSL is provisioned automatically once records resolve.

Set the apex (`@`) or `www` as the primary domain in Vercel; it will redirect the
other automatically.
