import React, { ReactElement, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

const MESSAGE = 'Welcome.'
const DEFAULT_INTERVAL_TIMEOUT = 100
const TRANSITION_TIMEOUT = DEFAULT_INTERVAL_TIMEOUT * MESSAGE.length + 1000

const GlitchRenderer = (): ReactElement => {
  const [printMessage, updatePrintMessage] = useState<string>('')
  const [printMessageLetterCount, updatePrintMessageLetterCount] =
    useState<number>(0)

  const [show, updateShow] = useState<boolean>(true)

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (printMessageLetterCount < MESSAGE.length) {
        updatePrintMessage(`${printMessage}${MESSAGE[printMessageLetterCount]}`)
        updatePrintMessageLetterCount(printMessageLetterCount + 1)
      } else {
        clearInterval(typeInterval)
      }
    }, DEFAULT_INTERVAL_TIMEOUT)
    return () => {
      clearInterval(typeInterval)
    }
  }, [printMessage, printMessageLetterCount])

  useEffect(() => {
    setTimeout(() => {
      updateShow(false)
    }, TRANSITION_TIMEOUT)
  }, [updateShow])

  return (
    <Transition
      appear
      show={show}
      leave="transform transition duration-1000  cubic-bezier(.97,.03,.36,.45)"
      leaveFrom="scale-100 opacity-100 h-100"
      leaveTo="scale-400 opacity-100 bg-white"
    >
      <div className="flex items-center justify-between align-center p-40">
        <div className="gl-center">
          <div className="glitch-effect" data-text={printMessage}>
            {printMessage}
          </div>
          <div className="glow">{printMessage}</div>
        </div>
      </div>
    </Transition>
  )
}

export default GlitchRenderer
