import { useEffect, useId, useRef, useState } from 'react'

/*
 * Liquid glass, done for real.
 *
 * The backdrop is blurred and then bent through an SVG displacement map that is
 * generated from the signed distance field of the element's rounded rectangle.
 * That is the same optical trick as the Apple material: the centre stays clear,
 * while the rim pulls the background inwards and slightly magnifies it.
 */

const mapCache = new Map()

function smoothstep(edge0, edge1, value) {
  const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}

function roundedRectSdf(x, y, halfWidth, halfHeight, radius) {
  const qx = Math.abs(x) - halfWidth + radius
  const qy = Math.abs(y) - halfHeight + radius
  return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - radius
}

function buildDisplacementMap(width, height, radius, band) {
  const scale = Math.min(1, 460 / Math.max(width, height))
  const w = Math.max(8, Math.round(width * scale))
  const h = Math.max(8, Math.round(height * scale))
  const key = `${w}x${h}:${Math.round(radius * scale)}:${Math.round(band * scale)}`
  if (mapCache.has(key)) return mapCache.get(key)

  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const context = canvas.getContext('2d')
  if (!context) return ''

  const image = context.createImageData(w, h)
  const data = image.data
  const halfWidth = width / 2
  const halfHeight = height / 2
  const safeRadius = Math.max(0, Math.min(radius, Math.min(halfWidth, halfHeight)))
  const safeBand = Math.max(2, Math.min(band, Math.min(halfWidth, halfHeight)))
  const step = 1.35 / scale

  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const px = (x + 0.5) / scale - halfWidth
      const py = (y + 0.5) / scale - halfHeight
      const distance = -roundedRectSdf(px, py, halfWidth, halfHeight, safeRadius)
      const falloff = smoothstep(0, 1, 1 - Math.max(0, distance) / safeBand)

      // Outward normal of the SDF, then flip it so the rim samples the centre.
      const nx = roundedRectSdf(px + step, py, halfWidth, halfHeight, safeRadius) - roundedRectSdf(px - step, py, halfWidth, halfHeight, safeRadius)
      const ny = roundedRectSdf(px, py + step, halfWidth, halfHeight, safeRadius) - roundedRectSdf(px, py - step, halfWidth, halfHeight, safeRadius)
      const length = Math.hypot(nx, ny) || 1
      const vx = (-nx / length) * falloff
      const vy = (-ny / length) * falloff

      const index = (y * w + x) * 4
      data[index] = Math.round((vx * 0.5 + 0.5) * 255)
      data[index + 1] = Math.round((vy * 0.5 + 0.5) * 255)
      data[index + 2] = 128
      data[index + 3] = 255
    }
  }

  context.putImageData(image, 0, 0)
  const url = canvas.toDataURL()
  if (mapCache.size > 24) mapCache.delete(mapCache.keys().next().value)
  mapCache.set(key, url)
  return url
}

export default function LiquidGlass({
  as: Tag = 'div',
  children,
  className = '',
  style,
  radius = 999,
  blur = 12,
  saturation = 165,
  strength = 34,
  band,
  tint = 'var(--glass-tint)',
  sheen = true,
  ...rest
}) {
  const ref = useRef(null)
  const rawId = useId()
  const filterId = `lg-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [map, setMap] = useState('')

  const radiusNumber = typeof radius === 'number' ? radius : parseFloat(radius) || 999
  const radiusCss = typeof radius === 'number' ? `${radius}px` : radius

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined
    let frame = 0
    const measure = () => {
      const rect = element.getBoundingClientRect()
      const width = Math.round(rect.width)
      const height = Math.round(rect.height)
      setSize((current) => (current.width === width && current.height === height ? current : { width, height }))
    }
    measure()
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    })
    observer.observe(element)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!size.width || !size.height) return
    const effectiveRadius = Math.min(radiusNumber, size.width / 2, size.height / 2)
    const effectiveBand = band ?? Math.max(16, Math.min(46, effectiveRadius * 0.9))
    setMap(buildDisplacementMap(size.width, size.height, effectiveRadius, effectiveBand))
  }, [size.width, size.height, radiusNumber, band])

  const backdropStyle = {
    borderRadius: radiusCss,
    WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
    backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
    filter: map ? `url(#${filterId})` : undefined,
  }

  return (
    <Tag ref={ref} className={`liquidGlass ${className}`.trim()} style={{ borderRadius: radiusCss, ...style }} {...rest}>
      {map && (
        <svg className="lgDefs" aria-hidden="true" focusable="false">
          <defs>
            <filter id={filterId} x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB">
              <feImage href={map} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="MAP" />
              <feDisplacementMap in="SourceGraphic" in2="MAP" scale={strength} xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
      )}
      <span className="lgBackdrop" style={backdropStyle} aria-hidden="true" />
      <span className="lgTint" style={{ borderRadius: radiusCss, background: tint }} aria-hidden="true" />
      <span className="lgRim" style={{ borderRadius: radiusCss }} aria-hidden="true" />
      {sheen && <span className="lgSheen" style={{ borderRadius: radiusCss }} aria-hidden="true" />}
      <div className="lgContent">{children}</div>
    </Tag>
  )
}
