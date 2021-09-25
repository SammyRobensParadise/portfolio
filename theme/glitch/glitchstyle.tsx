import React, { ReactElement, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

import OldSchool from '../../providers/oldschool'

const MESSAGE = 'Welcome.'
const DEFAULT_INTERVAL_TIMEOUT = 100
const TRANSITION_TIMEOUT = DEFAULT_INTERVAL_TIMEOUT * MESSAGE.length + 1500

const GlitchRenderer = (): ReactElement => {
  const [printMessage, updatePrintMessage] = useState<string>('')
  const [printMessageLetterCount, updatePrintMessageLetterCount] =
    useState<number>(0)
  const [show, updateShow] = useState<boolean>(true)
  const oldSchool = OldSchool.useOldSchool()

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
      if (oldSchool) {
        oldSchool.hideGlitch()
      }
    }, TRANSITION_TIMEOUT)
  }, [updateShow, oldSchool])

  return (
    <Transition
      className="flex items-center justify-between align-center p-40 h-screen"
      appear
      show={show}
      leave="transform transition duration-1000  cubic-bezier(.97,.03,.36,.45)"
      leaveFrom="scale-100 h-screen"
      leaveTo="scale-20 opacity-0 h-screen"
    >
      <div className="gl-center">
        <div className="glitch-effect" data-text={printMessage}>
          {printMessage}
        </div>
        <div className="glow">{printMessage}</div>
      </div>
    </Transition>
  )
}

export default GlitchRenderer
