import { X } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useOnClickOutside } from 'usehooks-ts'
import { useRef } from 'react'

export default function Sidebar({
  onClose
}: {
  onClose: () => void
}): JSX.Element {
  const ref = useRef(null)
  useOnClickOutside(ref, onClose)
  return (
    <motion.div
      key="navbar"
      initial={{ x: -400, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      exit={{ x: -400, opacity: 0.5, transition: { delay: 0.2 } }}
      className="fixed z-50 flex h-full flex-col bg-prussian-blue border-r-2 border-r-off-white"
      ref={ref}
    >
      <div className="p-8 mb-2 flex justify-between items-center space-x-32">
        <motion.button
          whileHover={{
            scaleX: 1.1
          }}
          className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-off-white"
        >
          <Link href="/" onClick={onClose}>
            RETURN HOME
          </Link>
        </motion.button>
        <motion.button
          whileHover={{
            scaleX: 1.1
          }}
          type="button"
          onClick={onClose}
          className="text-off-white"
        >
          <X size={32} />
        </motion.button>
      </div>
      <div className="p-8">
        <nav className="flex min-w-[240px] flex-col gap-1 font-sans text-base text-blue-gray-700">
          <ul className="text-2xl uppercase text-off-white gap-4 space-y-6">
            <li>
              <motion.button
                whileHover={{
                  scaleX: 1.1
                }}
              >
                <Link
                  className="block font-semibold uppercase"
                  href="/case-studies"
                  onClick={onClose}
                >
                  Case Studies
                </Link>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{
                  scaleX: 1.1
                }}
              >
                <Link
                  className="block font-semibold uppercase"
                  href="/SammyRPResume.pdf"
                  onClick={onClose}
                >
                  Resume
                </Link>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{
                  scaleX: 1.1
                }}
              >
                <Link
                  className="block font-semibold uppercase"
                  href="/about"
                  onClick={onClose}
                >
                  About
                </Link>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{
                  scaleX: 1.1
                }}
              >
                <Link
                  className="block font-semibold uppercase"
                  href="https://www.linkedin.com/in/sammy-robens-paradise/"
                  onClick={onClose}
                >
                  LinkedIn
                </Link>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{
                  scaleX: 1.1
                }}
              >
                <Link
                  className="block font-semibold uppercase"
                  href="https://github.com/SammyRobensParadise"
                  onClick={onClose}
                >
                  GitHub
                </Link>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{
                  scaleX: 1.1
                }}
              >
                <Link
                  className="block font-semibold uppercase"
                  href="https://dribbble.com/sammyrp"
                  onClick={onClose}
                >
                  Dribbble
                </Link>
              </motion.button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  )
}
