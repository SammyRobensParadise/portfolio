import React from 'react'

import Linkedin from '../../global/assets/linkedin.svg'
import Github from '../../global/assets/github.svg'
import Dribbble from '../../global/assets/dribbble.svg'
import Medium from '../../global/assets/medium.svg'
import constants from '../../global/constants/constants'

const Sidebar = (): JSX.Element => (
  <div className="fixed right-12 bottom-1/3 flex flex-col text-cerulaen dark:text-off-white space-y-8 z-50">
    <a href={constants.urls.LINKEDIN_URL}>
      <Linkedin />
    </a>
    <a href={constants.urls.GITHUB_URL}>
      <Github />
    </a>
    <a href={constants.urls.DRIBBBLE_URL}>
      <Dribbble />
    </a>
    <a href={constants.urls.MEDIUM_URL}>
      <Medium />
    </a>
  </div>
)

export default Sidebar
