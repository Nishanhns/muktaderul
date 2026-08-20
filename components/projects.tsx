"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Database, Globe, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Real Estate ERP System",
    description:
      "Customized ERP solution for HNS Group real estate operations with MySQL database optimization and business process automation.",
    tech: ["MySQL", "Laravel", "PHP", "ERP"],
    icon: Database,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "HNSMARTBD E-Commerce",
    description:
      "Full-featured e-commerce platform with product management, order processing, and payment integration as consulting advisor.",
    tech: ["Laravel", "Vue.js", "MySQL", "REST API"],
    icon: Globe,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "MIS - Oracle Developer",
    description:
      "Management Information System utilizing Oracle Developer 6i/10g for Concord Congo Sarlu with comprehensive reporting.",
    tech: ["Oracle Forms", "Oracle Reports", "PL/SQL", "Oracle DB"],
    icon: Server,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Enterprise Database Systems",
    description:
      "Automated reporting and analysis systems through Oracle Forms & Reports for The Acme Laboratories Ltd.",
    tech: ["Oracle APEX", "PL/SQL", "Reports", "BI"],
    icon: Database,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Human Capital Management",
    description:
      "HCM system design and development to enhance organizational efficiency with employee lifecycle management.",
    tech: ["PHP", "Oracle DB", "JavaScript", "API"],
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "POS Application",
    description:
      "Point of Sale application development with store operations management and AB Bank payment solution integration.",
    tech: ["PHP", "MySQL", "jQuery", "Payment API"],
    icon: Server,
    color: "from-teal-500 to-cyan-500",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
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
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
            >
              Featured Projects
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                  {/* Project Header */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center relative overflow-hidden`}
                  >
                    <project.icon className="h-20 w-20 text-white/80" />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-background/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="outline" className="rounded-full">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Github className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-xs font-medium rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
