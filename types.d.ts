import * as React from 'react'

declare module 'react95'
declare module 'react95/dist/themes/original'
declare module 'postprocessing'
declare module 'lerp'
declare module 'react-curtains'
declare module 'curtainsjs'
declare module 'troika-three-text'
declare module 'react-animated-cursor'
declare module 'use-animation-frame' {
  export default function useAnimationFrame(
    callback: ({ time, delta }: { time: number; delta: number }) => void,
    dependencies: Array<T>
  )
}

declare module '*.glsl' {
  const file: string
  export default file
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      simulationMaterial: React.MutableRefObject<
        React.HTMLAttributes<unknown>,
        HTMLElement
      >
    }
  }
}
