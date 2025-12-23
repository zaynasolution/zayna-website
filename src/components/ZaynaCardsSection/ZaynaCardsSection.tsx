import { motion } from 'framer-motion'
import ZaynaCard from './ZaynaCard'
import { useLanguage } from '../../context/LanguageContext'
import GlowingCircles from '../GlowingCircles/GlowingCircles'

// Image paths - assumes assets are in src/assets/
const LOGO_PATH = '/src/assets/logo-zayna-beauty.png'
const CALENDAR_ICON = '/src/assets/calender-emoji.png'
const LOCATION_ICON = '/src/assets/location.gif'
const GIFT_ICON = '/src/assets/woman-gift.gif'

export default function ZaynaCardsSection() {
  const { t } = useLanguage()

  const cards = [
    {
      id: 1,
      title: t('card_1_title'),
      content: t('card_1_content'),
      image: CALENDAR_ICON
    },
    {
      id: 2,
      title: t('card_2_title'),
      content: t('card_2_content'),
      image: LOCATION_ICON
    },
    {
      id: 3,
      title: t('card_3_title'),
      content: t('card_3_content'),
      image: GIFT_ICON
    }
  ]

  return (
    <section 
      className="relative w-full pt-4 pb-12 px-4 sm:px-6 lg:px-8 bg-[#FFF0ED] overflow-hidden"
      id="zayna-cards"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 space-y-4 -mt-8 relative z-10">
          <div className="mb-8">
            <GlowingCircles />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            {/* Logo acting as main title */}
            {/* ADJUST LOGO SIZE HERE: Change h-24 md:h-32 (was h-16 md:h-20) */}
            <img 
              src={LOGO_PATH} 
              alt="Zayna" 
              className="h-24 md:h-32 object-contain mix-blend-multiply" 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#2B0902] font-bold text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            {t('cards_header_subtitle')}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <ZaynaCard
              key={card.id}
              title={card.title}
              content={card.content}
              imagePath={card.image}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
