export type NavItem = {
  /** route for this page */
  href: string;
  /** short label shown in the header */
  label: string;
  /** directory name used in the home "ls ~" listing */
  dir: string;
  /** terminal-style command shown in the palette */
  command: string;
  /** one-line description for the home directory + palette */
  blurb: string;
};

export const navItems: NavItem[] = [
  {
    href: "/projects",
    label: "projects",
    dir: "projects",
    command: "ls projects/",
    blurb: "things I've shipped",
  },
  {
    href: "/journey",
    label: "journey",
    dir: "journey",
    command: "cat journey.log",
    blurb: "experience + education",
  },
  {
    href: "/arsenal",
    label: "arsenal",
    dir: "arsenal",
    command: "cat arsenal.json",
    blurb: "skills + achievements",
  },
];
