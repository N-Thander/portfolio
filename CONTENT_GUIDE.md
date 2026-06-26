# Content Guide — how to update this site

Everything you'd want to change lives in **`content/data/`** as typed files.
Edit a file, save, and the page updates. You never touch JSX/components for normal
content edits. After editing, run `npm run dev` to preview or `npm run build` to
verify.

> Tip: every list below is just a TypeScript array. Copy an existing entry, tweak
> the fields, and you're done. Keep the quotes and commas.

---

## Quick map: which file controls what

| You want to change…              | Edit this file                       | Shows up on |
| -------------------------------- | ------------------------------------ | ----------- |
| Name, role, tagline, socials, domain, résumé link | `content/data/site.ts`  | everywhere  |
| The hero "about" paragraphs + facts | `content/data/about.ts`           | `/` (home)  |
| Contact details                  | `content/data/site.ts` (socials/email/phone) | `/` + footer |
| Work history                     | `content/data/experience.ts`         | `/journey`  |
| Education                        | `content/data/education.ts`          | `/journey`  |
| Projects                         | `content/data/projects.ts`           | `/projects` |
| Skills                           | `content/data/skills.ts`             | `/arsenal`  |
| Certifications                   | `content/data/certifications.ts`     | `/arsenal`  |
| Achievements                     | `content/data/achievements.ts`       | `/arsenal`  |
| Header / palette navigation      | `content/data/nav.ts`                | all pages   |

---

## 1. Site basics — `content/data/site.ts`

Change your name, the one-line positioning statement, social URLs, **the live
domain**, and the résumé path here.

```ts
export const siteConfig = {
  name: "Nasiruddin Thander",
  role: "AI/ML Engineer",
  tagline: "…the line under your name in the hero…",
  url: "https://yourdomain.com", // ← set this to your real domain
  email: "you@example.com",
  phone: "+91-…",
  resume: "/resume.pdf",          // file in public/
  socials: {
    github: "https://github.com/N-Thander",
    githubUser: "N-Thander",
    linkedin: "https://www.linkedin.com/in/nasiruddin-thander",
    linkedinUser: "nasiruddin-thander",
  },
};
```

**Résumé file:** drop your PDF at `public/resume.pdf` (overwrite the placeholder).
The hero button and the palette's "download resume" command point at it.

---

## 2. About + facts — `content/data/about.ts`

```ts
export const about = {
  paragraphs: [
    "First paragraph…",
    "Second paragraph…",
  ],
  facts: [
    { key: "role", value: "AI/ML Engineer @ Cognizant" },
    { key: "focus", value: "Agentic systems · CV · GenAI" },
  ],
};
```

Add/remove paragraphs or facts freely — the page maps over them.

---

## 3. Experience — `content/data/experience.ts`

Each job is one object. Newest first.

```ts
{
  role: "Software Engineer",
  org: "Company",
  dates: "2025 — Present",
  location: "India",
  bullets: [
    "Lead with a quantified win (>94% accuracy, $0 cost, 70+ users).",
    "Second bullet…",
  ],
  tags: ["Skill", "Tool", "Domain"],
}
```

To add a job, copy a block and place it in the array in chronological order.

---

## 4. Education — `content/data/education.ts`

```ts
{
  institution: "RCC Institute of Information Technology",
  degree: "B.Tech, Information Technology",
  detail: "SGPA 8.55 / 10",
  dates: "2021 — 2025",
}
```

---

## 5. Projects — `content/data/projects.ts`

```ts
{
  slug: "my-project",          // unique, kebab-case
  title: "My Project",
  oneLiner: "What it does in one sentence.",
  result: "Key result / metric / placement",
  stack: ["PyTorch", "FastAPI"],
  href: "https://github.com/N-Thander/my-project", // optional
  featured: true,              // optional flag for emphasis
}
```

The first project in the array spans full width on `/projects`; the rest tile in
two columns. Reorder the array to change which is first.

---

## 6. Skills — `content/data/skills.ts`

Skills are grouped. Each group renders as a labelled block of chips.

```ts
{
  label: "Languages",
  key: "languages",           // shown as the syntax-highlight key
  items: ["Python", "TypeScript", "SQL"],
}
```

Add a new group by copying a block; add a skill by adding a string to `items`.

---

## 7. Certifications — `content/data/certifications.ts`

**Currently empty.** The Certifications block on `/arsenal` only appears once you
add at least one entry, so it's safe to leave blank.

```ts
export const certifications: Certification[] = [
  {
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "2025",
    href: "https://…", // optional credential link
  },
];
```

---

## 8. Achievements — `content/data/achievements.ts`

Rendered as "achievement unlocked" cards. `accent` picks the badge colour.

```ts
{
  title: "TCS CodeVita Season 12",
  detail: "Global competitive programming contest",
  rank: "Global Rank 459",
  year: "2024",
  accent: "yellow", // yellow | green | teal | peach | mauve | blue
}
```

---

## 9. Navigation & pages — `content/data/nav.ts`

This array drives the **header links**, the **mobile menu**, the **home `ls ~`
directory**, and the **command palette** entries — all from one place.

```ts
{
  href: "/projects",        // the route
  label: "projects",        // header link text
  dir: "projects",          // name in the home directory listing
  command: "ls projects/",  // command shown in the palette
  blurb: "things I've shipped",
}
```

### Adding a whole new page

1. Add an entry to `nav.ts` (above).
2. Create `app/<route>/page.tsx`. Use an existing page (e.g.
   `app/projects/page.tsx`) as a template — wrap content in `<PageLayout>`:

   ```tsx
   import { PageLayout } from "@/components/layout/PageLayout";

   export const metadata = { title: "My Page", description: "…" };

   export default function MyPage() {
     return (
       <PageLayout route="~/mypage" title="mypage" blurb="One line about it.">
         {/* your sections / content */}
       </PageLayout>
     );
   }
   ```

3. (Optional) Wrap a sub-block in the `<Section id="…" command="…">` component to
   get the terminal-style heading.

The sitemap picks up new pages from `nav.ts` automatically.

---

## 10. Theme & accent colour

The whole palette (Catppuccin Frappé) lives in `app/globals.css`. To change the
**primary accent**, edit one line:

```css
--accent: var(--blue); /* try --mauve, --teal, --green, … */
```

All links, prompts, glows, and active states follow it.

---

## Checklist before publishing

- [ ] Replaced `public/resume.pdf` with the real résumé.
- [ ] Set `url` in `site.ts` to the live domain.
- [ ] `npm run build` passes with no errors.
- [ ] Spot-checked each page on mobile width.
