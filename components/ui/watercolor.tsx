"use client"

import React, { useRef, useState, useCallback, useEffect, useMemo } from "react"
import * as THREE from "three"
import { cn } from "@/lib/utils"
import { usePortfolioTheme } from "@/contexts/theme-context"

// GLSL Vertex Shader
const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`

// GLSL Fragment Shader from React Bits Pro
const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uRes;
uniform float uSpeed;
uniform float uScale;
uniform int uOctaves;
uniform float uPersist;
uniform float uLacun;
uniform float uDrift;
uniform float uWarp;
uniform vec3 uCol1;
uniform vec3 uCol2;
uniform float uGain;
uniform float uSat;
uniform float uBright;
uniform float uAlpha;
uniform vec2 uPointer;
uniform float uCursorActive;
uniform float uCursorIntensity;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(41.713, 83.457))) * 35718.549);
}

float vnoise(vec2 p) {
  vec2 g = floor(p);
  vec2 f = fract(p);
  vec2 w = f * f * (3.0 - 2.0 * f);

  float tl = hash(g);
  float tr = hash(g + vec2(1.0, 0.0));
  float bl = hash(g + vec2(0.0, 1.0));
  float br = hash(g + vec2(1.0, 1.0));

  return mix(mix(tl, tr, w.x), mix(bl, br, w.x), w.y);
}

float layers(vec2 p) {
  float total = 0.0;
  float amp = 0.5;
  float angle = 0.47;
  float ca = cos(angle), sa = sin(angle);
  mat2 bend = mat2(ca, -sa, sa, ca);

  for (int k = 0; k < 8; k++) {
    if (k >= uOctaves) break;
    total += amp * vnoise(p);
    p = bend * p * uLacun + 193.7;
    amp *= uPersist;
  }

  return total;
}

void main() {
  vec2 coord = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  coord *= uScale;

  float t = uTime * uSpeed;

  vec2 pointerCoord = (uPointer * 2.0 - 1.0) * vec2(uRes.x / uRes.y, 1.0) * uScale;
  float cursorDist = length(coord - pointerCoord);
  float cursorInfluence = smoothstep(0.8, 0.0, cursorDist) * uCursorActive * uCursorIntensity;

  vec2 cursorDir = normalize(coord - pointerCoord + 0.001);
  vec2 warpedCoord = coord + cursorDir * cursorInfluence * 0.12;

  float q = layers(warpedCoord + t * uDrift);
  float r = layers(warpedCoord + q * (1.0 + cursorInfluence * 0.08) + t * uWarp);

  float blend = r * uGain;
  vec3 raw = mix(uCol1, uCol2, smoothstep(0.3, 0.7, blend));

  float luma = dot(raw, vec3(0.299, 0.587, 0.114));
  vec3 col = mix(vec3(luma), raw, uSat) + uBright;
  col = clamp(col, 0.0, 1.0);

  gl_FragColor = vec4(col, uAlpha);
}
`

function hexToRgb(hex: string): [number, number, number] {
  let cleaned = hex.trim()
  if (cleaned.startsWith("#")) {
    cleaned = cleaned.slice(1)
  }
  if (cleaned.length === 3) {
    cleaned = cleaned
      .split("")
      .map((c) => c + c)
      .join("")
  }
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(cleaned)
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : [0, 0, 0]
}

export const THEME_WATERCOLOR_PRESETS: Record<
  string,
  { color1: string; color2: string; brightness?: number; saturation?: number }
> = {
  "midnight-blue": {
    color1: "#0B60B0",
    color2: "#40A2D8",
    brightness: 0.12,
    saturation: 1.25,
  },
  "sky-blue": {
    color1: "#2196F3",
    color2: "#90CAF9",
    brightness: 0.18,
    saturation: 1.15,
  },
  burgundy: {
    color1: "#853953",
    color2: "#612D53",
    brightness: 0.14,
    saturation: 1.2,
  },
  "arctic-red": {
    color1: "#FF0000",
    color2: "#8FD5DE",
    brightness: 0.16,
    saturation: 1.2,
  },
}

export interface WatercolorProps {
  width?: string | number
  height?: string | number
  className?: string
  children?: React.ReactNode
  speed?: number
  scale?: number
  octaves?: number
  persistence?: number
  lacunarity?: number
  driftSpeed?: number
  warpSpeed?: number
  color1?: string
  color2?: string
  colorGain?: number
  saturation?: number
  brightness?: number
  opacity?: number
  cursorInteraction?: boolean
  cursorIntensity?: number
  themeAdaptive?: boolean
}

