export type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO at TechStart",
    company: "TechStart Inc.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "Brandon delivered a production-ready application in record time. The code quality was exceptional, and the performance optimizations saved us thousands in server costs. Highly recommend for any serious development work.",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    name: "Michael Rodriguez",
    role: "Founder & CEO",
    company: "AutoFlow AI",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content: "The custom LLM fine-tuning pipeline Brandon built completely transformed our customer support. Response accuracy improved by 40%, and we're handling 3x the volume with the same team. ROI was clear within the first month.",
    rating: 5,
    project: "AI Automation System"
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "DataSync Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content: "Working with Brandon was seamless. Clear communication, proactive problem-solving, and delivered ahead of schedule. The React dashboard he built handles real-time data from 50k+ users without breaking a sweat.",
    rating: 5,
    project: "Real-time Dashboard"
  },
  {
    name: "James Park",
    role: "Head of Engineering",
    company: "CloudMetrics",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    content: "Best freelance developer I've worked with. Brandon doesn't just write code—he understands the business context and suggests improvements that actually move the needle. Will definitely work together again.",
    rating: 5,
    project: "API Integration Platform"
  },
  {
    name: "Lisa Anderson",
    role: "Operations Director",
    company: "MediaFlow",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    content: "The automation bot Brandon developed saved our team 15+ hours per week. It's been running flawlessly for 6 months with zero downtime. The documentation was so thorough that even non-technical team members could understand it.",
    rating: 5,
    project: "Workflow Automation Bot"
  },
  {
    name: "David Kim",
    role: "VP of Product",
    company: "NextGen Apps",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    content: "Brandon's expertise in both frontend and backend made our project incredibly smooth. The Next.js app he built loads in under a second and has handled Black Friday traffic without any issues. A true full-stack expert.",
    rating: 5,
    project: "Mobile-First Web App"
  }
];

export default testimonials;
