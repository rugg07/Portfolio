"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Send } from 'lucide-react'
import { toast } from "sonner"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const form = event.currentTarget;
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      toast.success("Message sent successfully!")
      form.reset()
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="from_name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input 
                      id="from_name" 
                      name="from_name" 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="reply_to" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input 
                      id="reply_to" 
                      name="reply_to" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message" 
                      rows={6} 
                      required 
                    />
                  </div>
                  <input type="hidden" name="to_email" value="hpawar@umd.edu" />
                  <Button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
                    <p className="text-sm text-muted-foreground">hpawar@umd.edu</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-medium">Social</h3>
                    <p className="text-sm text-muted-foreground">@pawarofhrugved</p>
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


// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, MessageSquare } from 'lucide-react'
// import { toast } from "sonner"
// import emailjs from '@emailjs/browser'
// import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//     setIsSubmitting(true)

//     try {
//       const form = event.currentTarget;
//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         form,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       )
      
//       toast.success("Message sent successfully!")
//       form.reset()
//       setIsSubmitted(true)
//     } catch (error) {
//       console.error('Error sending email:', error)
//       toast.error("Failed to send message. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen">
//       <section className="py-24 lg:py-32">
//         <div className="container px-4 md:px-8 lg:px-12">
//           <div className="max-w-2xl mx-auto">
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8 text-center">
//               Get In Touch
//             </h1>
//             <p className="text-lg text-muted-foreground text-center mb-12">
//               Have a project in mind? Let's talk about it.
//             </p>

//             <Card>
//               <CardContent className="p-6">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="from_name" className="text-sm font-medium mb-2 block">
//                       Name
//                     </label>
//                     <Input 
//                       id="from_name" 
//                       name="from_name" 
//                       placeholder="Your name" 
//                       required 
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="reply_to" className="text-sm font-medium mb-2 block">
//                       Email
//                     </label>
//                     <Input 
//                       id="reply_to" 
//                       name="reply_to" 
//                       type="email" 
//                       placeholder="your@email.com" 
//                       required 
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="text-sm font-medium mb-2 block">
//                       Message
//                     </label>
//                     <Textarea 
//                       id="message" 
//                       name="message" 
//                       placeholder="Your message" 
//                       rows={6} 
//                       required 
//                     />
//                   </div>
//                   <input type="hidden" name="to_email" value="hpawar@umd.edu" />
//                   <InteractiveHoverButton
//                     type="submit"
//                     disabled={isSubmitting}
//                     isLoading={isSubmitting}
//                     isSuccess={isSubmitted}
//                     loadingText="Sending..."
//                     successText="Message sent"
//                   >
//                     Send a message
//                   </InteractiveHoverButton>
//                 </form>
//               </CardContent>
//             </Card>

//             <div className="mt-12 grid gap-6 sm:grid-cols-2">
//               <Card>
//                 <CardContent className="p-6 flex items-center gap-4">
//                   <Mail className="h-6 w-6 text-purple-600" />
//                   <div>
//                     <h3 className="font-medium">Email</h3>
//                     <p className="text-sm text-muted-foreground">hpawar@umd.edu</p>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6 flex items-center gap-4">
//                   <MessageSquare className="h-6 w-6 text-purple-600" />
//                   <div>
//                     <h3 className="font-medium">Social</h3>
//                     <p className="text-sm text-muted-foreground">@yourusername</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


