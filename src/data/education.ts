export type EducationItem = {
  id: string;
  title: string;
  category: "Degree" | "Certification";
  /** School (degrees) */
  institution?: string;
  /** Issuer (certifications) */
  provider?: string;
  /** "YYYY" or "YYYY-MM" */
  startDate?: string;
  endDate?: string;
  /** Shown after the end date, e.g. "(expected)" */
  note?: string;
  description?: string;
  url?: string;
  /** Path under /public, e.g. "/images/certificates/aws-ccp.png" */
  image?: string;
  /** Name of an SVG in src/icons/ (without .svg) */
  logo?: string;
};

// TODO: replace with your education and certifications.
export const education: EducationItem[] = [
  {
    id: "bscs",
    title: "BS Computer Science",
    category: "Degree",
    institution: "TODO: Your University",
    startDate: "2023",
    endDate: "2027",
    note: "(expected)",
    description:
      "TODO: Relevant: Data Structures, Databases, Software Engineering.",
  },
  {
    id: "aws-cloud-practitioner",
    title: "Cloud Practitioner",
    category: "Certification",
    provider: "Amazon Web Services",
    endDate: "2026",
  },
  {
    id: "fcc-responsive-web-design",
    title: "Responsive Web Design",
    category: "Certification",
    provider: "freeCodeCamp",
    endDate: "2025",
  },
  {
    id: "datacamp-sql-fundamentals",
    title: "SQL Fundamentals",
    category: "Certification",
    provider: "DataCamp",
    endDate: "2025",
  },
  {
    id: "google-it-support",
    title: "IT Support Fundamentals",
    category: "Certification",
    provider: "Google",
    endDate: "2025",
  },
];
