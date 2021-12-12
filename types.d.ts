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
