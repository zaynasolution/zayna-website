import { motion } from 'framer-motion'
import { Search, Calendar, User, Users, Check } from 'lucide-react'
import { ZaynaMeta } from './meta'
import Footer from '../components/Footer'
import DownloadAppCard from '../components/JoinAppSection/DownloadAppCard'
import { useLanguage } from '../context/LanguageContext'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Zayna() {
  const { t, rtl } = useLanguage()

  const features = [
    {
      id: 1,
      icon: <Search className="w-8 h-8 text-white" />,
      title: t('zayna_feat1_title'),
      subtitle: t('zayna_feat1_subtitle'),
      description: t('zayna_feat1_desc'),
      bullets: [
        t('zayna_feat1_bullet1'),
        t('zayna_feat1_bullet2'),
        t('zayna_feat1_bullet3'),
        t('zayna_feat1_bullet4')
      ],
      color: '#F5AC73',
      image: '/src/assets/gps.png'
    },
    {
      id: 2,
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: t('zayna_feat2_title'),
      subtitle: t('zayna_feat2_subtitle'),
      description: t('zayna_feat2_desc'),
      bullets: [
        t('zayna_feat2_bullet1'),
        t('zayna_feat2_bullet2'),
        t('zayna_feat2_bullet3'),
        t('zayna_feat2_bullet4'),
        t('zayna_feat2_bullet5')
      ],
      color: '#EFC7C2',
      image: '/src/assets/image1.png'
    },
    {
      id: 3,
      icon: <User className="w-8 h-8 text-white" />,
      title: t('zayna_feat3_title'),
      subtitle: t('zayna_feat3_subtitle'),
      description: t('zayna_feat3_desc'),
      bullets: [
        t('zayna_feat3_bullet1'),
        t('zayna_feat3_bullet2'),
        t('zayna_feat3_bullet3'),
        t('zayna_feat3_bullet4')
      ],
      color: '#9C89B8',
      image: '/src/assets/zaynapage1.jpg'
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8 text-white" />,
      title: t('zayna_feat4_title'),
      subtitle: t('zayna_feat4_subtitle'),
      description: t('zayna_feat4_desc'),
      bullets: [
        t('zayna_feat4_bullet1'),
        t('zayna_feat4_bullet2'),
        t('zayna_feat4_bullet3'),
        t('zayna_feat4_bullet4')
      ],
      color: '#8B5A2B',
      isComingSoon: true
    }
  ]

  return (
    <div className="bg-[#FFF0ED] min-h-screen" dir={rtl ? 'rtl' : 'ltr'}>
      <ZaynaMeta />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FFF0ED] to-[#FFF0ED]/50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5AC73]/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-serif text-[#2B0902] mb-6 leading-tight"
          >
            {t('zayna_hero_title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#2B0902]/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t('zayna_hero_desc')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button 
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F5AC73] text-[#2B0902] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#EFC7C2] hover:scale-105 transition-all duration-300"
            >
              {t('zayna_download_btn')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Features Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md transform rotate-3"
                    style={{ backgroundColor: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  {feature.isComingSoon && (
                    <span className="bg-[#2B0902] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                      {t('zayna_coming_soon')}
                    </span>
                  )}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2B0902]">
                  {feature.subtitle}
                </h2>
                
                <p className="text-lg text-[#2B0902]/70 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-4 pt-4">
                  {feature.bullets.map((bullet, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3 text-[#2B0902]/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                    >
                      <div className="mt-1 min-w-[20px]">
                        <Check size={18} className="text-[#F5AC73]" />
                      </div>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Visual/Card */}
              <div className="flex-1 w-full">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/60 backdrop-blur-xl rounded-[30px] p-8 md:p-12 border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)] h-full flex flex-col justify-center items-center text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F5AC73]/20 to-transparent rounded-bl-full -mr-16 -mt-16 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#EFC7C2]/20 to-transparent rounded-tr-full -ml-12 -mb-12 pointer-events-none" />
                  
                  {/* Decorative Abstract Content representing the feature */}
                  <div className="relative z-10 w-full max-w-sm aspect-square bg-gradient-to-br from-white to-[#FFF0ED] rounded-2xl shadow-inner border border-white p-6 flex items-center justify-center overflow-hidden">
                    {/* @ts-ignore - Dynamic property check */}
                    {feature.image ? (
                      <img 
                        // @ts-ignore - Dynamic property access
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <div className="text-center space-y-4 opacity-50 w-full">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gray-200" />
                        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
                        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
                      </div>
                    )}
                    
                    {!feature.image && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-20 filter blur-sm transform scale-150">
                          {feature.icon}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. App Preview Section */}
      <section className="py-20 bg-[#2B0902]/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#2B0902] mb-4">
              {t('zayna_preview_title')}
            </h2>
            <p className="text-lg text-[#2B0902]/70">
              {t('zayna_preview_desc')}
            </p>
          </motion.div>

          {/* Placeholder for App Screenshots Carousel */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.2 }}
                className="w-[280px] h-[580px] bg-black rounded-[40px] border-[8px] border-black shadow-2xl overflow-hidden relative"
              >
                {/* Screen Content Placeholder */}
                <div className="w-full h-full bg-[#FFF0ED] flex flex-col">
                  {/* App Header */}
                  <div className="h-16 bg-white border-b flex items-center justify-center">
                    <span className="font-bold text-[#2B0902]">{t('nav_zayna')}</span>
                  </div>
                  {/* App Body Mockup */}
                  <div className="flex-1 p-4 space-y-4">
                    <div className="h-32 bg-white rounded-xl shadow-sm" />
                    <div className="h-20 bg-white rounded-xl shadow-sm" />
                    <div className="h-20 bg-white rounded-xl shadow-sm" />
                    <div className="h-20 bg-white rounded-xl shadow-sm" />
                  </div>
                  {/* Bottom Nav */}
                  <div className="h-16 bg-white border-t flex justify-around items-center px-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100" />
                    <div className="w-8 h-8 rounded-full bg-[#F5AC73]" />
                    <div className="w-8 h-8 rounded-full bg-gray-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Download CTA Section */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif text-[#2B0902] mb-6"
          >
            {t('zayna_cta_title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#2B0902]/80 mb-12"
          >
            {t('zayna_cta_desc_1')} <span className="text-[#F5AC73] font-bold">{t('zayna_cta_desc_2')}</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-8"
          >
            <DownloadAppCard />
            
            <div className="flex flex-col items-center gap-4 mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#2B0902]/5">
              <p className="font-semibold text-[#2B0902]">{t('zayna_scan_text')}</p>
              {/* QR Code Placeholder */}
              <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-sm">
                <div className="w-full h-full border-2 border-dashed border-[#2B0902]/20 flex items-center justify-center text-xs text-center text-gray-400">
                  {t('zayna_qr_code')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
