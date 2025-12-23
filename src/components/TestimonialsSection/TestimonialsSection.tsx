import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard'
import { useLanguage } from '../../context/LanguageContext'

export default function TestimonialsSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  
  const testimonials = [
    {
      id: 1,
      name: t('testimonial_1_name'),
      avatar: '👩',
      rating: 5,
      comment: t('testimonial_1_comment'),
      location: t('testimonial_1_location'),
      color: '#F5AC73'
    },
    {
      id: 2,
      name: t('testimonial_2_name'),
      avatar: '👸',
      rating: 5,
      comment: t('testimonial_2_comment'),
      location: t('testimonial_2_location'),
      color: '#EFC7C2'
    },
    {
      id: 3,
      name: t('testimonial_3_name'),
      avatar: '💁',
      rating: 4,
      comment: t('testimonial_3_comment'),
      location: t('testimonial_3_location'),
      color: '#9C89B8'
    }
  ]

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section 
      id="testimonials" 
      className="py-24 px-4 bg-[#FFF0ED] overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif text-[#2B0902]"
          >
            {t('testimonials_title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-light text-[#2B0902]/80"
          >
            {t('testimonials_subtitle')}
          </motion.p>
        </div>

        <div className="relative flex items-center justify-center gap-4 md:gap-8">
          {/* Navigation Buttons */}
          <button 
            className="p-3 rounded-full bg-white/80 hover:bg-white text-[#2B0902] shadow-lg transition-all active:scale-95 hidden md:block z-10"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Testimonial Cards Carousel */}
          <div className="w-full max-w-3xl min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full px-4 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = offset.x
                  if (swipe < -50) {
                    nextSlide()
                  } else if (swipe > 50) {
                    prevSlide()
                  }
                }}
              >
                <TestimonialCard {...testimonials[currentSlide]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            className="p-3 rounded-full bg-white/80 hover:bg-white text-[#2B0902] shadow-lg transition-all active:scale-95 hidden md:block z-10"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex justify-center gap-8 mt-8 md:hidden">
          <button 
            className="p-3 rounded-full bg-white/80 text-[#2B0902] shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="p-3 rounded-full bg-white/80 text-[#2B0902] shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-[#F5AC73]' 
                  : 'w-3 bg-[#2B0902]/20 hover:bg-[#2B0902]/40'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
