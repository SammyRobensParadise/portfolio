/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/ban-types */
import React, { PropsWithChildren } from 'react'

import OldSchoolProvider, { useOldSchool } from './oldschool'

const OldSchool = (props: PropsWithChildren<unknown>): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div {...props} className="oldschool-wrapper" />
)
OldSchool.Provider = (props: PropsWithChildren<{}>) => (
  <OldSchoolProvider>{props?.children}</OldSchoolProvider>
)

OldSchool.useOldSchool = useOldSchool

export default OldSchool
