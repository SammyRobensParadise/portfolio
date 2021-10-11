import React, { useCallback, useEffect, useRef, useState } from 'react'

export interface PointInterface {
  azimuth: number
  components: { x: number; y: number }
  acceleration: number
  speed: number
  position: { x: number; y: number }
  friction: number
  elasticity: number
  radialEffect: number
  solveWith(leftPoint: PointInterface, rightPoint: PointInterface): void
}

export function Point({
  az,
  parent
}: {
  az: number
  parent: { radius: number; center: { x: number; y: number } }
}): PointInterface {
  const azimuth = Math.PI - az
  const components = {
    x: Math.cos(azimuth),
    y: Math.sin(azimuth)
  }
  const speed = 1
  const friction = 0.0085
  const radialEffect = speed * 5
  const position = {
    x: parent.center.x + components.x * (parent.radius + radialEffect),
    y: parent.center.y + components.y * (parent.radius + radialEffect)
  }
  const elasticity = 0.001
  let acceleration = -0.3 + Math.random() * 0.6

  function solveWith(
    leftPoint: PointInterface,
    rightPoint: PointInterface
  ): void {
    acceleration =
      (-0.3 * radialEffect +
        (leftPoint.radialEffect - radialEffect) +
        (rightPoint.radialEffect - radialEffect)) *
        elasticity -
      speed * friction
  }
  return {
    azimuth,
    components,
    acceleration,
    speed,
    position,
    friction,
    elasticity,
    radialEffect,
    solveWith
  }
}
const oldMousePoint = { x: 0, y: 0 }

export default function Blob(): JSX.Element {
  const canvas = useRef<null | HTMLCanvasElement>(null)
  const [ctx, updateCtx] = useState<null | CanvasRenderingContext2D>(null)
  const [numPoints] = useState<number>(360)
  const [radius] = useState<number>(150)
  const [position] = useState<{ x: number; y: number }>({
    x: 200,
    y: 0
  })
  const [divisional] = useState<number>(Math.PI / numPoints)
  const [center, updateCenter] = useState<{ x: number; y: number }>({
    x: position.x,
    y: position.y
  })
  const [points, updatePoints] = useState<PointInterface[]>([])
  const [mousePos, updateMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  })

  const [hover, updateHover] = useState<boolean>(false)
  useEffect(() => {
    if (canvas.current) {
      updateCenter({
        x: canvas.current.width / 2,
        y: canvas.current.height / 2
      })
    }
  }, [position.x, position.y])

  useEffect(() => {
    for (let i = 0; i <= numPoints; i += 1) {
      const newPoint = Point({
        az: divisional * (i + 1),
        parent: { radius, center }
      })
      updatePoints((p) => [...p, newPoint])
    }
  }, [center, divisional, numPoints, radius])

  useEffect(() => {
    if (canvas.current) {
      updateCtx(canvas.current.getContext('2d'))
    }
  }, [canvas])
  const handleBlob = useCallback(() => {
    if (ctx && canvas.current && points.length) {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
      points[0].solveWith(points[numPoints - 1], points[1])
      const p0 = points[numPoints - 1].position
      let p1 = points[0].position
      const sp2 = p1
      ctx.beginPath()
      ctx.moveTo(center.x, center.y)
      ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2)
      for (let i = 1; i <= numPoints; i += 1) {
        points[i].solveWith(points[i - 1], points[i + 1] || points[0])

        const p2 = points[i].position
        const xc = (p1.x + p2.x) / 2
        const yc = (p1.y + p2.y) / 2
        ctx.quadraticCurveTo(p1.x, p1.y, xc, yc)
        ctx.lineTo(p2.x, p2.y)
        ctx.fillStyle = '#000000'
        p1 = p2
      }

      const xc = (p1.x + sp2.x) / 2
      const yc = (p1.y + sp2.y) / 2
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc)
      ctx.fillStyle = '#000000'
      ctx.fill()
      ctx.strokeStyle = '#000000'
    }
  }, [numPoints, points, center, ctx])

  const mouseMove = (e: MouseEvent) => {
    const pos = center
    const diff = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    const dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y)
    let angle: number | null = null

    updateMousePos({ x: pos.x - e.clientX, y: pos.y - e.clientY })

    if (dist < radius && hover === false) {
      const vector = { x: e.clientX - pos.x, y: e.clientY - pos.y }
      angle = Math.atan2(vector.y, vector.x)
      updateHover(true)
      // blob.color = '#77FF00';
    } else if (dist > radius && hover === true) {
      const vector = { x: e.clientX - pos.x, y: e.clientY - pos.y }
      angle = Math.atan2(vector.y, vector.x)
      updateHover(false)
      // color = null
    }

    if (typeof angle === 'number') {
      let nearestPoint: PointInterface | null = null
      let distanceFromPoint = 100

      points.forEach((point) => {
        if (angle && Math.abs(angle - point.azimuth) < distanceFromPoint) {
          // console.log(point.azimuth, angle, distanceFromPoint);
          nearestPoint = point
          distanceFromPoint = Math.abs(angle - point.azimuth)
        }
      })

      if (nearestPoint) {
        const strength = {
          x: oldMousePoint.x - e.clientX,
          y: oldMousePoint.y - e.clientY
        }
        let magnitudeStrength =
          Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10
        if (magnitudeStrength > 100) magnitudeStrength = 100
        // @ts-expect-error ubde
        nearestPoint.acceleration = (magnitudeStrength / 100) * (hover ? -1 : 1)
      }
    }

    oldMousePoint.x = e.clientX
    oldMousePoint.y = e.clientY
  }
  useEffect(() => {
    handleBlob()
  }, [handleBlob])
  useEffect(() => {
    requestAnimationFrame(handleBlob)
  }, [handleBlob])

  useEffect(() => {
    document.addEventListener('mousemove', () => {
      console.log('ouse')
    })
  }, [handleBlob])
  return (
    <canvas
      style={{ position: 'fixed' }}
      ref={canvas}
      touch-action="none"
      width={window.innerWidth}
      height={window.innerHeight}
      className="van"
    />
  )
}
