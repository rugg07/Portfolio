import { Progress } from '@/components/ui/progress'

interface SkillBarProps {
  skill: string
  level: number
}

export function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm font-medium text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  )
}

