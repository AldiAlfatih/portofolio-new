"use client"

import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useSyncExternalStore,
  CSSProperties,
  ReactNode,
} from "react"
import { cn } from "@/lib/utils"
import { usePortfolioTheme } from "@/contexts/theme-context"

const TWO_PI = 2 * Math.PI
const STEP = 1 / 240
const MONO_FONT =
  'ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace'
const NATIVE_SELECTORS =
  'input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="color"]):not([type="file"]):not([type="image"]):not([type="hidden"]),textarea,[contenteditable]:not([contenteditable="false"]),[data-cursor="native"]'

interface RGBA {
  r: number
  g: number
  b: number
  a: number
}

const INK_DARK: RGBA = { r: 10, g: 10, b: 10, a: 1 }
const INK_LIGHT: RGBA = { r: 255, g: 255, b: 255, a: 1 }

const clamp = (val: number, min: number, max: number) =>
  Math.min(max, Math.max(min, val))
const numOr = (val: any, fallback: number) =>
  typeof val === "number" && Number.isFinite(val) ? val : fallback

const smooth = (val: number) => {
  const t = clamp(val, 0, 1)
  return t * t * (3 - 2 * t)
}

const easeOutQuart = (t: number) => 1 - Math.pow(1 - clamp(t, 0, 1), 4)

const formatNum = (val: number, dec: number) => {
  const str = val.toFixed(dec)
  return /^-0(\.0+)?$/.test(str) ? str.slice(1) : str
}

const colorCache = new Map<string, RGBA>()
let colorParserCanvas: HTMLCanvasElement | null = null
let colorParserCtx: CanvasRenderingContext2D | null = null

function parseColorToRGBA(colorStr: string, fallback: RGBA): RGBA {
  if (!colorStr || typeof colorStr !== "string") return fallback
  const cached = colorCache.get(colorStr)
  if (cached) return cached

  // Fast-path: hex color strings (#RGB, #RGBA, #RRGGBB, #RRGGBBAA)
  const hex = colorStr.trim()
  if (hex.startsWith("#")) {
    const raw = hex.slice(1)
    if (raw.length === 3 || raw.length === 4) {
      const r = parseInt(raw[0] + raw[0], 16)
      const g = parseInt(raw[1] + raw[1], 16)
      const b = parseInt(raw[2] + raw[2], 16)
      const a = raw.length === 4 ? parseInt(raw[3] + raw[3], 16) / 255 : 1
      const res: RGBA = { r, g, b, a }
      colorCache.set(colorStr, res)
      return res
    } else if (raw.length === 6 || raw.length === 8) {
      const r = parseInt(raw.slice(0, 2), 16)
      const g = parseInt(raw.slice(2, 4), 16)
      const b = parseInt(raw.slice(4, 6), 16)
      const a = raw.length === 8 ? parseInt(raw.slice(6, 8), 16) / 255 : 1
      const res: RGBA = { r, g, b, a }
      colorCache.set(colorStr, res)
      return res
    }
  }

  // Fast-path: rgb / rgba format
  const rgbMatch = colorStr.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i)
  if (rgbMatch) {
    const res: RGBA = {
      r: parseInt(rgbMatch[1], 10),
      g: parseInt(rgbMatch[2], 10),
      b: parseInt(rgbMatch[3], 10),
      a: rgbMatch[4] !== undefined ? parseFloat(rgbMatch[4]) : 1,
    }
    colorCache.set(colorStr, res)
    return res
  }

  // Fallback for CSS named colors - executes at most once and cached forever
  if (typeof document === "undefined") return fallback
  try {
    if (!colorParserCanvas) {
      colorParserCanvas = document.createElement("canvas")
      colorParserCanvas.width = 1
      colorParserCanvas.height = 1
      colorParserCtx = colorParserCanvas.getContext("2d", { willReadFrequently: true })
    }
    if (!colorParserCtx) return fallback

    colorParserCtx.clearRect(0, 0, 1, 1)
    colorParserCtx.fillStyle = colorStr
    colorParserCtx.fillRect(0, 0, 1, 1)
    const data = colorParserCtx.getImageData(0, 0, 1, 1).data
    const res: RGBA = { r: data[0], g: data[1], b: data[2], a: data[3] / 255 }
    colorCache.set(colorStr, res)
    return res
  } catch {
    return fallback
  }
}

