'use client'

import { LazyMotion, domAnimation } from 'framer-motion'

export function Providers({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}

