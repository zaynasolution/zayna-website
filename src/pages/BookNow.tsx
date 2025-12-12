import { motion } from 'framer-motion'
import { scaleUp } from '../utils/animationVariants'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const BOOK_NOW_IMAGE = '/src/assets/bookNow.jpg'

export default function BookNow() {
  return (
    <div className="bg-[#FFF0ED] min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={BOOK_NOW_IMAGE} alt="Book Now" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 drop-shadow-lg">
              Book a Demo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
              Transform your salon management experience with Zayna
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <main className="pb-12 -mt-20 relative z-10">
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
