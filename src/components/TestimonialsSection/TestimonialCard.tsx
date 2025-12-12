import { useLanguage } from '../../context/LanguageContext'

interface TestimonialCardProps {
  name: string
  avatar: string
  rating: number
  comment: string
  location: string
  color: string
}

export default function TestimonialCard({ name, avatar, rating, comment, location, color }: TestimonialCardProps) {
  const { rtl } = useLanguage()
  
  return (
    <div 
      className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-[0_15px_35px_rgba(43,9,2,0.08)] border border-[#F5AC73]/30 w-full max-w-2xl mx-auto"
      dir={rtl ? "rtl" : "ltr"}
    >
      {/* Decorative accent */}
      <div 
        className="absolute top-0 right-0 w-full h-2 rounded-t-3xl"
        style={{ backgroundColor: color }} 
      />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl bg-gradient-to-br from-white to-[#FFF0ED] rounded-full w-16 h-16 flex items-center justify-center shadow-sm border border-white">
          {avatar}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#2B0902] font-serif mb-1">{name}</h3>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-xl ${i < rating ? 'text-[#F5AC73]' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 space-y-3">
        <p className="text-lg leading-loose text-[#2B0902] font-medium">
          {comment}
        </p>
      </div>

      <div className="flex justify-end pt-4 border-t border-[#2B0902]/5">
        <span className="text-sm font-semibold" style={{ color: color }}>{location}</span>
      </div>
    </div>
  )
}
