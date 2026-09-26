import { describe, expect, it } from "vitest";

import { getFeaturedProjects, getProjectBySlug } from "@/lib/projects/registry";

describe("AI RAG Knowledge Assistant", () => {
  it("is registered as the fourth featured system", () => {
    const featured = getFeaturedProjects();

    expect(featured[3]?.slug).toBe("ai-rag-knowledge-assistant");
    expect(featured[3]?.featured.order).toBe(4);
    expect(featured[3]?.featured.narrativeStage).toBe("generative-ai");
  });

  it("preserves the verified RAG data flow", () => {
    const project = getProjectBySlug("ai-rag-knowledge-assistant");

    expect(project?.architecture.dataFlow).toEqual([
      "Source documents",
      "Document chunks",
      "OpenAI embeddings",
      "FAISS vector index",
      "Top-k retrieved context",
      "Grounded prompt",
      "LLM-generated answer with source metadata",
    ]);
  });

  it("preserves grounding and source-attribution behavior", () => {
    const project = getProjectBySlug("ai-rag-knowledge-assistant");

    const grounding = project?.evidence.find(
      (item) => item.id === "grounded-generation",
    );

    const attribution = project?.evidence.find(
      (item) => item.id === "source-attribution",
    );

    expect(grounding?.description).toContain("retrieved context");
    expect(attribution?.description).toContain("source metadata");
    expect(attribution?.description).toContain("chunk-level attribution");
  });

  it("preserves documented system limitations", () => {
    const project = getProjectBySlug("ai-rag-knowledge-assistant");

    const evidence = project?.evidence.find(
      (item) => item.id === "documented-limitations",
    );

    expect(evidence?.description).toContain("FAISS");
    expect(evidence?.description).toContain("no authentication");
    expect(evidence?.description).toContain("formal evaluation framework");
    expect(evidence?.description).toContain(
      "not presented as a production deployment",
    );
  });
});
