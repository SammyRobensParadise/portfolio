import React, { ReactElement, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

import OldSchool from '../../providers/oldschool'
import { cubicBezier, animate } from '../../global/helpers/animation'

/**
 * Message displayed
 */
const MESSAGE = 'Welcome.'
/**
 * Tying interval timeout
 */
const DEFAULT_INTERVAL_TIMEOUT = 100
/**
 * Transition timeout
 */
const TRANSITION_TIMEOUT: number =
  DEFAULT_INTERVAL_TIMEOUT * MESSAGE.length + 1000
/**
 * Animation duration
 */
const TRANSITION_DURATION = 500

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
      setTimeout(() => {
        if (oldSchool) {
          oldSchool.hideGlitch()
        }
      }, TRANSITION_TIMEOUT + TRANSITION_DURATION)
    }, TRANSITION_TIMEOUT)
  }, [updateShow, oldSchool])

  return (
    <Transition
      className="flex items-center justify-between align-center p-40 h-screen bg-off-white dark:bg-shadow "
      appear
      show={show}
      leave={`${animate(TRANSITION_DURATION)} ${cubicBezier(
        0.97,
        0.03,
        0.36,
        0.45
      )}`}
      leaveFrom="scale-100 h-screen bg-off-white dark:bg-shadow"
      leaveTo="scale-200 opacity-0 h-screen bg-off-white dark:bg-shadow"
    >
      <h1 className="text-4xl dark:text-off-white text-cerulaen">
        {printMessage}
      </h1>
    </Transition>
  )
}

export default GlitchRenderer
