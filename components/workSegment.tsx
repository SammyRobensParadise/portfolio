import { PropsWithChildren } from 'react'

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
    <div
      className="space-y-8 text-center min-w-fit"
      id={`${inFocus ? `${title}-in-focus` : title}`}
    >
      <div>{children}</div>
      <h2 className="text-canary text-5xl font-semibold">
        {title.toUpperCase()}
      </h2>
      <p className="text-canary text-3xl px-48">{description}</p>
    </div>
  )
}
