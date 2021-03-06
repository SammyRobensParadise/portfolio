import React, { useCallback, useEffect, useState } from 'react'
import useAnimationFrame from 'use-animation-frame'

import DownArrow from '../../global/assets/downArrow.svg'

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
  const [lastTime, setLastTime] = useState<number>(0)
  const handleTransitionAtBottom = useCallback(() => {
    const scrollHeight = window.innerHeight + window.pageYOffset
    const appHeight = document.getElementById('__next')?.offsetHeight
    if (appHeight && scrollHeight >= appHeight && window.pageYOffset !== 0) {
      setLoadingBuffer(true)
    }
    if (
      (appHeight && scrollHeight <= appHeight - 100) ||
      window.scrollY === 0
    ) {
      setLoadingBuffer(false)
      setPercentage(0)
    }
  }, [setLoadingBuffer])

  function handleEvent() {
    handler()
  }

  useAnimationFrame(
    ({ time }: { time: number; delta: number }) => {
      if (loadingBuffer) {
        if (time > lastTime + 0.1) {
          const newPer = percentage + 1
          setPercentage(newPer)
          setLastTime(time)
        }
        if (percentage >= 100) {
          setLoadingBuffer(false)
          handleEvent()
        }
      } else {
        setPercentage(0)
      }
    },
    [loadingBuffer, percentage, setPercentage, setLastTime]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleTransitionAtBottom)
    return () => {
      window.removeEventListener('scroll', handleTransitionAtBottom)
    }
  }, [handleTransitionAtBottom])

  return (
    <button
      type="button"
      className="transform transition text-cerulaen dark:text-off-white grid justify-items-center focus:ring-offset-shadow outline-none hover:scale-125 focus:scale-125"
      onClick={handler}
    >
      {loadingBuffer ? (
        <p className="pb-4 animate-pulse">{`${percentage.toString()}%`}</p>
      ) : (
        <div className="h-10" />
      )}
      <DownArrow className="animate-bounce" />
      <p className=" text-lg justify-center text-center py-2 text-cerulaen dark:text-off-white">
        {name}
      </p>
    </button>
  )
}
