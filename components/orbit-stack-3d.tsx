"use client"

import React, { useRef, useState, useEffect } from "react"
import { Float, Html, OrbitControls, useTexture } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import Image from "next/image"

// Official technology stack items
const techOrbitItems = [
  { name: "Python", category: "Core AI", color: "#3776AB", speed: 0.35, radius: 3.4, offset: 0 },
  { name: "TensorFlow", category: "Deep Learning", color: "#FF6F00", speed: 0.35, radius: 3.4, offset: (1 * Math.PI * 2) / 4 },
  { name: "Laravel", category: "Backend MVC", color: "#FF2D20", speed: 0.35, radius: 3.4, offset: (2 * Math.PI * 2) / 4 },
  { name: "PostgreSQL", category: "RDBMS", color: "#4169E1", speed: 0.35, radius: 3.4, offset: (3 * Math.PI * 2) / 4 },
  { name: "TypeScript", category: "Full-Stack", color: "#3178C6", speed: 0.22, radius: 5.2, offset: 0.8 },
  { name: "React", category: "Frontend UI", color: "#61DAFB", speed: 0.22, radius: 5.2, offset: 0.8 + (1 * Math.PI * 2) / 3 },
  { name: "Docker", category: "DevOps", color: "#2496ED", speed: 0.22, radius: 5.2, offset: 0.8 + (2 * Math.PI * 2) / 3 },
]

function ProfileSphere() {
  const texture = useTexture("/pp-aldi.jpg")

  return (
    <mesh>
      <sphereGeometry args={[1.5, 48, 48]} />
      <meshStandardMaterial map={texture} roughness={0.3} metalness={0.05} />
    </mesh>
  )
}

function OrbitingBadge({
  name,
  category,
  radius,
  speed,
  offset,
}: {
  name: string
  category: string
  radius: number
  speed: number
  offset: number
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime() * speed + offset
      groupRef.current.position.x = Math.cos(t) * radius
      groupRef.current.position.z = Math.sin(t) * radius
      groupRef.current.position.y = Math.sin(t * 2) * 0.25
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <Html transform occlude distanceFactor={6.5} zIndexRange={[50, 0]}>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/95 text-foreground shadow-lg hover:border-interactive-hover hover:scale-105 transition-all select-none cursor-pointer backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-tight">{name}</span>
            <span className="text-[9px] font-mono text-muted-foreground uppercase hidden sm:inline">
              • {category}
            </span>
          </div>
        </Html>
      </Float>
    </group>
  )
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} />
      <pointLight position={[-8, -5, -8]} intensity={0.8} />

      <ProfileSphere />

      {techOrbitItems.map((item, idx) => (
        <OrbitingBadge key={idx} {...item} />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.6}
      />
    </>
  )
}

// 2D Interactive Fallback for mobile or low-spec devices
function Fallback2D() {
  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto flex items-center justify-center">
      {/* Outer orbit ring */}
      <div className="absolute inset-0 rounded-full border border-dashed border-border/80 animate-spin [animation-duration:35s]" />
      {/* Inner orbit ring */}
      <div className="absolute inset-8 rounded-full border border-border/60 animate-spin [animation-duration:22s] [animation-direction:reverse]" />

      {/* Center Profile Image */}
      <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-border p-1 bg-card shadow-2xl">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/pp-aldi.jpg"
            alt="Muhammad Aldi Alfatih"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Orbiting badges */}
      <div className="absolute top-0 px-2.5 py-1 rounded-full border border-border bg-card text-[11px] font-mono font-medium text-foreground shadow-sm">
        Python • AI
      </div>
      <div className="absolute bottom-2 px-2.5 py-1 rounded-full border border-border bg-card text-[11px] font-mono font-medium text-foreground shadow-sm">
        TensorFlow
      </div>
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full border border-border bg-card text-[11px] font-mono font-medium text-foreground shadow-sm">
        Laravel
      </div>
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full border border-border bg-card text-[11px] font-mono font-medium text-foreground shadow-sm">
        PostgreSQL
      </div>
    </div>
  )
}

export default function OrbitStack3D() {
  const [hasWebGL, setHasWebGL] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (!gl) setHasWebGL(false)
    } catch {
      setHasWebGL(false)
    }
  }, [])

  if (!isClient) return <Fallback2D />

  if (!hasWebGL) return <Fallback2D />

  return (
    <div className="w-full h-[400px] sm:h-[480px] lg:h-[520px] relative">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <React.Suspense fallback={null}>
          <Scene3D />
        </React.Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground opacity-60 pointer-events-none select-none">
        [Geser untuk rotasi orbit 3D]
      </div>
    </div>
  )
}
