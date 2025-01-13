import { ProjectCard } from '@/components/project-card'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/placeholder.svg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSockets'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts and interactive maps.',
    image: '/placeholder.svg',
    technologies: ['React', 'Redux', 'OpenWeatherMap API', 'Mapbox'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
]

export default function Projects() {
  return (
    <div className="container section-padding animate-fade-in">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-12 text-center">
        My Projects
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="hover-lift">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}

