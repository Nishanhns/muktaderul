"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Database Management",
    skills: [
      { name: "Oracle DB", level: 95 },
      { name: "MySQL", level: 92 },
      { name: "PostgreSQL", level: 85 },
      { name: "MSSQL", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "PHP (Laravel)", level: 95 },
      { name: "PL/SQL", level: 92 },
      { name: "Stored Procedures", level: 90 },
      { name: "Functions & Triggers", level: 88 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "jQuery", level: 85 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    title: "ERP & Tools",
    skills: [
      { name: "Oracle Forms 10g/11g", level: 95 },
      { name: "Oracle Reports", level: 92 },
      { name: "Oracle Apex", level: 85 },
      { name: "API Integration", level: 88 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30">
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
              What I Know
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
            >
              My Skills
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + categoryIndex * 0.15 }}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.5 + categoryIndex * 0.15 + skillIndex * 0.1}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
