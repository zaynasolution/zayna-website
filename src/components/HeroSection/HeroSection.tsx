<<<<<<< HEAD
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronDown, Loader2 } from 'lucide-react'
import { useEffect, useRef, useState, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
=======
import { m, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronDown, Loader2 } from 'lucide-react'
import { useEffect, useRef, useState, useMemo } from 'react'
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
import { useLanguage } from '../../context/LanguageContext'

// Asset imports - using relative paths assuming assets are in src/assets
// Note: In a real project, these should be imported or passed as props
const VIDEO_PATH = '/src/assets/Hero-video.mp4'

interface HeroSectionProps {
  onLearnMore?: () => void
  onBookNow?: () => void
}

export default function HeroSection({ onLearnMore, onBookNow }: HeroSectionProps) {
  const { t } = useLanguage()
  
  // State
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [activeBlock, setActiveBlock] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  // Refs
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Scroll hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

<<<<<<< HEAD
  // Intersection observer for lazy loading video
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
  })

  // Derived scroll values
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
=======
  // Derived scroll values
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Video playback speed control
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
<<<<<<< HEAD
  }, [isVideoLoaded])
=======
  }, []) // Remove dependency on isVideoLoaded since we load immediately
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8

  // Scroll detection for block switching
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const scrollPercentage = window.scrollY / window.innerHeight
      
      // Hide scroll indicator after scrolling
      if (scrollPercentage > 0.1 && showScrollIndicator) {
        setShowScrollIndicator(false)
      }

      // Switch blocks at 20% scroll
      if (scrollPercentage > 0.2) {
        setActiveBlock(1)
      } else {
        setActiveBlock(0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showScrollIndicator])

  // Manual navigation handler
  const handleManualNav = (index: number) => {
    setActiveBlock(index)
    // Optional: smooth scroll to appropriate position
  }

  // Memoized content blocks to prevent unnecessary re-renders
  const blocks = useMemo(() => [
    {
      id: 'block-1',
      headline: t('hero_headline_1'),
      subtitle: t('hero_subtitle_1'),
      cta: t('hero_cta_1'),
      action: onBookNow,
      bg: 'rgba(255, 255, 255, 0.3)', // White glassy
      accent: '#F5AC73'
    },
    {
      id: 'block-2',
      headline: t('hero_headline_2'),
      subtitle: t('hero_subtitle_2'),
      cta: t('hero_cta_2'),
      action: onLearnMore,
      bg: 'rgba(255, 255, 255, 0.3)', // White glassy
      accent: '#2B0902'
    }
  ], [onBookNow, onLearnMore, t])

  return (
    <section 
      ref={containerRef} 
      className="relative h-[150vh] w-full overflow-hidden bg-[#FFF0ED]"
      aria-label="Hero Section"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Background Video Layer */}
<<<<<<< HEAD
        <motion.div 
=======
        <m.div 
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
          style={{ scale }}
          className="absolute inset-0 z-0"
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" />
          
<<<<<<< HEAD
          <div ref={inViewRef} className="h-full w-full">
            {inView && !videoError ? (
=======
          <div className="h-full w-full">
            {!videoError ? (
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
              <>
                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#FFF0ED] z-0">
                    <Loader2 className="w-10 h-10 animate-spin text-[#F5AC73]" />
                  </div>
                )}
                <video
                  ref={videoRef}
                  src={VIDEO_PATH}
                  className={`h-full w-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  autoPlay
                  loop
                  muted
                  playsInline
<<<<<<< HEAD
=======
                  preload="auto"
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
                  onLoadedData={() => setIsVideoLoaded(true)}
                  onError={() => setVideoError(true)}
                  aria-hidden="true"
                />
              </>
<<<<<<< HEAD
            ) : videoError ? (
=======
            ) : (
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
              // Fallback for video error
              <div className="h-full w-full bg-[#FFF0ED] flex items-center justify-center">
                <span className="text-[#2B0902]/50">Video unavailable</span>
              </div>
<<<<<<< HEAD
            ) : null}
          </div>
        </motion.div>

        {/* Content Layer */}
        <motion.div 
=======
            )}
          </div>
        </m.div>

        {/* Content Layer */}
        <m.div 
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
          style={{ y: yMove }}
          className="relative z-20 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {blocks.map((block, index) => (
                activeBlock === index && (
<<<<<<< HEAD
                  <motion.div
=======
                  <m.div
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
                    key={block.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
<<<<<<< HEAD
                    className="backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl text-center md:text-left border border-white/40"
                    style={{ backgroundColor: block.bg }}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                      <div className="flex-1 space-y-4">
                        <motion.h1 
                          className="text-4xl md:text-6xl font-bold text-[#2B0902] leading-tight font-serif tracking-tight"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {block.headline}
                        </motion.h1>
                        
                        <motion.p 
                          className="text-lg md:text-xl font-light text-[#2B0902] leading-relaxed max-w-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {block.subtitle}
                        </motion.p>

                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 rounded-full text-base font-semibold bg-[#F5AC73] text-[#2B0902] transition-colors min-w-[140px] min-h-[40px]"
                          onClick={block.action}
                          aria-label={`${block.cta} - ${block.headline}`}
                        >
                          {block.cta}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
=======
                    className="text-center"
                  >
                    <div 
                      className="p-8 md:p-12 rounded-3xl shadow-xl backdrop-blur-md border border-white/40"
                      style={{ backgroundColor: block.bg }}
                    >
                      <h1 className="text-4xl md:text-6xl font-bold font-serif text-[#2B0902] mb-6 leading-tight drop-shadow-sm">
                        {block.headline}
                      </h1>
                      
                      <p className="text-lg md:text-xl text-[#2B0902]/90 mb-10 leading-relaxed font-medium">
                        {block.subtitle}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <m.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={block.action}
                          className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition-all"
                          style={{ backgroundColor: block.accent }}
                          aria-label={`${block.cta} - ${block.headline}`}
                        >
                          {block.cta}
                        </m.button>
                      </div>
                    </div>
                  </m.div>
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
                )
              ))}
            </AnimatePresence>
          </div>
<<<<<<< HEAD
        </motion.div>
=======
        </m.div>
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4">
          {/* Scroll Indicator */}
          <AnimatePresence>
            {showScrollIndicator && (
<<<<<<< HEAD
              <motion.div
=======
              <m.div
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#2B0902]"
              >
                <ChevronDown size={32} />
<<<<<<< HEAD
              </motion.div>
=======
              </m.div>
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
            )}
          </AnimatePresence>

          {/* Manual Block Switcher (Mobile/Desktop) */}
          <div className="flex gap-3 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            {blocks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleManualNav(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeBlock === idx 
                    ? 'bg-[#2B0902] w-6' 
                    : 'bg-[#2B0902]/40 hover:bg-[#2B0902]/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={activeBlock === idx}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
