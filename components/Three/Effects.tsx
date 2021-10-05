import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { extend, useFrame, useThree, createPortal, ReactThreeFiber } from '@react-three/fiber'
import {
  EffectComposer,
  ShaderPass,
  RenderPass,
  UnrealBloomPass,
  FilmPass
} from 'three-stdlib'

import WaterPass from './WaterPass'
import EffectPass from './EffectPass'
import state from './Store'
import { Vector2 } from 'three'


declare global {
  namespace JSX {
    interface IntrinsicElements {
      effectComposer: ReactThreeFiber.Object3DNode<EffectComposer, typeof EffectComposer>
      renderPass: ReactThreeFiber.Object3DNode<RenderPass, typeof RenderPass>
      unrealBloomPass: ReactThreeFiber.Object3DNode<UnrealBloomPass, typeof UnrealBloomPass>
      effectPass: ReactThreeFiber.Object3DNode<EffectPass, typeof EffectPass>
      waterPass: ReactThreeFiber.Object3DNode<WaterPass, typeof WaterPass>

    }
  }


extend({
  EffectComposer,
  ShaderPass,
  RenderPass,
  WaterPass,
  UnrealBloomPass,
  FilmPass,
  EffectPass
})

export default function Effects({ children }: { children: React.ReactNode }) {
  const [scene] = useState(() => new THREE.Scene())
  const composer = useRef<ReactThreeFiber.Object3DNode<EffectComposer,typeof EffectComposer>>(null)
  const effect = useRef<ReactThreeFiber.Object3DNode<EffectPass, typeof EffectPass>>(null)
  const water = useRef<ReactThreeFiber.Object3DNode<WaterPass, typeof WaterPass>>(null)
  const bloom = useRef<ReactThreeFiber.Object3DNode<UnrealBloomPass, typeof UnrealBloomPass>>(null)
  const { gl, size, camera } = useThree()
  let last = state.top.current
  useEffect(() => {
    if (composer.current && composer.current.setSize) {
      composer.current.setSize(size.width, size.height)
    }
  }, [size])
  useFrame(() => {
    const { top } = state
    if(effect.current){
      effect.current.factor = THREE.MathUtils.lerp(
        effect.current.factor,
        (top.current - last) / -30,
        0.1
      );
    }

    if(bloom.current){
      bloom.current.strength = THREE.MathUtils.lerp(
        bloom.current.strength,
        Math.abs((top.current - last) / 200),
        0.1
      )
    }
if(water.current){
  
}
    water.current.factor = THREE.MathUtils.lerp(
      water.current.factor,
      Math.abs((top.current - last) / 30),
      0.1
    )
    last = top.current
    gl.autoClear = true
    composer.current.render()
  }, 1)

  return createPortal(
    <>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass
          attachArray="passes"
          ref={bloom}
          args={[new Vector2(), 0.0, 1, 0.0]}
        />
        <effectPass attachArray="passes" ref={effect} />
        <waterPass attachArray="passes" ref={water} />
      </effectComposer>
      {children}
    </>,
    scene
  )
}
