import { BusinessJsonLD } from '../utils/structuredData'
<<<<<<< HEAD
import { HomeMeta } from './meta'
=======
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
import HeroSection from '../components/HeroSection'
import ZaynaCardsSection from '../components/ZaynaCardsSection'
import JoinAppSection from '../components/JoinAppSection'
import DashboardSection from '../components/DashboardSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ScrollProgressLoader from '../components/ScrollProgressLoader'

export default function Home() {
  const handleLearnMore = () => {
    // Scroll to ZaynaCardsSection
    const section = document.getElementById('zayna-cards')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleBookNow = () => {
    // Scroll to Contact Form
    const section = document.getElementById('contact-form')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main id="main">
<<<<<<< HEAD
      <HomeMeta />
      <BusinessJsonLD name="Zayna" url="https://zayna.example.com" />
      <ScrollProgressLoader />
      
      <div id="hero-section">
        <HeroSection onLearnMore={handleLearnMore} onBookNow={handleBookNow} />
      </div>
      
      <ZaynaCardsSection />
      <JoinAppSection />
      
      <div id="dashboard">
        <DashboardSection />
      </div>
      
=======
      <BusinessJsonLD name="Zayna" url="https://zayna.example.com" />
      <ScrollProgressLoader />

      <div id="hero-section">
        <HeroSection onLearnMore={handleLearnMore} onBookNow={handleBookNow} />
      </div>

      <ZaynaCardsSection />
      <JoinAppSection />

      <div id="dashboard">
        <DashboardSection />
      </div>

>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
