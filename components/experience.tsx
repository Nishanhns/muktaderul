"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Assistant Manager",
    company: "HNS Group",
    location: "Dhaka",
    duration: "Dec 2021 - Mar 2025",
    responsibilities: [
      "Managed IT development initiatives focusing on ERP implementation and database architecture",
      "Designed and optimized MySQL database structures improving system efficiency",
      "Developed and maintained customized ERP solutions for real estate business operations",
      "Collaborated with business stakeholders to align IT systems with organizational goals",
      "Consulting advisor for eCommerce site named HNSMARTBD.com",
    ],
  },
  {
    title: "IT Consultant",
    company: "Concord Congo Sarlu",
    location: "DR Congo",
    duration: "Sep 2019 - Aug 2021",
    responsibilities: [
      "Conducted analysis and developed MIS utilizing Oracle Developer 6i/10g",
      "Provided consultancy for database and application solutions",
      "Implemented IT infrastructure improvements to support business expansion in Africa",
      "Delivered tailored solutions ensuring data integrity and security",
    ],
  },
  {
    title: "Senior Executive Officer",
    company: "The Acme Laboratories Ltd.",
    location: "Dhaka",
    duration: "May 2014 - Aug 2019",
    responsibilities: [
      "Worked with Business Analysts to understand and fulfill business requirements",
      "Streamlined customization aligning with standard functionality",
      "Developed and optimized enterprise database systems",
      "Automated reporting and analysis through Oracle Forms & Reports",
      "Contributed to business intelligence initiatives supporting management decisions",
    ],
  },
  {
    title: "Software Engineer",
    company: "Networld Bangladesh Ltd.",
    location: "Dhaka",
    duration: "Nov 2011 - Apr 2014",
    responsibilities: [
      "Executed analysis and development of MIS utilizing PHP and Oracle DB",
      "Analyzed and developed Human Capital Management (HCM) design",
      "Developed and maintained company website for improved user experience",
      "Participated in core team focused on SAP ERP readiness",
      "Designed and implemented software solutions for business clients",
    ],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32">
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
              My Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
            >
              Work Experience
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  } pl-16 md:pl-0`}
                >
                  <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">{exp.location}</p>
                    <ul
                      className={`space-y-2 text-muted-foreground text-sm ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 justify-start md:justify-inherit">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
