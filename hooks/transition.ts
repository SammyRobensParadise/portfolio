import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'

import { overlay } from '../components/Overlay/Overlay'

export type Hrefs =
  | '/'
  | '/beacon-biosignals'
  | '/float-card'
  | '/puma'
  | '/hootsuite'
  | '/unity-finger-foods'
  | '/verify'
  | '/github-stats'
  | '/intensif-eye'
  | '/arduino-scream'

export interface UseTransitionInterface {
  timeout?: number
}

export interface UseTransition {
  visibility: boolean
  handlePageTransition: (href: Hrefs) => void
  paint: () => void
}

export default function useTransition({
  timeout = 250
}: UseTransitionInterface): UseTransition {
  const [visibility, setVisibility] = useState<boolean>(true)
  const router = useRouter()
  const [, setOverlay] = useAtom(overlay)
  useEffect(() => {
    window.addEventListener('onpopstate', () => {
      setVisibility(false)
    })
    return () => {
      window.removeEventListener('onpopstate', () => {
        setVisibility(false)
      })
    }
  })

  function handlePageTransition(href: Hrefs) {
    setOverlay(true)
    setTimeout(() => {
      setVisibility(!visibility)
      setTimeout(() => {
        router.push(href)
      }, timeout)
    }, 10)
  }

  function paint() {
    setTimeout(() => {
      setOverlay(false)
    }, 1500)
  }

  return { visibility, handlePageTransition, paint }
}
