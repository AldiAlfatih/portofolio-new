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
import * as THREE from "three"
import { cn } from "@/lib/utils"
import { usePortfolioTheme } from "@/contexts/theme-context"

const TWO_PI = 2 * Math.PI
const DEG_TO_RAD = Math.PI / 180
const FIXED_STEP = 1 / 240

const clamp = (val: number, min: number, max: number) =>
  Math.min(max, Math.max(min, val))

const smooth = (val: number) => {
  const t = clamp(val, 0, 1)
  return t * t * (3 - 2 * t)
}

const subscribeReducedMotion = (cb: () => void) => {
  if (typeof window === "undefined") return () => {}
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
  mq.addEventListener("change", cb)
  return () => mq.removeEventListener("change", cb)
}

const getReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

const colorCache = new Map<string, THREE.Color>()

const srgbToLinear = (c: number) =>
  c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)

function parseToOklab(colorStr: string): THREE.Color {
  const cached = colorCache.get(colorStr)
  if (cached) return cached

  let rgb = [0.5, 0.5, 0.5]
  const clean = colorStr.trim().replace("#", "")

  if (/^[0-9a-f]{3}$/i.test(clean) || /^[0-9a-f]{6}$/i.test(clean)) {
    const hex = clean.length === 3 ? clean.replace(/./g, (c) => c + c) : clean
    rgb = [0, 2, 4].map((i) => Number.parseInt(hex.slice(i, i + 2), 16) / 255)
  } else if (typeof document !== "undefined") {
    const canvas = document.createElement("canvas")
    canvas.width = 1
    canvas.height = 1
    const ctx = canvas.getContext("2d")
    if (ctx) {
      ctx.fillStyle = colorStr
      ctx.fillRect(0, 0, 1, 1)
      const data = ctx.getImageData(0, 0, 1, 1).data
      rgb = [data[0] / 255, data[1] / 255, data[2] / 255]
    }
  }

  const [r, g, b] = rgb.map(srgbToLinear)
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b)
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b)
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b)

  const oklab = new THREE.Color(
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
  )

  colorCache.set(colorStr, oklab)
  return oklab
}

const vertexShader = `
attribute float aArc;
attribute float aFace;
varying float vArc;
varying float vFace;

void main() {
  vArc = aArc;
  vFace = aFace;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform vec3 uLabA;
uniform vec3 uLabB;
uniform float uShade;
uniform float uOpacity;
varying float vArc;
varying float vFace;

vec3 labToLinear(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.291485548 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s
  );
}

vec3 toSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  float drift = vArc * 0.3;
  vec3 lab = gl_FrontFacing ? mix(uLabA, uLabB, drift) : mix(uLabB, uLabA, drift);
  float face = clamp(vFace, 0.0, 1.0);
  lab.x *= mix(1.0, 0.55 + 0.45 * pow(face, 0.6), uShade);
  vec3 color = toSrgb(labToLinear(lab));
  float alpha = uOpacity * (1.0 - smoothstep(0.5, 1.0, vArc));
  gl_FragColor = vec4(color * alpha, alpha);
}
`

function solveSpring(
  curr: number,
  vel: number,
  target: number,
  dt: number,
  omega: number,
  zeta: number
): [number, number] {
  const steps = Math.max(1, Math.ceil(dt / (1 / 480)))
  const h = dt / steps
  let v = vel
  let x = curr
  for (let i = 0; i < steps; i++) {
    v += (omega * omega * (target - x) - 2 * zeta * omega * v) * h
    x += v * h
  }
  return [x, v]
}

export const THEME_RIBBON_PRESETS: Record<string, [string, string]> = {
  "midnight-blue": ["#0B60B0", "#40A2D8"], // Royal Blue & Azure Cyan
  "sky-blue": ["#2196F3", "#90CAF9"],       // Sky Blue & Ice Blue
  burgundy: ["#853953", "#612D53"],         // Velvet Wine & Plum Purple
  "arctic-red": ["#FF0000", "#8FD5DE"],     // Crimson Red & Frost Mint
}

export interface RibbonTrailRef {
  flick: () => void
  reset: () => void
}

export interface RibbonTrailProps {
  colors?: [string, string]
  backgroundColor?: string
  width?: number
  trail?: number
  bounce?: number
  angle?: number
  twist?: number
  spin?: number
  taper?: number
  shade?: number
  opacity?: number
  follow?: number
  flick?: boolean
  autoplay?: boolean
  autoplaySpeed?: number
  idleDelay?: number
  interactive?: boolean
  paused?: boolean
  dpr?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
  themeAdaptive?: boolean
}

