import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

// Asset imports
const LOGO_PATH = '/src/assets/logo-zayna-beauty.png'

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    salonName: '',
    phone: '',
    location: '',
    multipleBranches: false,
    message: ''
  })

  const [phoneError, setPhoneError] = useState('')

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    // Remove non-digit characters except +
    value = value.replace(/[^\d+]/g, '')
    
    // Auto-format for Saudi numbers
    if (value.startsWith('05')) {
      value = '+966' + value.substring(1)
    } else if (value.startsWith('5')) {
      value = '+966' + value
    }

    setFormData({ ...formData, phone: value })

    // Basic validation
    if (value.length > 0 && !value.match(/^\+9665\d{8}$/)) {
      setPhoneError(t('form_phone_error'))
    } else {
      setPhoneError('')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const riyadhAreas = [
    'Al Olaya', 'Al Malqa', 'Al Nakheel', 'Al Yasmin', 'Al Sahafa', 
    'Hittin', 'Al Mursalat', 'Al Woroud', 'Al Sulaimaniyah', 
    'Al Mohammadiyah', 'Al Rahmaniyah', 'Al Aqiq', 'Al Ghadir',
    'Al Nafal', 'Al Izdihar', 'Al Falah', 'Al Wadi', 'Al Hamra',
    'Qurtubah', 'Al Munsiyah', 'Al Yarmuk', 'Al Ishbiliyah',
    'Al Narjis', 'Al Arid', 'Al Qirawan', 'Al Malaz', 'Al Murabba',
    'Other'
  ]

  return (
    <section id="contact-form" className="py-24 px-4 bg-[#FFF0ED]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="mb-6">
             <img 
              src={LOGO_PATH} 
              alt="Zayna Logo" 
              className="h-32 w-auto object-contain mix-blend-multiply" 
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2B0902]">
            {t('contact_title')}
          </h2>
          <p className="text-lg text-[#2B0902]/80 leading-relaxed">
            {t('contact_subtitle')}
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="w-full max-w-[500px] p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(145deg, transparent 35%, #F5AC73, #EFC7C2) border-box',
              border: '2px solid transparent',
              boxShadow: '0 20px 40px rgba(43, 9, 2, 0.05)'
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Salon Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="salonName" className="text-xs font-semibold text-[#2B0902]/70">
                  {t('form_salon_name')}
                </label>
                <input
                  type="text"
                  id="salonName"
                  required
                  placeholder={t('form_salon_name_placeholder')}
                  className="w-full px-4 py-3 rounded-lg border border-[#2B0902]/10 bg-white/50 text-[#2B0902] placeholder:text-[#2B0902]/30 focus:outline-none focus:border-[#F5AC73] transition-colors"
                  value={formData.salonName}
                  onChange={(e) => setFormData({...formData, salonName: e.target.value})}
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-semibold text-[#2B0902]/70">
                  {t('form_phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="+966 5X XXX XXXX"
                  dir="ltr"
                  className={`w-full px-4 py-3 rounded-lg border bg-white/50 text-[#2B0902] placeholder:text-[#2B0902]/30 focus:outline-none transition-colors ${phoneError ? 'border-red-500' : 'border-[#2B0902]/10 focus:border-[#F5AC73]'}`}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />
                {phoneError && <span className="text-xs text-red-500">{phoneError}</span>}
              </div>

              {/* Location (Riyadh Area) */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="location" className="text-xs font-semibold text-[#2B0902]/70">
                  {t('form_location')}
                </label>
                <select
                  id="location"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#2B0902]/10 bg-white/50 text-[#2B0902] focus:outline-none focus:border-[#F5AC73] transition-colors appearance-none"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                >
                  <option value="" disabled>{t('form_location_placeholder')}</option>
                  {riyadhAreas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* Multiple Branches */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#2B0902]/70">
                  {t('form_multiple_branches')}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="multipleBranches"
                      checked={formData.multipleBranches === true}
                      onChange={() => setFormData({...formData, multipleBranches: true})}
                      className="accent-[#F5AC73]"
                    />
                    <span className="text-sm text-[#2B0902]">{t('form_yes')}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="multipleBranches"
                      checked={formData.multipleBranches === false}
                      onChange={() => setFormData({...formData, multipleBranches: false})}
                      className="accent-[#F5AC73]"
                    />
                    <span className="text-sm text-[#2B0902]">{t('form_no')}</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-[#2B0902]/70">
                  {t('form_message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t('form_message_placeholder')}
                  className="w-full px-4 py-3 rounded-lg border border-[#2B0902]/10 bg-white/50 text-[#2B0902] placeholder:text-[#2B0902]/30 focus:outline-none focus:border-[#F5AC73] transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full py-3 px-6 bg-[#2B0902] text-white font-semibold rounded-lg hover:bg-[#F5AC73] hover:text-[#2B0902] transition-all duration-300 active:scale-95"
              >
                {t('form_submit')}
              </button>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
