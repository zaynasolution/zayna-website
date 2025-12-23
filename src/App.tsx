import { Suspense, lazy, memo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
=======
import { LazyMotion, domAnimation } from 'framer-motion'
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
import Header from './components/Header'
import SkipLink from './components/SkipLink'
import ErrorBoundary from './components/ErrorBoundary'
import PerformanceMonitor from './components/PerformanceMonitor'

const Home = lazy(() => import('./pages/Home'))
const Zayna = lazy(() => import('./pages/Zayna'))
const Platform = lazy(() => import('./pages/Platform'))
const BookNow = lazy(() => import('./pages/BookNow'))
const WhyUs = lazy(() => import('./pages/WhyUs'))

const AppShell = memo(function AppShell() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <SkipLink />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<div className="container py-12">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zayna" element={<Zayna />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/book" element={<BookNow />} />
            <Route path="/why-us" element={<WhyUs />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <PerformanceMonitor />
=======
      <LazyMotion features={domAnimation}>
        <SkipLink />
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<div className="container py-12">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/zayna" element={<Zayna />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/book" element={<BookNow />} />
              <Route path="/why-us" element={<WhyUs />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <PerformanceMonitor />
      </LazyMotion>
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
    </BrowserRouter>
  )
})

export default AppShell
