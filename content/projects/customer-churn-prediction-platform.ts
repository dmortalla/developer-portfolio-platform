import type { PortfolioProject } from "@/lib/projects/schema";

export const customerChurnPredictionPlatform = {
  slug: "customer-churn-prediction-platform",

  title: "Customer Churn Prediction Platform",

  positioning: {
    primaryDiscipline: "ml-engineering",
    secondaryDisciplines: ["mlops"],
    tagline: "From customer data to deployable churn-risk predictions.",
    summary:
      "A production-style machine learning platform that ingests telecom customer data, engineers model-ready features, trains and tunes churn models, tracks experiments with MLflow, persists model artifacts, and serves churn predictions through FastAPI and Docker.",
  },

  status: "complete",

  problem: {
    context:
      "Customer churn prediction requires more than training a classifier: data ingestion, feature preparation, reproducible modeling, artifact management, serving, testing, and deployment workflows must work together.",
    challenge:
      "Build a modular machine learning system that converts telecom customer data into reproducible churn predictions while separating experimentation from the model actually served in production-style inference.",
    objective:
      "Create an end-to-end churn prediction platform covering ingestion, feature engineering, baseline modeling, hyperparameter tuning, experiment tracking, persisted artifacts, API inference, containerization, and automated quality checks.",
  },

  architecture: {
    summary:
      "A modular pipeline ingests and validates telecom customer data, engineers model-ready features, trains a Logistic Regression baseline and separately tunes XGBoost, tracks experiments in MLflow, persists artifacts, and serves the baseline model through FastAPI inside Docker.",

    components: [
      {
        name: "Data Ingestion",
        responsibility:
          "Loads and validates the telecom churn dataset before downstream processing.",
        technologies: ["Python", "Pandas"],
      },
      {
        name: "Feature Engineering",
        responsibility:
          "Transforms customer records into model-ready features, including categorical encoding and target preparation.",
        technologies: ["Python", "Pandas", "scikit-learn"],
      },
      {
        name: "Model Training",
        responsibility:
          "Trains a reproducible Logistic Regression baseline with preprocessing and persisted evaluation artifacts.",
        technologies: ["scikit-learn", "Joblib"],
      },
      {
        name: "Model Tuning",
        responsibility:
          "Tunes an XGBoost classifier with GridSearchCV as a separate development model artifact.",
        technologies: ["XGBoost", "scikit-learn"],
      },
      {
        name: "Experiment Tracking",
        responsibility:
          "Records machine learning experiments and artifacts for reproducibility and comparison.",
        technologies: ["MLflow"],
      },
      {
        name: "Inference API",
        responsibility:
          "Loads the persisted baseline model and exposes churn predictions through an HTTP API.",
        technologies: ["FastAPI", "Uvicorn"],
      },
      {
        name: "Containerized Runtime",
        responsibility:
          "Packages and runs the inference service reproducibly using container tooling.",
        technologies: ["Docker", "Docker Compose"],
      },
      {
        name: "Quality Automation",
        responsibility:
          "Validates pipeline behavior through automated tests and continuous integration.",
        technologies: ["pytest", "GitHub Actions"],
      },
    ],

    dataFlow: [
      "Telecom customer dataset",
      "Validated ingestion",
      "Engineered model features",
      "Baseline and tuned model training",
      "MLflow experiment tracking",
      "Persisted model artifacts",
      "FastAPI churn inference",
    ],

    assets: [],
  },

  technologies: [
    {
      category: "language",
      items: ["Python 3.11"],
    },
    {
      category: "data",
      items: ["Pandas"],
    },
    {
      category: "ml-ai",
      items: ["scikit-learn", "XGBoost", "MLflow", "Joblib"],
    },
    {
      category: "framework",
      items: ["FastAPI", "Uvicorn"],
    },
    {
      category: "devops",
      items: ["Docker", "Docker Compose", "GitHub Actions"],
    },
    {
      category: "testing",
      items: ["pytest"],
    },
  ],

  contributions: [
    {
      title: "Built a modular ML data pipeline",
      description:
        "Implemented ingestion and feature-engineering stages that transform telecom customer data into reproducible model-ready inputs.",
      evidenceIds: ["data-pipeline", "feature-pipeline"],
    },
    {
      title: "Implemented reproducible baseline training",
      description:
        "Built a scikit-learn training pipeline with median imputation and Logistic Regression, persisted the trained model, and recorded training metadata.",
      evidenceIds: ["baseline-training"],
    },
    {
      title: "Added separate XGBoost model tuning",
      description:
        "Implemented GridSearchCV-based XGBoost tuning as a separate development workflow rather than conflating experimental tuning with the currently served model.",
      evidenceIds: ["xgboost-tuning", "serving-model-boundary"],
    },
    {
      title: "Added experiment tracking and artifact persistence",
      description:
        "Integrated MLflow for experiment tracking and persisted model and reporting artifacts for repeatable development workflows.",
      evidenceIds: ["mlflow-tracking", "model-artifacts"],
    },
    {
      title: "Delivered containerized model inference",
      description:
        "Exposed churn predictions through FastAPI and packaged the inference service with Docker and Docker Compose.",
      evidenceIds: ["fastapi-serving", "container-runtime"],
    },
    {
      title: "Added automated testing and CI",
      description:
        "Implemented automated tests and GitHub Actions checks to validate the ML platform continuously.",
      evidenceIds: ["automated-tests", "ci-workflow"],
    },
  ],

  evidence: [
    {
      id: "data-pipeline",
      type: "code",
      title: "Validated Telecom Data Ingestion",
      description:
        "The ingestion workflow processes the 7,043-row, 21-column telecom churn dataset into a validated processed dataset.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "feature-pipeline",
      type: "code",
      title: "Model Feature Pipeline",
      description:
        "The feature pipeline performs categorical encoding, converts Churn to a binary target, excludes customerID, and produces model-ready feature data.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "baseline-training",
      type: "code",
      title: "Logistic Regression Baseline",
      description:
        "The baseline uses a scikit-learn Pipeline with median SimpleImputer preprocessing and LogisticRegression configured with random_state=42, max_iter=1000, and liblinear.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "xgboost-tuning",
      type: "code",
      title: "XGBoost Hyperparameter Tuning",
      description:
        "The project tunes an XGBoost classifier using GridSearchCV and persists the tuned model separately from the serving baseline.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "mlflow-tracking",
      type: "documentation",
      title: "MLflow Experiment Tracking",
      description:
        "Training workflows log machine learning experiment information and artifacts through MLflow.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "model-artifacts",
      type: "validation",
      title: "Persisted Model and Report Artifacts",
      description:
        "The project persists trained models and machine learning reports so development results can be reproduced and inspected.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "fastapi-serving",
      type: "code",
      title: "FastAPI Prediction Service",
      description:
        "The API exposes churn inference and returns a predicted class, a Yes/No churn label, and churn probability.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "serving-model-boundary",
      type: "documentation",
      title: "Explicit Serving Model Boundary",
      description:
        "The current API loads the persisted Logistic Regression baseline for inference; the tuned XGBoost model is produced and persisted separately as a development artifact.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "container-runtime",
      type: "ci-cd",
      title: "Dockerized Inference Runtime",
      description:
        "The FastAPI service is packaged for containerized execution with Docker and Docker Compose.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "automated-tests",
      type: "test",
      title: "Automated ML Platform Tests",
      description:
        "The audited repository includes automated tests across ingestion, feature engineering, training, and serving workflows.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "ci-workflow",
      type: "ci-cd",
      title: "GitHub Actions Continuous Integration",
      description:
        "GitHub Actions runs automated project quality checks as part of the repository workflow.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
    {
      id: "api-input-limitation",
      type: "documentation",
      title: "Current API Input Boundary",
      description:
        "The current prediction API expects engineered model features rather than accepting raw customer records directly.",
      sourceUrl: "https://github.com/dmortalla/customer-churn-platform",
    },
  ],

  capabilities: [
    {
      name: "Machine learning engineering",
      description:
        "Demonstrates modular ingestion, feature engineering, training, tuning, artifact persistence, and model-serving workflows.",
      evidenceIds: [
        "data-pipeline",
        "feature-pipeline",
        "baseline-training",
        "xgboost-tuning",
      ],
    },
    {
      name: "MLOps foundations",
      description:
        "Demonstrates experiment tracking, containerized inference, automated testing, and continuous integration around a machine learning system.",
      evidenceIds: [
        "mlflow-tracking",
        "container-runtime",
        "automated-tests",
        "ci-workflow",
      ],
    },
    {
      name: "Production-aware model serving",
      description:
        "Demonstrates explicit separation between experimental model tuning and the artifact currently used by the inference API.",
      evidenceIds: [
        "fastapi-serving",
        "serving-model-boundary",
        "api-input-limitation",
      ],
    },
  ],

  repository: {
    githubUrl: "https://github.com/dmortalla/customer-churn-platform",
  },

  featured: {
    enabled: true,
    order: 3,
    narrativeStage: "predictive-ml",
  },

  seo: {
    title:
      "Customer Churn Prediction Platform | ML Engineering Portfolio Project",
    description:
      "A production-style telecom churn machine learning platform using Python, scikit-learn, XGBoost, MLflow, FastAPI, Docker, automated tests, and CI.",
  },

  metadata: {},
} satisfies PortfolioProject;
