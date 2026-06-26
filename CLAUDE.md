# Claude Code Build Prompt — Nasiruddin Thander Portfolio

> **How to use this:** Open Claude Code in an empty folder and paste everything below the line into the first message. Attach `NasiruddinThander_resume.pdf` and your `profile_pic` in the same message. If you have the 3 reference site screenshots/URLs, attach or paste those too. You can also save this file as `CLAUDE.md` at the repo root so the context persists across sessions.

---

## 0. Role & mission

You are a **10x full-stack web developer + UI/UX designer** building a personal portfolio site for **Nasiruddin Thander**, an AI/ML engineer. Before writing any code, read the attached resume and reference material, then **produce a short build plan and confirm it with me**. Work in the phases defined in §7, run the dev server to verify each phase, and commit to git at every milestone. Ask me for anything you're missing (see §10) rather than inventing placeholders for personal data.

The end product: a **minimalist, gamified-storytelling developer portfolio** with a **subtle cyberpunk-anime terminal aesthetic**, themed entirely in **Catppuccin Frappé**, typeset in **JetBrains Mono**. Polished, fast, accessible, production-ready, deployable to Vercel.

---

## 1. About the developer (distilled from the resume — emphasize this)

Nasiruddin is an **AI/ML engineer who ships**, not a generic web dev. Lead with that. Key strengths to surface:

- **Applied ML / GenAI engineer**: multi-agent systems, RAG pipelines, computer vision, diffusion models, federated learning.
- **Pragmatic + cost-aware**: replaced LLM pipelines with classical ML to cut per-query inference cost to ~$0; ran cloud cost analyses across 30+ instance configs.
- **Real production impact**: built role-aware multi-agent AI for 70+ employees; computer-vision molten-steel tracking at SAIL IISCO with >94% accuracy.
- **Currently** at Cognizant (Salesforce / Agentforce / LWC), formerly AI/ML Intern at Codebuddy, R&D Intern at Hi-Tech Systems, and a GDSC GenAI facilitator.
- **Competitive pedigree**: TCS CodeVita S12 Global Rank 459; 2nd Runner-Up HackHazard'25; 4th Aignite'25; 1st Modelify Innovation'25.

