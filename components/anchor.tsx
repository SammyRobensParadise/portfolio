import clsx from 'clsx'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

export default function Anchor({
  children,
  variant = 'primary',
  anchor = false,
  href = '',
  onClick = undefined
}: PropsWithChildren<{
  variant?: 'primary' | 'secondary'
  anchor?: boolean
  href?: string
  onClick?: () => void
}>): JSX.Element {
  if (anchor) {
    return (
      <motion.button
        whileHover={{
          scaleX: 1.1
        }}
      >
        <span>
          <Link
            href={href}
            className={`font-semibold underline transition ease-in-out duration-200 rounded-sm selection:bg-ruby ${clsx(
              {
                'text-canary selection:text-prussian-blue':
                  variant === 'secondary',
                'text-prussuan-blue selection:text-canary':
                  variant === 'primary'
              }
            )}`}
          >
            {children}
          </Link>
        </span>
      </motion.button>
    )
  }
  return (
    <motion.button
      whileHover={{
        scaleX: 1.1
      }}
    >
      <span>
        <button
          onClick={onClick}
          type="button"
          className={`font-semibold underline transition ease-in-out duration-200 rounded-sm selection:bg-ruby  ${clsx(
            {
              'text-canary selection:text-prussian-blue':
                variant === 'secondary',
              'text-prussuan-blue selection:text-canary': variant === 'primary'
            }
          )}`}
        >
          {children}
        </button>
      </span>
    </motion.button>
  )
}
