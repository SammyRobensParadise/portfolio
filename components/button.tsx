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
      <Link
        href={href}
        className={`px-8 py-5 text-xl transition ease-in-out duration-200 bg-prussian-blue rounded-sm${clsx(
          {
            'bg-canary text-prussian-blue hover:bg-prussian-blue hover:text-prussian-blue':
              variant === 'secondary',
            'bg-prussian-blue text-canary hover:bg-canary hover:text-prussian-blue':
              variant === 'primary'
          }
        )}`}
      >
        {children}
      </Link>
    )
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-8 py-5 text-xl transition ease-in-out duration-200 rounded-sm ${clsx(
        {
          'bg-canary text-prussian-blue hover:bg-prussian-blue hover:text-prussian-blue':
            variant === 'secondary',
          'bg-prussian-blue text-canary hover:bg-canary hover:text-prussian-blue':
            variant === 'primary'
        }
      )}`}
    >
      {children}
    </button>
  )
}
