import type { PortfolioProject } from "@/lib/projects/schema";

export const executiveHealthcareBiSystem = {
  slug: "executive-healthcare-bi-system",

  title: "Executive Healthcare BI System",

  positioning: {
    primaryDiscipline: "analytics-bi",
    secondaryDisciplines: [],
    tagline: "From healthcare operations data to executive decision support.",
    summary:
      "A healthcare analytics and business intelligence system that prepares and validates source data in Python, models it dimensionally for analysis, and delivers executive, operational, clinical, demographic, and financial insights through SQL and Power BI.",
  },

  status: "complete",

  problem: {
    context:
      "Healthcare operational data spans patients, admissions, departments, dates, clinical outcomes, and financial measures that must be modeled consistently before leaders can use it for decision support.",
    challenge:
      "Transform source healthcare data into a validated analytical model while preserving clear metric definitions and separating operational measures from assumptions or proxy metrics.",
    objective:
      "Build an executive BI system with reproducible data preparation, dimensional modeling, SQL analytics, validated KPIs, and Power BI reporting.",
  },

  architecture: {
    summary:
      "Python prepares and validates healthcare source data, a dimensional model organizes analytical entities, SQL supports analytical querying, and Power BI provides the semantic and dashboard layers for executive reporting.",

    components: [
      {
        name: "Data Preparation and Validation",
        responsibility:
          "Cleans, transforms, validates, and prepares healthcare source data for analytical modeling.",
        technologies: ["Python", "Pandas"],
      },
      {
        name: "Dimensional Model",
        responsibility:
          "Organizes admissions, patients, departments, and dates into fact and dimension tables for consistent analysis.",
        technologies: ["SQL"],
      },
      {
        name: "Analytics Layer",
        responsibility:
          "Supports analytical queries and KPI validation against prepared healthcare datasets.",
        technologies: ["SQL", "Python"],
      },
      {
        name: "Semantic Model",
        responsibility:
          "Defines business measures and analytical relationships for dashboard reporting.",
        technologies: ["Power BI", "DAX"],
      },
      {
        name: "Executive Dashboards",
        responsibility:
          "Presents executive, operational, clinical, demographic, and financial views of healthcare performance.",
        technologies: ["Power BI"],
      },
    ],

    dataFlow: [
      "Healthcare source data",
      "Python preparation and validation",
      "Dimensional analytical model",
      "SQL and semantic measures",
      "Power BI executive dashboards",
    ],

    assets: [],
  },

  technologies: [
    {
      category: "language",
      items: ["Python", "SQL", "DAX"],
    },
    {
      category: "data",
      items: ["Pandas", "Dimensional Modeling"],
    },
    {
      category: "analytics",
      items: ["Power BI"],
    },
    {
      category: "visualization",
      items: ["Power BI Dashboards"],
    },
  ],

  contributions: [
    {
      title: "Built a validated healthcare analytics pipeline",
      description:
        "Prepared and validated healthcare source data in Python before analytical modeling and reporting.",
      evidenceIds: ["python-validation", "validated-dataset"],
    },
    {
      title: "Designed the dimensional analytical model",
      description:
        "Structured healthcare analytics around admissions, patients, departments, and dates using fact and dimension tables.",
      evidenceIds: ["dimensional-model"],
    },
    {
      title: "Implemented executive BI reporting",
      description:
        "Built Power BI reporting across executive, operational, clinical, demographic, and financial perspectives.",
      evidenceIds: ["power-bi-reporting"],
    },
    {
      title: "Validated key healthcare metrics",
      description:
        "Verified analytical outputs and documented important metric limitations rather than presenting proxy measures as stronger claims.",
      evidenceIds: ["validated-kpis", "metric-limitations"],
    },
  ],

  evidence: [
    {
      id: "python-validation",
      type: "code",
      title: "Python Data Preparation and Validation",
      description:
        "The repository contains Python workflows for preparing healthcare data, generating KPIs, building the date dimension, and producing validation outputs.",
      sourceUrl: "https://github.com/dmortalla/executive-healthcare-bi-system",
    },
    {
      id: "dimensional-model",
      type: "architecture",
      title: "Healthcare Dimensional Model",
      description:
        "The analytical model includes fact_admissions with dim_patients, dim_departments, and dim_dates.",
      sourceUrl: "https://github.com/dmortalla/executive-healthcare-bi-system",
    },
    {
      id: "validated-dataset",
      type: "validation",
      title: "Validated Analytical Dataset",
      description:
        "Validated outputs include 101,766 admissions, 71,518 patients, 73 departments, and 3,287 dates.",
      sourceUrl: "https://github.com/dmortalla/executive-healthcare-bi-system",
    },
    {
      id: "validated-kpis",
      type: "metric",
      title: "Verified Healthcare KPIs",
      description:
        "Verified outputs include a 46.09% readmission rate, 4.40 average length of stay, and 3,474.27 average treatment-cost proxy.",
      sourceUrl: "https://github.com/dmortalla/executive-healthcare-bi-system",
    },
    {
      id: "power-bi-reporting",
      type: "dashboard",
      title: "Executive Power BI Reporting",
      description:
        "The BI layer presents executive, operational, clinical, demographic, and financial views of healthcare performance.",
      sourceUrl: "https://github.com/dmortalla/executive-healthcare-bi-system",
    },
    {
      id: "metric-limitations",
      type: "documentation",
      title: "Documented Metric Limitations",
      description:
        "Project documentation identifies treatment cost as a proxy metric and does not characterize the readmission measure as a specific 30-day readmission rate.",
      sourceUrl: "https://github.com/dmortalla/executive-healthcare-bi-system",
    },
  ],

  capabilities: [
    {
      name: "Business intelligence engineering",
      description:
        "Demonstrates transformation of validated analytical data into decision-oriented semantic models and dashboards.",
      evidenceIds: ["power-bi-reporting", "validated-kpis"],
    },
    {
      name: "Dimensional data modeling",
      description:
        "Demonstrates fact-and-dimension modeling for consistent healthcare analysis.",
      evidenceIds: ["dimensional-model"],
    },
    {
      name: "Analytics validation",
      description:
        "Demonstrates explicit validation of dataset dimensions, KPI outputs, and metric interpretation.",
      evidenceIds: [
        "python-validation",
        "validated-dataset",
        "metric-limitations",
      ],
    },
  ],

  repository: {
    githubUrl: "https://github.com/dmortalla/executive-healthcare-bi-system",
  },

  featured: {
    enabled: true,
    order: 2,
    narrativeStage: "analytics-bi",
  },

  seo: {
    title: "Executive Healthcare BI System | Analytics & BI Portfolio Project",
    description:
      "A healthcare analytics and business intelligence system using Python, SQL, dimensional modeling, DAX, and Power BI to deliver validated executive reporting.",
  },

  metadata: {},
} satisfies PortfolioProject;
