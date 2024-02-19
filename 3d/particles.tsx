/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { OrbitControls, useFBO } from '@react-three/drei'
import {
  MinificationTextureFilter,
  MagnificationTextureFilter,
  TextureDataType
} from '@react-three/drei/node_modules/@types/three/src/constants'
import { Canvas, useFrame, extend, createPortal } from '@react-three/fiber'
import { Ref, useMemo, useRef } from 'react'
import * as THREE from 'three'

import vertexShader from '../shaders/vertexShader.glsl'
import fragmentShader from '../shaders/fragments.glsl'

import SimulationMaterial from './simulationMaterial'
import Brain from './brain'

extend({ SimulationMaterial })

const FBOParticles = () => {
  const size = 128

  const points = useRef<
    | THREE.Points<
        THREE.BufferGeometry,
        THREE.ShaderMaterial | THREE.ShaderMaterial[]
      >
    | undefined
  >()
  const simulationMaterialRef = useRef()

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / 2 ** 53, 1)
  const positions = new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0
  ])
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0])

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter as MinificationTextureFilter,
    magFilter: THREE.NearestFilter as MagnificationTextureFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType as TextureDataType
  })

  const particlesPosition = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      const i3 = i * 3
      particles[i3 + 0] = (i % size) / size
      particles[i3 + 1] = i / size / size
    }
    return particles
  }, [size])

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null
      }
    }),
    []
  )

  useFrame((state) => {
    const { gl, clock } = state

    gl.setRenderTarget(renderTarget)
    gl.clear()
    gl.render(scene, camera)
    gl.setRenderTarget(null)

    if (points?.current?.material) {
      // @ts-ignore
      points.current.material.uniforms.uPositions.value = renderTarget.texture
      // @ts-ignore
      simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime
    }
  })

  return (
    <>
      {createPortal(
        <mesh castShadow>
          <simulationMaterial ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points
        ref={
          points as
            | Ref<
                THREE.Points<
                  THREE.BufferGeometry,
                  THREE.ShaderMaterial | THREE.ShaderMaterial[]
                >
              >
            | undefined
        }
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  )
}

const Particles = (): JSX.Element => (
  <Canvas camera={{ position: [1.5, 1.5, 0] }} shadows className="particles">
    <ambientLight intensity={2} color="#273958" />
    <directionalLight color="#FFFCA5" position={[3, 10, 25]} intensity={2.5} />
    <Brain scale={0.08} position={[0, 0, 0]} shadow />
    <FBOParticles />
    <OrbitControls enableZoom={false} enablePan={false} />
  </Canvas>
)

export default Particles
