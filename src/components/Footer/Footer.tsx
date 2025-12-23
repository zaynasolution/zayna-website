import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

// Asset imports
const LOGO_PATH = '/src/assets/logo-zayna-beauty.png'

export default function Footer() {
  const { t, setLang } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zaynasolution?igsh=ZmlpbTNhb2hyZXN1',
      icon: <Instagram size={20} />,
      gradient: 'hover:text-[#E1306C]' // Instagram color
    },
    {
      name: 'Twitter',
      url: '#',
      icon: <Twitter size={20} />,
      gradient: 'hover:text-[#1DA1F2]' // Twitter color
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: <Linkedin size={20} />,
      gradient: 'hover:text-[#0077B5]' // LinkedIn color
    }
  ]

  const quickLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_zayna'), path: '/zayna' },
    { name: t('nav_platform'), path: '/platform' },
    { name: t('nav_book'), path: '/book' },
    { name: t('nav_why'), path: '/why-us' }
  ]

  const contactInfo = [
    {
      icon: <MapPin size={20} className="text-[#F5AC73]" />,
      text: t('city_riyadh'),
      subText: 'Saudi Arabia',
      href: null
    },
    {
      icon: <Phone size={20} className="text-[#F5AC73]" />,
      text: '+966 053 713 0203',
      href: 'tel:+9660537130203'
    },
    {
      icon: <Mail size={20} className="text-[#F5AC73]" />,
      text: 'htssociete@hotmail.com',
      href: 'mailto:htssociete@hotmail.com'
    }
  ]

  return (
    <footer className="relative bg-[#FFF0ED] pt-20 pb-10 overflow-hidden border-t border-[#2B0902]/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F5AC73] to-[#EFC7C2] opacity-30" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F5AC73]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#EFC7C2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo & Tagline */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <img 
              src={LOGO_PATH} 
              alt="Zayna Logo" 
              className="h-20 md:h-24 object-contain mix-blend-multiply" 
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-serif text-[#2B0902] max-w-2xl"
          >
            {t('footer_tagline')}
          </motion.p>
        </div>

        {/* Middle Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left rtl:md:text-right"
          >
            <h3 className="text-lg font-bold text-[#2B0902] mb-6 font-serif">{t('footer_quick_links')}</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="group flex items-center justify-center md:justify-start rtl:md:justify-start gap-2 text-[#2B0902]/70 hover:text-[#F5AC73] transition-colors duration-300"
                  >
                    <span className="transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-left rtl:md:text-right"
          >
            <h3 className="text-lg font-bold text-[#2B0902] mb-6 font-serif">{t('footer_contact_us')}</h3>
            <ul className="space-y-6">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="p-2 bg-white rounded-full shadow-sm text-[#F5AC73]">
                    {info.icon}
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-[#2B0902]/80 hover:text-[#F5AC73] transition-colors duration-300 font-medium"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-[#2B0902]/80 font-medium">{info.text}</span>
                    )}
                    {info.subText && (
                      <span className="text-[#2B0902]/50 text-sm mt-1">{info.subText}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Social Media & Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-left rtl:md:text-right"
          >
            <h3 className="text-lg font-bold text-[#2B0902] mb-6 font-serif">{t('footer_connect')}</h3>
            <div className="flex justify-center md:justify-start rtl:md:justify-start gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white rounded-full shadow-md text-[#2B0902]/70 transition-all duration-300 hover:scale-110 ${social.gradient}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[#F5AC73]/20">
              <h4 className="text-[#2B0902] font-semibold mb-2">{t('footer_stay_updated')}</h4>
              <p className="text-[#2B0902]/60 text-sm mb-4">{t('footer_newsletter_desc')}</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder={t('footer_email_placeholder')}
                  className="flex-1 px-4 py-2 rounded-full bg-white border border-[#F5AC73]/20 focus:outline-none focus:border-[#F5AC73] text-sm"
                />
                <button 
                  type="submit"
                  className="p-2 bg-[#F5AC73] text-[#2B0902] rounded-full hover:bg-[#EFC7C2] transition-colors shadow-sm"
                >
                  <ArrowRight size={18} className="rtl:rotate-180" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="border-t border-[#2B0902]/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#2B0902]/60">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <p>{t('footer_copyright').replace('{year}', currentYear.toString())}</p>
              <span className="hidden md:inline text-[#2B0902]/20">|</span>
              <p>{t('footer_license')}</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="hover:text-[#F5AC73] transition-colors">{t('footer_privacy')}</Link>
              <Link to="/terms" className="hover:text-[#F5AC73] transition-colors">{t('footer_terms')}</Link>
              
              <div className="flex items-center gap-2 border-l border-[#2B0902]/20 pl-6 ml-2 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:ml-0 rtl:pr-6 rtl:mr-2">
                <button 
                  onClick={() => setLang('en')}
                  className="hover:text-[#F5AC73] font-medium transition-colors"
                >
                  English
                </button>
                <span>/</span>
                <button 
                  onClick={() => setLang('ar')}
                  className="hover:text-[#F5AC73] font-medium transition-colors font-serif"
                >
                  العربية
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
