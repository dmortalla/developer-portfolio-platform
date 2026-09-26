import type { PortfolioProject } from "@/lib/projects/schema";

export const urbanMobilityDataLakehouse = {
  slug: "urban-mobility-data-lakehouse",

  title: "Urban Mobility Data Lakehouse",

  positioning: {
    primaryDiscipline: "data-engineering",
    secondaryDisciplines: [],
    tagline: "From raw mobility data to analytics-ready intelligence.",
    summary:
      "A reproducible data engineering platform that transforms raw NYC taxi data through Raw, Bronze, Silver, and Gold layers and loads curated analytical outputs into DuckDB.",
  },

  status: "complete",

  problem: {
    context:
      "Raw urban mobility data requires structured ingestion, transformation, validation, and analytical modeling before it can support reliable analysis.",
    challenge:
      "Build a reproducible local-first pipeline that preserves raw inputs while progressively transforming them into validated, analytics-ready datasets.",
    objective:
      "Create a modular data lakehouse workflow that produces curated Gold marts and makes them available through an analytical DuckDB warehouse.",
  },

  architecture: {
    summary:
      "A configuration-driven medallion pipeline moves NYC taxi data through Raw, Bronze, Silver, and Gold layers before loading curated Gold outputs into DuckDB for analytical querying.",

    components: [
      {
        name: "Raw Layer",
        responsibility:
          "Preserves source mobility data as the starting point for reproducible processing.",
        technologies: ["Python"],
      },
      {
        name: "Bronze Layer",
        responsibility:
          "Creates the first structured lakehouse representation while retaining source-oriented data.",
        technologies: ["Python", "Pandas", "PyArrow", "Parquet"],
      },
      {
        name: "Silver Layer",
        responsibility:
          "Applies cleaning, standardization, transformation, and validation to produce analysis-ready records.",
        technologies: ["Python", "Pandas", "PySpark", "Parquet"],
      },
      {
        name: "Gold Layer",
        responsibility:
          "Produces curated analytical marts for trip performance, borough demand, and payment-type revenue.",
        technologies: ["Python", "Parquet"],
      },
      {
        name: "Analytics Warehouse",
        responsibility:
          "Loads Gold-layer outputs into DuckDB for analytical SQL queries and downstream exploration.",
        technologies: ["DuckDB", "SQL"],
      },
    ],

    dataFlow: [
      "Raw source data",
      "Bronze structured data",
      "Silver cleaned and validated data",
      "Gold analytical marts",
      "DuckDB analytics warehouse",
    ],

    assets: [],
  },

  technologies: [
    {
      category: "language",
      items: ["Python 3.11", "SQL"],
    },
    {
      category: "data",
      items: ["Pandas", "PySpark", "PyArrow", "Parquet", "DuckDB", "YAML"],
    },
    {
      category: "testing",
      items: ["Pytest"],
    },
    {
      category: "devops",
      items: ["Make"],
    },
  ],

  contributions: [
    {
      title: "Designed a medallion-style ETL workflow",
      description:
        "Implemented a Raw → Bronze → Silver → Gold pipeline that progressively transforms source mobility data into curated analytical datasets.",
      evidenceIds: ["pipeline-architecture", "reproducible-workflow"],
    },
    {
      title: "Built analytics-ready Gold marts",
      description:
        "Implemented daily trip, borough-hour demand, and payment-type revenue marts for downstream analysis.",
      evidenceIds: ["gold-marts"],
    },
    {
      title: "Integrated an analytical DuckDB warehouse",
      description:
        "Loaded Gold-layer outputs into a DuckDB analytics warehouse with documented SQL query workflows.",
      evidenceIds: ["duckdb-warehouse"],
    },
    {
      title: "Added automated validation and testing",
      description:
        "Implemented automated tests covering pipeline components, transformations, validation behavior, and warehouse behavior.",
      evidenceIds: ["automated-tests"],
    },
    {
      title: "Made the workflow reproducible",
      description:
        "Provided configuration-driven execution and Make-based commands for installation, bootstrap, testing, downloading, and pipeline execution.",
      evidenceIds: ["reproducible-workflow"],
    },
  ],

  evidence: [
    {
      id: "pipeline-architecture",
      type: "architecture",
      title: "Raw → Bronze → Silver → Gold Architecture",
      description:
        "Repository documentation describes the medallion-style progression from raw mobility data through curated Gold outputs.",
      sourceUrl: "https://github.com/dmortalla/urban-mobility-data-lakehouse",
    },
    {
      id: "gold-marts",
      type: "code",
      title: "Curated Gold Analytical Marts",
      description:
        "The project implements daily_trip_summary, borough_hour_demand, and payment_type_revenue analytical marts.",
      sourceUrl: "https://github.com/dmortalla/urban-mobility-data-lakehouse",
    },
    {
      id: "duckdb-warehouse",
      type: "code",
      title: "DuckDB Analytics Warehouse",
      description:
        "Gold outputs are loaded into a DuckDB analytics warehouse with documented analytical SQL workflows.",
      sourceUrl: "https://github.com/dmortalla/urban-mobility-data-lakehouse",
    },
    {
      id: "automated-tests",
      type: "test",
      title: "Automated Pipeline Tests",
      description:
        "The audited repository includes automated tests for pipeline components, transformations, validation, and warehouse behavior.",
      sourceUrl: "https://github.com/dmortalla/urban-mobility-data-lakehouse",
    },
    {
      id: "reproducible-workflow",
      type: "documentation",
      title: "Reproducible Execution Workflow",
      description:
        "The repository documents Make-based installation, bootstrap, test, download, and full pipeline execution commands.",
      sourceUrl: "https://github.com/dmortalla/urban-mobility-data-lakehouse",
    },
  ],

  capabilities: [
    {
      name: "Data pipeline engineering",
      description:
        "Demonstrates design of a modular multi-stage pipeline that turns raw source data into curated analytical outputs.",
      evidenceIds: ["pipeline-architecture", "reproducible-workflow"],
    },
    {
      name: "Analytical data modeling",
      description:
        "Demonstrates creation of purpose-built Gold marts for operational and revenue-oriented analysis.",
      evidenceIds: ["gold-marts", "duckdb-warehouse"],
    },
    {
      name: "Data quality and reproducibility",
      description:
        "Demonstrates automated validation, testing, configuration-driven execution, and repeatable project workflows.",
      evidenceIds: ["automated-tests", "reproducible-workflow"],
    },
  ],

  repository: {
    githubUrl: "https://github.com/dmortalla/urban-mobility-data-lakehouse",
  },

  featured: {
    enabled: true,
    order: 1,
    narrativeStage: "data-engineering",
  },

  seo: {
    title: "Urban Mobility Data Lakehouse | Data Engineering Portfolio Project",
    description:
      "A reproducible Python data lakehouse that transforms NYC taxi data through Raw, Bronze, Silver, and Gold layers and loads curated analytical marts into DuckDB.",
  },

  metadata: {},
} satisfies PortfolioProject;
