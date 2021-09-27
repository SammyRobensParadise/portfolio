import React, { ReactElement } from 'react'
import Link from 'next/link'

import constants from '../../global/constants/constants'
import Chat from '../../global/assets/chat.svg'

const Footer = (): ReactElement => (
  <div className="text-off-white dark:text-cerulaen bg-cerulaen dark:bg-off-white p-6 text-lg font-work font-normal">
    <div className="justify-center text-center flex flex-row space-x-8 p-4">
      <div className="font-extralight hover:underline hover:cursor-pointer">
        <a href={constants?.urls?.LINKEDIN_URL}>linkedin.com/sammy</a>
      </div>
      <div className="font-bold flex flex-row ">
        <button
          type="button"
          className="font-bold flex flex-row space-x-4 text-xl"
        >
          <div>GET IN TOUCH</div>
          <Chat />
        </button>
      </div>
      <div className="font-extralight hover:underline hover:cursor-pointer">
        <a
          href="mailto:srobenspardise@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          srobenspardise@gmail.com
        </a>
      </div>
    </div>
    <div className="grid grid-cols-3 col p-4 text-lg font-extralight">
      <div className="flex flex-row">
        <Link href="/policy" passHref>
          <p className="hover:underline transition-all cursor-pointer">
            Policy
          </p>
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <p>
          {`© ${new Date().getFullYear().toString()} Designed & Developed by
          Sammy R-Paradise `}
        </p>
      </div>
      <div className="flex flex-row justify-end">
        <a
          className="hover:underline transition-all cursor-pointer"
          href={constants.urls.GITHUB_REPO_URL}
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
)

export default Footer
