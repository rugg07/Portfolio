import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 lg:py-32">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8 text-center">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Have a project in mind? Let's talk about it.
            </p>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={6} />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">your@email.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-medium">Social</h3>
                    <p className="text-sm text-muted-foreground">@yourusername</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

