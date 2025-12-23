import { motion } from 'framer-motion'
import { 
  BarChart2, Settings, TrendingUp, MessageCircle, 
  Check, Crown, ShieldCheck, Search, Zap, 
  Calendar, CreditCard, Home, Monitor, Smartphone,
  ArrowRight
} from 'lucide-react'
import { PlatformMeta } from './meta'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Platform() {
  const { t, rtl } = useLanguage()

  const features = [
    {
      id: 1,
      icon: <BarChart2 className="w-6 h-6 text-[#9C89B8]" />,
      title: t('platform_feat1_title'),
      subtitle: t('platform_feat1_subtitle'),
      description: t('platform_feat1_desc'),
      bullets: [
        t('platform_feat1_bullet1'),
        t('platform_feat1_bullet2'),
        t('platform_feat1_bullet3'),
        t('platform_feat1_bullet4')
      ]
    },
    {
      id: 2,
      icon: <Settings className="w-6 h-6 text-[#9C89B8]" />,
      title: t('platform_feat2_title'),
      subtitle: t('platform_feat2_subtitle'),
      description: t('platform_feat2_desc'),
      bullets: [
        t('platform_feat2_bullet1'),
        t('platform_feat2_bullet2'),
        t('platform_feat2_bullet3'),
        t('platform_feat2_bullet4')
      ]
    },
    {
      id: 3,
      icon: <TrendingUp className="w-6 h-6 text-[#9C89B8]" />,
      title: t('platform_feat3_title'),
      subtitle: t('platform_feat3_subtitle'),
      description: t('platform_feat3_desc'),
      bullets: [
        t('platform_feat3_bullet1'),
        t('platform_feat3_bullet2'),
        t('platform_feat3_bullet3'),
        t('platform_feat3_bullet4')
      ]
    },
    {
      id: 4,
      icon: <MessageCircle className="w-6 h-6 text-[#9C89B8]" />,
      title: t('platform_feat4_title'),
      subtitle: t('platform_feat4_subtitle'),
      description: t('platform_feat4_desc'),
      bullets: [
        t('platform_feat4_bullet1'),
        t('platform_feat4_bullet2'),
        t('platform_feat4_bullet3'),
        t('platform_feat4_bullet4')
      ]
    }
  ]

  const usps = [
    { icon: <Crown className="w-8 h-8 text-[#9C89B8]" />, title: t('platform_usp1_title'), desc: t('platform_usp1_desc') },
    { icon: <ShieldCheck className="w-8 h-8 text-[#9C89B8]" />, title: t('platform_usp2_title'), desc: t('platform_usp2_desc') },
    { icon: <Search className="w-8 h-8 text-[#9C89B8]" />, title: t('platform_usp3_title'), desc: t('platform_usp3_desc') },
    { icon: <TrendingUp className="w-8 h-8 text-[#9C89B8]" />, title: t('platform_usp4_title'), desc: t('platform_usp4_desc') },
    { icon: <Zap className="w-8 h-8 text-[#9C89B8]" />, title: t('platform_usp5_title'), desc: t('platform_usp5_desc') },
    { icon: <Monitor className="w-8 h-8 text-[#9C89B8]" />, title: t('platform_usp6_title'), desc: t('platform_usp6_desc') }
  ]

  const roadmap = [
    { quarter: 'Q3 2024', feature: t('platform_roadmap_q3_2024'), icon: <CreditCard size={20} /> },
    { quarter: 'Q4 2024', feature: t('platform_roadmap_q4_2024'), icon: <Crown size={20} /> },
    { quarter: 'Q1 2025', feature: t('platform_roadmap_q1_2025'), icon: <Home size={20} /> },
    { quarter: 'Q2 2025', feature: t('platform_roadmap_q2_2025'), icon: <Smartphone size={20} /> }
  ]

  const testimonials = [
    {
      quote: t('platform_testimonial1_quote'),
      author: t('platform_testimonial1_author'),
      role: t('platform_testimonial1_role'),
      metric: t('platform_testimonial1_metric')
    },
    {
      quote: t('platform_testimonial2_quote'),
      author: t('platform_testimonial2_author'),
      role: t('platform_testimonial2_role'),
      metric: t('platform_testimonial2_metric')
    }
  ]

  return (
    <div className="bg-[#FFF0ED] min-h-screen" dir={rtl ? 'rtl' : 'ltr'}>
      <PlatformMeta />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#FFF0ED] via-[#FFF0ED] to-[#9C89B8]/20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-serif text-[#2B0902] mb-6 leading-tight"
          >
            {t('platform_hero_title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#2B0902]/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t('platform_hero_desc')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#9C89B8] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#8B7A9A] hover:scale-105 transition-all duration-300"
            >
              {t('platform_get_started')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Platform Features Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.id}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-[#9C89B8]/20 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#9C89B8]/10 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2B0902] mb-2 font-serif">{feature.subtitle}</h3>
                <p className="text-[#2B0902]/70 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#2B0902]/80">
                      <Check size={16} className="text-[#9C89B8] mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Unique Selling Points (USP) */}
      <section className="py-20 bg-[#9C89B8]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2B0902] mb-4">
              {t('platform_usp_title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-[#9C89B8]/10"
              >
                <div className="w-16 h-16 bg-[#FFF0ED] rounded-full flex items-center justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2B0902] mb-2">{usp.title}</h3>
                <p className="text-[#2B0902]/70 text-sm">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Future Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2B0902] mb-4">
              {t('platform_roadmap_title')}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#9C89B8]/20 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {roadmap.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative bg-white p-6 rounded-2xl shadow-md border border-[#9C89B8]/20 z-10 flex flex-col items-center text-center"
                >
                  <span className="text-xs font-bold text-[#9C89B8] bg-[#9C89B8]/10 px-3 py-1 rounded-full mb-3">
                    {item.quarter}
                  </span>
                  <div className="mb-3 text-[#2B0902]">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-[#2B0902] text-sm">{item.feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing/CTA Section */}
      <section className="py-20 bg-[#2B0902] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
              {t('platform_pricing_title')}
            </h2>
            <p className="text-xl text-white/80">
              {t('platform_pricing_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-2">{t('platform_tier_free')}</h3>
              <p className="text-white/70 text-sm mb-4">{t('platform_tier_free_desc')}</p>
              <ul className="space-y-2 text-sm text-white/80 mb-6">
                <li className="flex gap-2"><Check size={16} /> {t('platform_tier_free_feat1')}</li>
                <li className="flex gap-2"><Check size={16} /> {t('platform_tier_free_feat2')}</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#9C89B8] to-[#8B7A9A] rounded-2xl p-8 border border-white/20 transform md:-translate-y-4 shadow-2xl relative">
              <div className="absolute top-0 right-0 bg-[#F5AC73] text-[#2B0902] text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl left-0 right-auto rtl:right-auto rtl:left-0 rtl:rounded-tl-none rtl:rounded-tr-none rtl:rounded-br-xl rtl:rounded-bl-none">
                {t('platform_most_popular')}
              </div>
              <h3 className="text-xl font-bold mb-2">{t('platform_tier_premium')}</h3>
              <p className="text-white/90 text-sm mb-4">{t('platform_tier_premium_desc')}</p>
              <ul className="space-y-2 text-sm text-white/90 mb-6">
                <li className="flex gap-2"><Check size={16} /> {t('platform_tier_premium_feat1')}</li>
                <li className="flex gap-2"><Check size={16} /> {t('platform_tier_premium_feat2')}</li>
                <li className="flex gap-2"><Check size={16} /> {t('platform_tier_premium_feat3')}</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-2">{t('platform_tier_enterprise')}</h3>
              <p className="text-white/70 text-sm mb-4">{t('platform_tier_enterprise_desc')}</p>
              <ul className="space-y-2 text-sm text-white/80 mb-6">
                <li className="flex gap-2"><Check size={16} /> {t('platform_tier_enterprise_feat1')}</li>
                <li className="flex gap-2"><Check size={16} /> {t('platform_tier_enterprise_feat2')}</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F5AC73] text-[#2B0902] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white transition-all duration-300 inline-flex items-center gap-2"
            >
              {t('platform_claim_dashboard')} <ArrowRight size={20} className="rtl:rotate-180" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-[#9C89B8]/10 relative"
              >
                <div className="absolute -top-4 -right-4 rtl:-left-4 rtl:right-auto bg-[#9C89B8] text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
                  {testimonial.metric}
                </div>
                <p className="text-lg text-[#2B0902]/80 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-[#2B0902]">{testimonial.author}</p>
                  <p className="text-sm text-[#9C89B8]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer />
    </div>
  )
}
