import React, { ReactElement, useEffect, useState } from 'react'

const message = 'Welcome.'
const GlitchRenderer = (): ReactElement => {
  const [printMessage, updatePrintMessage] = useState<string>('')
  const [printMessageLetterCount, updatePrintMessageLetterCount] =
    useState<number>(0)

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (printMessageLetterCount < message.length) {
        updatePrintMessage(`${printMessage}${message[printMessageLetterCount]}`)
        updatePrintMessageLetterCount(printMessageLetterCount + 1)
      } else {
        clearInterval(typeInterval)
      }
    }, 100)
    return () => {
      clearInterval(typeInterval)
    }
  })
  return (
    <div>
      <div className="flex items-center justify-between align-center p-40">
        <div className="gl-center">
          <div className="glitch-effect" data-text={printMessage}>
            {printMessage}
          </div>
          <div className="glow">{printMessage}</div>
        </div>
      </div>
    </div>
  )
}

export default GlitchRenderer
