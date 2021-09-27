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
