import React, { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'

import Table from '../Table/Table'
import useTransition from '../../hooks/transition'

export default function OverlayDialog(): JSX.Element {
  const router = useRouter()
  const { handlePageTransition } = useTransition({ timeout: 1000 })

  const [isOpen, setIsOpen] = useState<boolean>(false)

  function closeModal() {
    setIsOpen(false)
    router.push(router.route, { query: {} }, { scroll: false, shallow: true })
  }

  useEffect(() => {
    if (router.query?.overlay) {
      setIsOpen(true)
    }
    return () => {
      setIsOpen(false)
    }
  }, [router, router.query])

  const type: string = router?.query.type as string
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 self-center"
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
            <Dialog.Overlay className="transition transform fixed inset-0 bg-off-white dark:bg-shadow opacity" />
          </Transition.Child>
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
            className="relative bg-off-white dark:bg-shadow rounded mx-auto inline-block shadow-lg mt-24"
          >
            <Dialog.Description className=" p-12" as="div">
              {type === 'work' && (
                <Table
                  id="work-table"
                  headers={['Work']}
                  rows={[
                    {
                      onClick: () => {
                        closeModal()
                        handlePageTransition('/beacon-biosignals')
                      },
                      elements: [
                        {
                          name: 'Beacon Biosignals',
                          type: 'text'
                        },
                        {
                          type: 'style',
                          name: 'Revolutionizing end-to-end clinician workflows with interactive data visualization and machine learning.'
                        },
                        { name: "'21 - Present", type: 'text' }
                      ]
                    },
                    {
                      onClick: () => {
                        closeModal()
                        handlePageTransition('/float-card')
                      },
                      elements: [
                        { name: 'Float Card', type: 'text' },
                        {
                          type: 'style',
                          name: 'Bringing expense managment to the future.'
                        },
                        { name: "'20 - '21", type: 'text' }
                      ]
                    },
                    {
                      onClick: () => {
                        closeModal()
                        handlePageTransition('/puma')
                      },
                      elements: [
                        { name: 'PUMA', type: 'text' },
                        {
                          type: 'style',
                          name: 'Leading better design for data scientists'
                        },
                        { name: "'20 - '20", type: 'text' }
                      ]
                    },
                    {
                      onClick: () => {
                        closeModal()
                        handlePageTransition('/hootsuite')
                      },
                      elements: [
                        { name: 'Hootsuite', type: 'text' },
                        {
                          type: 'style',
                          name: "Kickstarting Hootsuite's W3C AA/AAA accessibility implementation strategy."
                        },
                        { name: "'19 - '19", type: 'text' }
                      ]
                    },
                    {
                      elements: [
                        { name: 'Unity, Finger Foods', type: 'text' },
                        {
                          type: 'style',
                          name: 'AR, VR, XR, computer vision and your childhood toys re-imagined '
                        },
                        { name: "'18 - '19", type: 'text' }
                      ]
                    }
                  ]}
                />
              )}
              {type === 'projects' && (
                <Table
                  id="projects-table"
                  headers={['Projects']}
                  rows={[
                    {
                      elements: [
                        {
                          name: 'Verify, Social Media',
                          type: 'text'
                        },
                        {
                          type: 'style',
                          name: 'Uncover mis-information right in your instagram feed.'
                        },
                        { name: "'21 - Present", type: 'text' }
                      ]
                    },
                    {
                      elements: [
                        { name: 'Github Stats', type: 'text' },
                        {
                          type: 'style',
                          name: 'Report Github contributions on your websites.'
                        },
                        { name: "'20 - Present", type: 'text' }
                      ]
                    },
                    {
                      elements: [
                        { name: 'Intensif-Eye, AI', type: 'text' },
                        {
                          type: 'style',
                          name: 'Information access for our visually impared.'
                        },
                        { name: "'19'", type: 'text' }
                      ]
                    },
                    {
                      elements: [
                        { name: 'Arduino Scream', type: 'text' },
                        {
                          type: 'style',
                          name: 'Open a safe by screaming at it? Sure thing!'
                        },
                        { name: "'19", type: 'text' }
                      ]
                    }
                  ]}
                />
              )}
            </Dialog.Description>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
