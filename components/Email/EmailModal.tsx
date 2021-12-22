import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'

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
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 self-center"
        open={show}
        onClose={setShow}
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
                Some quick information so I can reach you!
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4"
              >
                <label htmlFor="name" className="space-x-2 flex flex-row">
                  <p className="text-cerulaen dark:text-off-white text-sm text-left">
                    Full Name
                  </p>
                  <input
                    {...register('name', { required: true })}
                    name="name"
                  />
                </label>
                {errors.name && <p>Name is required.</p>}
                <input type="submit" />
              </form>
            </Dialog.Description>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
