import { ProjectCard } from '@/components/project-card'

const projects = [
  {
    title: "Chat Collect",
    description: "A SaaS platform that allows users to collect email addresses from their GPT users. Built with Next.js and PostgreSQL.",
    date: "Jan 2024 - Feb 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZKypdcjLGzu38p8mjaa508AtTCTHD.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"],
    websiteUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    title: "Magic UI",
    description: "Designed, developed and sold animated UI components for developers.",
    date: "June 2023 - Present",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZKypdcjLGzu38p8mjaa508AtTCTHD.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Magic UI"],
    websiteUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    title: "llm.report",
    description: "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    date: "April 2023 - September 2023",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZKypdcjLGzu38p8mjaa508AtTCTHD.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Cloudflare Workers"],
    websiteUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    title: "Automatic Chat",
    description: "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    date: "April 2023 - March 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZKypdcjLGzu38p8mjaa508AtTCTHD.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "OpenAI"],
    websiteUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    title: "Portfolio v2",
    description: "My personal portfolio website built with Next.js and TailwindCSS. Features dark mode, animations, and responsive design.",
    date: "March 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZKypdcjLGzu38p8mjaa508AtTCTHD.png",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    websiteUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    title: "Dev Blog",
    description: "A technical blog where I share my experiences and learnings in web development, cloud computing, and AI.",
    date: "2023 - Present",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZKypdcjLGzu38p8mjaa508AtTCTHD.png",
    technologies: ["Next.js", "MDX", "TailwindCSS", "Vercel"],
    websiteUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="container px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Projects
          </h1>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-[900px]">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

