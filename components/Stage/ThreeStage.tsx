import { PropsWithChildren, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export interface ThreeState {
  height?: number
  width?: number
  attributes?: Record<string, unknown>
}

export default function ThreeStage(
  props: PropsWithChildren<ThreeState>
): JSX.Element {
  const { children, attributes, height, width } = props
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 0], fov: 20 }}
      shadows
      {...attributes}
      style={{ height, width }}
    >
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
      <directionalLight
        castShadow
        position={[3, 4, 10]}
        intensity={0.5}
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
