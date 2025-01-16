import { TimelineItem } from '@/components/timeline-item'

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovators Inc.',
    date: 'Jan 2020 - Present',
    description: 'Lead development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'WebSolutions Co.',
    date: 'Mar 2017 - Dec 2019',
    description: 'Developed and maintained multiple client projects using JavaScript, React, and Express. Improved application performance by 40%.',
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Ventures',
    date: 'Jun 2015 - Feb 2017',
    description: 'Assisted in the development of responsive websites and contributed to the company\'s internal tools using HTML, CSS, and JavaScript.',
  },
]

export default function Experience() {
  return (
    <div className="container section-padding animate-fade-in">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-12 text-center">
        My Experience
      </h1>
      <div className="max-w-3xl mx-auto pl-8 border-l border-primary">
        {experiences.map((exp, index) => (
          <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <TimelineItem {...exp} />
          </div>
        ))}
      </div>
    </div>
  )
}

