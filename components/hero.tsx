"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Activity, Zap, ChevronRight, ArrowRight, Loader2, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

// Formspree endpoint for waitlist — replace YYYYYYYY with your waitlist form ID
const WAITLIST_ENDPOINT = "https://formspree.io/f/myklkooa"

const BLOCKED_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com"]

function isWorkEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase()
  return domain && !BLOCKED_DOMAINS.includes(domain)
}

function AnimatedCount({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLParagraphElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          const duration = 1400
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return (
    <p ref={ref} className="text-3xl font-semibold text-foreground">
      {count}{suffix}
    </p>
  )
}

export function Hero() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError("")

    if (!email.includes("@")) {
      setEmailError("Enter a valid email address")
      return
    }
    if (!isWorkEmail(email)) {
      setEmailError("Please use your work email address")
      return
    }

    setLoading(true)
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      toast.success("You're on the list! We'll be in touch soon.")
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="group mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-muted-foreground">Now accepting early access requests</span>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-foreground">The AI-native platform for </span>
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              third-party risk
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty lg:text-xl">
            Continuous vendor monitoring powered by real-time breach intelligence,
            CVE feeds, and dynamic risk scoring. Replace annual questionnaires with
            always-on security intelligence.
          </p>

          {/* Inline email capture */}
          <div className="mt-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">Check your inbox for next steps</span>
                </div>
                <p className="text-sm text-muted-foreground">We&apos;ll be in touch within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <div className="flex w-full max-w-md flex-col gap-1.5 sm:flex-row sm:gap-0">
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 sm:rounded-r-none sm:border-r-0 text-base"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 gap-2 bg-accent text-accent-foreground hover:bg-accent/90 sm:rounded-l-none sm:whitespace-nowrap"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>Request Early Access <ArrowRight className="h-4 w-4" /></>
                    )}
                  </Button>
                </div>
              </form>
            )}
            {emailError && <p className="mt-2 text-sm text-destructive">{emailError}</p>}
            <p className="mt-3 text-xs text-muted-foreground">No credit card required. 14-day free trial.</p>
          </div>
        </div>

        {/* Stats cards */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-3xl font-semibold text-foreground">Real-time</p>
                <p className="mt-1 text-sm text-muted-foreground">Continuous monitoring</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Shield className="h-5 w-5 text-accent" />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Not annual snapshots. Get alerts the moment vendor risk changes.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
            <div className="flex items-start justify-between">
              <div>
                <AnimatedCount end={50} suffix="+" />
                <p className="mt-1 text-sm text-muted-foreground">Data sources</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Activity className="h-5 w-5 text-accent" />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Automated breach, CVE, news, and regulatory filing ingestion.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-3xl font-semibold text-foreground">Day 1</p>
                <p className="mt-1 text-sm text-muted-foreground">Time to value</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Zap className="h-5 w-5 text-accent" />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Onboard in minutes, not months. No lengthy implementations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