const rgbaToString = (c: RGBA, alphaMul = 1) =>
  `rgba(${c.r},${c.g},${c.b},${clamp(c.a * alphaMul, 0, 1).toFixed(3)})`

const srgbToLin = (c: number) => {
  const t = c / 255
  return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)
}

const getContrastInk = (c: RGBA) =>
  0.2126 * srgbToLin(c.r) + 0.7152 * srgbToLin(c.g) + 0.0722 * srgbToLin(c.b) > 0.36
    ? INK_DARK
    : INK_LIGHT

const subscribeReducedMotion = (cb: () => void) => {
  if (typeof window === "undefined") return () => {}
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
  mq.addEventListener("change", cb)
  return () => mq.removeEventListener("change", cb)
}

const getReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export const THEME_DRAFTING_PRESETS: Record<
  string,
  { color: string; accentColor: string }
> = {
  "midnight-blue": {
    color: "#F0EDCF",       // Soft Cream
    accentColor: "#40A2D8", // Cyan Azure
  },
  "sky-blue": {
    color: "#0D47A1",       // Deep Navy
    accentColor: "#2196F3", // Sky Blue
  },
  burgundy: {
    color: "#F3F4F4",       // Clean White
    accentColor: "#853953", // Velvet Maroon
  },
  "arctic-red": {
    color: "#2C2C2C",       // Deep Slate
    accentColor: "#FF0000", // Crimson Red
  },
}

export interface DraftingCursorRef {
  measure: (x1: number, y1: number, x2: number, y2: number) => void
  pin: (x: number, y: number) => void
  clearPins: () => void
  replay: () => void
}

export interface DraftingCursorProps {
  color?: string
  accentColor?: string
  lineWidth?: number
  lineStyle?: "solid" | "dashed" | "dotted"
  lineOpacity?: number
  gap?: number
  edgeFade?: number
  marker?: "dot" | "ring" | "square" | "cross" | "none"
  markerSize?: number
  showCoordinates?: boolean
  label?: string
  units?: "px" | "percent" | "normalized"
  origin?: "top-left" | "center" | "bottom-left"
  chip?: "ink" | "accent" | "subtle"
  fontFamily?: string
  rulers?: "hover" | "always" | "none"
  rulerSize?: number
  tickSpacing?: number
  grid?: number
  snap?: boolean
  smoothing?: number
  measure?: boolean
  measureHold?: number
  pins?: boolean
  maxPins?: number
  pinLife?: number
  intro?: boolean
  introDuration?: number
  autoplay?: boolean
  autoplaySpeed?: number
  idleDelay?: number
  hideCursor?: boolean
  interactive?: boolean
  disabled?: boolean
  formatCoordinates?: (x: number, y: number) => string
  onMeasure?: (m: {
    x1: number
    y1: number
    x2: number
    y2: number
    dx: number
    dy: number
    length: number
    angle: number
  }) => void
  onPin?: (pin: { x: number; y: number }) => void
  className?: string
  style?: CSSProperties
  children?: ReactNode
  themeAdaptive?: boolean
}

