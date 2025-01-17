"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from 'lucide-react'

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

export function ExperienceItem({ experience }: { experience: Experience }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group py-6 first:pt-0 border-b border-border/40 last:border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {experience.date}
          </span>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {experience.location}
          </span>
          <ChevronDown 
            className={`h-5 w-5 text-muted-foreground transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            } ${isExpanded ? 'rotate-180' : ''}`}
          />
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

