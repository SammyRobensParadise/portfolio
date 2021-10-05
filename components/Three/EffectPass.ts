import {
  Mesh,
  OrthographicCamera,
  PlaneBufferGeometry,
  Scene,
  ShaderMaterial,
  Texture,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget
} from 'three'
import { Pass } from 'three/examples/jsm/postprocessing/Pass'

const shader = {
  vertexShader: `uniform float scale;
      uniform float factor;
      varying vec2 vUv;
      void main() {
        vec3 pos = position;
        pos.x = pos.x + ((sin(uv.y * 3.1415926535897932384626433832795) * factor * 2.0) * 0.125);
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
      }`,
  fragmentShader: `uniform sampler2D tex;
      uniform float factor;
      uniform float scale;
      varying vec2 vUv;
      void main() {
        float angle = 0.0;
        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);
        vec2 offset = factor / 50.0 * vec2(cos(angle), sin(angle));
        vec4 cr = texture2D(tex, p + offset);
        vec4 cga = texture2D(tex, p);
        vec4 cb = texture2D(tex, p - offset);
        gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
      }`,
  uniforms: {
    byp: { value: 0 },
    tex: { value: null },
    scale: { value: 0 },
    factor: { value: 0 },
    resolution: { value: new Vector2(64, 64) }
  }
}

export type EffectUniforms = {
  byp: { value: number }
  tex: { value: null | Texture }
  scale: { value: number }
  factor: { value: number }
  resolution: { value: Vector2 }
}

export default class EffectPass extends Pass {
  uniforms: EffectUniforms

  camera: OrthographicCamera

  scene: Scene

  quad: Mesh

  factor: number

  material: ShaderMaterial

  constructor(dt_size = 64) {
    super()
    this.uniforms = UniformsUtils.clone(shader.uniforms) as EffectUniforms
    this.uniforms.resolution.value = new Vector2(dt_size, dt_size)
    this.material = new ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader
    })
    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)
    this.scene = new Scene()
    this.quad = new Mesh(new PlaneBufferGeometry(2, 2, 1, 1))
    this.quad.frustumCulled = false // Avoid getting clipped
    this.scene.add(this.quad)
    this.factor = 0
  }

  render(
    renderer: WebGLRenderer,
    writeBuffer: WebGLRenderTarget,
    readBuffer: WebGLRenderTarget
  ): void {
    const factor = Math.max(0, this.factor)
    this.uniforms.byp.value = factor ? 0 : 1
    this.uniforms.tex.value = readBuffer.texture
    this.uniforms.factor.value = this.factor
    this.quad.material = this.material
    if (this.renderToScreen) {
      renderer.setRenderTarget(null)
      renderer.render(this.scene, this.camera)
    } else {
      renderer.setRenderTarget(writeBuffer)
      if (this.clear) renderer.clear()
      renderer.render(this.scene, this.camera)
    }
  }
}
