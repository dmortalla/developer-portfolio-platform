import { describe, expect, it } from "vitest";

import { siteProfile } from "@/lib/site/profile";

describe("site profile", () => {
  it("contains the verified professional identity", () => {
    expect(siteProfile.name).toBe("Darrell Mortalla");

    expect(siteProfile.headline).toBe(
      "Data & AI Engineer | Machine Learning, Data Science, Analytics, and Generative AI",
    );
  });

  it("uses normalized professional profile URLs", () => {
    expect(siteProfile.linkedinUrl).toBe(
      "https://www.linkedin.com/in/darrell-mortalla-77857012a",
    );

    expect(siteProfile.githubUrl).toBe("https://github.com/dmortalla");
  });

  it("does not expose a public resume URL", () => {
    expect(siteProfile.resumeAvailability).toBe(
      "Résumé available upon request",
    );

    expect(siteProfile).not.toHaveProperty("resumeUrl");
  });
});
