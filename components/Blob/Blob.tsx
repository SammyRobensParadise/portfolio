import React, { useState, useEffect, useRef, useCallback } from 'react'

import Blob, { Point } from './blobCreator'

const BlobElement = ({
  width = window.innerWidth,
  height = window.innerHeight,
  color = '#2B2B2B',
  radius = 200,
  className = ''
}: {
  width?: number
  height?: number
  color?: string
  radius?: number
  className?: string
}): JSX.Element => {
  const [blob, setBlob] = useState<Blob | null>(null)
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const [hover, updateHover] = useState<boolean>(false)
  const [oldMousePoint] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  })

  const resize = useCallback((): void => {
    if (canvas.current) {
      canvas.current.width = window.innerWidth
      canvas.current.height = window.innerHeight
    }
  }, [canvas])

  const mouseMove = useCallback(
    (e: MouseEvent) => {
      if (blob) {
        const pos = blob.center
        const diff = { x: e.clientX - pos.x, y: e.clientY - pos.y }
        const dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y)
        let angle: null | number = null

        blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY }

        if (dist < blob.radius && hover === false) {
          const vector = { x: e.clientX - pos.x, y: e.clientY - pos.y }
          angle = Math.atan2(vector.y, vector.x) + Math.random()
          updateHover(true)
        } else if (dist > blob.radius && hover === true) {
          const vector = { x: e.clientX - pos.x, y: e.clientY - pos.y }
          angle = Math.atan2(vector.y, vector.x) + Math.random()
          updateHover(false)
          blob.color = null
        }

        if (typeof angle === 'number') {
          let nearestPoint: null | Point = null
          let distanceFromPoint = 100

          blob.points.forEach((point: Point) => {
            if (angle) {
              if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
                // console.log(point.azimuth, angle, distanceFromPoint);
                nearestPoint = point
                distanceFromPoint = Math.abs(angle - point.azimuth)
              }
            }
          })

          if (nearestPoint) {
            let strength: { x: number; y: number } | number = {
              x: oldMousePoint.x - e.clientX,
              y: oldMousePoint.y - e.clientY
            }
            strength =
              Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10
            if (strength > 100) strength = 100
            nearestPoint = nearestPoint as Point
            nearestPoint.acceleration = (strength / 100) * (hover ? -1 : 1)
          }
        }

        oldMousePoint.x = e.clientX
        oldMousePoint.y = e.clientY
      }
    },
    [blob, hover, oldMousePoint]
  )

  useEffect(() => {
    setBlob(new Blob())
  }, [setBlob])

  useEffect(() => {
    if (blob) {
      if (canvas.current) {
        blob.canvas = canvas.current
        blob.radius = radius
        blob.color = color
      }
    }
  }, [blob, color, radius])

  useEffect(() => {
    if (blob?.canvas) {
      blob?.init()
      blob.render()
    }
  }, [blob])

  useEffect(() => {
    document.addEventListener('resize', resize)
    return () => {
      document.removeEventListener('resize', resize)
    }
  }, [resize])
  useEffect(() => {
    document.addEventListener('mousemove', mouseMove)
    return () => {
      document.removeEventListener('mousemove', mouseMove)
    }
  }, [mouseMove])
  return (
    <canvas
      touch-action="none"
      ref={canvas}
      width={width}
      height={height}
      className={className}
    />
  )
}

export default BlobElement
