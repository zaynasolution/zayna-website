import { motion } from 'framer-motion'
import { Users, Scissors } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import DownloadAppCard from './DownloadAppCard'
import { useLanguage } from '../../context/LanguageContext'

// Assets
const PROMOTE_ICON = '/src/assets/promote.gif'

export default function JoinAppSection() {
  const { t } = useLanguage()

  const elements = [
    {
      id: 1,
      title: t('stat_community_title'),
      icon: <Users className="w-8 h-8 text-white" />,
      counter: 50000,
      description: t('stat_community_desc'),
      duration: 2,
      suffix: "+"
    },
    {
      id: 2,
      title: t('stat_salons_title'),
      icon: <Scissors className="w-8 h-8 text-white" />,
      counter: 80,
      description: t('stat_salons_desc'),
      duration: 1.5,
      suffix: "+"
    },
    {
      id: 3,
      title: t('stat_promotions_title'),
      image: PROMOTE_ICON,
      counter: "∞",
      description: t('stat_promotions_desc'),
      isInfinity: true
    }
  ]

  return (
    <section 
      id="join-app" 
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF0ED] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#2B0902] font-serif tracking-tight"
          >
            {t('join_app_title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl font-light text-[#2B0902]/80 max-w-2xl mx-auto leading-relaxed"
          >
            {t('join_app_subtitle')}
          </motion.p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center mb-16">
          {elements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className={`
                relative w-[200px] h-[250px] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center
                shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
                ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
            >
              {/* Background Glass Layer */}
              <div className="absolute top-[5px] left-[5px] w-[190px] h-[240px] z-[2] bg-white/95 backdrop-blur-2xl rounded-[10px] overflow-hidden outline outline-2 outline-white flex flex-col items-center justify-center p-6 text-center">
                
                {/* Icon Container */}
                <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#F5AC73] to-[#EFC7C2] flex items-center justify-center shadow-md transform transition-transform hover:scale-110">
                  {item.image ? (
                    <img src={item.image} alt="" className="w-8 h-8 object-contain mix-blend-multiply" />
                  ) : (
                    item.icon
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[#2B0902] font-semibold text-lg mb-2 font-serif">
                  {item.title}
                </h3>

                {/* Counter */}
                <div className="mb-2 min-h-[3rem] flex items-center justify-center scale-75">
                  <AnimatedCounter 
                    value={item.counter} 
                    duration={item.duration} 
                    suffix={item.suffix}
                    isInfinity={item.isInfinity}
                  />
                </div>

                {/* Description */}
                <p className="text-[#2B0902]/70 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Animated Blob */}
              <div className="absolute z-[1] top-1/2 left-1/2 w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5AC73] opacity-100 blur-[12px] animate-blob-bounce" />
            </motion.div>
          ))}
        </div>

        {/* Download App Card - Centered Below Counters */}
        <div className="flex justify-center w-full">
          <DownloadAppCard />
        </div>
      </div>
    </section>
  )
}
