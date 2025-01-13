"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  date: string
  image: string
  technologies: string[]
  websiteUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  description,
  date,
  image,
  technologies,
  websiteUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card 
        className="overflow-hidden bg-card hover:border-purple-500/50 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </div>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-xl mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
            <p className="text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-4">
              {websiteUrl && (
                <Button asChild className="flex-1">
                  <Link href={websiteUrl} target="_blank">
                    <Globe className="mr-2 h-4 w-4" />
                    Website
                  </Link>
                </Button>
              )}
              {githubUrl && (
                <Button asChild variant="outline">
                  <Link href={githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Source
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

