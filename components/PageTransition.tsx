import React, { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

const PageTransition = forwardRef(
  ({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) => {
    const onTheRight = { y: '100%' }
    const inTheCenter = { y: 0 }
    const onTheLeft = { y: '-100%' }

    const transition = { duration: 0.6, ease: 'easeInOut' }

    return (
      <motion.div
        ref={ref}
        initial={onTheRight}
        animate={inTheCenter}
        exit={onTheLeft}
        transition={transition}
        {...rest}
      >
        {children}
      </motion.div>
    )
  }
)

const PageTransitionPage = (): JSX.Element => <PageTransition />

export default PageTransitionPage
