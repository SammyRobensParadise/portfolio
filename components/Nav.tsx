import { useState } from 'react'

import Sidebar from './Sidebar'

export default function Navbar({
  color = 'border-prussian-blue'
}: {
  color?: string
}): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  function closeSidebar() {
    setSidebarOpen(false)
  }

  return (
    <div>
      {sidebarOpen && <Sidebar onClose={() => closeSidebar()} />}
      <button
        aria-label="home"
        type="button"
        className={`fixed h-12 w-12 transition-all ease-in-out bg-off-white border-[16px] hover:border-8 n ${color}`}
        onClick={() => setSidebarOpen(true)}
      />
    </div>
  )
}
