import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useCallback
} from 'react'

export interface OldSchoolInterface {
  state: boolean
  hideOldSchool: () => void
  showOldSchool: () => void
  undoOldSchool: () => void
}

/**
 * Context to manage whether to
 * show the old windows 95 theme
 * or the new polished portfolio
 */
export const OldSchoolContext = createContext<OldSchoolInterface | null>(null)

/**
 * Hool to use the theme provider
 * for the old school look
 */
export const useOldSchool = useContext(OldSchoolContext)

/**
 * theme provider for old school
 */
export default function OldSchoolProvider(props: PropsWithChildren<{}>) {
  const { children } = props
  const [oldSchoolVisible, updateShowOldSchool] = useState<boolean>(true)

  const hideOldSchool = useCallback(() => {
    updateShowOldSchool(false)
  }, [])

  const showOldSchool = useCallback(() => {
    updateShowOldSchool(true)
  }, [])

  const undoOldSchool = useCallback(() => {
    updateShowOldSchool((prevState: boolean) => !prevState)
  }, [])

  const OldSchoolContextFrame = useCallback(() => {
    return {
      state: oldSchoolVisible,
      hideOldSchool: hideOldSchool,
      showOldSchool: showOldSchool,
      undoOldSchool: undoOldSchool
    }
  }, [oldSchoolVisible, hideOldSchool, showOldSchool, undoOldSchool])

  return (
    <OldSchoolContext.Provider value={OldSchoolContextFrame()}>
      {children}
    </OldSchoolContext.Provider>
  )
}
