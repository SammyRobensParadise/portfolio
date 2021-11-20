import React, { useEffect } from 'react'

import DownArrow from '../../global/assets/downArrow.svg'

export interface ScrollButtonInterface {
  name: string
  handler: (Event: React.MouseEvent) => void
}

export default function ScrollButton({
  name,
  handler
}: ScrollButtonInterface): JSX.Element {
  const handleTransitionAtBottom = () => {}

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        console.log('bottom')
      }
    })
  })
  return (
    <button
      type="button"
      className="text-cerulaen dark:text-off-white grid justify-items-center"
      onClick={handler}
    >
      <h3 className="text-2xl justify-center text-center block py-4 text-cerulaen dark:text-off-white font-bold">
        Scroll
      </h3>

      <DownArrow className="animate-bounce" />
      <p className=" text-lg justify-center text-center py-2 text-cerulaen dark:text-off-white">
        {name}
      </p>
    </button>
  )
}
