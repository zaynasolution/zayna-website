import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import DashboardCard from './DashboardCard'
import { useLanguage } from '../../context/LanguageContext'

// Assets
const DASHBOARD_IMAGE = '/src/assets/dashboard-section.png'

export default function DashboardSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax and scale transformations for pop-out effect
  const yTransform = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scaleTransform = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95])
  const rotateTransform = useTransform(scrollYProgress, [0, 1], [-2, 2])
  
  const cards = [
    {
      id: 1,
      title: t('dash_card_1_title'),
      description: t('dash_card_1_desc'),
      bullets: [
        t('dash_card_1_bullet_1'),
        t('dash_card_1_bullet_2'),
        t('dash_card_1_bullet_3')
      ],
      icon: "🎛️",
      accentColor: "#F5AC73"
    },
    {
      id: 2,
      title: t('dash_card_2_title'),
      description: t('dash_card_2_desc'),
      bullets: [
        t('dash_card_2_bullet_1'),
        t('dash_card_2_bullet_2'),
        t('dash_card_2_bullet_3'),
        t('dash_card_2_bullet_4')
      ],
      icon: "👑",
      accentColor: "#9C89B8"
    },
    {
      id: 3,
      title: t('dash_card_3_title'),
      description: t('dash_card_3_desc'),
      bullets: [
        t('dash_card_3_bullet_1'),
        t('dash_card_3_bullet_2'),
        t('dash_card_3_bullet_3')
      ],
      icon: "📈",
      accentColor: "#EFC7C2"
    }
  ]

  return (
    <section 
      id="dashboard" 
      ref={sectionRef} 
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF0ED] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Cards */}
          <div className="w-full lg:w-1/2 space-y-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2B0902] mb-4">
                {t('dashboard_title')}
              </h2>
              <p className="text-xl text-[#2B0902]/70 font-light">
                {t('dashboard_subtitle')}
              </p>
            </motion.div>

            <div className="space-y-6">
              {cards.map((card, index) => (
                <DashboardCard key={card.id} {...card} index={index} />
              ))}
            </div>
          </div>
          
          {/* Right Column: Pop-out Image */}
          <div className="w-full lg:w-1/2 relative perspective-1000 h-[600px] lg:h-auto flex items-center justify-center">
            <motion.div 
              ref={imageRef} 
              className="relative w-full max-w-[600px]"
              style={{ 
                y: yTransform, 
                scale: scaleTransform, 
                rotate: rotateTransform 
              }} 
            >
              {/* Glow Effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F5AC73]/30 to-[#9C89B8]/30 blur-3xl rounded-full transform scale-90 -z-10" />
              
              <motion.img 
                src={DASHBOARD_IMAGE} 
                alt="Zayna Dashboard Interface" 
                className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl border border-white/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-24 h-24 bg-white/40 backdrop-blur-md rounded-2xl border border-white/30 z-20 shadow-xl"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-5 -left-5 w-16 h-16 bg-[#F5AC73]/40 backdrop-blur-md rounded-full border border-white/30 z-20 shadow-xl"
                animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div> 
          </div> 
        </div>
      </div>
    </section>
  )
}
