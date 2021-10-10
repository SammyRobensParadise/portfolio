import { ShaderMaterial, Color, IUniform, Texture } from 'three'
import { extend } from '@react-three/fiber'

class CustomMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        tex: { value: null },
        hasTexture: { value: false },
        scale: { value: 0 },
        shift: { value: 0 },
        opacity: { value: 1 },
        color: { value: new Color('#fff') }
      },
      vertexShader: `uniform float scale;
      uniform float shift;
      varying vec2 vUv;
      void main() {
        vec3 pos = position;
        pos.x = pos.x + ((sin(uv.y * 3.1415926535897932384626433832795) * shift * 2.0) * 0.125);
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
      }`,
      fragmentShader: `uniform sampler2D tex;
      uniform float hasTexture;
      uniform float shift;
      uniform float scale;
      uniform vec3 color;
      uniform float opacity;
      varying vec2 vUv;
      void main() {
        float angle = 0.0;
        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);
        vec2 offset = 0.0 * vec2(cos(angle), sin(angle));
        vec4 cr = texture2D(tex, p + offset);
        vec4 cga = texture2D(tex, p);
        vec4 cb = texture2D(tex, p - offset);
        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
        else gl_FragColor = vec4(color, opacity);
      }`
    })
  }

  set scale(value) {
    this.uniforms.scale.value = value
  }

  get scale() {
    return this.uniforms.scale.value
  }

  set shift(value) {
    this.uniforms.shift.value = value
  }

  get shift() {
    return this.uniforms.shift.value
  }

  set map(value) {
    this.uniforms.hasTexture.value = !!value
    this.uniforms.tex.value = value
  }

  get map() {
    return this.uniforms ? this.uniforms.tex.value : new Texture()
  }

  set color(value) {
    this.uniforms.color.value = value
  }

  get color() {
    return this.uniforms ? this.uniforms.color.value : new Color('#ffffff')
  }

  get opacityUniforms() {
    return this.uniforms.opacity.value
  }

  set opacityUniforms(value) {
    if (this.uniforms) this.uniforms.opacity.value = value
  }
}

extend({ CustomMaterial })
