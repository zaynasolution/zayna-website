import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './ScrollProgressLoader.module.css'

export default function ScrollProgressLoader() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero-section', name: 'home' },
        { id: 'zayna-cards', name: 'zayna' },
        { id: 'join-app', name: 'platform' },
        { id: 'dashboard', name: 'why-us' },
        { id: 'testimonials', name: 'testimonials' },
        { id: 'contact-form', name: 'contact-form' }
      ]

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLoaderColor = (section: string) => {
    const colors: Record<string, string> = {
      'home': '#F5AC73',
      'zayna': '#EFC7C2',
      'platform': '#9C89B8',
      'why-us': '#8B5A2B',
      'testimonials': '#F5AC73',
      'contact-form': '#D4A574',
      'default': '#F5AC73'
    }
    return colors[section] || colors.default
  }

  const loaderColor = getLoaderColor(activeSection)

  return (
    <div className="fixed right-8 top-0 bottom-0 z-50 hidden lg:flex flex-col justify-center items-center pointer-events-none">
      {/* Vertical Progress Line Container */}
      <div className="relative h-[80vh] w-[2px] bg-[#2B0902]/10 rounded-full">
        {/* Animated Progress Fill */}
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#F5AC73] to-[#EFC7C2] rounded-full"
          style={{ height: scaleX, transformOrigin: "top" }}
        />
        
        {/* Animated Loader Moving Along the Line */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: scaleX, transform: "translateX(-50%) translateY(-50%)" }}
        >
          <div 
            className={styles.loader} 
            style={{ '--loader-color': loaderColor } as React.CSSProperties}
          >
            <div className={styles.loader__inner}></div>
            <div className={styles.loader__orbit}>
              <div className={styles.loader__dot}></div>
              <div className={styles.loader__dot}></div>
              <div className={styles.loader__dot}></div>
              <div className={styles.loader__dot}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