Positioning line for the hero (refine, don't copy verbatim): *AI/ML engineer building agentic systems, computer-vision pipelines, and cost-efficient ML — from molten-steel tracking to multi-agent automation.*

Contact: `+91-8100416433` · `nasiruddinthander2002@gmail.com` · LinkedIn `nasiruddin-thander` · GitHub `N-Thander`.

---

## 2. Creative concept

**"A personal operating system, booted in a terminal."** The site behaves like a single-user OS:

1. **Boot sequence on load** — a short POST/BIOS-style stream of lines (e.g. `initializing kernel...`, `mounting /home/nasir...`, `loading neural_modules [OK]`), a blinking cursor, then a "login" that resolves into the main site. ~2–3s max, skippable, and **fully bypassed on `prefers-reduced-motion` or repeat visits** (store a flag in `localStorage`/cookie).
2. **The main site = the "desktop."** Sections read like directories/log entries. Keep it *minimalist* — terminal flavor through framing and micro-interactions, not visual noise.
3. **Storytelling** — present his journey (Hi-Tech CV work → Codebuddy multi-agent systems → Cognizant Salesforce) as a coherent narrative/log, not a flat list.

Tone: confident, dry, a little playful. Cyberpunk enough to feel his, never a flashy generic landing page.

---

## 3. Design system

### Color — Catppuccin Frappé (use these exact tokens)

Define these as CSS variables / Tailwind theme colors. Dark theme only (it's a terminal).

```
/* Base / surfaces */
--crust:    #232634   /* deepest bg, code blocks */
--mantle:   #292c3c   /* panels, header/footer */
--base:     #303446   /* main background */
--surface0: #414559
--surface1: #51576d
--surface2: #626880

/* Text */
--text:     #c6d0f5   /* primary text */
--subtext1: #b5bfe2
--subtext0: #a5adce   /* muted/secondary */
--overlay2: #949cbb
--overlay1: #838ba7   /* borders, hints */
--overlay0: #737994

/* Accents */
--rosewater:#f2d5cf  --flamingo:#eebebe  --pink:#f4b8e4  --mauve:#ca9ee6
--red:#e78284  --maroon:#ea999c  --peach:#ef9f76  --yellow:#e5c890
--green:#a6d189  --teal:#81c8be  --sky:#99d1db  --sapphire:#85c1dc
--blue:#8caaee  --lavender:#babbf1
```

**Semantic roles:**
- Page background `--base`; raised panels `--mantle`; code/terminal windows `--crust`.
- Body text `--text`; muted/meta `--subtext0`; borders/dividers `--surface0`/`--overlay0`.
- Primary accent (links, prompt symbol, active nav) `--blue` or `--mauve` — pick one and stay consistent.
- Terminal prompt / success `--green`; secondary accent `--teal`; warnings `--yellow`; errors/alerts `--red`; highlights `--peach`/`--lavender`.
- Lean on a syntax-highlight feel: mix accents like a code editor, but restrained (2–3 accents per view).

### Typography
- **JetBrains Mono** everywhere (self-host via `next/font` for zero layout shift; include the variable weights). Headings, body, UI.
- Establish a clear type scale; use weight + size + color for hierarchy since it's monospace. Generous line-height for readability. Tabular numerals for stats/metrics.

### Visual effects (subtle, performant, accessible)
- **Film grain / noise overlay**: a fixed full-screen layer, very low opacity, animated subtly. Prefer an SVG `feTurbulence` or a tiled PNG with GPU-friendly animation over per-frame canvas work. Must not hurt scroll perf.
- **Optional CRT touches**: faint scanlines + a one-time flicker during boot only. Keep dialed *way* down.
- **Cursor / typewriter** micro-animations on key headings.
- **Every effect respects `prefers-reduced-motion`** — disable grain animation, boot, scanlines, typewriter when set.

### Layout
- Minimalist, lots of negative space, strong grid, clean scan path. Mobile-first and fully responsive. Generous touch targets. Terminal "windows" with a title bar (three dots / a path label) used sparingly as containers.

---

## 4. Tech stack & architecture

- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS**.
- **MDX** for blog posts (e.g. `next-mdx-remote` or `@next/mdx` + `contentlayer`-style content folder) so new posts are just files.
- **Framer Motion** for the boot sequence and tasteful transitions (or CSS where lighter).
- **next/font** for JetBrains Mono; **next/image** for the profile pic and any media.
- ESLint + Prettier, sensible tsconfig, env handling via `.env.local`.
- **GitHub** for version control, **Vercel** for hosting.

### Project structure (adapt as needed, keep concerns separated)
```
app/                 # routes: /, /blog, /blog/[slug]
components/
  layout/            # header, footer, command-bar, page shell
  sections/          # hero, about, experience, projects, skills, achievements, contact
  boot/              # boot sequence + intro animation
  ui/                # primitives: TerminalWindow, Tag, Card, Prompt, Cursor
  effects/           # GrainOverlay, Scanlines
content/
  data/              # experience.ts, projects.ts, skills.ts, achievements.ts (typed)
  blog/              # *.mdx posts
lib/                 # utils, mdx helpers, motion variants
styles/              # globals.css, theme tokens
public/              # profile pic, resume.pdf, og image, fonts if not via next/font
```

**Data-driven content:** all resume content lives in typed data files under `content/data`, *not* hardcoded in JSX. Sections map over data so I can edit one file to update the site.

---

## 5. Site structure & content (section by section)

Build a single scrollable home (`/`) with anchored sections + a separate `/blog`. Each section gets a terminal-style label (e.g. `~/about`, `cat experience.log`, `ls projects/`). All of these will be their seprate pages.

1. **Boot / intro** — §2.1. Then reveal the hero.
2. **Hero** — name, the positioning line from §1, prompt-style tagline, primary CTAs: View Projects, GitHub, LinkedIn, **Download Résumé** (serve the PDF from `/public`). Optional animated `whoami` output.
3. **About** — short narrative: AI/ML engineer who ships agentic + CV systems, cost-aware, competition-tested. Pull from §1.
4. **Experience** — Cognizant, Codebuddy, Hi-Tech Systems, GDSC. For each: role, org, dates, location, 2–4 tight bullets framed as "mission logs." Use the strongest quantified wins (>94% CV accuracy, $0 marginal inference cost, 70+ employees, 7+ hrs/week recovered).
5. **Projects** — MedHive (federated-learning healthcare AI, Flower, hackathon placements), TrixBot (RAG assistant, FastAPI/FAISS/LLaMA-3.3-70B via Groq, 1,000+ users), Stable Diffusion from scratch (PyTorch). Each as a card/terminal window: title, one-liner, stack tags, GitHub link, key result.
6. **Skills** — grouped: Languages · ML/DL/GenAI · Backend & MLOps · Databases & Platforms. Render as tags/chips with the syntax-highlight palette, not a boring list.
7. **Achievements** — CodeVita Global Rank 459, HackHazard'25 2nd Runner-Up, Aignite'25 4th, Modelify Innovation'25 1st. Treat like "unlocked achievements" (gamified, but tasteful).
8. **Education** — RCC IIT, B.Tech IT, SGPA 8.55/10, 2021–2025.
9. **Contact / footer** — email, socials, GitHub. Keep it terminal-styled (`echo $CONTACT`).
10. **Blog** (`/blog`) — tab/section listing MDX posts (date, title, tags, reading time) → `/blog/[slug]`. Ship the plumbing + one sample post so adding posts = dropping in an `.mdx` file.

---

## 6. Signature interactions (pick the ones that stay minimalist)

- **Command palette (Cmd/Ctrl-K)** to jump between sections and run flavor commands: `whoami`, `ls projects`, `cat about`, `download resume`, `theme`, `help`. This is the gamified core — make it genuinely useful for navigation, with keyboard support.
- Optional persistent prompt bar at the bottom that mirrors the palette.
- Section reveal-on-scroll with subtle motion; typewriter on a few headings.
- Hover states that feel like a code editor (caret, highlight, accent shift).
- Keep state management lightweight — no heavy global stores for this.

---

## 7. Build plan (work in phases; commit + run the dev server each time)

- **Phase 0 — Scaffold:** Next.js + TS + Tailwind app, JetBrains Mono via next/font, Catppuccin Frappé tokens wired into Tailwind theme + `globals.css`, ESLint/Prettier, `git init`, first commit. Show me the running shell before building features.
- **Phase 1 — Design system + shell:** layout, header/footer, `GrainOverlay`, theme tokens, UI primitives (`TerminalWindow`, `Tag`, `Prompt`, `Cursor`), responsive base.
- **Phase 2 — Boot/intro animation:** the sequence, skip control, reduced-motion + repeat-visit bypass.
- **Phase 3 — Core sections:** hero → about → experience → projects → skills → achievements → education → contact, all data-driven from `content/data`.
- **Phase 4 — Command palette + interactions:** Cmd-K navigation and flavor commands, scroll reveals.
- **Phase 5 — Blog:** MDX pipeline, `/blog` index, `[slug]` page, one sample post.
- **Phase 6 — Polish:** accessibility pass, performance (Lighthouse), SEO/OG meta, favicon, 404, final responsive QA.
- **Phase 7 — Ship:** README with run/deploy instructions, push to GitHub, deploy to Vercel, custom-domain notes.

After each phase: summarize what you built, what's left, and any decisions you need from me.

---

## 8. Engineering standards (non-negotiable)

- Maintainable, modular, reusable, composable — no duplicated markup; separate components / data / styles / utils.
- Consistent naming; typed everything; simple, scalable architecture; easy to add future sections.
- Optimize for performance (lazy-load heavy/below-fold, minimize JS, GPU-friendly animation), accessibility (semantic HTML, focus states, keyboard nav, ARIA where needed, color-contrast within the palette, reduced-motion), and responsiveness.
- Avoid over-engineering animations and state. Prefer the boring, correct solution.
- Clean git history with meaningful commit messages.

---

## 9. Deployment

- **GitHub** for version control; push early, commit per phase.
- **Vercel** for hosting — explain connecting the repo and env setup.
- Custom domain purchased from **Spaceship** — provide the exact DNS records (A / CNAME / nameservers) to point it at Vercel, and the steps to add the domain in the Vercel dashboard.
- Note any env vars and how to set them locally vs on Vercel.

---

## 10. What I'll provide / ask me if missing

Before or during the build, confirm you have:
- `NasiruddinThander_resume.pdf` (attached) — and place a copy in `/public` for the download button.
- Profile picture (attached) — optimized via next/image.
- The 3 reference sites (URLs or screenshots) for ideation — use them as primary visual references if I provide them; otherwise proceed from this brief and show me previews to react to.
- The exact **domain name**, and confirmation of GitHub username (`N-Thander`) and social URLs.
- Any blog content I want seeded (otherwise ship one placeholder post).

Don't block on these — note assumptions inline and keep moving, but flag anything that needs my input.

---

**Start now:** read the resume + references, post your build plan for Phase 0–1 and the chosen primary accent, get my OK, then scaffold.
