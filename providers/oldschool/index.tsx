import React, { PropsWithChildren } from 'react'
import OldSchoolProvider, { useOldSchool } from './oldschool'

const OldSchool = (props: PropsWithChildren<{}>) => (
  <div {...props} className="oldschool-wrapper" />
)
OldSchool.Provider = (props: PropsWithChildren<{}>) => (
  <OldSchoolProvider>{props.children}</OldSchoolProvider>
)

OldSchool.useOldSchool = useOldSchool

export default OldSchool
