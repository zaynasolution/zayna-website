import { motion } from 'framer-motion'
import { useState } from 'react'

interface ZaynaCardProps {
  title: string
  content: string
  imagePath: string
  delay?: number
}

export default function ZaynaCard({ title, content, imagePath, delay = 0 }: ZaynaCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => setIsHovered(true)} // Touch feedback
      className="group relative h-full flex justify-center"
    >
      <div className="relative w-full max-w-[320px] rounded-[20px] overflow-hidden flex flex-col items-center justify-center bg-[#FFF0ED]">
        
        {/* Rotating Gradient Border Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-b from-[#F5AC73] to-[#EFC7C2] animate-spin-slow origin-center opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Inner Card Content Layer */}
        <div className="relative z-10 m-[3px] bg-white/95 backdrop-blur-xl rounded-[17px] h-[calc(100%-6px)] w-[calc(100%-6px)] p-8 flex flex-col items-center text-center">
          
          {/* Emoji/Image Container */}
          <div className="mb-6 relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F5AC73] to-[#EFC7C2] flex items-center justify-center shadow-inner">
              <motion.img 
                src={imagePath} 
                alt="" 
                className="w-12 h-12 object-contain"
                animate={isHovered ? { y: [0, -4, 0] } : {}}
                transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }}
              />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-[#2B0902] text-2xl font-semibold mb-4 font-serif">
            {title}
          </h3>
          
          <p className="text-[#2B0902]/80 text-[1.1rem] leading-[1.6]">
            {content}
          </p>

          {/* Optional decorative bottom line */}
          <div 
            className={`
              mt-auto pt-6 w-12 h-1 bg-[#F5AC73] rounded-full transition-all duration-300
              ${isHovered ? 'w-24 opacity-100' : 'w-12 opacity-50'}
            `} 
          />
        </div>
      </div>
    </motion.div>
  )
}
