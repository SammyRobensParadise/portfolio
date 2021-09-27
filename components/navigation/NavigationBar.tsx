import React, { ReactElement } from 'react'
import Link from 'next/link'

import Puzzle from '../../global/assets/puzzle.svg'
import Icon from '../../global/assets/Icon.svg'
import { RESUME_FILE_NAME } from '../../global/constants/constants'

const NavigationBar = (): ReactElement => (
  <div className="text-cerulaen dark:text-off-white grid grid-cols-3 gap-16 p-6 text-lg font-work font-normal">
    <div className="flex flex-row">
      <Link href="/" passHref>
        <Icon />
      </Link>
    </div>
    <div className="text-center flex flex-row space-x-4 justify-center hover:underline cursor-pointer pt-2">
      <Link href="/" passHref>
        <>
          <Puzzle />
          <p>Sammy Robens-Paradise</p>
        </>
      </Link>
    </div>
    <div className="flex flex-row justify-end space-x-4 pt-2">
      <Link href={RESUME_FILE_NAME} passHref>
        <p className="hover:underline transition-all cursor-pointer">Résume</p>
      </Link>
      <Link href="/projects" passHref>
        <p className="hover:underline cursor-pointer">Projects</p>
      </Link>
      <Link href="/work" passHref>
        <p className="hover:underline cursor-pointer">Work</p>
      </Link>
      <Link href="/about" passHref>
        <p className="hover:underline cursor-pointer">About</p>
      </Link>
    </div>
  </div>
)

export default NavigationBar
