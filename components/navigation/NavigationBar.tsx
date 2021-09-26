import React, { ReactElement } from 'react'

const NavigationBar = (): ReactElement => (
  <div className="text-cerulaen dark:text-off-white grid grid-cols-3 gap-16 p-6">
    <div className="flex flex-row">1</div>
    <div className="text-center flex-row">2</div>
    <div className="flex flex-row justify-end">3</div>
  </div>
)

export default NavigationBar
