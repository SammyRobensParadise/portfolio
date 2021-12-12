import { useEffect, useCallback } from 'react'
import { useController } from 'react-scroll-parallax'

export default function useResizeParalax(): void {
  const { parallaxController } = useController()
  const handleResize = useCallback(() => {
    parallaxController.update()
  }, [parallaxController])

  const resize = useCallback((): void => {
    handleResize()
  }, [handleResize])

  useEffect(() => {
    handleResize()
  }, [handleResize])
  useEffect(() => {
    document.addEventListener('resize', resize)
    return () => {
      document.removeEventListener('resize', resize)
    }
  }, [resize])
}
