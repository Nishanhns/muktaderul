"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Database, Code2, Server, Award } from "lucide-react"

const strengths = [
  {
    icon: Database,
    title: "Database Management",
    description: "Expert in Oracle DB, MySQL, PostgreSQL, MSSQL with query optimization and data security",
  },
  {
    icon: Code2,
    title: "Backend Development",
    description: "PHP (Laravel), PL/SQL, Stored Procedures, Functions, Triggers, and API Integration",
  },
  {
    icon: Server,
    title: "ERP Systems",
    description: "Oracle Forms 10g/11g, Oracle Reports, Oracle Apex, and Custom ERP Solutions",
  },
  {
    icon: Award,
    title: "13+ Years Experience",
    description: "Proven track record in software development and IT management since 2011",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium"
            >
              Get To Know
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
            >
              About Me
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6" />
                <div className="absolute inset-0 bg-card rounded-2xl border border-border flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">💼</div>
                    <p className="text-muted-foreground">Crafting software solutions since 2011</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Dynamic Software Architect with 13 years of extensive experience in software 
                development and IT management, specializing in the integration of innovative 
                technologies and optimization of IT systems. I collaborate effectively with 
                business analysts to interpret and fulfill complex business requirements.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Strong problem-solving skills and an analytical mindset facilitate proactive 
                identification and resolution of IT challenges, ensuring robust infrastructure 
                performance and operational excellence. Committed to driving technological 
                advancements that align with organizational goals and enhance overall efficiency.
              </p>

              {/* Strengths Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-4 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-colors group"
                  >
                    <strength.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-1">{strength.title}</h3>
                    <p className="text-sm text-muted-foreground">{strength.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
