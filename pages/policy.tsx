import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Transition } from '@headlessui/react'

import { animate, cubicBezier } from '../global/helpers/animation'

const Policy: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Policy</title>
    </Head>
    <div>
      <div className="w-screen bg-off-white dark:bg-shadow relative space-y-6 pb-12 h-screen">
        <Transition
          className="px-40 relative block"
          show
          appear
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opaciy-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <h1 className="text-cerulaen dark:text-off-white font-work font-extrabold text-7xl w-2/3 z-20 tracking-tighter text-left relative">
            Policy
          </h1>
        </Transition>
        <Transition
          className="px-40"
          show
          appear
          enter={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          leave={`${animate(1000, 0)} ${cubicBezier(0.97, 0.03, 0.36, 0.45)}`}
          enterFrom="opacity-0"
          enterTo="opaciy-100"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div className="space-y-4 py-4">
            <p className="text-shadow dark:text-off-white text-lg">
              It is Sammy Robens-Paradise&apos;s policy to respect your privacy
              regarding any information we may collect while operating my
              website. This Privacy Policy applies to https://sammy.world
              (hereinafter, &quot;us&quot;, &quot;we&quot;, or
              &quot;https://sammy.world&quot;). We/I respect your privacy and
              are committed to protecting personally identifiable information
              you may provide us through the Website. We/I have adopted this
              privacy policy (&quot;Privacy Policy&quot;) to explain what
              information may be collected on my Website, how we/I use this
              information, and under what circumstances we may disclose the
              information to third parties. This Privacy Policy applies only to
              information we/I collect through the Website and does not apply to
              my collection of information from other sources. This Privacy
              Policy, together with the Terms and conditions posted on our/my
              Website, set forth the general rules and policies governing your
              use of our/my Website. Depending on your activities when visiting
              my Website, you may be required to agree to additional terms and
              conditions.
            </p>
            <p className="text-shadow dark:text-off-white text-lg">
              To enrich and perfect your online experience, Sammy
              Robens-Paradise uses &quot;Cookies&quot;, similar technologies and
              services provided by others to display personalized content,
              appropriate advertising and store your preferences on your
              computer. A cookie is a string of information that a website
              stores on a visitor&apos;s computer, and that the visitor&apos;s
              browser provides to the website each time the visitor returns.
              Sammy Robens-Paradise uses cookies to help Sammy Robens-Paradise
              identify and track visitors, their usage of https://sammy.world,
              and their website access preferences. Sammy Robens-Paradise
              visitors who do not wish to have cookies placed on their computers
              should set their browsers to refuse cookies before using Sammy
              Robens-Paradise&apos;s websites, with the drawback that certain
              features of Sammy Robens-Paradise&apos;s websites may not function
              properly without the aid of cookies. By continuing to navigate
              our/my website without changing your cookie settings, you hereby
              acknowledge and agree to Sammy Robens-Paradise&apos;s use of
              cookies. © 2021 Sammy Robens-Paradise Thank you.
            </p>
            <p className="text-shadow dark:text-off-white text-lg">
              {`© ${new Date()
                .getFullYear()
                .toString()} Sammy Robens-Paradise Thank you.`}
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </>
)

export default Policy
