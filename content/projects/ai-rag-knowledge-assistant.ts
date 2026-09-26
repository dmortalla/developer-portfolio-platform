import type { PortfolioProject } from "@/lib/projects/schema";

export const aiRagKnowledgeAssistant = {
  slug: "ai-rag-knowledge-assistant",

  title: "AI RAG Knowledge Assistant",

  positioning: {
    primaryDiscipline: "llm-engineering",
    secondaryDisciplines: ["ai-engineering"],
    tagline:
      "Grounded answers from retrieved knowledge, with source attribution.",
    summary:
      "A retrieval-augmented generation system that loads and chunks source documents, embeds them with OpenAI, stores vectors in FAISS, retrieves relevant context, and generates grounded answers with source metadata through FastAPI and Streamlit.",
  },

  status: "complete",

  problem: {
    context:
      "Large language models can generate fluent answers without being grounded in a trusted knowledge source, creating a need for retrieval, attribution, and explicit context boundaries.",
    challenge:
      "Build a modular RAG workflow that retrieves relevant document context before generation and exposes the result through usable application interfaces.",
    objective:
      "Create an end-to-end knowledge assistant that performs document ingestion, chunking, embedding, vector retrieval, grounded generation, source attribution, and application delivery through API and UI layers.",
  },

  architecture: {
    summary:
      "Documents are loaded and chunked, embedded with OpenAI text-embedding-3-small, stored in a FAISS vector index, retrieved by similarity, injected into a grounded prompt, and answered with gpt-4o-mini through API and UI layers.",

    components: [
      {
        name: "Document Ingestion",
        responsibility:
          "Loads source documents and prepares text for downstream chunking and retrieval.",
        technologies: ["Python", "LangChain"],
      },
      {
        name: "Chunking Pipeline",
        responsibility:
          "Splits source text into retrievable units while preserving source metadata.",
        technologies: ["Python", "LangChain"],
      },
      {
        name: "Embedding Layer",
        responsibility:
          "Transforms document chunks into vector representations for semantic retrieval.",
        technologies: ["OpenAI", "text-embedding-3-small"],
      },
      {
        name: "Vector Store",
        responsibility:
          "Stores and retrieves document embeddings through a vector-store abstraction backed by FAISS.",
        technologies: ["FAISS"],
      },
      {
        name: "Retrieval Layer",
        responsibility:
          "Selects top-k relevant chunks to provide grounded context for generation.",
        technologies: ["FAISS", "LangChain"],
      },
      {
        name: "Generation Layer",
        responsibility:
          "Constructs a grounded prompt and generates answers constrained to retrieved context.",
        technologies: ["OpenAI", "gpt-4o-mini"],
      },
      {
        name: "API Layer",
        responsibility:
          "Exposes retrieval-augmented question answering through an HTTP interface.",
        technologies: ["FastAPI"],
      },
      {
        name: "User Interface",
        responsibility:
          "Provides an interactive front end for asking questions and reviewing grounded responses.",
        technologies: ["Streamlit"],
      },
    ],

    dataFlow: [
      "Source documents",
      "Document chunks",
      "OpenAI embeddings",
      "FAISS vector index",
      "Top-k retrieved context",
      "Grounded prompt",
      "LLM-generated answer with source metadata",
    ],

    assets: [],
  },

  technologies: [
    {
      category: "language",
      items: ["Python 3.11"],
    },
    {
      category: "ml-ai",
      items: [
        "OpenAI text-embedding-3-small",
        "OpenAI gpt-4o-mini",
        "LangChain",
        "FAISS",
      ],
    },
    {
      category: "framework",
      items: ["FastAPI", "Streamlit"],
    },
  ],

  contributions: [
    {
      title: "Built the complete RAG retrieval pipeline",
      description:
        "Implemented document loading, chunking, embeddings, vector storage, top-k retrieval, and grounded answer generation as a modular workflow.",
      evidenceIds: ["rag-pipeline", "vector-retrieval"],
    },
    {
      title: "Added explicit grounding constraints",
      description:
        "Constructed prompts that instruct the model to answer only from retrieved context rather than relying on unsupported external knowledge.",
      evidenceIds: ["grounded-generation"],
    },
    {
      title: "Preserved source attribution",
      description:
        "Returned source and chunk metadata alongside generated answers so retrieved evidence remains inspectable.",
      evidenceIds: ["source-attribution"],
    },
    {
      title: "Separated vector-store implementation behind an abstraction",
      description:
        "Implemented FAISS through a vector-store abstraction so retrieval infrastructure is not tightly coupled to application logic.",
      evidenceIds: ["vector-store-abstraction"],
    },
    {
      title: "Delivered API and interactive UI access",
      description:
        "Exposed the RAG workflow through FastAPI and Streamlit for programmatic and interactive use.",
      evidenceIds: ["application-interfaces"],
    },
    {
      title: "Documented current system boundaries",
      description:
        "Kept limitations explicit, including the local corpus, FAISS-only backend, heuristic grounding signal, and absence of authentication, streaming, formal evaluation, and production deployment.",
      evidenceIds: ["documented-limitations"],
    },
  ],

  evidence: [
    {
      id: "rag-pipeline",
      type: "architecture",
      title: "End-to-End RAG Architecture",
      description:
        "The system implements document loading, text chunking, embeddings, FAISS storage, semantic retrieval, grounded prompting, and answer generation.",
      sourceUrl: "https://github.com/dmortalla/ai-rag-knowledge-assistant",
    },
    {
      id: "vector-retrieval",
      type: "code",
      title: "Semantic Vector Retrieval",
      description:
        "Document chunks are embedded with text-embedding-3-small, stored in FAISS, and retrieved as top-k context for question answering.",
      sourceUrl: "https://github.com/dmortalla/ai-rag-knowledge-assistant",
    },
    {
      id: "grounded-generation",
      type: "code",
      title: "Grounded Answer Generation",
      description:
        "The generation prompt instructs gpt-4o-mini to answer from retrieved context rather than inventing unsupported information.",
      sourceUrl: "https://github.com/dmortalla/ai-rag-knowledge-assistant",
    },
    {
      id: "source-attribution",
      type: "documentation",
      title: "Source and Chunk Attribution",
      description:
        "RAG responses include source metadata and chunk-level attribution for the retrieved material used during generation.",
      sourceUrl: "https://github.com/dmortalla/ai-rag-knowledge-assistant",
    },
    {
      id: "vector-store-abstraction",
      type: "architecture",
      title: "Vector Store Abstraction",
      description:
        "The current FAISS implementation is accessed through a vector-store abstraction rather than being embedded directly into higher-level application logic.",
      sourceUrl: "https://github.com/dmortalla/ai-rag-knowledge-assistant",
    },
    {
      id: "application-interfaces",
      type: "code",
      title: "FastAPI and Streamlit Interfaces",
      description:
        "The system exposes retrieval-augmented question answering through both a FastAPI service and a Streamlit interface.",
      sourceUrl: "https://github.com/dmortalla/ai-rag-knowledge-assistant",
    },
    {
      id: "grounding-signal",
      type: "metric",
      title: "Heuristic Grounding Signal",
      description:
        "The system includes a heuristic grounding signal to provide an additional indication of answer support, but it is not a calibrated evaluation metric.",
      sourceUrl: "https://github.com/dmortalla/ai-rag-knowledge-assistant",
    },
    {
      id: "documented-limitations",
      type: "documentation",
      title: "Documented Current Limitations",
      description:
        "The current implementation uses a small local text corpus and FAISS backend, includes no authentication or streaming, does not yet include a formal evaluation framework, and is not presented as a production deployment.",
      sourceUrl: "https://github.com/dmortalla/ai-rag-knowledge-assistant",
    },
  ],

  capabilities: [
    {
      name: "Retrieval-augmented generation",
      description:
        "Demonstrates the full RAG path from source documents through retrieval to grounded LLM generation.",
      evidenceIds: ["rag-pipeline", "vector-retrieval", "grounded-generation"],
    },
    {
      name: "LLM application engineering",
      description:
        "Demonstrates integration of embeddings, vector search, generation, source attribution, API delivery, and an interactive UI.",
      evidenceIds: [
        "source-attribution",
        "vector-store-abstraction",
        "application-interfaces",
      ],
    },
    {
      name: "Evidence-aware AI design",
      description:
        "Demonstrates explicit grounding constraints, inspectable source metadata, and documented limits on what the current system can claim.",
      evidenceIds: [
        "grounded-generation",
        "grounding-signal",
        "documented-limitations",
      ],
    },
  ],

  repository: {
    githubUrl: "https://github.com/dmortalla/ai-rag-knowledge-assistant",
  },

  featured: {
    enabled: true,
    order: 4,
    narrativeStage: "generative-ai",
  },

  seo: {
    title: "AI RAG Knowledge Assistant | LLM Engineering Portfolio Project",
    description:
      "A retrieval-augmented generation system using OpenAI embeddings, FAISS, LangChain, FastAPI, and Streamlit to deliver grounded answers with source attribution.",
  },

  metadata: {},
} satisfies PortfolioProject;
