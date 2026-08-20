"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect } from "react"

const stats = [
  { value: 13, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Technologies Mastered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2 })
      return controls.stop
    }
  }, [isInView, value, count])

  return (
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
