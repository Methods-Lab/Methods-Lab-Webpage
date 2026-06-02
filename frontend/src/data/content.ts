import {
  Bot,
  Cpu,
  Database,
  Network,
  Radar,
  Code2,
  Compass,
  ListChecks,
  Hammer,
  Rocket,
  MessageSquare,
  Shield,
  Gauge,
  FileCode,
  Users,
} from "lucide-react";

export const site = {
  name: "Methods Lab",
  tagline: "Applied AI and ML systems that ship",
  email: "methodslab.team@gmail.com",
  location: "Pakistan — collaborating worldwide",
  socials: {
    github: "https://github.com/Methods-Lab",
    linkedin: "https://www.linkedin.com/in/methods-lab-00a4b5413",
    facebook: "https://www.facebook.com/share/1TfUuzBYu6/",
  },
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export const trustPoints = [
  "Research-backed ML systems with production focus",
  "Clear experiment tracking and reproducibility",
  "Data pipelines built for long-term reliability",
  "Human-in-the-loop workflows when accuracy matters",
  "Security and privacy-aware engineering",
  "Open-source DNA with clean documentation",
];

export const services = [
  {
    slug: "ai-agents",
    icon: Bot,
    title: "AI Agents & LLM Applications",
    short: "Multi-agent systems, copilots, and tool-using assistants designed for real workflows.",
    items: [
      "Multi-agent orchestration",
      "Knowledge-base assistants",
      "Tool calling & automation",
      "Human-in-the-loop reviews",
      "Prompt and eval pipelines",
    ],
    priceFrom: "$900+",
  },
  {
    slug: "recommender-systems",
    icon: Network,
    title: "Recommender Systems",
    short: "Ranking, retrieval, and personalization models for products and content.",
    items: [
      "Two-tower retrieval",
      "GNN recommenders",
      "Candidate generation",
      "Offline + online evaluation",
      "Cold-start strategies",
    ],
    priceFrom: "$1,200+",
  },
  {
    slug: "data-platforms",
    icon: Database,
    title: "Data Platforms & Pipelines",
    short: "Reliable data ingestion, feature stores, and analytics foundations.",
    items: [
      "ETL/ELT pipelines",
      "Data quality checks",
      "Feature engineering",
      "Streaming ingestion",
      "Analytics dashboards",
    ],
    priceFrom: "$800+",
  },
  {
    slug: "mlops",
    icon: Cpu,
    title: "MLOps & Deployment",
    short: "Ship models safely with CI/CD, monitoring, and scalable inference.",
    items: [
      "Model serving APIs",
      "Experiment tracking",
      "Monitoring + drift alerts",
      "Batch + realtime inference",
      "Containerized deployments",
    ],
    priceFrom: "$950+",
  },
  {
    slug: "vision-nlp",
    icon: Radar,
    title: "Computer Vision & NLP",
    short: "Applied CV/NLP solutions for documents, images, and text.",
    items: [
      "Document understanding",
      "OCR pipelines",
      "Image classification",
      "Entity extraction",
      "Semantic search",
    ],
    priceFrom: "$700+",
  },
  {
    slug: "research-prototypes",
    icon: Code2,
    title: "Research Prototypes & PoCs",
    short: "Rapid experimentation to validate AI ideas before full productization.",
    items: [
      "Prototype builds",
      "Feasibility tests",
      "Benchmarking",
      "Technical reports",
      "Roadmap planning",
    ],
    priceFrom: "$500+",
  },
] as const;

export const process = [
  {
    icon: Compass,
    title: "Discovery",
    body: "We align on goals, constraints, data sources, and success metrics.",
  },
  {
    icon: ListChecks,
    title: "Data & Feasibility",
    body: "We audit data quality, define baselines, and plan experiments.",
  },
  {
    icon: Hammer,
    title: "Modeling",
    body: "We build, evaluate, and iterate with clear reporting and checkpoints.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    body: "We ship models with monitoring, feedback loops, and documentation.",
  },
];

export const differentiators = [
  {
    icon: Gauge,
    title: "Production-first ML",
    body: "We balance research depth with pragmatic delivery and MLOps.",
  },
  {
    icon: FileCode,
    title: "Clean, open-source quality",
    body: "Readable code, reproducible experiments, and strong documentation.",
  },
  {
    icon: MessageSquare,
    title: "Transparent collaboration",
    body: "Regular updates, experiment logs, and shared decision-making.",
  },
  {
    icon: Users,
    title: "Founder-led and hands-on",
    body: "Senior engineers drive every engagement, start to finish.",
  },
  {
    icon: Shield,
    title: "Security-aware workflows",
    body: "Privacy, access control, and NDA-friendly delivery by default.",
  },
];

export const projects = [
  // Pinned / flagship: our featured open-source agent.
  {
    slug: "data-analyst-agent",
    title: "Data Analyst Agent",
    summary:
      "Interactive AI chatbot that analyzes any Excel/CSV data — automated EDA, visualizations, and ML-powered predictions and forecasting.",
    category: "Data",
    repoUrl: "https://github.com/Methods-Lab/Data-Analyst-Agent",
    stack: ["Python", "Pandas", "EDA", "Machine Learning"],
    problem:
      "Analysts spent hours on repetitive data prep and exploratory analysis before surfacing any real insight, and non-technical users had no simple way to interrogate their own spreadsheets.",
    solution:
      "An interactive AI chatbot agent that ingests any Excel/CSV file, performs automated exploratory data analysis (statistical summaries and visualizations), and applies machine learning for predictions and forecasting — all through a conversational interface.",
    features: [
      "Conversational data Q&A",
      "Automated EDA & statistical summaries",
      "Auto-generated visualizations",
      "ML predictions & forecasting",
    ],
    outcome: "Open-source assistant that turns raw spreadsheets into insights and forecasts in minutes.",
  },
  {
    slug: "nexus-ai",
    title: "Nexus AI",
    summary: "Agentic framework for coordinating tools, workflows, and multi-step reasoning.",
    category: "AI Agents",
    repoUrl: "https://github.com/Methods-Lab/Nexus-AI",
    stack: ["Python", "LLM", "FastAPI", "Redis"],
    problem: "Teams needed a structured way to orchestrate multiple AI agents across tools and knowledge sources without losing observability.",
    solution: "We designed a modular agent framework with task routing, tool execution, and structured output contracts.",
    features: ["Tool calling", "Planner + executor", "Observability hooks", "Prompt templates"],
    outcome: "Open-source foundation for building production-grade AI agent workflows.",
  },
  {
    slug: "nexus-ops-agent",
    title: "Nexus Ops AI Agent",
    summary: "Operations-focused agent that automates repetitive business tasks.",
    category: "AI Agents",
    repoUrl: "https://github.com/Methods-Lab/Nexus-Ops-AI-Agent",
    stack: ["Python", "LLM", "APIs", "Automation"],
    problem: "Ops teams needed quicker turnaround on routine coordination and reporting tasks.",
    solution: "We built an agent that connects to common tools and automates multi-step operational checklists.",
    features: ["Workflow automation", "Task routing", "Tool integrations", "Audit logs"],
    outcome: "Reusable ops blueprint for agent-driven automation.",
  },
  {
    slug: "sql-ai",
    title: "SQL AI",
    summary: "Natural language to SQL workflows with schema-aware validation.",
    category: "Developer Tools",
    repoUrl: "https://github.com/Methods-Lab/SQL-AI",
    stack: ["Python", "Postgres", "LLM", "Validation"],
    problem: "Business teams wanted self-serve analytics without risking unsafe queries.",
    solution: "We implemented schema-aware SQL generation with validation and guardrails.",
    features: ["Schema grounding", "Query validation", "Safety checks", "Result summaries"],
    outcome: "Developer tool that bridges natural language and trustworthy SQL.",
  },
  {
    slug: "recfm",
    title: "RecFM",
    summary: "Foundation models for recommendation workflows and ranking.",
    category: "Recommenders",
    repoUrl: "https://github.com/Methods-Lab/RecFM",
    stack: ["Python", "PyTorch", "RecSys", "Evaluation"],
    problem: "Recommendation pipelines needed stronger retrieval and ranking baselines.",
    solution: "We packaged model training and evaluation workflows tailored for recommender tasks.",
    features: ["Model training", "Ranking metrics", "Dataset utilities", "Baseline configs"],
    outcome: "Reusable foundation for rapid RecSys experimentation.",
  },
  {
    slug: "gnn-recommenders",
    title: "GNN Recommender Systems",
    summary: "Graph-based recommenders for cold-start and sparse interaction data.",
    category: "Recommenders",
    repoUrl: "https://github.com/Methods-Lab/GNN-Recommender-Systems",
    stack: ["PyTorch", "GNN", "RecSys"],
    problem: "Sparse datasets made it hard to surface relevant recommendations.",
    solution: "We explored GNN-based approaches to capture graph structure and improve recall.",
    features: ["Graph modeling", "Cold-start focus", "Benchmark scripts", "Metrics suite"],
    outcome: "Research-ready toolkit for graph recommenders.",
  },
  {
    slug: "cnn-visualizations",
    title: "PyTorch CNN Visualizations",
    summary: "Visualization toolkit for inspecting and explaining CNN behavior.",
    category: "Visualization",
    repoUrl: "https://github.com/Methods-Lab/pytorch-cnn-visualizations",
    stack: ["Python", "PyTorch", "Computer Vision"],
    problem: "Teams needed a better way to debug CNNs and explain model decisions.",
    solution: "We packaged visualization utilities for activation maps, filters, and saliency.",
    features: ["Activation maps", "Filter visualization", "Saliency", "Debug utilities"],
    outcome: "Tooling to improve transparency in CV models.",
  },
  {
    slug: "mcp-server-stripe",
    title: "MCP Server for Stripe",
    summary: "Model Context Protocol server for payments and billing workflows.",
    category: "Developer Tools",
    repoUrl: "https://github.com/Methods-Lab/MCP-Server-Stripe",
    stack: ["Python", "MCP", "Stripe API"],
    problem: "AI agents needed a secure interface for payments and billing operations.",
    solution: "We built an MCP server that exposes Stripe primitives with auditability.",
    features: ["Secure tool access", "Audit logging", "Stripe primitives", "Extensible API"],
    outcome: "Infrastructure layer for agent-to-payment workflows.",
  },
] as const;

export const projectCategories = [
  "All",
  "AI Agents",
  "Data",
  "Recommenders",
  "Developer Tools",
  "Visualization",
] as const;

export const techStack = [
  "Python",
  "FastAPI",
  "PyTorch",
  "Hugging Face",
  "Postgres",
  "Redis",
  "Docker",
  "Kubernetes",
  "LangChain",
  "OpenAI",
  "Pandas",
  "MLflow",
];

export const faqs = [
  {
    q: "What kinds of AI projects do you take on?",
    a: "AI agents, recommender systems, NLP/CV pipelines, and production ML systems with real data.",
  },
  {
    q: "Do you deliver production-ready systems or only research?",
    a: "Both. We ship production systems and can run research sprints when experimentation is needed.",
  },
  {
    q: "Can you work with our existing data stack?",
    a: "Yes. We integrate with existing warehouses, APIs, and data pipelines.",
  },
  {
    q: "How do you measure success?",
    a: "We define clear metrics up front and share evaluation results during every milestone.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We provide monitoring, retraining plans, and ongoing ML maintenance.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. NDA-friendly engagements are standard for Methods Lab.",
  },
];

export const engagementModels = [
  {
    title: "Research sprint",
    body: "Short, focused engagements to validate feasibility and performance.",
  },
  {
    title: "Build & deploy",
    body: "End-to-end delivery from data pipelines to production inference.",
  },
  {
    title: "Long-term partner",
    body: "Ongoing iteration, monitoring, and model upgrades.",
  },
];
