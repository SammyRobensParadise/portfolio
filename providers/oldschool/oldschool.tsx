import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useCallback,
  useEffect
} from 'react'

const HAS_SEEN_INTRO = 'has_seen_intro'

export interface OldSchoolInterface {
  state: { react95Visible: boolean; glitchVisible: boolean }
  hideReact95: () => void
  showReact95: () => void
  toggleReact95: () => void
  hideGlitch: () => void
  showGlitch: () => void
  toggleGlitch: () => void
}

/**
 * Context to manage whether to
 * show the old windows 95 theme
 * or the new polished portfolio
 */
export const OldSchoolContext = createContext<OldSchoolInterface | null>(null)

/**
 * Hook to use the theme provider
 * for the old school look
 */
export const useOldSchool = (): OldSchoolInterface | null =>
  useContext(OldSchoolContext)

/**
 * theme provider for old school
 */
export default function OldSchoolProvider(
  props: PropsWithChildren<React.ReactNode>
): JSX.Element {
  const { children } = props
  const [react95Visible, updateReact95Visible] = useState<boolean>(true)
  const [glitchVisible, updateGlitchVisible] = useState<boolean>(true)

  useEffect(() => {
    const hasSeenIntro: string | null =
      window?.sessionStorage?.getItem(HAS_SEEN_INTRO)
    if (hasSeenIntro?.length) {
      updateReact95Visible(false)
      updateGlitchVisible(false)
    }
  }, [updateReact95Visible, updateGlitchVisible])

  useEffect(() => {
    if (!react95Visible && !glitchVisible) {
      window.sessionStorage.setItem(HAS_SEEN_INTRO, 'true')
    }
  }, [react95Visible, glitchVisible])

  const hideReact95 = useCallback(() => {
    updateReact95Visible(false)
  }, [updateReact95Visible])

  const showReact95 = useCallback(() => {
    updateReact95Visible(true)
  }, [updateReact95Visible])

  const toggleReact95 = useCallback(() => {
    updateReact95Visible((prevState: boolean) => !prevState)
  }, [updateReact95Visible])

  const hideGlitch = useCallback(() => {
    updateGlitchVisible(false)
    updateReact95Visible(false)
  }, [updateGlitchVisible])

  const showGlitch = useCallback(() => {
    updateGlitchVisible(true)
  }, [updateGlitchVisible])

  const toggleGlitch = useCallback(() => {
    updateGlitchVisible((prevState: boolean) => !prevState)
  }, [updateGlitchVisible])

  const OldSchoolContextFrame = useCallback(
    () => ({
      state: { react95Visible, glitchVisible },
      hideReact95,
      showReact95,
      toggleReact95,
      toggleGlitch,
      showGlitch,
      hideGlitch
    }),
    [
      react95Visible,
      hideReact95,
      showReact95,
      toggleReact95,
      glitchVisible,
      showGlitch,
      hideGlitch,
      toggleGlitch
    ]
  )

  return (
    <OldSchoolContext.Provider value={OldSchoolContextFrame()}>
      {children}
    </OldSchoolContext.Provider>
  )
}
