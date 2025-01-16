import { SkillBar } from '@/components/skill-bar'

const skills = [
  { skill: 'JavaScript', level: 90 },
  { skill: 'TypeScript', level: 85 },
  { skill: 'React', level: 88 },
  { skill: 'Next.js', level: 82 },
  { skill: 'Node.js', level: 80 },
  { skill: 'Express', level: 78 },
  { skill: 'PostgreSQL', level: 75 },
  { skill: 'MongoDB', level: 72 },
  { skill: 'Docker', level: 70 },
  { skill: 'AWS', level: 68 },
]

export default function Skills() {
  return (
    <div className="container section-padding animate-fade-in">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-12 text-center">
        My Skills
      </h1>
      <div className="max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={skill.skill} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <SkillBar {...skill} />
          </div>
        ))}
      </div>
    </div>
  )
}

