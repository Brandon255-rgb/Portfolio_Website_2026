// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  video?: string;
  featured: boolean;
  category: 'dev' | 'ai';
}

export const projects: Project[] = [
  // DEV PROJECTS
  {
    title: "University Management System",
    description: "Full-stack university platform with comprehensive admin dashboard",
    longDescription: "Built a complete university management system featuring student enrollment, course management, financial tracking, and analytics. Includes real-time dashboards for monitoring sales, suppliers, products, and fiscal calendars. Implemented with role-based access control and automated reporting.",
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/Brandon255-rgb/university-system",
    image: "/images/Proof of Work/University Website/home dash.webp",
    featured: true,
    category: 'dev'
  },
  {
    title: "Kafka Streaming Analytics Dashboard",
    description: "Real-time data streaming platform with Apache Kafka integration",
    longDescription: "Developed a high-performance streaming analytics dashboard processing 10k+ events per second. Features real-time data visualization, custom pipeline configurations, and multi-source data ingestion. Optimized for low-latency monitoring with automated alerting and anomaly detection.",
    tech: ["Apache Kafka", "React", "Python", "D3.js", "Redis", "Docker", "Kubernetes"],
    github: "https://github.com/Brandon255-rgb/kafka-dashboard",
    image: "/images/Proof of Work/kafka-streaming-dashboard/kafka pipeline.webp",
    featured: true,
    category: 'dev'
  },
  {
    title: "Nail Salon Booking Platform",
    description: "Modern appointment booking system with reviews and analytics",
    longDescription: "Created a complete salon management platform with online booking, customer reviews, location management, and business analytics. Features automated appointment reminders, staff scheduling, and integrated payment processing. Improved booking efficiency by 45% and customer satisfaction scores.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com/Brandon255-rgb/nail-salon",
    live: "https://nail-salon-demo.vercel.app",
    image: "/images/Proof of Work/Nail salon Website/home.webp",
    video: "/images/Proof of Work/Nail salon Website/video_demo.mp4",
    featured: true,
    category: 'dev'
  },
  
  // AI/ML PROJECTS
  {
    title: "Custom LLM Fine-Tuning Pipeline",
    description: "Production-ready fine-tuning system for domain-specific language models",
    longDescription: "Engineered an automated pipeline for fine-tuning large language models on custom datasets. Implemented LoRA/QLoRA techniques for efficient training, with automated evaluation metrics and A/B testing framework. Reduced training costs by 60% while improving model performance on domain-specific tasks. Handles datasets up to 50GB with distributed training across multiple GPUs.",
    tech: ["Python", "PyTorch", "Hugging Face Transformers", "CUDA", "MLflow", "Docker", "AWS SageMaker"],
    github: "https://github.com/Brandon255-rgb/llm-finetuning-pipeline",
    image: "/images/Proof of Work/ai-invoice-manager/description.webp",
    video: "/videos/llm-pipeline-demo.mp4",
    featured: true,
    category: 'ai'
  },
  {
    title: "Recode - AI Coding Challenge Platform",
    description: "Intelligent platform for coding assessments with automated evaluation",
    longDescription: "Built a comprehensive coding challenge platform with AI-powered code review, automated testing, and real-time feedback. Features include difficulty-adaptive challenges, performance analytics, skill tracking with badges, and detailed coding metrics. Used by companies for technical interviews and by developers for skill improvement.",
    tech: ["TypeScript", "React", "Python", "FastAPI", "PostgreSQL", "Docker", "OpenAI API"],
    github: "https://github.com/Brandon255-rgb/recode-platform",
    image: "/images/Proof of Work/Recode/overviewCards.png",
    video: "/images/Proof of Work/Recode/recode_presentation.mp4",
    featured: true,
    category: 'ai'
  },
  {
    title: "AI Invoice Management System",
    description: "Automated invoice processing with intelligent data extraction",
    longDescription: "Developed an AI-powered invoice management system that automatically extracts, categorizes, and processes invoices from multiple formats. Features OCR, smart data validation, duplicate detection, and seamless ERP integration. Reduced manual processing time by 80% and improved accuracy to 99.5%.",
    tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Celery", "Redis", "React"],
    github: "https://github.com/Brandon255-rgb/ai-invoice-manager",
    image: "/images/Proof of Work/ai-invoice-manager/home.webp",
    featured: false,
    category: 'ai'
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const devProjects = projects.filter(p => p.category === 'dev' && p.featured);
export const aiProjects = projects.filter(p => p.category === 'ai' && p.featured);