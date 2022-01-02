import React from 'react'
import { atom, useAtom } from 'jotai'
import { Transition } from '@headlessui/react'

export const overlay = atom<boolean>(false)

export default function Overlay(): JSX.Element {
  const [state] = useAtom(overlay)

  return (
    <Transition
      show={state}
      appear
      enter="transition-all transform duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all transform duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="fixed h-screen w-screen bg-cerulaen z-50"
      style={{ zIndex: 9999 }}
    />
  )
}
