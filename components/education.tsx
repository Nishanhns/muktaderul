"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    institution: "University of Asia Pacific",
    year: "2011",
    grade: "CGPA: 3.44 out of 4.00",
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science",
    institution: "Dhaka State College",
    year: "2007",
    grade: "GPA: 4.17 out of 5.00",
  },
  {
    degree: "Secondary School Certificate",
    field: "Science",
    institution: "CODA",
    year: "2005",
    grade: "GPA: 4.06 out of 5.00",
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 lg:py-32">
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
              Academic Background
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
            >
              Education
            </motion.h2>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree + edu.institution}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                className="group"
              >
                <div className="h-full bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    {edu.year}
                  </span>
                  <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{edu.field}</p>
                  <p className="text-muted-foreground text-sm mb-3">{edu.institution}</p>
                  <p className="text-sm font-semibold text-foreground">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
