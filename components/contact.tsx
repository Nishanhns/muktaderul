"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+880 1673 569443",
    href: "tel:+8801673569443",
  },
  {
    icon: Mail,
    title: "Email",
    value: "nishan5505@gmail.com",
    href: "mailto:nishan5505@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mohammadpur, Dhaka - 1207",
    href: "https://maps.google.com/?q=Mohammadpur,Dhaka",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28">
        <motion.div ref={ref}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
            >
              Contact Me
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Let&apos;s work together</h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                I&apos;m always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border">
                <FieldGroup>
                  <Field>
                    <FieldLabel>Your Name</FieldLabel>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      required
                      className="bg-secondary"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Your Email</FieldLabel>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-secondary"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Message</FieldLabel>
                    <Textarea
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="bg-secondary resize-none"
                    />
                  </Field>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </FieldGroup>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
