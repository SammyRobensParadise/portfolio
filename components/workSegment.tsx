import { PropsWithChildren } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WorkSegment({
  title,
  description,
  inFocus = false,
  children
}: PropsWithChildren<{
  title: string
  description: string
  inFocus?: boolean
}>): JSX.Element {
  return (
    <AnimatePresence>
      <motion.div
        className="space-y-8 text-center min-w-fit"
        id={`${inFocus ? `${title}-in-focus` : title}`}
      >
        <div className=" h-80">{children}</div>
        <h2 className="text-canary text-5xl font-semibold max-w-7xl">
          {title.toUpperCase()}
        </h2>
        <p className="text-canary text-3xl px-48 max-w-7xl">{description}</p>
      </motion.div>
    </AnimatePresence>
  )
}
