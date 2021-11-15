import { PropsWithChildren, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

export default function Stage(
  props: PropsWithChildren<Record<string, string | number>>
): JSX.Element {
  const { children } = props
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 1.1], fov: 50 }}>
      <ambientLight intensity={2} />
      <spotLight
        position={[1, 6, 1.5]}
        angle={0.2}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <spotLight
        position={[-5, 5, -1.5]}
        angle={0.03}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight
        position={[5, 5, -5]}
        angle={0.3}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={[256, 256]}
        color="#c0ffc5"
      />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  )
}
