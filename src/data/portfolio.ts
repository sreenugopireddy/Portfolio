export const profile = {
  name: "Sreenivasa Reddy Gopireddy",
  shortName: "Sreenivasa Reddy",
  title: "AI Engineer | LLM Systems Architect",
  role: "AI ENGINEER · LLM SYSTEMS · RAG ARCHITECT",
  tagline: "Building AI systems that retrieve, reason and automate.",
  subDesc:
    "I build production-grade LLM applications, RAG pipelines, and AI agents that solve real-world problems.",
  email: "sreenugopireddy24@gmail.com",
  phone: "+91-6302390641",
  location: "Nandyal, Andhra Pradesh, India",
  resumeUrl: "https://github.com/sreenugopireddy",
  github: "https://github.com/sreenugopireddy",
  linkedin: "https://linkedin.com/in/sreenugopireddy",
  portfolio: "https://3d-portfolio-psi-five.vercel.app",
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

export const heroBadges = ["AI Engineer", "LLM Systems", "RAG Architect"];

export const heroStats = [
  { value: 2, suffix: "+", label: "Internships", icon: "Sprout" },
  { value: 5, suffix: "+", label: "AI Systems Built", icon: "Zap" },
  { value: 100, suffix: "%", label: "RAG Faithfulness", icon: "CheckCircle2" },
  { value: 1, suffix: "", label: "Published Research", icon: "Cloud" },
];

export const aboutInterests = [
  { icon: "Brain", text: "AI Engineering & LLM Applications" },
  { icon: "Search", text: "RAG Systems & Vector Databases" },
  { icon: "Bot", text: "Agentic AI & Workflow Automation" },
  { icon: "Cloud", text: "Cloud Deployment & DevOps" },
  { icon: "FileText", text: "Research & Experimentation" },
];

export const skillBadges = [
  "Python", "LangChain", "FastAPI", "FAISS", "Chroma", "Milvus",
  "Azure", "Docker", "GitHub Actions", "RAGAS", "MLflow", "HuggingFace",
  "LlamaIndex", "OpenTelemetry", "Groq", "Redis", "Supabase", "Twilio",
];

export type Project = {
  title: string;
  tags: string[];
  arch: string[];
  subTags?: string[];
  bullets: string[];
  links: { label: string; href: string; icon: "Demo" | "GitHub" | "Paper" | "Docs" }[];
};

export const projects: Project[] = [
  {
    title: "Healthcare RAG Assistant",
    tags: ["Python", "LangChain", "FAISS", "RAGAS", "MLflow"],
    arch: ["Documents", "Retriever (FAISS)", "LLM (Azure OpenAI)", "Response"],
    bullets: [
      "End-to-end RAG pipeline for healthcare domain with semantic chunking and query understanding over medical corpora",
      "Achieved perfect faithfulness score (1.0) at 0.52s latency via systematic RAGAS + MLflow experiment tracking",
      "Published technical research on RAG architecture design and LLM evaluation strategies in ReadyTensor community",
    ],
    links: [
      { label: "Live Demo", href: "https://github.com/sreenugopireddy/Healthcare-Document-RAG-Assistant", icon: "Demo" },
      { label: "GitHub", href: "https://github.com/sreenugopireddy/Healthcare-Document-RAG-Assistant", icon: "GitHub" },
      { label: "Research Paper", href: "https://github.com/sreenugopireddy/Healthcare-Document-RAG-Assistant", icon: "Paper" },
    ],
  },
  {
    title: "LLM Platform — Production Grade (Azure)",
    tags: ["Python", "FastAPI", "Azure", "Docker", "RAGAS", "CI/CD"],
    arch: ["API Gateway", "Inference Service", "Prompt Registry", "Eval Harness"],
    subTags: ["Azure OpenAI", "Cosmos DB", "Blob Storage", "Monitoring"],
    bullets: [
      "4-microservice LLM platform deployed on Azure Container Apps with full Docker + CI/CD pipelines — production-ready AI infra",
      "Automated eval pipeline with RAGAS + CI gates that block deployment if quality score drops below 0.85 threshold",
      "Deterministic A/B routing for LLM model variants and PTU → PAYG automatic fallback, reducing inference cost ~50%",
    ],
    links: [
      { label: "Live Demo", href: "https://llm-platform-gateway.greentree-67d78498.eastus.azurecontainerapps.io", icon: "Demo" },
      { label: "API Docs", href: "https://llm-platform-gateway.greentree-67d78498.eastus.azurecontainerapps.io/docs", icon: "Docs" },
      { label: "GitHub", href: "https://github.com/sreenugopireddy", icon: "GitHub" },
    ],
  },
  {
    title: "Axon — ML Model Pipeline Platform",
    tags: ["React", "TypeScript", "FastAPI", "Groq", "Celery", "Redis", "Railway"],
    arch: ["UI (React)", "FastAPI", "Celery Workers", "ML Models", "Results"],
    bullets: [
      "Full-stack ML pipeline platform — React/TypeScript frontend + FastAPI backend with Celery + Redis task queue",
      "Groq-powered AI layer (Llama 3.3-70b-versatile) for intelligent pipeline configuration recommendations",
      "GitHub Actions CI/CD with Railway + Vercel deployment — live production system end-to-end",
    ],
    links: [
      { label: "Live Demo", href: "https://axon-pi-two.vercel.app", icon: "Demo" },
      { label: "GitHub", href: "https://github.com/sreenugopireddy/Axion-ML-model", icon: "GitHub" },
    ],
  },
  {
    title: "Real Estate Voice AI Agent",
    tags: ["Twilio", "Deepgram", "ElevenLabs", "FastAPI", "Redis", "Supabase", "Groq"],
    arch: ["Phone Call", "Twilio", "Deepgram STT", "LLM (Groq)", "ElevenLabs TTS", "Caller"],
    bullets: [
      "Production voice AI agent handling real estate inquiries with real-time STT/TTS pipeline under 800ms response latency",
      "Llama 3.3-70b (Groq) for ultra-fast LLM responses with Redis conversation memory maintaining full call context",
      "Supabase RLS policies for multi-tenant data isolation + Cal.com integration for automated appointment booking",
    ],
    links: [{ label: "GitHub", href: "https://github.com/sreenugopireddy", icon: "GitHub" }],
  },
  {
    title: "3D AI Portfolio Website",
    tags: ["Next.js 14", "TypeScript", "Three.js", "GSAP", "Framer Motion", "Tailwind"],
    arch: ["Next.js 14", "Three.js 3D", "GSAP Animations", "Vercel CDN"],
    bullets: [
      "Production-grade 3D portfolio with Three.js WebGL scenes, particle systems, and smooth GSAP scroll-triggered animations",
      "Pixel-perfect dark theme with holographic UI elements, glowing neon accents, and orbital skill galaxy",
      "Deployed to Vercel with 100/100 Lighthouse performance score and full TypeScript type safety",
    ],
    links: [
      { label: "Live Demo", href: "https://3d-portfolio-psi-five.vercel.app", icon: "Demo" },
      { label: "GitHub", href: "https://github.com/sreenugopireddy", icon: "GitHub" },
    ],
  },
  {
    title: "Healthcare RAG — Streamlit Demo + Research",
    tags: ["Python", "Streamlit", "LangChain", "FAISS", "Azure OpenAI", "RAGAS"],
    arch: ["Streamlit UI", "LangChain RAG", "FAISS VectorDB", "Azure OpenAI", "Answer"],
    bullets: [
      "Interactive Streamlit application demonstrating the Healthcare RAG pipeline with real-time document upload and Q&A",
      "RAGAS evaluation dashboard showing live faithfulness, answer relevancy, and context precision metrics per query",
      "Deployed on Streamlit Community Cloud with LinkedIn showcase and visual tech poster for knowledge sharing",
    ],
    links: [
      { label: "Live Demo", href: "https://github.com/sreenugopireddy/Healthcare-Document-RAG-Assistant", icon: "Demo" },
      { label: "GitHub", href: "https://github.com/sreenugopireddy/Healthcare-Document-RAG-Assistant", icon: "GitHub" },
    ],
  },
];

export const experience = [
  {
    year: "Oct–Nov 2025",
    role: "AI & Data Analytics Intern",
    org: "Edunet Foundation",
    summary:
      "Built ML pipelines on 50K+ transactions with feature engineering and anomaly detection. Documented findings in reproducible experimental frameworks directly transferable to LLM prompt scoping and agent task decomposition.",
  },
  {
    year: "Feb–Mar 2026",
    role: "Power BI Intern",
    org: "Microsoft Elevate (AICTE Collaboration)",
    summary:
      "Built large-scale data reporting systems with 12+ DAX measures and automated ETL workflows, optimizing KPI-driven analytical pipelines for real-world business intelligence use cases.",
  },
  {
    year: "2026",
    role: "Published Researcher — RAG Architecture",
    org: "ReadyTensor Research Community",
    summary:
      "Published technical research on RAG systems and LLM evaluation strategies including benchmark design and MLflow experiment tracking methodologies.",
  },
  {
    year: "2026",
    role: "LLM Platform Architect",
    org: "Azure Cloud — Production Deployment",
    summary:
      "Designed and deployed production-grade LLM platform with CI/CD, automated eval gates, A/B routing, and live monitoring on Azure Container Apps.",
  },
];

export const research = {
  title: "RAG Architecture Design and LLM Evaluation Strategies",
  venue: "ReadyTensor Research Community",
  year: "2026",
  status: "Published",
  metrics: [
    { value: "1.00", label: "Faithfulness", color: "#00ff88" },
    { value: "0.98", label: "Answer Relevancy", color: "#00d4ff" },
    { value: "0.97", label: "Context Recall", color: "#a855f7" },
    { value: "0.52s", label: "Latency", color: "#facc15" },
  ],
  description:
    "Explored RAG pipeline design, evaluation methodologies using RAGAS and MLflow experiment tracking with benchmark design and comprehensive LLM evaluation strategies. Demonstrated reproducible AI system development end-to-end.",
  contributions: [
    "Hybrid retrieval pipeline with semantic chunking",
    "RAGAS-based evaluation framework with MLflow tracking",
    "Benchmark design for domain-specific RAG systems",
    "Reproducible experiment methodology achieving 1.0 faithfulness",
  ],
  link: "https://github.com/sreenugopireddy/Healthcare-Document-RAG-Assistant",
};

export const services = [
  { icon: "Bot", title: "AI Chatbots", desc: "Custom GPT solutions for your business with domain-specific knowledge and seamless integration." },
  { icon: "Database", title: "RAG Systems", desc: "Enterprise knowledge assistants powered by retrieval-augmented generation with vector databases." },
  { icon: "Zap", title: "AI Agents", desc: "Workflow automation & intelligent agents that reason, plan and execute complex multi-step tasks." },
  { icon: "Server", title: "Backend APIs", desc: "FastAPI microservices development and AI integrations with production-ready architecture." },
  { icon: "Cloud", title: "Cloud Deployment", desc: "Azure deployment & infrastructure with Docker, CI/CD pipelines and full observability monitoring." },
  { icon: "BarChart3", title: "Data Pipelines", desc: "ETL, analytics & automation systems that transform raw data into actionable intelligence." },
];

export const techStack = [
  "Python", "LangChain", "FastAPI", "FAISS",
  "Chroma", "Milvus", "Azure", "Docker",
  "GitHub", "OpenAI", "RAGAS", "MLflow",
  "HuggingFace", "LlamaIndex", "Groq", "Redis",
  "Supabase", "Twilio", "Deepgram", "ElevenLabs",
];

export const certifications = [
  { icon: "Cloud", title: "AWS Machine Learning Engineer Associate", org: "Amazon Web Services · 2026" },
  { icon: "Search", title: "RAG Systems Expert", org: "ReadyTensor Research Community · 2026" },
  { icon: "Database", title: "Oracle OCI AI Foundations Associate", org: "Oracle Cloud Infrastructure · 2025" },
  { icon: "Code2", title: "SQL for Data Science", org: "UC Davis / Coursera" },
  { icon: "BarChart3", title: "Power BI — Data Analytics", org: "Microsoft" },
  { icon: "Shield", title: "Zscaler Zero Trust Associate (ZTCA)", org: "Zscaler" },
];

export const achievements = [
  { icon: "FileText", title: "Published Research", desc: "Published technical research on RAG architecture and LLM evaluation strategies in ReadyTensor research community." },
  { icon: "CheckCircle2", title: "Perfect Faithfulness", desc: "Achieved 1.0 faithfulness score in RAG evaluation with 0.52s response latency — reproducible via MLflow tracking." },
  { icon: "Rocket", title: "Production Deployed", desc: "Deployed production LLM platform on Azure with automated CI/CD, eval gates, A/B routing and live monitoring." },
  { icon: "Award", title: "6+ Certifications", desc: "Industry certifications from AWS, Oracle, Microsoft, Zscaler, Coursera and ReadyTensor." },
  { icon: "GraduationCap", title: "Strong Academics", desc: "CGPA 7.23/10 — B.Tech Data Science, Santhiram Engineering College (2023–2027). 98% in SSC, 86% in Intermediate." },
];

export const chatSuggestions = [
  "What projects has Sreenu built?",
  "Explain the LLM Platform",
  "What technologies does he use?",
  "Tell me about his research",
];
