import React, { ReactElement } from 'react'

import Puzzle from '../../global/assets/puzzle.svg'

const NavigationBar = (): ReactElement => (
  <div className="text-cerulaen dark:text-off-white grid grid-cols-3 gap-16 p-6 text-lg font-work font-normal">
    <div className="flex flex-row">1</div>
    <div className="text-center flex flex-row space-x-4 justify-center">
      <Puzzle />
      <div>Sammy Robens-Paradise</div>
    </div>
    <div className="flex flex-row justify-end">3</div>
  </div>
)

export default NavigationBar
