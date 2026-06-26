export const profile = {
  name: "Your Name",
  title: "AI Engineer",
  role: "AI ENGINEER · LLM SYSTEMS · RAG ARCHITECT",
  email: "hello@yourdomain.ai",
  location: "Remote · Worldwide",
  resumeUrl: "#",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  twitter: "https://twitter.com/",
  // Replace with the uploaded portrait once provided
  heroImage: "",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 42, suffix: "+", label: "Projects" },
  { value: 18, suffix: "", label: "AI Systems" },
  { value: 12, suffix: "", label: "RAG Pipelines" },
  { value: 6, suffix: "", label: "Research" },
  { value: 100, suffix: "%", label: "Azure Cloud" },
];

export const heroCards = [
  { icon: "Database", title: "RAG Pipeline", subtitle: "Hybrid retrieval · 92% recall", accent: "primary" as const },
  { icon: "Cloud", title: "Azure Deployment", subtitle: "AKS · Container Apps", accent: "accent" as const },
  { icon: "LineChart", title: "Evaluation Metrics", subtitle: "RAGAS · groundedness 0.94", accent: "glow" as const },
  { icon: "Terminal", title: "Python Code", subtitle: "FastAPI · async workers", accent: "primary" as const },
  { icon: "Boxes", title: "Vector Database", subtitle: "FAISS · Milvus · Chroma", accent: "accent" as const },
];

export const aboutBullets = [
  "Designing production RAG and agentic systems end-to-end.",
  "Shipping LLM workloads on Azure with observability baked in.",
  "Evaluation-first: RAGAS, groundedness, latency, cost.",
  "Bridging research papers and engineering reality.",
];

export const skills = [
  { name: "Python", ring: 0 },
  { name: "FastAPI", ring: 0 },
  { name: "Azure", ring: 0 },
  { name: "LangChain", ring: 0 },
  { name: "OpenAI", ring: 0 },
  { name: "Docker", ring: 0 },
  { name: "FAISS", ring: 1 },
  { name: "Milvus", ring: 1 },
  { name: "Chroma", ring: 1 },
  { name: "RAGAS", ring: 1 },
  { name: "GitHub", ring: 1 },
  { name: "GH Actions", ring: 1 },
];

export const projects = [
  {
    title: "Enterprise RAG Platform",
    description:
      "Multi-tenant retrieval system serving 8M+ documents with hybrid BM25 + dense vectors, reranking, and full eval harness.",
    tech: ["Python", "FastAPI", "LangChain", "FAISS", "Azure", "Docker"],
    arch: ["Ingest", "Embed", "Hybrid Retrieve", "Rerank", "LLM"],
    demo: "#",
    repo: "#",
    paper: "#",
  },
  {
    title: "Agentic Workflow Engine",
    description:
      "Tool-using agents with planner + critic loop, persistent memory, and structured output guarantees for ops automation.",
    tech: ["Python", "LangGraph", "OpenAI", "Postgres", "Redis"],
    arch: ["Planner", "Tools", "Critic", "Memory", "Output"],
    demo: "#",
    repo: "#",
    paper: "#",
  },
  {
    title: "Evaluation Observatory",
    description:
      "Continuous evaluation pipeline with RAGAS, custom rubrics, and drift detection wired into CI/CD for every prompt change.",
    tech: ["RAGAS", "MLflow", "GitHub Actions", "Azure", "Grafana"],
    arch: ["Dataset", "Runner", "Scorer", "Drift", "Dashboard"],
    demo: "#",
    repo: "#",
    paper: "#",
  },
  {
    title: "Document Intelligence API",
    description:
      "Layout-aware extraction over PDFs, scans, and forms with structured JSON output and human-in-the-loop review.",
    tech: ["Python", "FastAPI", "OCR", "Milvus", "Azure"],
    arch: ["Parse", "Layout", "Extract", "Validate", "Store"],
    demo: "#",
    repo: "#",
    paper: "#",
  },
];

export const experience = [
  {
    year: "2025",
    role: "Senior AI Engineer",
    org: "Confidential · Enterprise AI",
    summary: "Leading RAG + agent platforms on Azure for regulated industries.",
  },
  {
    year: "2024",
    role: "AI Engineer",
    org: "LLM Systems Group",
    summary: "Built retrieval and evaluation infrastructure for production LLMs.",
  },
  {
    year: "2023",
    role: "ML Engineer",
    org: "Applied Research Lab",
    summary: "Shipped vector search and embedding pipelines from prototype to scale.",
  },
  {
    year: "2022",
    role: "Software Engineer",
    org: "Cloud Platform Team",
    summary: "Backend APIs, async workers, and container orchestration on Azure.",
  },
];

export const research = {
  title: "Hybrid Retrieval with Self-Critique for Faithful RAG",
  abstract:
    "We introduce a hybrid retrieval pipeline that combines lexical, dense, and graph signals with a lightweight self-critique loop, raising groundedness from 0.78 to 0.94 on a domain benchmark while keeping p95 latency under 1.2s.",
  venue: "Preprint · 2025",
  link: "#",
};

export const services = [
  { icon: "MessagesSquare", title: "AI Chatbots", desc: "Conversational agents grounded in your data, tuned for your brand voice." },
  { icon: "Database", title: "RAG Systems", desc: "Hybrid retrieval, reranking, and evaluation for trustworthy answers." },
  { icon: "Bot", title: "AI Agents", desc: "Tool-using agents with planning, memory, and structured outputs." },
  { icon: "Server", title: "Backend APIs", desc: "Production FastAPI services with auth, queues, and observability." },
  { icon: "Cloud", title: "Cloud Deployment", desc: "Azure-first deployments on AKS, Container Apps, and Functions." },
  { icon: "Workflow", title: "Data Pipelines", desc: "Ingestion, embedding, and ETL for high-volume document workloads." },
];

export const techStack = [
  "Python", "FastAPI", "LangChain", "Azure",
  "Docker", "GitHub", "OpenAI", "MLflow",
  "RAGAS", "FAISS", "Chroma", "Milvus",
];

export const achievements = [
  { icon: "FileText", title: "Research", desc: "Published RAG evaluation methodology adopted by 3 enterprise teams." },
  { icon: "Rocket", title: "Production Deployment", desc: "Scaled LLM systems to 100K+ daily requests with 99.9% uptime." },
  { icon: "BookOpen", title: "Publications", desc: "Co-authored 4 papers on retrieval and agentic systems." },
  { icon: "Award", title: "Certificates", desc: "Azure AI Engineer, OpenAI API specialization, Kubernetes." },
  { icon: "GraduationCap", title: "Academic Excellence", desc: "MSc in AI · Distinction · Best Thesis Award." },
];