export const DraftingCursor = forwardRef<DraftingCursorRef, DraftingCursorProps>(
  function DraftingCursor(
    {
      color = "currentColor",
      accentColor = "#7B5CFF",
      lineWidth = 1,
      lineStyle = "solid",
      lineOpacity = 0.35,
      gap = 9,
      edgeFade = 0,
      marker = "dot",
      markerSize = 6,
      showCoordinates = true,
      label = "",
      units = "px",
      origin = "top-left",
      chip = "ink",
      fontFamily = MONO_FONT,
      rulers = "hover",
      rulerSize = 20,
      tickSpacing = 10,
      grid = 0,
      snap = false,
      smoothing = 0,
      measure = true,
      measureHold = 2.5,
      pins = true,
      maxPins = 4,
      pinLife = 8,
      intro = true,
      introDuration = 0.7,
      autoplay = false,
      autoplaySpeed = 1,
      idleDelay = 1.5,
      hideCursor = true,
      interactive = true,
      disabled = false,
      formatCoordinates,
      onMeasure,
      onPin,
      className,
      style,
      children,
      themeAdaptive = true,
    },
    ref
  ) {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const apiRef = useRef<{
      sync: () => void
      measure: (x1: number, y1: number, x2: number, y2: number) => void
      pin: (x: number, y: number) => void
      clearPins: () => void
      replay: () => void
      destroy: () => void
    } | null>(null)

    const isReduced = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)
    const { theme } = usePortfolioTheme()

    const themePreset = THEME_DRAFTING_PRESETS[theme] || THEME_DRAFTING_PRESETS["midnight-blue"]
    const effectiveAccent = accentColor !== "#7B5CFF" ? accentColor : themeAdaptive ? themePreset.accentColor : accentColor
    const effectiveColor = color !== "currentColor" ? color : themeAdaptive ? themePreset.color : color

    const propsBag = {
      color: effectiveColor,
      accentColor: effectiveAccent,
      lineWidth,
      lineStyle,
      lineOpacity,
      gap,
      edgeFade,
      marker,
      markerSize,
      showCoordinates,
      label,
      units,
      origin,
      chip,
      fontFamily,
      rulers,
      rulerSize,
      tickSpacing,
      grid,
      snap,
      smoothing,
      measure,
      measureHold,
      pins,
      maxPins,
      pinLife,
      intro,
      introDuration,
      autoplay,
      autoplaySpeed,
      idleDelay,
      hideCursor,
      interactive,
      disabled,
      formatCoordinates,
      onMeasure,
      onPin,
      reduced: isReduced,
    }
    const bagRef = useRef(propsBag)

    useEffect(() => {
      bagRef.current = propsBag
      apiRef.current?.sync()
    })

    useImperativeHandle(
      ref,
      () => ({
        measure: (x1, y1, x2, y2) => apiRef.current?.measure(x1, y1, x2, y2),
        pin: (x, y) => apiRef.current?.pin(x, y),
        clearPins: () => apiRef.current?.clearPins(),
        replay: () => apiRef.current?.replay(),
      }),
      []
    )

    useEffect(() => {
      const container = containerRef.current
      const canvas = canvasRef.current
      if (!container || !canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const doc = container.ownerDocument
      const win = doc.defaultView || window
      const isFinePointer = win.matchMedia("(pointer: fine)")

      let rafId = 0
      let lastTime = 0
      let widthPx = 1
      let heightPx = 1
      let dpr = 1
      let isDestroyed = false

      let colInk: RGBA = { r: 23, g: 23, b: 23, a: 1 }
      let colAccent: RGBA = { r: 123, g: 92, b: 255, a: 1 }

      let pointerX = 0
      let pointerY = 0
      let smoothX = 0
      let smoothY = 0
      let isInside = false
      let isNativeInput = false
      let isClickable = false
      let cursorDataLabel = ""

      interface Measurement {
        x1: number
        y1: number
        x2: number
        y2: number
        released: number
        hold: number
      }
      interface Pin {
        x: number
        y: number
        text: string
        born: number
        dieAt: number
      }

      const measurements: Measurement[] = []
      const droppedPins: Pin[] = []
      let activeDrag: { startX: number; startY: number; currX: number; currY: number } | null = null

      const syncColors = () => {
        const p = bagRef.current
        colInk = parseColorToRGBA(p.color, colInk)
        colAccent = parseColorToRGBA(p.accentColor, colAccent)
      }

      const resize = () => {
        const rect = container.getBoundingClientRect()
        widthPx = Math.max(1, rect.width)
        heightPx = Math.max(1, rect.height)
        dpr = clamp(win.devicePixelRatio || 1, 1, 2)

        const canvasW = Math.max(1, Math.round(widthPx * dpr))
        const canvasH = Math.max(1, Math.round(heightPx * dpr))

        if (canvas.width !== canvasW || canvas.height !== canvasH) {
          canvas.width = canvasW
          canvas.height = canvasH
          canvas.style.width = `${widthPx}px`
          canvas.style.height = `${heightPx}px`
          return true
        }
        return false
      }

      const getOriginOffsets = () => {
        const orig = bagRef.current.origin
        return {
          ox: orig === "center" ? widthPx / 2 : 0,
          oy: orig === "center" ? heightPx / 2 : orig === "bottom-left" ? heightPx : 0,
          upwards: orig === "center" || orig === "bottom-left",
        }
      }

      const computeCoords = (x: number, y: number) => {
        const { ox, oy, upwards } = getOriginOffsets()
        let cx = x - ox
        let cy = upwards ? oy - y : y - oy
        const u = bagRef.current.units
        if (u === "percent") {
          cx = (cx / widthPx) * 100
          cy = (cy / heightPx) * 100
        } else if (u === "normalized") {
          cx = cx / widthPx
          cy = cy / heightPx
        }
        return [cx, cy]
      }

      const formatCoordString = (x: number, y: number) => {
        const p = bagRef.current
        const [cx, cy] = computeCoords(x, y)
        if (p.formatCoordinates) {
          try {
            return String(p.formatCoordinates(cx, cy))
          } catch {}
        }
        const unitSuffix = p.units === "percent" ? "%" : ""
        const dec = p.units === "percent" ? 1 : p.units === "normalized" ? 3 : 0
        return `${formatNum(cx, dec)}${unitSuffix}, ${formatNum(cy, dec)}${unitSuffix}`
      }

      const render = (time: number) => {
        rafId = 0
        if (isDestroyed) return

        const p = bagRef.current
        if (p.disabled) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          return
        }

        ctx.save()
        ctx.scale(dpr, dpr)
        ctx.clearRect(0, 0, widthPx, heightPx)

        // Smooth cursor follow
        const followFactor = p.smoothing > 0 ? 1 - clamp(p.smoothing, 0, 0.95) : 1
        smoothX += (pointerX - smoothX) * followFactor
        smoothY += (pointerY - smoothY) * followFactor

        const curX = Math.round(smoothX)
        const curY = Math.round(smoothY)

        if (isInside && isFinePointer.matches && !isNativeInput) {
          const strokeCol = rgbaToString(colInk, p.lineOpacity)
          const accentCol = rgbaToString(colAccent, 0.9)
          const hairW = clamp(p.lineWidth, 0.5, 4)

          ctx.lineWidth = hairW

          if (p.lineStyle === "dashed") {
            ctx.setLineDash([6, 6])
          } else if (p.lineStyle === "dotted") {
            ctx.setLineDash([2, 4])
          } else {
            ctx.setLineDash([])
          }

          // Crosshairs
          const g = clamp(p.gap, 0, 40)
          ctx.strokeStyle = strokeCol

          // Horizontal hair line
          ctx.beginPath()
          ctx.moveTo(0, curY)
          ctx.lineTo(Math.max(0, curX - g), curY)
          ctx.moveTo(Math.min(widthPx, curX + g), curY)
          ctx.lineTo(widthPx, curY)
          ctx.stroke()

          // Vertical hair line
          ctx.beginPath()
          ctx.moveTo(curX, 0)
          ctx.lineTo(curX, Math.max(0, curY - g))
          ctx.moveTo(curX, Math.min(heightPx, curY + g))
          ctx.lineTo(curX, heightPx)
          ctx.stroke()
          ctx.setLineDash([])

          // Center Marker
          const mSize = p.markerSize
          ctx.fillStyle = accentCol
          ctx.strokeStyle = accentCol

          if (p.marker === "dot") {
            ctx.beginPath()
            ctx.arc(curX, curY, mSize / 2, 0, TWO_PI)
            ctx.fill()
          } else if (p.marker === "ring") {
            ctx.beginPath()
            ctx.arc(curX, curY, mSize / 2, 0, TWO_PI)
            ctx.stroke()
          } else if (p.marker === "square") {
            ctx.fillRect(curX - mSize / 2, curY - mSize / 2, mSize, mSize)
          } else if (p.marker === "cross") {
            ctx.beginPath()
            ctx.moveTo(curX - mSize / 2, curY)
            ctx.lineTo(curX + mSize / 2, curY)
            ctx.moveTo(curX, curY - mSize / 2)
            ctx.lineTo(curX, curY + mSize / 2)
            ctx.stroke()
          }

          // Hovering over clickable element ring
          if (isClickable) {
            ctx.beginPath()
            ctx.arc(curX, curY, mSize + 4, 0, TWO_PI)
            ctx.strokeStyle = accentCol
            ctx.stroke()
          }

          // Edge Rulers
          if (p.rulers !== "none") {
            const rSize = clamp(p.rulerSize, 12, 48)
            const tickGap = clamp(p.tickSpacing, 5, 100)

            // Top Ruler
            ctx.fillStyle = rgbaToString(colInk, 0.08)
            ctx.fillRect(0, 0, widthPx, rSize)
            ctx.strokeStyle = rgbaToString(colInk, 0.3)
            ctx.lineWidth = 1

            for (let x = 0; x <= widthPx; x += tickGap) {
              const isMajor = Math.round(x) % (tickGap * 5) === 0
              const h = isMajor ? rSize * 0.7 : rSize * 0.35
              ctx.beginPath()
              ctx.moveTo(x, 0)
              ctx.lineTo(x, h)
              ctx.stroke()

              if (isMajor && x > 20 && x < widthPx - 20) {
                ctx.font = `9px ${p.fontFamily}`
                ctx.fillStyle = rgbaToString(colInk, 0.7)
                ctx.fillText(String(Math.round(x)), x + 2, rSize - 2)
              }
            }

            // Left Ruler
            ctx.fillStyle = rgbaToString(colInk, 0.08)
            ctx.fillRect(0, 0, rSize, heightPx)

            for (let y = 0; y <= heightPx; y += tickGap) {
              const isMajor = Math.round(y) % (tickGap * 5) === 0
              const w = isMajor ? rSize * 0.7 : rSize * 0.35
              ctx.beginPath()
              ctx.moveTo(0, y)
              ctx.lineTo(w, y)
              ctx.stroke()

              if (isMajor && y > 20 && y < heightPx - 20) {
                ctx.font = `9px ${p.fontFamily}`
                ctx.fillStyle = rgbaToString(colInk, 0.7)
                ctx.fillText(String(Math.round(y)), 2, y - 2)
              }
            }
          }

          // Live Coordinate Readout Chip
          if (p.showCoordinates || cursorDataLabel || p.label) {
            const readoutText = cursorDataLabel
              ? cursorDataLabel
              : p.label
              ? `${p.label} ${formatCoordString(curX, curY)}`
              : formatCoordString(curX, curY)

            ctx.font = `11px ${p.fontFamily}`
            const textMetrics = ctx.measureText(readoutText)
            const chipW = textMetrics.width + 16
            const chipH = 22

            let chipX = curX + 14
            let chipY = curY + 14

            if (chipX + chipW > widthPx - 10) chipX = curX - chipW - 14
            if (chipY + chipH > heightPx - 10) chipY = curY - chipH - 14

            // Chip Background
            ctx.fillStyle =
              p.chip === "accent"
                ? accentCol
                : p.chip === "subtle"
                ? rgbaToString(colInk, 0.15)
                : rgbaToString(colInk, 0.9)
            ctx.beginPath()
            ctx.roundRect(chipX, chipY, chipW, chipH, 6)
            ctx.fill()

            // Chip Border
            ctx.strokeStyle = rgbaToString(colAccent, 0.4)
            ctx.lineWidth = 1
            ctx.stroke()

            // Chip Text
            const textInk = p.chip === "accent" ? getContrastInk(colAccent) : getContrastInk(colInk)
            ctx.fillStyle = rgbaToString(textInk, 1)
            ctx.fillText(readoutText, chipX + 8, chipY + 15)
          }
        }

        // Active Measurement Line (Drag to measure)
        if (activeDrag) {
          const dx = activeDrag.currX - activeDrag.startX
          const dy = activeDrag.currY - activeDrag.startY
          const dist = Math.hypot(dx, dy)
          const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI

          ctx.strokeStyle = rgbaToString(colAccent, 1)
          ctx.lineWidth = 1.5
          ctx.setLineDash([4, 4])
          ctx.beginPath()
          ctx.moveTo(activeDrag.startX, activeDrag.startY)
          ctx.lineTo(activeDrag.currX, activeDrag.currY)
          ctx.stroke()
          ctx.setLineDash([])

          // End ticks
          ctx.beginPath()
          ctx.arc(activeDrag.startX, activeDrag.startY, 4, 0, TWO_PI)
          ctx.arc(activeDrag.currX, activeDrag.currY, 4, 0, TWO_PI)
          ctx.fillStyle = rgbaToString(colAccent, 1)
          ctx.fill()

          // Dimension badge
          const midX = (activeDrag.startX + activeDrag.currX) / 2
          const midY = (activeDrag.startY + activeDrag.currY) / 2
          const badgeText = `${Math.round(dist)}px (${Math.round(angleDeg)}°)`
          ctx.font = `bold 10px ${p.fontFamily}`
          const bw = ctx.measureText(badgeText).width + 12
          ctx.fillStyle = rgbaToString(colInk, 0.95)
          ctx.beginPath()
          ctx.roundRect(midX - bw / 2, midY - 10, bw, 20, 4)
          ctx.fill()
          ctx.strokeStyle = rgbaToString(colAccent, 0.6)
          ctx.stroke()
          ctx.fillStyle = rgbaToString(colAccent, 1)
          ctx.fillText(badgeText, midX - bw / 2 + 6, midY + 4)
        }

        // Render Stamped Pins
        const nowSec = time / 1000
        for (let i = droppedPins.length - 1; i >= 0; i--) {
          const pin = droppedPins[i]
          if (pin.dieAt > 0 && nowSec >= pin.dieAt) {
            droppedPins.splice(i, 1)
            continue
          }
          const alpha = pin.dieAt > 0 ? clamp(pin.dieAt - nowSec, 0, 1) : 1

          ctx.beginPath()
          ctx.arc(pin.x, pin.y, 4, 0, TWO_PI)
          ctx.fillStyle = rgbaToString(colAccent, alpha)
          ctx.fill()

          ctx.font = `10px ${p.fontFamily}`
          ctx.fillStyle = rgbaToString(colInk, 0.85 * alpha)
          ctx.fillText(pin.text, pin.x + 8, pin.y + 4)
        }

        ctx.restore()

        const isMoving = Math.abs(pointerX - smoothX) > 0.15 || Math.abs(pointerY - smoothY) > 0.15
        const hasActiveAnimation = activeDrag !== null || droppedPins.length > 0 || (isInside && isMoving)
        if (hasActiveAnimation) {
          rafId = win.requestAnimationFrame(render)
        }
      }

      const requestRender = () => {
        if (!rafId && !isDestroyed) {
          rafId = win.requestAnimationFrame(render)
        }
      }

      const inspectTarget = (target: EventTarget | null) => {
        const el = target instanceof Element ? target : null
        isNativeInput = !!el && !!el.closest(NATIVE_SELECTORS)
        isClickable =
          !!el &&
          !!el.closest(
            'a[href],button:not(:disabled),[role="button"],[role="link"],label[for],summary,[data-cursor="pointer"]'
          )
        const labelEl = el?.closest("[data-cursor-label]")
        cursorDataLabel = labelEl?.getAttribute("data-cursor-label") || ""
      }

      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerType === "touch") return
        const rect = container.getBoundingClientRect()
        const px = e.clientX - rect.left
        const py = e.clientY - rect.top

        if (px >= 0 && py >= 0 && px <= rect.width && py <= rect.height) {
          if (!isInside) {
            smoothX = px
            smoothY = py
          }
          isInside = true
          pointerX = px
          pointerY = py
          inspectTarget(e.target)

          if (activeDrag) {
            activeDrag.currX = px
            activeDrag.currY = py
          }

          if (bagRef.current.hideCursor && !isNativeInput && isFinePointer.matches) {
            container.style.cursor = "none"
          } else {
            container.style.cursor = "default"
          }
          requestRender()
        } else {
          if (isInside) {
            isInside = false
            container.style.cursor = "default"
            requestRender()
          }
        }
      }

      const onPointerLeave = () => {
        isInside = false
        activeDrag = null
        container.style.cursor = "default"
        requestRender()
      }

      const onPointerDown = (e: PointerEvent) => {
        if (e.pointerType === "touch" || e.button !== 0 || isNativeInput || isClickable) return
        const rect = container.getBoundingClientRect()
        const px = e.clientX - rect.left
        const py = e.clientY - rect.top

        if (bagRef.current.measure) {
          activeDrag = { startX: px, startY: py, currX: px, currY: py }
          requestRender()
        }
      }

      const onPointerUp = (e: PointerEvent) => {
        if (e.pointerType === "touch" || e.button !== 0) return
        const rect = container.getBoundingClientRect()
        const px = e.clientX - rect.left
        const py = e.clientY - rect.top

        if (activeDrag) {
          const dx = px - activeDrag.startX
          const dy = py - activeDrag.startY
          const dist = Math.hypot(dx, dy)

          if (dist > 5) {
            // Finished a measurement
            const angle = (Math.atan2(dy, dx) * 180) / Math.PI
            bagRef.current.onMeasure?.({
              x1: activeDrag.startX,
              y1: activeDrag.startY,
              x2: px,
              y2: py,
              dx,
              dy,
              length: dist,
              angle,
            })
          } else if (bagRef.current.pins) {
            // Click dropped a pin
            const now = performance.now() / 1000
            const life = bagRef.current.pinLife
            droppedPins.push({
              x: px,
              y: py,
              text: formatCoordString(px, py),
              born: now,
              dieAt: life > 0 ? now + life : 0,
            })
            if (droppedPins.length > bagRef.current.maxPins) {
              droppedPins.shift()
            }
            bagRef.current.onPin?.({ x: px, y: py })
          }
          activeDrag = null
          requestRender()
        }
      }

      win.addEventListener("pointermove", onPointerMove, { passive: true })
      win.addEventListener("pointerdown", onPointerDown, { passive: true })
      win.addEventListener("pointerup", onPointerUp, { passive: true })
      container.addEventListener("pointerleave", onPointerLeave)

      const ro = new ResizeObserver(() => {
        if (resize()) requestRender()
      })
      ro.observe(container)

      resize()
      syncColors()
      requestRender()

      apiRef.current = {
        sync: () => {
          syncColors()
          if (resize()) requestRender()
        },
        measure: (x1, y1, x2, y2) => {
          activeDrag = { startX: x1, startY: y1, currX: x2, currY: y2 }
          requestRender()
        },
        pin: (x, y) => {
          const now = performance.now() / 1000
          const life = bagRef.current.pinLife
          droppedPins.push({
            x,
            y,
            text: formatCoordString(x, y),
            born: now,
            dieAt: life > 0 ? now + life : 0,
          })
          requestRender()
        },
        clearPins: () => {
          droppedPins.length = 0
          requestRender()
        },
        replay: () => {
          smoothX = 0
          smoothY = 0
          requestRender()
        },
        destroy: () => {
          isDestroyed = true
          if (rafId) win.cancelAnimationFrame(rafId)
          ro.disconnect()
          win.removeEventListener("pointermove", onPointerMove)
          win.removeEventListener("pointerdown", onPointerDown)
          win.removeEventListener("pointerup", onPointerUp)
          container.removeEventListener("pointerleave", onPointerLeave)
        },
      }

      return () => {
        apiRef.current?.destroy()
        apiRef.current = null
      }
    }, [])

    return (
      <div
        ref={containerRef}
        className={cn("relative overflow-hidden w-full min-h-[240px]", className)}
        style={style}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-30"
        />
        {children && <div className="relative z-10 w-full h-full">{children}</div>}
      </div>
    )
  }
)

DraftingCursor.displayName = "DraftingCursor"
export default DraftingCursor
