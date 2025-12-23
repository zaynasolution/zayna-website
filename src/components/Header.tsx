import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

<<<<<<< HEAD
const LOGO_PATH = '/src/assets/logo-zayna-beauty.png'
=======
const LOGO_PATH = '/src/assets/logo.png'
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8

export default function Header() {
  const { t, lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = useMemo(
    () =>
      `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`,
    [scrolled],
  )

  return (
    <header className={navClass} aria-label="Main header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
<<<<<<< HEAD
        <Link to="/" className="flex items-center gap-2 font-serif font-bold text-2xl text-[#2B0902]" aria-label="Go to home">
          <img src={LOGO_PATH} alt="Zayna Logo" className="h-12 w-auto object-contain mix-blend-multiply" />
          <span>Zayna</span>
=======
        <Link to="/" className="flex items-center" aria-label="Go to home">
          <img 
            src={LOGO_PATH} 
            alt="Zayna Logo" 
            className="h-10 w-auto object-contain" 
          />
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
        </Link>
        <nav className="hidden md:flex gap-8 items-center" aria-label="Primary">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-[#F5AC73] ${isActive ? 'text-[#F5AC73]' : 'text-[#2B0902]'}`
            }
          >
            {t('nav_home')}
          </NavLink>
          <NavLink 
            to="/zayna" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-[#F5AC73] ${isActive ? 'text-[#F5AC73]' : 'text-[#2B0902]'}`
            }
          >
            {t('nav_zayna')}
          </NavLink>
          <NavLink 
            to="/platform" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-[#F5AC73] ${isActive ? 'text-[#F5AC73]' : 'text-[#2B0902]'}`
            }
          >
            {t('nav_platform')}
          </NavLink>
          <NavLink 
            to="/why-us" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-[#F5AC73] ${isActive ? 'text-[#F5AC73]' : 'text-[#2B0902]'}`
            }
          >
            {t('nav_why')}
          </NavLink>
          <NavLink 
            to="/book" 
            className="px-5 py-2 rounded-full bg-[#2B0902] text-white text-sm font-medium hover:bg-[#F5AC73] hover:text-[#2B0902] transition-colors"
          >
            {t('nav_book')}
          </NavLink>
          <button
            aria-label="Toggle language"
            className="text-sm font-medium text-[#2B0902] hover:text-[#F5AC73] transition-colors"
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </nav>
        <button
          aria-label="Open menu"
          className="md:hidden p-2 text-[#2B0902]"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4">
          <div className="flex flex-col gap-4">
            <NavLink 
              to="/" 
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `text-base font-medium ${isActive ? 'text-[#F5AC73]' : 'text-[#2B0902]'}`
              }
            >
              {t('nav_home')}
            </NavLink>
            <NavLink 
              to="/zayna" 
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `text-base font-medium ${isActive ? 'text-[#F5AC73]' : 'text-[#2B0902]'}`
              }
            >
              {t('nav_zayna')}
            </NavLink>
            <NavLink 
              to="/platform" 
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `text-base font-medium ${isActive ? 'text-[#F5AC73]' : 'text-[#2B0902]'}`
              }
            >
              {t('nav_platform')}
            </NavLink>
            <NavLink 
              to="/why-us" 
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `text-base font-medium ${isActive ? 'text-[#F5AC73]' : 'text-[#2B0902]'}`
              }
            >
              {t('nav_why')}
            </NavLink>
            <NavLink 
              to="/book" 
              onClick={() => setOpen(false)}
              className="px-5 py-3 rounded-full bg-[#2B0902] text-white text-center font-medium"
            >
              {t('nav_book')}
            </NavLink>
            <button
              aria-label="Toggle language"
              className="text-base font-medium text-[#2B0902] text-left"
              onClick={() => {
                setLang(lang === 'en' ? 'ar' : 'en')
                setOpen(false)
              }}
            >
              {t('toggle_language')} ({lang === 'en' ? 'AR' : 'EN'})
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

