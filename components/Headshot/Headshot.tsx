import React from 'react'

import Flow from '../Flow/Flow'

export default function Headshot(): JSX.Element {
  return (
    <div>
      <div
        className="fake-border border-2 absolute z-50 border-cerulaen dark:border-off-white transform -translate-x-10 translate-y-10 p-6"
        style={{ height: '494px', width: '329px' }}
      >
        <div className=" bg-highlight dark:bg-cerulaen h-6 w-6 rounded-full" />
      </div>
      <Flow
        src="/sammy_headshot.png"
        height="494px"
        width="329px"
        alt="sammy"
      />
    </div>
  )
}
