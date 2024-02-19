import { MotionValue, useTransform } from 'framer-motion'

export default function useParallax(
  value: MotionValue<number>,
  distance: number,
  inputRange: [number, number] = [0, 1]
): MotionValue<number> {
  return useTransform(value, inputRange, [-distance, distance])
}
