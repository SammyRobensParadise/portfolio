import React, { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'

export default function OverlayDialog(): JSX.Element {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function closeModal() {
    setIsOpen(false)
    router.push(router.route, { query: {} }, { scroll: false, shallow: true })
  }

  useEffect(() => {
    if (router?.query) {
      if (router.query.overlay) {
        setIsOpen(true)
      }
    }
  }, [router, router.query])
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50"
        open={isOpen}
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="transition transform fixed inset-0 bg-cerulaen opacity-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="relative bg-off-white rounded max-w-sm mx-auto inline-block shadow"
          >
            <div id="dialog">test</div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
