import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building2, GraduationCap, Award } from 'lucide-react'

interface TimelineItemProps {
  title: string
  organization: string
  date: string
  description: string
  type: "work" | "education"
  skills?: string[]
}

const timelineItems: TimelineItemProps[] = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    organization: "Tech Company",
    date: "2022 - Present",
    description: "Led development of scalable web applications using modern technologies.",
    skills: ["React", "Node.js", "AWS", "TypeScript"]
  },
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "StartUp Inc",
    date: "2020 - 2022",
    description: "Developed and maintained multiple client projects.",
    skills: ["React", "Express", "MongoDB", "Docker"]
  },
  {
    type: "education",
    title: "Master of Computer Science",
    organization: "University Name",
    date: "2018 - 2020",
    description: "Specialized in Software Engineering and Cloud Computing."
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "University Name",
    date: "2014 - 2018",
    description: "Major in Computer Science with focus on Web Technologies."
  }
]

function TimelineItem({ item }: { item: TimelineItemProps }) {
  return (
    <Card className="relative before:absolute before:left-[-2rem] before:top-6 before:h-4 before:w-4 before:rounded-full before:bg-purple-600 before:content-['']">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-muted-foreground flex items-center gap-2">
              {item.type === "work" ? (
                <Building2 className="h-4 w-4" />
              ) : (
                <GraduationCap className="h-4 w-4" />
              )}
              {item.organization}
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
              <Calendar className="h-4 w-4" />
              {item.date}
            </p>
          </div>
          {item.type === "education" && (
            <Award className="h-6 w-6 text-purple-600" />
          )}
        </div>
        <p className="mt-4 text-muted-foreground">{item.description}</p>
        {item.skills && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 lg:py-32">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">
              About Me
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-12">
                I'm a passionate full-stack developer with over 5 years of experience building modern web applications. 
                I specialize in React, Next.js, and Node.js, with a strong focus on creating performant and scalable solutions.
              </p>
            </div>
            
            <div className="space-y-8 pl-8 border-l border-purple-600">
              {timelineItems.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

