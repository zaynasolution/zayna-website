import { useScroll, useTransform } from 'framer-motion'

export function useParallax(range: [number, number] = [0, 300]) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, range[1]], [0, -range[0]])
  const opacity = useTransform(scrollY, [0, range[1]], [1, 0.6])
  return { y, opacity }
}

