"use client"

import { profileData } from "@/data/profile"

export default function AvailabilityWidget() {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-md text-xs font-mono text-foreground shadow-xs">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-muted-foreground">$</span>
      <span className="font-medium">{profileData.availability}</span>
    </div>
  )
}
