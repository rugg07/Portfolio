import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/yourusername', icon: Github, label: 'GitHub' },
  { href: 'https://twitter.com/yourusername', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com/in/yourusername', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:your@email.com', icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container px-4 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
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

