"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiGit,
  SiAmazonwebservices,
  SiJenkins,
  SiJest,
  SiFirebase,
  SiShadcnui,
  SiPython,
  SiTableau
} from "react-icons/si"

interface Skill {
  name: string
  years: number
  category: string
  icon: React.ComponentType
  description: string
}

const skills: Skill[] = [
  // Frontend
  { 
    name: "React", 
    years: 3, 
    category: "Frontend", 
    icon: SiReact,
    description: "Building complex user interfaces and single-page applications"
  },
  { 
    name: "TypeScript", 
    years: 3, 
    category: "Frontend", 
    icon: SiTypescript,
    description: "Type-safe development and large-scale application architecture"
  },
  { 
    name: "Next.js", 
    years: 3, 
    category: "Frontend", 
    icon: SiNextdotjs,
    description: "Server-side rendering and full-stack React applications"
  },
  { 
    name: "TailwindCSS", 
    years: 3, 
    category: "Frontend", 
    icon: SiTailwindcss,
    description: "Rapid UI development with utility-first CSS"
  },
  { 
    name: "Shadcn UI / Magic UI", 
    years: 1, 
    category: "Frontend", 
    icon: SiShadcnui,
    description: "Rapid UI development with help of custom reusable components"
  },
  
  // Backend
  { 
    name: "Node.js", 
    years: 3, 
    category: "Backend", 
    icon: SiNodedotjs,
    description: "Building scalable server-side applications and APIs"
  },
  { 
    name: "PostgreSQL", 
    years: 2, 
    category: "Backend", 
    icon: SiPostgresql,
    description: "Complex database design and optimization"
  },
  { 
    name: "Firebase", 
    years: 2, 
    category: "Backend", 
    icon: SiFirebase,
    description: "Ease of use and real-time data synchronization"
  },
  { 
    name: "GraphQL", 
    years: 1, 
    category: "Backend", 
    icon: SiGraphql,
    description: "Efficient API development and data querying"
  },
  { 
    name: "Docker", 
    years: 1, 
    category: "Backend", 
    icon: SiDocker,
    description: "Containerization and deployment automation"
  },
  
  // Tools & Others
  { 
    name: "Python", 
    years: 3, 
    category: "Tools & Others", 
    icon: SiPython,
    description: "Scripting, automation, and data analysis"
  },
  { 
    name: "Git", 
    years: 3, 
    category: "Tools & Others", 
    icon: SiGit,
    description: "Version control and team collaboration"
  },
  { 
    name: "AWS", 
    years: 3, 
    category: "Tools & Others", 
    icon: SiAmazonwebservices,
    description: "Cloud infrastructure and serverless architecture"
  },
  { 
    name: "Testing", 
    years: 1, 
    category: "Tools & Others", 
    icon: SiJest,
    description: "Unit testing and integration testing"
  },
  { 
    name: "Tableau", 
    years: 1, 
    category: "Tools & Others", 
    icon: SiTableau,
    description: "Data visualization and business intelligence"
  },
]

function CircularProgress({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 38 // radius = 38
  const strokeDashoffset = circumference - (value / 5) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-24 h-24 transform -rotate-90">
        <circle
          className="text-muted stroke-current"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r="38"
          cx="48"
          cy="48"
        />
        <circle
          className="stroke-current text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="url(#gradient)"
          fill="transparent"
          r="38"
          cx="48"
          cy="48"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(192, 132, 252)" />
            <stop offset="100%" stopColor="rgb(244, 114, 182)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-xs text-muted-foreground">years</span>
      </div>
    </div>
  )
}

export function SkillsSection() {
  const categories = Array.from(new Set(skills.map(skill => skill.category)))

  return (
    <section className="w-full py-24 lg:py-32">
      <div className="container px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-[900px]">
            Here are the technologies and tools I specialize in.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Years of experience with each technology - Projects, Internships, and Work Experience combined!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-semibold tracking-tight">{category}</h3>
              <div className="grid gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .sort((a, b) => b.years - a.years)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="group hover:border-purple-500/50 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-6">
                            <CircularProgress value={skill.years} />
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="h-5 w-5">
                                  <skill.icon />
                                </div>
                                {/* <skill.icon className="h-5 w-5" /> */}
                                <h4 className="font-semibold">{skill.name}</h4>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {skill.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


