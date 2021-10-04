/**
 * Global animation helpers
 */

export function cubicBezier(
  x: number,
  y: number,
  z: number,
  t: number
): string {
  return `cubic-bezier(${x},${y},${z},${t})`
}

export function animate(
  duration: 0 | 250 | 500 | 1000 | 2500,
  delay?: 0 | 250 | 500 | 1000 | 2500
): string {
  return `transform transition duration-${duration} ${
    delay ? `delay-${delay}` : ''
  }`
}

export function easeOutSine(
  t: number,
  b: number,
  c: number,
  d: number
): number {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b
}

export function easeOutQuad(
  t: number,
  b: number,
  c: number,
  d: number
): number {
  // eslint-disable-next-line no-param-reassign
  t /= d
  return -c * t * (t - 2) + b
}
