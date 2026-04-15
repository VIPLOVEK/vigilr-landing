"use client"

import { useRef, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

function AnimatedMetric({ value, label, note }: { value: string; label: string; note?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-1 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">{value}</p>
      <p className="text-sm text-muted-foreground text-center">{label}</p>
      {note && <p className="text-xs text-muted-foreground/60">{note}</p>}
    </div>
  )
}

const quotes = [
  {
    body: "We went from spending two weeks per quarter on manual vendor reviews to getting continuous alerts with zero analyst time. The ROI was obvious within the first month.",
    author: "Head of Information Security",
    company: "Series C Fintech",
    initials: "HS",
  },
  {
    body: "The MCP server integration with our AI security toolchain was a game-changer. We can now query vendor risk in natural language from inside our existing workflows.",
    author: "CISO",
    company: "Enterprise SaaS",
    initials: "CX",
  },
  {
    body: "Onboarding our 200-vendor portfolio took under an hour. The SOC 2 analysis alone saved us weeks of manual review on a critical infrastructure vendor.",
    author: "VP of Third-Party Risk",
    company: "Global Healthcare",
    initials: "VR",
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Customer outcomes</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Results that speak for themselves
          </h2>
        </div>

        {/* Metric row */}
        <div className="mt-12 grid grid-cols-2 gap-8 rounded-2xl border border-border bg-card p-8 lg:grid-cols-4">
          <AnimatedMetric value="73%" label="reduction in manual vendor review hours" note="Beta customer avg." />
          <AnimatedMetric value="2.4×" label="faster vendor onboarding vs. legacy GRC" note="Beta customer avg." />
          <AnimatedMetric value="Day 1" label="time to first risk score" />
          <AnimatedMetric value="<30 min" label="average full portfolio onboarding" />
        </div>

        {/* Quote cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {quotes.map((quote, i) => (
            <Card key={i} className="flex flex-col gap-4 p-6 border-border bg-card">
              <Quote className="h-5 w-5 text-accent/50 shrink-0" />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                &ldquo;{quote.body}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-accent/10 text-accent text-xs font-semibold">
                    {quote.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{quote.author}</p>
                  <p className="text-xs text-muted-foreground">{quote.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Testimonials represent beta customers. Attribution anonymised at customer request.
        </p>
      </div>
    </section>
  )
}
