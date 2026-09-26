export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteProfile = {
  name: "Darrell Mortalla",
  headline:
    "Data & AI Engineer | Machine Learning, Data Science, Analytics, and Generative AI",
  githubUrl: "https://github.com/dmortalla",
  linkedinUrl: "https://www.linkedin.com/in/darrell-mortalla-77857012a",
  resumeAvailability: "Résumé available upon request",
} as const;
