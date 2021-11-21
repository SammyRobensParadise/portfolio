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
    if (scrollHeight >= document.body.offsetHeight) {
      setLoadingBuffer(true)
    }
    if (scrollHeight <= document.body.offsetHeight - 100) {
      setLoadingBuffer(false)
      setPercentage(0)
    }
  }, [setLoadingBuffer])

  function handleEvent() {
    handler()
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useAnimationFrame(
    ({ time }: { time: number; delta: number }) => {
      if (loadingBuffer) {
        if (time > lastTime + 0.25) {
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
      {loadingBuffer && (
        <p className="pb-4 animate-pulse">{`${percentage.toString()}%`}</p>
      )}
      <DownArrow className="animate-bounce" />
      <p className=" text-lg justify-center text-center py-2 text-cerulaen dark:text-off-white">
        {name}
      </p>
    </button>
  )
}
