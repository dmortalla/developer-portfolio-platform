import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProjectCard } from "@/components/projects/project-card";
import { getProjectBySlug } from "@/lib/projects/registry";

describe("ProjectCard", () => {
  it("renders project content and navigation", () => {
    const project = getProjectBySlug("urban-mobility-data-lakehouse");

    if (!project) {
      throw new Error("Expected Urban Mobility project.");
    }

    render(<ProjectCard project={project} />);

    expect(
      screen.getByRole("heading", {
        name: "Urban Mobility Data Lakehouse",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "View case study",
      }),
    ).toHaveAttribute("href", "/projects/urban-mobility-data-lakehouse");

    expect(
      screen.getByRole("link", {
        name: "View repository",
      }),
    ).toHaveAttribute(
      "href",
      "https://github.com/dmortalla/urban-mobility-data-lakehouse",
    );
  });
});
