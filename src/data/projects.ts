export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Astro",
    technologies: ["Astro", "TypeScript", "CSS"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.example.com"
  },
  {
    title: "AI Chat App",
    description: "A chat application powered by AI",
    technologies: ["React", "Node.js", "OpenAI API"],
    githubUrl: "https://github.com/username/ai-chat"
  }
];