"use client"

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
import Image from "next/image"
import React from "react"

interface OrbitItem {
    icon: React.ElementType
    label: string
}

const innerOrbitItems: OrbitItem[] = [
    { icon: Code2, label: "Frontend" },
    { icon: Server, label: "Backend" },
    { icon: Database, label: "Database" },
    { icon: Smartphone, label: "Mobile" },
]

const outerOrbitItems: OrbitItem[] = [
    { icon: Globe, label: "Web" },
    { icon: Layers, label: "Fullstack" },
    { icon: Cpu, label: "AI/ML" },
    { icon: Terminal, label: "DevOps" },
    { icon: Cloud, label: "Cloud" },
]

export default function OrbitStack() {
    return (
        <div className="relative flex items-center justify-center w-[600px] h-[600px]">
            {/* Central Photo */}
            <div className="relative z-20 w-32 h-32 rounded-full border-2 border-python-blue p-[3px]">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src="/pp-aldi.jpg"
                        alt="Aldi Alfatih"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Inner Orbit */}
            <div className="absolute border border-terminal-text/10 rounded-full w-[280px] h-[280px] animate-none">
                {innerOrbitItems.map((item, index) => {
                    const delay = -(20 / innerOrbitItems.length) * index;

                    return (
                        <div
                            key={item.label}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                animation: `orbit 20s linear infinite`,
                                animationDelay: `${delay}s`,
                                ["--orbit-radius" as any]: "140px",
                                ["--duration" as any]: "20s",
                            }}
                        >
                            <div className="bg-[#0a0a0a] p-3 rounded-xl border border-terminal-text/15 group hover:border-python-blue hover:scale-110 transition-all duration-200 cursor-pointer">
                                <item.icon className="w-6 h-6 text-python-light" />
                                <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 text-xs text-terminal-text/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Outer Orbit */}
            <div className="absolute border border-terminal-text/10 rounded-full w-[480px] h-[480px]">
                {outerOrbitItems.map((item, index) => {
                    const delay = -(30 / outerOrbitItems.length) * index;
                    return (
                        <div
                            key={item.label}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                animation: `orbit 30s linear infinite reverse`,
                                animationDelay: `${delay}s`,
                                ["--orbit-radius" as any]: "240px",
                                ["--duration" as any]: "30s",
                            }}
                        >
                            <div className="bg-[#0a0a0a] p-3 rounded-xl border border-terminal-text/15 group hover:border-python-blue hover:scale-110 transition-all duration-200 cursor-pointer">
                                <item.icon className="w-6 h-6 text-python-light" />
                                <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 text-xs text-terminal-text/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Background subtle glow */}
            <div className="absolute inset-0 bg-python-blue/5 blur-3xl rounded-full -z-10" />
        </div>
    )
}
