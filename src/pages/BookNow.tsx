import { BookMeta } from './meta'
import ContactForm from '../components/ContactForm/ContactForm'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

export default function BookNow() {
  const { rtl } = useLanguage()
  
  return (
    <main className="bg-[#FFF0ED] min-h-screen" dir={rtl ? 'rtl' : 'ltr'}>
      <BookMeta />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