export const RibbonTrail = forwardRef<RibbonTrailRef, RibbonTrailProps>(
  function RibbonTrail(
    {
      colors,
      backgroundColor = "transparent",
      width = 28,
      trail = 1.9,
      bounce = 0.4,
      angle = -35,
      twist = 0,
      spin = 0,
      taper = 0.55,
      shade = 0.6,
      opacity = 1,
      follow = 0.04,
      flick = true,
      autoplay = true,
      autoplaySpeed = 1,
      idleDelay = 1.5,
      interactive = true,
      paused = false,
      dpr = 2,
      className,
      style,
      children,
      themeAdaptive = true,
    },
    ref
  ) {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasWrapRef = useRef<HTMLDivElement>(null)
    const apiRef = useRef<{
      sync: () => void
      flick: () => void
      reset: () => void
      destroy: () => void
    } | null>(null)

    const isReduced = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)
    const { theme } = usePortfolioTheme()

    const themeColors = THEME_RIBBON_PRESETS[theme] || THEME_RIBBON_PRESETS["midnight-blue"]
    const effectiveColors: [string, string] =
      colors || (themeAdaptive ? themeColors : ["#5227FF", "#FF9FFC"])

    const stateProps = {
      colors: effectiveColors,
      backgroundColor,
      width,
      trail,
      bounce,
      angle,
      twist,
      spin,
      taper,
      shade,
      opacity,
      follow,
      flick,
      autoplay,
      autoplaySpeed,
      idleDelay,
      interactive,
      paused,
      dpr,
      reduced: isReduced,
    }
    const stateRef = useRef(stateProps)

    useEffect(() => {
      stateRef.current = stateProps
      apiRef.current?.sync()
    })

    useImperativeHandle(
      ref,
      () => ({
        flick: () => apiRef.current?.flick(),
        reset: () => apiRef.current?.reset(),
      }),
      []
    )

    useEffect(() => {
      const container = containerRef.current
      const canvasWrap = canvasWrapRef.current
      if (!container || !canvasWrap) return

      const doc = container.ownerDocument
      const win = doc.defaultView || window
      const canvas = doc.createElement("canvas")
      canvas.style.cssText =
        "position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none"

      let renderer: THREE.WebGLRenderer
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          premultipliedAlpha: true,
          powerPreference: "high-performance",
        })
      } catch {
        return
      }

      canvasWrap.appendChild(canvas)
      renderer.setClearColor(0x000000, 0)

      const positions = new Float32Array(3390)
      const aArc = new Float32Array(1130)
      const aFace = new Float32Array(1130)
      const indices: number[] = []

      for (let i = 0; i < 564; i++) {
        const base = 2 * i
        indices.push(base, base + 1, base + 2, base + 1, base + 3, base + 2)
      }

      const geom = new THREE.BufferGeometry()
      const posAttr = new THREE.BufferAttribute(positions, 3)
      const arcAttr = new THREE.BufferAttribute(aArc, 1)
      const faceAttr = new THREE.BufferAttribute(aFace, 1)

      posAttr.setUsage(THREE.DynamicDrawUsage)
      arcAttr.setUsage(THREE.DynamicDrawUsage)
      faceAttr.setUsage(THREE.DynamicDrawUsage)

      geom.setAttribute("position", posAttr)
      geom.setAttribute("aArc", arcAttr)
      geom.setAttribute("aFace", faceAttr)
      geom.setIndex(indices)
      geom.setDrawRange(0, 0)

      const uniforms = {
        uLabA: { value: new THREE.Color() },
        uLabB: { value: new THREE.Color() },
        uShade: { value: 0.6 },
        uOpacity: { value: 1 },
      }

      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
        premultipliedAlpha: true,
        depthTest: false,
        depthWrite: false,
        side: THREE.DoubleSide,
      })

      const mesh = new THREE.Mesh(geom, mat)
      mesh.frustumCulled = false

      const scene = new THREE.Scene()
      scene.add(mesh)

      const camera = new THREE.OrthographicCamera(0, 1, 0, -1, -10, 10)

      const posX = new Float32Array(48)
      const posY = new Float32Array(48)
      const velX = new Float32Array(48)
      const velY = new Float32Array(48)
      const arcLens = new Float32Array(48)

      let widthPx = 1
      let heightPx = 1
      let dprVal = 1
      let elapsedClock = 0
      let simAcc = 0
      let headX = 0
      let headY = 0
      let headVx = 0
      let headVy = 0
      let ghostBlend = 1
      let autoSeed = 40 * Math.random()
      let autoOffsetDx = 0
      let autoOffsetDy = 0
      let autoWeight = 0
      let isGhost = true
      let flickTimer = 0
      let flickDir = 1
      let flickNx = 1
      let flickNy = 0
      let hasInit = false
      let rafId = 0
      let lastTime = 0
      let isIntersecting = false
      let isDestroyed = false
      let isContextLost = false
      let maxVel = 0
      let totalArc = 0

      const pointerState = {
        x: 0,
        y: 0,
        inside: false,
        seen: false,
        leftAt: 0,
      }

      const getAutoPos = (t: number) => ({
        x: widthPx * (0.5 + 0.3 * Math.sin(0.83 * t) + 0.06 * Math.sin(2.21 * t + 0.7)),
        y: heightPx * (0.5 + 0.22 * Math.sin(1.66 * t + 0.4) + 0.05 * Math.cos(2.87 * t + 1.1)),
      })

      const getTargetPos = () => {
        const s = stateRef.current
        if (pointerState.inside && s.interactive) {
          return { x: pointerState.x, y: pointerState.y, ghost: false }
        }
        const timeSinceLeave = (performance.now() - pointerState.leftAt) / 1000
        if (s.autoplay && !s.reduced && (!pointerState.seen || timeSinceLeave > Math.max(s.idleDelay, 0))) {
          const auto = getAutoPos(autoSeed)
          return {
            x: auto.x + autoOffsetDx * autoWeight,
            y: auto.y + autoOffsetDy * autoWeight,
            ghost: true,
          }
        }
        return pointerState.seen
          ? { x: pointerState.x, y: pointerState.y, ghost: false }
          : { x: widthPx / 2, y: heightPx / 2, ghost: false }
      }

      const resetHistory = (x: number, y: number) => {
        for (let i = 0; i < 48; i++) {
          posX[i] = x
          posY[i] = y
          velX[i] = 0
          velY[i] = 0
        }
        headX = x
        headY = y
        headVx = 0
        headVy = 0
      }

      const stepSprings = (dt: number) => {
        const s = stateRef.current
        const zeta = 0.72 + (1 - clamp(s.bounce, 0, 1)) * 0.28
        const omega = (94 * zeta) / clamp(s.trail, 0.5, 6)

        let rx = headX
        let ry = headY

        if (flickTimer > 0) {
          const prog = smooth(1 - flickTimer / 0.55)
          const angleRad = prog * TWO_PI * flickDir
          const flickAmp = (0.9 * clamp(s.width, 2, 200) + 34) * Math.sin(prog * Math.PI)
          const ca = Math.cos(angleRad) - 1
          const sa = Math.sin(angleRad)
          rx += (flickNx * ca - flickNy * sa) * flickAmp
          ry += (flickNy * ca + flickNx * sa) * flickAmp
        }

        posX[0] = rx
        posY[0] = ry
        maxVel = 0

        for (let i = 1; i < 48; i++) {
          velX[i] += (omega * omega * (posX[i - 1] - posX[i]) - 2 * zeta * omega * velX[i]) * dt
          velY[i] += (omega * omega * (posY[i - 1] - posY[i]) - 2 * zeta * omega * velY[i]) * dt
          posX[i] += velX[i] * dt
          posY[i] += velY[i] * dt
          maxVel = Math.max(maxVel, Math.abs(velX[i]) + Math.abs(velY[i]))
        }
      }

      const simulate = (dt: number) => {
        const s = stateRef.current
        let target = getTargetPos()

        if (target.ghost !== isGhost) {
          isGhost = target.ghost
          if (target.ghost) {
            const auto = getAutoPos(autoSeed)
            autoOffsetDx = headX - auto.x
            autoOffsetDy = headY - auto.y
            autoWeight = 1
            ghostBlend = 1
            target = getTargetPos()
          } else {
            ghostBlend = 0
          }
        }

        ghostBlend = Math.min(1, ghostBlend + dt / 0.8)
        if (target.ghost) {
          autoSeed += dt * clamp(s.autoplaySpeed, 0, 5)
          autoWeight *= Math.exp(-dt / 2.2)
        }

        const lag = clamp(s.follow, 0.005, 1) + (1 - smooth(ghostBlend)) * 0.22
        const zeta = 1 - 0.45 * clamp(s.bounce, 0, 1)
        const omega = TWO_PI / Math.max(lag, 0.01)

        ;[headX, headVx] = solveSpring(headX, headVx, target.x, dt, omega, zeta)
        ;[headY, headVy] = solveSpring(headY, headVy, target.y, dt, omega, zeta)

        if (flickTimer > 0) {
          flickTimer = Math.max(0, flickTimer - dt)
        }

        simAcc += dt
        let substeps = 0
        while (simAcc >= FIXED_STEP && substeps < 16) {
          elapsedClock += FIXED_STEP
          stepSprings(FIXED_STEP)
          simAcc -= FIXED_STEP
          substeps++
        }
        if (substeps === 16) simAcc = 0
      }

      const syncUniforms = () => {
        const s = stateRef.current
        const [c1, c2] = s.colors
        uniforms.uLabA.value.copy(parseToOklab(c1 || "#5227FF"))
        uniforms.uLabB.value.copy(parseToOklab(c2 || c1 || "#FF9FFC"))
        uniforms.uShade.value = clamp(s.shade, 0, 1)
        uniforms.uOpacity.value = clamp(s.opacity, 0, 1)
      }

      const resize = () => {
        const s = stateRef.current
        const rect = container.getBoundingClientRect()
        const targetDpr = Math.min(win.devicePixelRatio || 1, Math.max(s.dpr, 0.5))
        const w = Math.max(1, Math.round(rect.width))
        const h = Math.max(1, Math.round(rect.height))

        if (w !== widthPx || h !== heightPx || targetDpr !== dprVal) {
          widthPx = w
          heightPx = h
          dprVal = targetDpr
          renderer.setPixelRatio(dprVal)
          renderer.setSize(widthPx, heightPx, false)
          camera.left = 0
          camera.right = widthPx
          camera.top = 0
          camera.bottom = -heightPx
          camera.updateProjectionMatrix()
          return true
        }
        return false
      }

      const requestFrame = () => {
        if (!isDestroyed && !isContextLost && isIntersecting && !rafId) {
          rafId = win.requestAnimationFrame(renderLoop)
        }
      }

      function renderLoop(now: number) {
        rafId = 0
        if (isDestroyed || isContextLost) return

        const s = stateRef.current
        const dt = lastTime ? clamp((now - lastTime) / 1000, 0, 0.05) : 1 / 60
        lastTime = now

        if (!hasInit) {
          const target = getTargetPos()
          isGhost = target.ghost
          ghostBlend = 1
          if (target.ghost) {
            autoSeed -= 2.5
            const auto = getAutoPos(autoSeed)
            resetHistory(auto.x, auto.y)
            for (let i = 0; i < 150; i++) simulate(1 / 60)
          } else {
            resetHistory(target.x, target.y)
          }
          hasInit = true
        }

        if (!s.paused) simulate(dt)
        syncUniforms()

        // Generate Catmull-Rom Ribbon Geometry
        arcLens[0] = 0
        for (let i = 1; i < 48; i++) {
          arcLens[i] = arcLens[i - 1] + Math.hypot(posX[i] - posX[i - 1], posY[i] - posY[i - 1])
        }
        totalArc = arcLens[47]
        const ribbonWidth = clamp(s.width, 2, 200)

        if (totalArc < 0.5) {
          geom.setDrawRange(0, 0)
        } else {
          const taperVal = clamp(s.taper, 0, 1)
          const baseAngle = s.angle * DEG_TO_RAD + (s.reduced ? 0 : s.spin * DEG_TO_RAD * elapsedClock)
          const twistRad = s.twist * DEG_TO_RAD
          const fadeDist = smooth(totalArc / (3 * ribbonWidth))
          const headTaperDist = Math.max(1.2 * ribbonWidth, 10)
          let vIdx = 0

          const emitQuad = (
            cx: number,
            cy: number,
            dx: number,
            dy: number,
            curArc: number
          ) => {
            const arcNorm = totalArc > 0 ? curArc / totalArc : 0
            const theta = baseAngle + twistRad * arcNorm
            const cosT = Math.cos(theta)
            const sinT = Math.sin(theta)
            const dirLen = Math.hypot(dx, dy) || 1
            const faceAngle = Math.abs((dx / dirLen) * sinT - (dy / dirLen) * cosT)
            const halfW =
              0.5 *
              ribbonWidth *
              ((1 - taperVal * Math.pow(arcNorm, 1.5)) *
                smooth(curArc / headTaperDist) *
                fadeDist)

            const mIdx = 564 - vIdx
            const pIdx = 6 * mIdx

            positions[pIdx] = cx - cosT * halfW
            positions[pIdx + 1] = -(cy - sinT * halfW)
            positions[pIdx + 2] = 0
            positions[pIdx + 3] = cx + cosT * halfW
            positions[pIdx + 4] = -(cy + sinT * halfW)
            positions[pIdx + 5] = 0

            aArc[2 * mIdx] = arcNorm
            aArc[2 * mIdx + 1] = arcNorm
            aFace[2 * mIdx] = faceAngle
            aFace[2 * mIdx + 1] = faceAngle
            vIdx++
          }

          for (let i = 0; i < 47; i++) {
            const p0 = Math.max(i - 1, 0)
            const p1 = i
            const p2 = i + 1
            const p3 = Math.min(i + 2, 47)

            for (let step = 0; step < 12; step++) {
              const u = step / 12
              const u2 = u * u
              const u3 = u2 * u

              // Hermite/Catmull-Rom Position
              const px =
                0.5 *
                (2 * posX[p1] +
                  (-posX[p0] + posX[p2]) * u +
                  (2 * posX[p0] - 5 * posX[p1] + 4 * posX[p2] - posX[p3]) * u2 +
                  (-posX[p0] + 3 * posX[p1] - 3 * posX[p2] + posX[p3]) * u3)
              const py =
                0.5 *
                (2 * posY[p1] +
                  (-posY[p0] + posY[p2]) * u +
                  (2 * posY[p0] - 5 * posY[p1] + 4 * posY[p2] - posY[p3]) * u2 +
                  (-posY[p0] + 3 * posY[p1] - 3 * posY[p2] + posY[p3]) * u3)

              // Hermite Derivative (Tangents)
              const tdx =
                0.5 *
                (-posX[p0] +
                  posX[p2] +
                  2 * (2 * posX[p0] - 5 * posX[p1] + 4 * posX[p2] - posX[p3]) * u +
                  3 * (-posX[p0] + 3 * posX[p1] - 3 * posX[p2] + posX[p3]) * u2)
              const tdy =
                0.5 *
                (-posY[p0] +
                  posY[p2] +
                  2 * (2 * posY[p0] - 5 * posY[p1] + 4 * posY[p2] - posY[p3]) * u +
                  3 * (-posY[p0] + 3 * posY[p1] - 3 * posY[p2] + posY[p3]) * u2)

              const currArc = arcLens[p1] + (arcLens[p2] - arcLens[p1]) * u
              emitQuad(px, py, tdx, tdy, currArc)
            }
          }

          emitQuad(posX[47], posY[47], posX[47] - posX[46], posY[47] - posY[46], totalArc)

          posAttr.needsUpdate = true
          arcAttr.needsUpdate = true
          faceAttr.needsUpdate = true
          geom.setDrawRange(0, 3384)
        }

        renderer.render(scene, camera)

        const isAutoRunning = s.autoplay && !s.reduced && (isGhost || !pointerState.inside)
        const hasMotion = maxVel > 0.5 || Math.hypot(headVx, headVy) > 0.5 || flickTimer > 0

        if (!s.paused && (isAutoRunning || hasMotion)) {
          requestFrame()
        }
      }

      const updatePointer = (clientX: number, clientY: number) => {
        if (!stateRef.current.interactive) return
        const rect = container.getBoundingClientRect()
        const px = clientX - rect.left
        const py = clientY - rect.top

        if (px < 0 || py < 0 || px > rect.width || py > rect.height) {
          if (pointerState.inside) {
            pointerState.inside = false
            pointerState.leftAt = performance.now()
            requestFrame()
          }
          return
        }

        if (hasInit) {
          const threshold = Math.max(240, 0.35 * Math.min(rect.width, rect.height))
          const teleport =
            pointerState.inside && Math.hypot(px - pointerState.x, py - pointerState.y) > threshold
          const resumeFar =
            !pointerState.inside && (totalArc < 1 || Math.hypot(px - headX, py - headY) > threshold)

          if (teleport || resumeFar) {
            resetHistory(px, py)
            isGhost = false
            ghostBlend = 1
          }
        }

        pointerState.inside = true
        pointerState.seen = true
        pointerState.x = px
        pointerState.y = py
        requestFrame()
      }

      const handlePointerLeave = () => {
        if (pointerState.inside) {
          pointerState.inside = false
          pointerState.leftAt = performance.now()
          requestFrame()
        }
      }

      const triggerFlick = () => {
        let dx = posX[0] - posX[6]
        let dy = posY[0] - posY[6]
        const len = Math.hypot(dx, dy)
        if (len < 2) {
          dx = 0
          dy = -1
        } else {
          dx /= len
          dy /= len
        }
        flickNx = dx
        flickNy = dy
        flickDir = flickDir > 0 ? -1 : 1
        flickTimer = 0.55
        requestFrame()
      }

      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerType !== "touch") updatePointer(e.clientX, e.clientY)
      }

      const onPointerDown = (e: PointerEvent) => {
        const s = stateRef.current
        if (!s.interactive || !s.flick || s.paused || e.button > 0) return
        const rect = container.getBoundingClientRect()
        const px = e.clientX - rect.left
        const py = e.clientY - rect.top
        if (px >= 0 && py >= 0 && px <= rect.width && py <= rect.height) {
          triggerFlick()
        }
      }

      const onTouchMove = (e: TouchEvent) => {
        const t = e.targetTouches[0]
        if (t) updatePointer(t.clientX, t.clientY)
      }

      win.addEventListener("pointermove", onPointerMove, { passive: true })
      win.addEventListener("pointerdown", onPointerDown, { passive: true })
      win.addEventListener("touchstart", onTouchMove, { passive: true })
      win.addEventListener("touchmove", onTouchMove, { passive: true })
      win.addEventListener("touchend", handlePointerLeave, { passive: true })
      win.addEventListener("blur", handlePointerLeave)
      doc.documentElement.addEventListener("mouseleave", handlePointerLeave)

      const ro = new ResizeObserver(() => {
        if (resize()) {
          lastTime = 0
          requestFrame()
        }
      })
      ro.observe(container)

      const io =
        typeof IntersectionObserver === "undefined"
          ? null
          : new IntersectionObserver(
              ([entry]) => {
                isIntersecting = entry.isIntersecting
                if (isIntersecting) {
                  lastTime = 0
                  requestFrame()
                } else if (rafId) {
                  win.cancelAnimationFrame(rafId)
                  rafId = 0
                }
              },
              { rootMargin: "80px" }
            )
      if (io) io.observe(container)
      else isIntersecting = true

      const onContextLost = (e: Event) => {
        e.preventDefault()
        isContextLost = true
        if (rafId) win.cancelAnimationFrame(rafId)
        rafId = 0
      }
      const onContextRestored = () => {
        isContextLost = false
        lastTime = 0
        requestFrame()
      }

      canvas.addEventListener("webglcontextlost", onContextLost)
      canvas.addEventListener("webglcontextrestored", onContextRestored)

      resize()
      syncUniforms()
      requestFrame()

      apiRef.current = {
        sync: () => {
          if (resize()) lastTime = 0
          requestFrame()
        },
        flick: () => {
          if (hasInit) triggerFlick()
        },
        reset: () => {
          hasInit = false
          requestFrame()
        },
        destroy: () => {
          isDestroyed = true
          if (rafId) win.cancelAnimationFrame(rafId)
          io?.disconnect()
          ro.disconnect()
          win.removeEventListener("pointermove", onPointerMove)
          win.removeEventListener("pointerdown", onPointerDown)
          win.removeEventListener("touchstart", onTouchMove)
          win.removeEventListener("touchmove", onTouchMove)
          win.removeEventListener("touchend", handlePointerLeave)
          win.removeEventListener("blur", handlePointerLeave)
          doc.documentElement.removeEventListener("mouseleave", handlePointerLeave)
          canvas.removeEventListener("webglcontextlost", onContextLost)
          canvas.removeEventListener("webglcontextrestored", onContextRestored)
          renderer.dispose()
          geom.dispose()
          mat.dispose()
          if (canvas.parentNode) canvas.parentNode.removeChild(canvas)
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
        className={cn("relative overflow-hidden min-h-[320px] w-full", className)}
        style={{ backgroundColor, ...style }}
      >
        <div ref={canvasWrapRef} className="absolute inset-0 pointer-events-none" />
        {children && <div className="relative z-10 w-full h-full">{children}</div>}
      </div>
    )
  }
)

RibbonTrail.displayName = "RibbonTrail"
export default RibbonTrail
