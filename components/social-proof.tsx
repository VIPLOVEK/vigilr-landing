"use client"

import { Shield, Lock, Globe, Cpu, Award, Star } from "lucide-react"

const accolades = [
  { icon: Award, label: "Gartner Cool Vendor 2025", highlight: true },
  { icon: Shield, label: "SOC 2 Type II Certified" },
  { icon: Lock, label: "ISO 27001 Compliant" },
  { icon: Globe, label: "GDPR Ready" },
  { icon: Cpu, label: "MCP Protocol Native" },
  { icon: Star, label: "4.9/5 G2 Rating" },
]

// Double the items for seamless infinite scroll
const marqueeItems = [...accolades, ...accolades]

export function SocialProof() {
  return (
    <section className="border-y border-border bg-secondary/50 py-6 overflow-hidden">
      <div className="relative">
        {/* Gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/50 to-transparent" />
        
        {/* Scrolling marquee */}
        <div className="flex animate-marquee gap-8">
          {marqueeItems.map((item, index) => (
            <div 
              key={`${item.label}-${index}`} 
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2"
            >
              <item.icon className={`h-4 w-4 ${item.highlight ? "text-accent" : "text-foreground"}`} />
              <span className={`text-sm font-medium whitespace-nowrap ${item.highlight ? "text-accent" : "text-foreground"}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
