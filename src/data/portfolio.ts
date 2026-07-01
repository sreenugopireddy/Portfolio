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
  resumeUrl: "https://drive.google.com/file/d/1l5FIhUYwuY235JmJGLpGyVVv11p0rwlI/view?usp=sharing",
  github: "https://github.com/sreenugopireddy",
  linkedin: "https://www.linkedin.com/in/sreenu-gopireddy/",
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
      { label: "Live Demo", href: "https://healthcare-document-rag-assistant-bszat4b6m3dbktycg7yvlc.streamlit.app/", icon: "Demo" },
      { label: "GitHub", href: "https://github.com/sreenugopireddy/Healthcare-Document-RAG-Assistant", icon: "GitHub" },
      { label: "Research Paper", href: "https://app.readytensor.ai/publications/healthcare-document-rag-assitant-0EKLQ6QTqtCS", icon: "Paper" },
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
      "Deterministic A/B routing for LLM model variants and PTU to PAYG automatic fallback, reducing inference cost ~50%",
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
    links: [
      { label: "GitHub", href: "https://github.com/sreenugopireddy", icon: "GitHub" },
    ],
  },
  {
    title: "AI Data Analyst",
    tags: ["Python", "Streamlit", "Groq", "LLaMA 3.3 70B", "Pandas", "Seaborn"],
    arch: ["CSV Upload", "Pandas Analysis", "Groq LLaMA 3.3", "Plotly Charts", "AI Insights"],
    bullets: [
      "Conversational AI agent that analyzes any CSV dataset using natural language — upload data, ask questions, get instant visualizations",
      "LLaMA 3.3 70B via Groq generates business insights, descriptive stats, correlation heatmaps, and distribution plots automatically",
      "Features revenue trend analysis, product performance charts, category comparison, and exportable AI insight reports as .txt",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/sreenugopireddy/AI-Data-Analyst", icon: "GitHub" },
    ],
  },
  {
    title: "Smart Grid Energy Demand Forecasting",
    tags: ["Python", "TensorFlow", "LSTM", "Streamlit", "Plotly", "Scikit-learn"],
    arch: ["AEP CSV Data", "MinMaxScaler", "LSTM Model", "Inverse Transform", "Plotly Dashboard"],
    subTags: ["TensorFlow/Keras", "Pandas", "NumPy", "Joblib"],
    bullets: [
      "Stacked LSTM neural network forecasting electricity demand up to 48 hours ahead on real-world AEP hourly dataset from Kaggle",
      "24-hour sliding window input through LSTM(64) to LSTM(32) to Dense layers, capturing daily demand cycles with high fidelity",
      "Interactive Streamlit dashboard with Plotly visualizations, custom CSV upload support, and forecast export as CSV",
    ],
    links: [
      { label: "Live Demo", href: "https://smart-grid-energy-demand-forecasting-zvjgfqxycvvqgcqerc5dzp.streamlit.app/", icon: "Demo" },
      { label: "GitHub", href: "https://github.com/sreenugopireddy/Smart-grid-energy-demand-forecasting", icon: "GitHub" },
    ],
  },
  {
    title: "Power BI Sales Performance Dashboard",
    tags: ["Power BI", "DAX", "ETL", "Data Modeling", "KPI Analytics"],
    arch: ["Raw Data", "ETL Cleaning", "Data Model", "DAX Measures", "Executive Dashboard"],
    bullets: [
      "End-to-end Power BI analytics solution covering data cleaning, modeling, 12+ DAX calculations, and executive-ready KPI visualizations",
      "Enables stakeholders to monitor revenue trends, product performance, regional breakdowns, and sales targets in real time",
      "Built during Microsoft Elevate (AICTE) Power BI internship — automated ETL workflows with optimized analytical pipelines",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/sreenugopireddy/powerbi-sales-performance-dashboard", icon: "GitHub" },
    ],
  },
  {
    title: "Financial Dashboard",
    tags: ["Python", "Streamlit", "Plotly", "Pandas", "Financial Analytics"],
    arch: ["Financial Data", "Pandas Processing", "Plotly Charts", "Streamlit UI", "Insights"],
    bullets: [
      "Interactive financial analytics dashboard built with Streamlit and Plotly for real-time portfolio and market data visualization",
      "Features P&L tracking, asset allocation charts, trend analysis, and customizable financial KPI monitoring",
      "Clean, responsive UI with dark theme designed for financial analysts and portfolio managers",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/sreenugopireddy/Financial_Dashboard", icon: "GitHub" },
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
  link: "https://app.readytensor.ai/publications/healthcare-document-rag-assitant-0EKLQ6QTqtCS",
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
  {
    icon: "Cloud",
    title: "AWS Machine Learning Engineer Associate",
    org: "Amazon Web Services · 2026",
    link: "https://drive.google.com/file/d/1kJTi7YkypMZuJexfZL6L7ZiS5NVrl9rd/view",
  },
  {
    icon: "Search",
    title: "RAG Systems Expert",
    org: "ReadyTensor Research Community · 2026",
    link: "https://drive.google.com/file/d/1uGNfucIQZP6nqoOFYtLY1c8R59-1AyfV/view",
  },
  {
    icon: "Database",
    title: "Oracle OCI AI Foundations Associate",
    org: "Oracle Cloud Infrastructure · 2025",
    link: "https://drive.google.com/file/d/19WCTBgtK15UTkUcFOVmXcCbMHKCbbpCn/view",
  },
  {
    icon: "Code2",
    title: "SQL for Data Science",
    org: "UC Davis / Coursera",
    link: "https://drive.google.com/file/d/1lKwT_hw84nFNdDpOVqLVZZ-Si8XRSJzI/view",
  },
  {
    icon: "BarChart3",
    title: "Power BI — Harnessing the Power of Data",
    org: "Microsoft",
    link: "https://drive.google.com/file/d/1M8dep_W2fT8pmPH2nMXBfL_LbGJ43XR5/view",
  },
  {
    icon: "Shield",
    title: "Zscaler Zero Trust Associate (ZTCA)",
    org: "Zscaler",
    link: "https://drive.google.com/file/d/185c3uGkQuutnEGbDU379p6WMlRIdYl6f/view",
  },
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