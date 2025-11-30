// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
  category: 'dev' | 'ai';
}

export const projects: Project[] = [
  // DEV PROJECTS - Replace with your actual projects
  {
    title: "Project Alpha",
    description: "Full-stack application with real-time features",
    longDescription: "Built a scalable full-stack application handling 10k+ concurrent users with real-time data synchronization. Implemented microservices architecture with event-driven communication.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
    github: "https://github.com/Brandon255-rgb/project-alpha",
    live: "https://project-alpha.com",
    image: "/images/project1.jpg", // Add your images to public/images/
    featured: true,
    category: 'dev'
  },
  {
    title: "Project Beta",
    description: "E-commerce platform with payment integration",
    longDescription: "Developed a complete e-commerce solution with Stripe payment processing, inventory management, and admin dashboard. Optimized checkout flow resulting in 35% conversion improvement.",
    tech: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind"],
    github: "https://github.com/Brandon255-rgb/project-beta",
    live: "https://project-beta.com",
    image: "/images/project2.jpg",
    featured: true,
    category: 'dev'
  },
  {
    title: "Project Gamma",
    description: "Mobile-first progressive web application",
    longDescription: "Created a PWA with offline-first architecture and push notifications. Achieved 90+ Lighthouse scores across all metrics with sub-2s load times on 3G networks.",
    tech: ["Vue.js", "Service Workers", "IndexedDB", "Firebase"],
    github: "https://github.com/Brandon255-rgb/project-gamma",
    image: "/images/project3.jpg",
    featured: true,
    category: 'dev'
  },
  
  // AI/ML PROJECTS
  {
    title: "Custom LLM Fine-Tuning Pipeline",
    description: "Production-ready fine-tuning system for domain-specific language models",
    longDescription: "Engineered an automated pipeline for fine-tuning large language models on custom datasets. Implemented LoRA/QLoRA techniques for efficient training, with automated evaluation metrics and A/B testing framework. Reduced training costs by 60% while improving model performance on domain-specific tasks. Handles datasets up to 50GB with distributed training across multiple GPUs.",
    tech: ["Python", "PyTorch", "Hugging Face", "CUDA", "MLflow", "Docker"],
    github: "https://github.com/Brandon255-rgb/llm-finetuning",
    image: "/images/ai-project.jpg",
    featured: true,
    category: 'ai'
  },
  {
    title: "AI Workflow Automation Platform",
    description: "Intelligent automation system for business process optimization",
    longDescription: "Built a comprehensive automation platform that uses AI to optimize repetitive business workflows. Features include natural language task creation, smart scheduling, integration with 50+ business tools, and predictive analytics. Clients report 40% reduction in manual work and 30% faster task completion.",
    tech: ["Python", "LangChain", "FastAPI", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com/Brandon255-rgb/ai-automation",
    image: "/images/automation.jpg",
    featured: false,
    category: 'ai'
  },
  {
    title: "Multi-Platform Bot Framework",
    description: "Unified bot system for Discord, Slack, and web applications",
    longDescription: "Developed a flexible bot framework that deploys intelligent conversational agents across multiple platforms. Features include context-aware responses, sentiment analysis, custom knowledge base integration, and real-time analytics. Powers customer support, community management, and internal tooling for multiple companies.",
    tech: ["TypeScript", "Node.js", "OpenAI API", "Pinecone", "WebSocket", "Docker"],
    github: "https://github.com/Brandon255-rgb/bot-framework",
    image: "/images/bot.jpg",
    featured: false,
    category: 'ai'
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const devProjects = projects.filter(p => p.category === 'dev' && p.featured);
export const aiProjects = projects.filter(p => p.category === 'ai' && p.featured);