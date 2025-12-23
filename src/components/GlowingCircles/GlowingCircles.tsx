import { motion } from 'framer-motion'

export default function GlowingCircles() {
<<<<<<< HEAD
  // Animation variants
  const circlePulse = {
    initial: { scale: 1, boxShadow: "0 0 10px rgba(255, 215, 0, 0.3)" },
    animate: { 
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 10px rgba(255, 215, 0, 0.3)",
        "0 0 20px rgba(183, 110, 121, 0.5)",
        "0 0 10px rgba(255, 215, 0, 0.3)"
      ]
    },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }

  const lineFlow = {
    initial: { backgroundPosition: "0% 50%" },
    animate: { backgroundPosition: "100% 50%" },
    transition: { duration: 2, repeat: Infinity, ease: "linear" }
  }

=======
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
  return (
    <div className="w-full flex justify-center items-center py-8 z-20 relative pointer-events-none">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
        
        {/* Circle 1 */}
        <GlowingCircle delay={0} text="Search" />

        {/* Line 1 */}
        <ConnectingLine />

        {/* Circle 2 */}
        <GlowingCircle delay={0.5} text="Book" />

        {/* Line 2 */}
        <ConnectingLine />

        {/* Circle 3 */}
        <GlowingCircle delay={1} text="Zayna" />

      </div>
    </div>
  )
}

function GlowingCircle({ delay, text }: { delay: number; text: string }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: { scale: 1, boxShadow: "0 0 15px rgba(255, 215, 0, 0.2)" },
        animate: { 
          scale: [1, 1.02, 1],
          boxShadow: [
            "0 0 15px rgba(255, 215, 0, 0.2)",
            "0 0 25px rgba(183, 110, 121, 0.4)",
            "0 0 15px rgba(255, 215, 0, 0.2)"
          ]
        }
      }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[90px] h-[90px] rounded-full flex items-center justify-center backdrop-blur-md border border-[#B76E79]/30 bg-white/10 group"
      style={{
        textShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFD700]/10 to-[#B76E79]/10 opacity-50" />
      <span className="font-serif text-lg text-[#8C0080] font-medium tracking-wide z-10 group-hover:scale-110 transition-transform duration-300">
        {text}
      </span>
    </motion.div>
  )
}

function ConnectingLine() {
  return (
    <div className="relative w-[2px] h-[40px] md:w-[60px] md:h-[3px] overflow-hidden bg-white/10">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-60"
        animate={{
          x: ["-100%", "100%"],
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}
