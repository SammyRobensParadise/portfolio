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
      enter="transition-all transform-gpu duration-150"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transition-all transform-gpu duration-300"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-50"
      className="fixed w-screen h-screen bg-off-white dark:bg-shadow z-50"
      style={{ zIndex: 999999 }}
    >
      <div
        className="bg-shadow dark:bg-highlight w-9 h-9 animate-spin absolute -translate-x-1/2 -translate-y-1/2 top-1/2"
        style={{ left: 'calc(50% - 18px)' }}
      />
    </Transition>
  )
}
