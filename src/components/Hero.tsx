import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animationVariants'
import { useLazyLoad } from '../hooks/useLazyLoad'
import { useParallax } from '../hooks/useParallax'

export default function Hero() {
  const { ref, visible } = useLazyLoad<HTMLDivElement>()
  const { y, opacity } = useParallax([60, 400])

  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10 bg-secondary/20" />
      <div className="container">
        <motion.h1 variants={fadeInUp} initial="hidden" animate={visible ? 'visible' : 'hidden'} className="text-5xl font-bold">
          Zayna
        </motion.h1>
        <p className="mt-4 max-w-xl">A modern platform with smooth animations and great performance.</p>
      </div>
    </section>
  )
}
