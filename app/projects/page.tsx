import { ProjectCard } from '@/components/project-card'

const projects = [
  {
    title: "Clarity",
    description: "A SaaS platform that allows developers to be on top of their productivity with AI assisted interaction with their Github repository and meeting analysis.",
    // date: "December 2024 - January 2025",
    image: "/Clarity-base.png",
    technologies: ["Next.js", "TypeScript", "PostgresDB - NeonDB", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI", "zod", "LangChain - RAG", "GeminiAPI", "Stripe", "Firebase", "Clerk"],
    websiteUrl: "https://clarity-mu-five.vercel.app/",
    githubUrl: "https://github.com/rugg07/Clarity"
  },
  {
    title: "VocabVenture",
    description: "Language learning SaaS platform that helps users and even kids learn new languages through interactive games, challenges and levels.",
    // date: "August 2024 - Dec 2024",
    image: "/VocabVenture.png",
    technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI", "Clerk", "DrizzleORM", "PostgresDB - NeonDB", "Vercel", "Stripe", "React Admin"],
    websiteUrl: "https://vocab-ventures.vercel.app/"
  },
  {
    title: "Cryptocurrency Platform",
    description: "Exchange Ether across various accounts and wallets.",
    // date: "January 2023 - May 2024",
    image: "/Web3.0.png",
    technologies: ["Next.js", "Javascript", "TailwindCSS", "Solidity", "MetaMask", "GiphyAPI"],
    githubUrl: "https://github.com/rugg07/Web3.0-Final"
  },
  {
    title: "Netflix Clone",
    description: "Netflix replica. Users can view trailers, search for movies, and watch trailers.",
    // date: "Jan 2022 - May 2022",
    image: "/Netflix-base.png",
    technologies: ["React", "Redux", "TypeScript", "Cloudflare", "Firebase", "TMDB API", "TailwindCSS", "Stripe", "Stripe Checkout & Webhooks", "Redux", "Firestore", "Google Auth"],
    websiteUrl: "https://netflix-clone-rugg.web.app/",
    githubUrl: "https://github.com/rugg07/Netflix-clone"
  },
  {
    title: "LinkedIn Clone",
    description: "LinkedIn replica. Users can view profiles, post updates, and connect with other users.",
    // date: "Jan 2022 - May 2022",
    image: "/Linkedin.png",
    technologies: ["Next.js", "TypeScript", "Firebase", "TailwindCSS", "Firestore", "Google Auth"],
    websiteUrl: "https://linkedin-clone-rugg-d55c2.web.app/",
    githubUrl: "https://github.com/rugg07/linkedin-clone"
  },
  {
    title: "Airbnb Clone",
    description: "Airbnb replica. Users can view listings, book stays, and leave reviews.",
    // date: "Jan 2022 - May 2022",
    image: "/Airbnb.png",
    technologies: ["Next.js", "Javascript", "TailwindCSS", "googlMapsAPI"],
    websiteUrl: "https://airbnb-clone-rugg07.vercel.app/",
    githubUrl: "https://github.com/rugg07/airbnb-clone"
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
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

