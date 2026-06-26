export type Certification = {
  title: string;
  issuer: string;
  /** ISO date or year, e.g. "2025" */
  date: string;
  href?: string;
};

// TODO: add real certifications. The Certifications block on /arsenal renders
// only when this array is non-empty, so it's safe to leave empty for now.
// Example:
//   { title: "AWS Certified ML – Specialty", issuer: "Amazon", date: "2025", href: "..." }
export const certifications: Certification[] = [];
