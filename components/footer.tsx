import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/rugg07', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/hrugved-pawar/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:hpawar@umd.edu', icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container px-4 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Let's connect!
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

