import { X } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Sidebar({
  onClose
}: {
  onClose: () => void
}): JSX.Element {
  return (
    <div className="fixed flex h-full flex-col bg-prussian-blue w-[50%]">
      <div className="p-8 mb-2 flex justify-between items-center">
        <motion.button
          whileHover={{
            scaleX: 1.1
          }}
          className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-off-white"
        >
          <Link href="/">RETURN HOME</Link>
        </motion.button>
        <button type="button" onClick={onClose} className="text-off-white">
          <X size={32} />
        </button>
      </div>
      <div className="p-8">
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          content
        </nav>
      </div>
    </div>
  )
}
