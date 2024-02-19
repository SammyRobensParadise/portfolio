import { PropsWithChildren, useRef } from 'react'
import { useScroll, motion } from 'framer-motion'

import useParallax from '../hooks/useParalax'

export default function ParalaxBlock({
  children,
  speed,
  paralaxComponent,
  className = ''
}: PropsWithChildren<{
  speed: number
  paralaxComponent: JSX.Element
  className?: string
}>): JSX.Element {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, speed)
  return (
    <div className={`paralax-section ${className}`}>
      <div ref={ref}>{children}</div>
      <motion.div style={{ y }}>{paralaxComponent}</motion.div>
    </div>
  )
}
