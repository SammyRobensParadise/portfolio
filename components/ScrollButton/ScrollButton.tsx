import React, { useCallback, useEffect, useState } from 'react'
import useAnimationFrame from 'use-animation-frame'

import DownArrow from '../../global/assets/downArrow.svg'
import { Hrefs } from '../../hooks/transition'

export interface ScrollButtonInterface {
  name: string
  handler: () => void
}

export default function ScrollButton({
  name,
  handler
}: ScrollButtonInterface): JSX.Element {
  const [loadingBuffer, setLoadingBuffer] = useState<boolean>(false)
  const [percentage, setPercentage] = useState<number>(0)
  const handleTransitionAtBottom = useCallback(() => {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 100
    ) {
      return setTimeout(() => {
        setLoadingBuffer(true)
      }, 500)
    }
    return setLoadingBuffer(false)
  }, [setLoadingBuffer])

  function handleEvent() {
    handler()
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useAnimationFrame(() => {
    if (loadingBuffer) {
      setTimeout(() => {
        const newPer = percentage + 1
        setPercentage(newPer)
        if (percentage >= 100) {
          setLoadingBuffer(false)
          handleEvent()
        }
      }, 50)
    } else {
      setPercentage(0)
    }
  }, [loadingBuffer, percentage, setPercentage])

  const handleScrollWheel = useCallback(() => {}, [])

  useEffect(() => {
    window.addEventListener('scroll', handleTransitionAtBottom)
    window.addEventListener('wheel', handleScrollWheel)
    return () => {
      window.removeEventListener('scroll', handleTransitionAtBottom)
    }
  }, [handleScrollWheel, handleTransitionAtBottom])

  return (
    <button
      type="button"
      className="text-cerulaen dark:text-off-white grid justify-items-center"
      onClick={handler}
    >
      <h3 className="text-2xl justify-center text-center block py-4 text-cerulaen dark:text-off-white font-bold">
        Scroll
      </h3>
      {loadingBuffer && <p className="pb-4">{`${percentage.toString()}%`}</p>}
      <DownArrow className="animate-bounce" />
      <p className=" text-lg justify-center text-center py-2 text-cerulaen dark:text-off-white">
        {name}
      </p>
    </button>
  )
}
