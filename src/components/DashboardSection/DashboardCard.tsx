import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface DashboardCardProps {
  title: string
  description: string
  bullets: string[]
  icon: string
  accentColor: string
  index: number
}

export default function DashboardCard({ title, description, bullets, icon, accentColor, index }: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white/85 backdrop-blur-xl border border-white/20 rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 relative overflow-hidden group"
    >
      {/* Accent gradient background */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-3xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"
        style={{ backgroundColor: accentColor }} 
      />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            {icon}
          </div>
          <h3 
            className="text-2xl font-bold font-serif text-text"
            style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}
          >
            {title}
          </h3>
        </div>

        <p className="text-text/80 mb-6 font-medium leading-relaxed">
          {description}
        </p>

        <ul className="space-y-3">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3 text-text/70 text-sm">
              <span 
                className="mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center text-white text-[10px]"
                style={{ backgroundColor: accentColor }}
              >
                <Check size={12} strokeWidth={3} />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
