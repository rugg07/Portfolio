import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface TimelineItemProps {
  title: string
  company: string
  date: string
  description: string
}

export function TimelineItem({ title, company, date, description }: TimelineItemProps) {
  return (
    <Card className="mb-8 relative before:absolute before:left-[-1.5rem] before:top-6 before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="text-sm text-muted-foreground">
          {company} | {date}
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

