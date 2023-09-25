import clsx from 'clsx'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default function Button({
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
      <span className="h-16">
        <Link
          href={href}
          className={`px-8 py-5 text-xl font-semibold transition ease-in-out duration-200 rounded-sm ${clsx(
            {
              'bg-canary text-prussian-blue hover:bg-prussian-blue hover:text-canary':
                variant === 'secondary',
              'bg-prussian-blue text-canary hover:bg-canary hover:text-prussian-blue':
                variant === 'primary'
            }
          )}`}
        >
          {children}
        </Link>
      </span>
    )
  }
  return (
    <span className="h-16">
      <button
        onClick={onClick}
        type="button"
        className={`px-8 py-5 text-xl font-semibold transition ease-in-out duration-200 rounded-sm ${clsx(
          {
            'bg-canary text-prussian-blue hover:bg-prussian-blue hover:text-canary':
              variant === 'secondary',
            'bg-prussian-blue text-canary hover:bg-canary hover:text-prussian-blue':
              variant === 'primary'
          }
        )}`}
      >
        {children}
      </button>
    </span>
  )
}
