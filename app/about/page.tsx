"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Experience {
  type: "work" | "education"
  title: string
  organization: string
  location: string
  date: string
  description: string
  logo: string
  skills?: string[]
}

const experiences: Experience[] = [
  // Work Experience
  {
    type: "work",
    title: "Data Analyst",
    organization: "University of Maryland - College Park",
    location: "College Park, MD, USA",
    date: "Jul 2024 - Present",
    description: "Leading data visualization and analysis initiatives across the university, conducting workshops for 250+ students on tools like Tableau, PowerBI, and NVivo. Providing specialized R programming consultations and developing automated solutions, including a registration dashboard managing 5000+ records using Python.",
    logo: "/UMD.png",
    skills: ["Python", "R", "Tableau", "PowerBI", "NVivo", "Data Analysis"]
  },
  {
    type: "work",
    title: "Software Development Engineer",
    organization: "Carnegie Mellon University",
    location: "Remote",
    date: "Jun 2024 - Present",
    description: "Spearheaded the development of a distributed goal-tracking platform using Vue.js and REST APIs that served middle school children. Architected system integration with Chart.js visualizations resulting in 33% increased user engagement.",
    logo: "/CMU.png",
    skills: ["Vue.js", "HTML", "CSS", "JavaScript", "REST APIs", "Chart.js"]
  },
  {
    type: "work",
    title: "Software Development Engineer",
    organization: "Freecharge Payment Technologies",
    location: "Mumbai, Maharashtra, India",
    date: "Aug 2022 - Jun 2023",
    description: "Led development of critical security and authentication systems. Engineered security framework using TypeScript and Node.js, reducing security incidents by 35% while maintaining scalability for 500K+ daily active users.",
    logo: "/Freecharge.png",
    skills: ["React", "Redux", "TypeScript", "Node.js", "ChakraUI"]
  },
  {
    type: "work",
    title: "Software Development Engineer, Intern",
    organization: "Persistent Systems United",
    location: "Remote",
    date: "May 2021 - Jul 2021",
    description: "Engineered a large-scale blood donation platform using PHP, JavaScript, and MySQL, optimizing database performance through advanced indexing strategies that improved query retrieval by 40%.",
    logo: "/Persistent.svg",
    skills: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "AWS", "Apache", "Kaggle"]
  },
  {
    type: "work",
    title: "Sales Manager",
    organization: "AIESEC",
    location: "Remote",
    date: "Feb 2020 - Jul 2020",
    description: "Led a three-person team managing corporate sales and customer experience for international exchange programs.",
    logo: "/AIESEC.png",
    skills: ["Sales", "Team Management", "Customer Experience"]
  },
  {
    type: "work",
    title: "Project Manager",
    organization: "AIESEC",
    location: "Ho Chi Minh City, HC, Vietnam",
    date: "May 2019 - Jul 2019",
    description: "Facilitated English language training workshops upto 6 weeks for 30-40 young adults in Ho Chi Minh City, Vietnam.",
    logo: "/AIESEC.png",
    skills: ["Project Management", "Training", "Cross-cultural Communication"]
  },
  // Education
  {
    type: "education",
    title: "Master's, Computer Science",
    organization: "University of Maryland - College Park",
    location: "College Park, MD, USA",
    date: "Aug 2023 - Jul 2025",
    description: "Pursuing advanced studies in Computer Science with focus on software engineering and distributed systems.",
    logo: "/UMD.png"
  },
  {
    type: "education",
    title: "Bachelor's, Computer Engineering",
    organization: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu, India",
    date: "Aug 2018 - May 2022",
    description: "Completed undergraduate studies in Computer Engineering with specialization in software development.",
    logo: "/VIT.svg"
  }
]

function ExperienceItem({ experience }: { experience: Experience }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group py-6 first:pt-0 border-b border-border/40 last:border-0">
      <div 
        className="flex items-start gap-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="relative h-12 w-12 flex-shrink-0">
          <Image
            src={experience.logo || "/placeholder.svg"}
            alt={experience.organization}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg">{experience.organization}</h3>
          <p className="text-base text-muted-foreground">{experience.title}</p>
          <p className="text-sm text-muted-foreground mt-1">{experience.location}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {experience.date}
          </span>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pl-[72px]">
              <p className="text-muted-foreground">{experience.description}</p>
              {experience.skills && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AboutPage() {
  const workExperience = experiences.filter(exp => exp.type === "work")
  const education = experiences.filter(exp => exp.type === "education")

  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-bold tracking-tighter mb-8">
              Work Experience
            </h2>
            <div>
              {workExperience.map((experience, index) => (
                <motion.div
                  key={`${experience.organization}-${experience.date}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ExperienceItem experience={experience} />
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tighter mb-8">
              Education
            </h2>
            <div>
              {education.map((experience, index) => (
                <motion.div
                  key={`${experience.organization}-${experience.date}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ExperienceItem experience={experience} />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

