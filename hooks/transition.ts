import { useState } from 'react'
import { useRouter } from 'next/router'

export type Hrefs =
  | '/'
  | '/beacon-biosignals'
  | '/float-card'
  | '/puma'
  | '/hootsuite'
  | '/unity-finger-foods'
  | '/verify'
  | '/github-stats'
  | 'intensif-eye'
  | 'arduino-scream'

export interface UseTransitionInterface {
  timeout?: number
}

export interface UseTransition {
  visibility: boolean
  handlePageTransition: (href: Hrefs) => void
}

export default function useTransition({
  timeout = 1000
}: UseTransitionInterface): UseTransition {
  const [visibility, setVisibility] = useState<boolean>(true)
  const router = useRouter()

  function handlePageTransition(href: Hrefs) {
    setVisibility(!visibility)
    setTimeout(() => {
      router.push(href)
    }, timeout)
  }
  return { visibility, handlePageTransition }
}
