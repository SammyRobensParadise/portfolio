import { PropsWithChildren, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export interface ThreeState {
  height?: number
  width?: number
  attributes?: Record<string, unknown>
  classNames?: string
}

export default function ThreeStage(
  props: PropsWithChildren<ThreeState>
): JSX.Element {
  const { children, attributes, height, width, classNames = '' } = props
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 0], fov: 20 }}
      shadows
      {...attributes}
      style={{ height, width }}
      className={classNames}
    >
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
      <directionalLight
        castShadow
        position={[3, 10, 10]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  )
}