export function Watercolor({
  width = "100%",
  height = "100%",
  className,
  children,
  speed = 0.6,
  scale = 0.6,
  octaves = 3,
  persistence = 0.6,
  lacunarity = 2.4,
  driftSpeed = 0.04,
  warpSpeed = 0.08,
  color1,
  color2,
  colorGain = 1,
  saturation,
  brightness,
  opacity = 1,
  cursorInteraction = false,
  cursorIntensity = 1,
  themeAdaptive = true,
}: WatercolorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerTarget = useRef<[number, number]>([0.5, 0.5])
  const pointerSmooth = useRef<[number, number]>([0.5, 0.5])

  const { theme } = usePortfolioTheme()

  const resolvedPreset = THEME_WATERCOLOR_PRESETS[theme] || THEME_WATERCOLOR_PRESETS["midnight-blue"]
  const activeColor1 = color1 || (themeAdaptive ? resolvedPreset.color1 : "#0a0a0a")
  const activeColor2 = color2 || (themeAdaptive ? resolvedPreset.color2 : "#e0e0e0")

  const col1Rgb = useMemo(() => hexToRgb(activeColor1), [activeColor1])
  const col2Rgb = useMemo(() => hexToRgb(activeColor2), [activeColor2])

  const resolvedSaturation =
    saturation !== undefined
      ? saturation
      : themeAdaptive && resolvedPreset.saturation !== undefined
      ? resolvedPreset.saturation
      : 1.0

  const resolvedBrightness =
    brightness !== undefined
      ? brightness
      : themeAdaptive && resolvedPreset.brightness !== undefined
      ? resolvedPreset.brightness
      : 0.15

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!cursorInteraction) return
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        pointerTarget.current = [
          (e.clientX - rect.left) / rect.width,
          1 - (e.clientY - rect.top) / rect.height,
        ]
      }
    },
    [cursorInteraction]
  )

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    let rafId = 0
    let isVisible = true
    let isDestroyed = false

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const effectiveSpeed = prefersReduced ? 0.05 : speed
    const effectiveDrift = prefersReduced ? 0.005 : driftSpeed
    const effectiveWarp = prefersReduced ? 0.01 : warpSpeed

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25))

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uSpeed: { value: effectiveSpeed },
      uScale: { value: scale },
      uOctaves: { value: octaves },
      uPersist: { value: persistence },
      uLacun: { value: lacunarity },
      uDrift: { value: effectiveDrift },
      uWarp: { value: effectiveWarp },
      uCol1: { value: new THREE.Vector3(...col1Rgb) },
      uCol2: { value: new THREE.Vector3(...col2Rgb) },
      uGain: { value: colorGain },
      uSat: { value: resolvedSaturation },
      uBright: { value: resolvedBrightness },
      uAlpha: { value: opacity },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uCursorActive: { value: cursorInteraction ? 1.0 : 0.0 },
      uCursorIntensity: { value: cursorIntensity },
    }

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const handleResize = () => {
      const rect = container.getBoundingClientRect()
      const w = Math.max(1, rect.width)
      const h = Math.max(1, rect.height)
      renderer.setSize(w, h, false)
      const dpr = renderer.getPixelRatio()
      uniforms.uRes.value.set(w * dpr, h * dpr)
    }

    handleResize()

    const ro = new ResizeObserver(handleResize)
    ro.observe(container)

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible && !rafId) {
          loop()
        }
      },
      { threshold: 0.01 }
    )
    io.observe(container)

    const startTime = performance.now()

    const loop = () => {
      if (isDestroyed || !isVisible) {
        rafId = 0
        return
      }

      const elapsed = (performance.now() - startTime) / 1000
      uniforms.uTime.value = elapsed

      // Lerp pointer position smoothly
      pointerSmooth.current[0] += (pointerTarget.current[0] - pointerSmooth.current[0]) * 0.12
      pointerSmooth.current[1] += (pointerTarget.current[1] - pointerSmooth.current[1]) * 0.12
      uniforms.uPointer.value.set(pointerSmooth.current[0], pointerSmooth.current[1])

      renderer.render(scene, camera)
      rafId = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      isDestroyed = true
      if (rafId) cancelAnimationFrame(rafId)
      ro.disconnect()
      io.disconnect()
      scene.remove(mesh)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [
    speed,
    scale,
    octaves,
    persistence,
    lacunarity,
    driftSpeed,
    warpSpeed,
    col1Rgb,
    col2Rgb,
    colorGain,
    resolvedSaturation,
    resolvedBrightness,
    opacity,
    cursorInteraction,
    cursorIntensity,
  ])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ width, height }}
      onPointerMove={handlePointerMove}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
      />
      {children && <div className="relative z-10 w-full h-full">{children}</div>}
    </div>
  )
}

Watercolor.displayName = "Watercolor"
export default Watercolor
