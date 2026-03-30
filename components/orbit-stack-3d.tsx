"use client"

import { Float, Html, OrbitControls, useTexture } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import {
    Cloud,
    Code2,
    Cpu,
    Database,
    Globe,
    Layers,
    Server,
    Smartphone,
    Terminal
} from "lucide-react"
import React, { useRef } from "react"
import * as THREE from "three"

const innerOrbitItems = [
    { icon: Code2, label: "Frontend" },
    { icon: Server, label: "Backend" },
    { icon: Database, label: "Database" },
    { icon: Smartphone, label: "Mobile" },
]

const outerOrbitItems = [
    { icon: Globe, label: "Web" },
    { icon: Layers, label: "Fullstack" },
    { icon: Cpu, label: "AI/ML" },
    { icon: Terminal, label: "DevOps" },
    { icon: Cloud, label: "Cloud" },
]

function ProfileSphere() {
    const texture = useTexture("/pp-aldi.jpg")

    return (
        <mesh>
            <sphereGeometry args={[1.6, 64, 64]} />
            <meshStandardMaterial map={texture} roughness={0.4} metalness={0.1} />
        </mesh>
    )
}

function OrbitingIcon({ icon: Icon, label, radius, speed, offset, yOffset }: {
    icon: React.ElementType,
    label: string,
    radius: number,
    speed: number,
    offset: number,
    yOffset: number
}) {
    const groupRef = useRef<THREE.Group>(null)

    useFrame(({ clock }) => {
        if (groupRef.current) {
            const t = clock.getElapsedTime() * speed + offset
            groupRef.current.position.x = Math.cos(t) * radius
            groupRef.current.position.z = Math.sin(t) * radius
            groupRef.current.position.y = Math.sin(t * 2) * 0.2 + yOffset
        }
    })

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Html transform occlude distanceFactor={6} zIndexRange={[100, 0]}>
                    <div className="bg-[#0a0a0a] p-3 rounded-xl border border-[#F0EDCF]/15 group hover:border-[#0B60B0] hover:scale-110 transition-all duration-200 cursor-pointer select-none">
                        <Icon className="w-8 h-8 text-[#40A2D8]" />
                        <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 text-xs text-[#F0EDCF]/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black px-2 py-1 rounded font-mono border border-[#F0EDCF]/10">
                            {label}
                        </span>
                    </div>
                </Html>
            </Float>
        </group>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#0B60B0" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#40A2D8" />

            <ProfileSphere />

            {innerOrbitItems.map((item, i) => (
                <OrbitingIcon
                    key={i}
                    {...item}
                    radius={3.2}
                    speed={0.4}
                    offset={(i * Math.PI * 2) / innerOrbitItems.length}
                    yOffset={0}
                />
            ))}

            {outerOrbitItems.map((item, i) => (
                <OrbitingIcon
                    key={i}
                    {...item}
                    radius={5.5}
                    speed={0.25}
                    offset={(i * Math.PI * 2) / outerOrbitItems.length}
                    yOffset={0}
                />
            ))}

            <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.5} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
        </>
    )
}

export default function OrbitStack3D() {
    return (
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-python-blue/10 blur-[100px] rounded-full -z-10" />

            <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
                <Scene />
            </Canvas>
        </div>
    )
}
