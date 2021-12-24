import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

interface FormValues {
  name: string
  email: string
  message: string
}

export default function EmailModal({
  show,
  setShow
}: {
  show: boolean
  setShow: (show: boolean) => void
}): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [result, setResult] = useState<'SUCCESS' | 'ERROR' | null>(null)

  function close() {
    setShow(false)
    setIsWaiting(false)
    setResult(null)
  }
  const onSubmit = (data: FormValues) => {
    setIsWaiting(true)
    axios.post('/api/email', data).then((response) => {
      setIsWaiting(false)
      if (response.status === 200) {
        setResult('SUCCESS')
        setTimeout(() => {
          close()
        }, 3000)
      } else {
        setResult('ERROR')
      }
    })
  }

  const Form = () => (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <label htmlFor="name" className="space-x-2 flex flex-row">
        <div>
          <p className="text-cerulaen dark:text-off-white text-sm text-left p-2">
            Full Name
          </p>
          {errors.name && (
            <p style={{ color: 'red' }} className="text-xs text-left pl-2 h-0">
              Required
            </p>
          )}
        </div>
        <input
          {...register('name', { required: true })}
          name="name"
          type="text"
          className="flex-1 rounded px-2 py-2 text-cerulaen dark:text-off-white text-sm text-left p-2 bg-off-white dark:bg-shadow border focus:outline-white"
        />
      </label>

      <label htmlFor="email" className="space-x-2 flex flex-row">
        <div>
          <p className="text-cerulaen dark:text-off-white text-sm text-left p-2 pr-9">
            Email
          </p>
          {errors.email && (
            <p style={{ color: 'red' }} className="text-xs text-left pl-2 h-0">
              Required
            </p>
          )}
        </div>
        <input
          {...register('email', { required: true })}
          name="email"
          type="email"
          className="flex-1 rounded px-2 py-2 text-cerulaen dark:text-off-white text-sm text-left p-2 bg-off-white dark:bg-shadow border focus:outline-white"
        />
      </label>
      <label htmlFor="message" className="space-x-2 flex flex-row">
        <p className="text-cerulaen dark:text-off-white text-sm text-left p-2 pr-3">
          Message
        </p>
        <textarea
          {...register('message', { required: false })}
          name="message"
          className="flex-1 rounded px-2 py-2 text-cerulaen dark:text-off-white text-sm text-left p-2 bg-off-white dark:bg-shadow border focus:outline-white resize-y"
        />
      </label>
      <input
        type="submit"
        className=" p-2 rounded bg-cerulaen focus:outline-white text-off-white"
        value="Send Message"
        disabled={isWaiting}
      />
    </form>
  )

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="inset-0 z-50 self-center"
        open={show}
        onClose={close}
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
            <Dialog.Description className="p-12 space-y-4" as="div">
              <h1 className="text-cerulaen dark:text-off-white text-2xl text-left">
                Let&apos;s get in touch!
              </h1>
              <p className="text-cerulaen dark:text-off-white text-lg text-left">
                This is the same as emailing me! This will go straight to my
                inbox 📮.
              </p>
              {!isWaiting && !result && <Form />}
              {isWaiting && (
                <div className="flex justify-center items-center">
                  <p className="animate-spin">❤️</p>
                </div>
              )}
              {!isWaiting && result === 'SUCCESS' && (
                <p className="text-cerulaen dark:text-off-white text-2xl">
                  Your message has been sent!
                </p>
              )}
              {!isWaiting && result === 'ERROR' && (
                <p style={{ color: 'red' }} className=" text-2xl">
                  Your message was not send successfully. Please try again
                  later.
                </p>
              )}
            </Dialog.Description>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
