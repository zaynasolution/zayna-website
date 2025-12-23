import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: number | string
  duration?: number
  suffix?: string
  isInfinity?: boolean
}

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  suffix = "", 
  isInfinity = false 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState("0")
  
  // Spring animation for smooth counting
  const springValue = useSpring(0, {
    bounce: 0,
    duration: duration * 1000
  })

  // Transform spring value to formatted string
  const formattedValue = useTransform(springValue, (latest) => {
    if (typeof value === 'string') return value
    return Math.floor(latest).toLocaleString()
  })

  useEffect(() => {
    if (inView) {
      if (typeof value === 'number') {
        springValue.set(value)
      }
    }
  }, [inView, value, springValue])

  useEffect(() => {
    return formattedValue.on('change', (v) => {
      setDisplayValue(v)
    })
  }, [formattedValue])

  if (isInfinity) {
    return (
      <span ref={ref} className="inline-block text-[#2B0902] font-extrabold text-5xl md:text-6xl">
        {inView ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="inline-block bg-gradient-to-r from-[#F5AC73] to-[#EFC7C2] bg-clip-text text-transparent"
          >
            ∞
          </motion.span>
        ) : "0"}
      </span>
    )
  }

  return (
    <span ref={ref} className="text-[#2B0902] font-extrabold text-5xl md:text-6xl tabular-nums">
      {displayValue}{suffix}
    </span>
  )
}
