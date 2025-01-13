import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'

const projects = [
  {
    title: "Chat Collect",
    description: "A SaaS platform that allows users to collect email addresses from their GPT users. Built with Next.js and PostgreSQL.",
    date: "Jan 2024 - Feb 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZM2TgHoWI13TsSNqQt1LNMMA6HXcEV.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"],
    websiteUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  // Add more projects...
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center w-full">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Full-Stack Developer
                  <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
                    Building Digital Experiences
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl max-w-[600px]">
                  I create modern web applications with cutting-edge technology. Specialized in React, Next.js, and full-stack development.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://github.com/yourusername" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
              <div className="flex gap-6">
                <Link 
                  href="https://github.com/yourusername" 
                  target="_blank"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link 
                  href="https://twitter.com/yourusername" 
                  target="_blank"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-[400px] mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-600 blur-3xl opacity-20 animate-pulse" />
              <Image
                src="/placeholder.svg"
                alt="Profile"
                fill
                className="object-cover rounded-full border-2 border-border"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-[900px]">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

