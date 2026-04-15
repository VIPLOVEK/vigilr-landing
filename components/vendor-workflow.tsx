"use client"

import { useState } from "react"
import { 
  Upload, 
  Radar, 
  BarChart3, 
  Bell, 
  FileCheck,
  RefreshCw
} from "lucide-react"
import { cn } from "@/lib/utils"

const workflowSteps = [
  {
    id: 1,
    icon: Upload,
    title: "Onboard",
    subtitle: "Import Vendors",
    description: "Upload vendor list via CSV, API, or integrate with procurement systems like ServiceNow and Coupa.",
    position: { top: "0%", left: "50%", transform: "translate(-50%, 0)" }
  },
  {
    id: 2,
    icon: Radar,
    title: "Monitor",
    subtitle: "Continuous Scanning",
    description: "AI agents scan 50+ threat feeds, CVE databases, breach reports, and news sources in real-time.",
    position: { top: "25%", right: "0%", transform: "translate(0, -50%)" }
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Score",
    subtitle: "Dynamic Risk Rating",
    description: "Generate 0-100 risk scores across five dimensions: Cybersecurity, Compliance, Privacy, Continuity, Reputation.",
    position: { top: "75%", right: "0%", transform: "translate(0, -50%)" }
  },
  {
    id: 4,
    icon: Bell,
    title: "Alert",
    subtitle: "Instant Notifications",
    description: "Receive alerts via Slack, Teams, or email when vendor risk profiles change beyond thresholds.",
    position: { bottom: "0%", left: "50%", transform: "translate(-50%, 0)" }
  },
  {
    id: 5,
    icon: FileCheck,
    title: "Review",
    subtitle: "AI Questionnaires",
    description: "Deploy adaptive questionnaires. AI extracts and validates claims from SOC 2 reports automatically.",
    position: { top: "75%", left: "0%", transform: "translate(0, -50%)" }
  },
  {
    id: 6,
    icon: RefreshCw,
    title: "Iterate",
    subtitle: "Continuous Improvement",
    description: "Refine risk models based on outcomes. The system learns and improves with every assessment.",
    position: { top: "25%", left: "0%", transform: "translate(0, -50%)" }
  },
]

export function VendorWorkflow() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="workflow" className="border-t border-border py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Vendor Lifecycle
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Continuous risk intelligence, not annual snapshots
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vigilr monitors your vendor ecosystem 24/7, providing real-time intelligence at every stage.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Circular Workflow Diagram */}
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            {/* Outer decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-border opacity-50" />
            
            {/* Main circle */}
            <div className="absolute inset-4 rounded-full border border-border bg-secondary/30" />
            
            {/* Inner circle with logo */}
            <div className="absolute inset-1/4 flex items-center justify-center rounded-full border border-accent/30 bg-background">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                  <span className="font-mono text-2xl font-bold text-accent">V</span>
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">Vigilr</p>
                <p className="text-xs text-muted-foreground">Always-on TPRM</p>
              </div>
            </div>

            {/* Animated connecting lines */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <circle 
                cx="200" 
                cy="200" 
                r="160" 
                fill="none" 
                stroke="url(#lineGradient)" 
                strokeWidth="2"
                strokeDasharray="20 10"
                className="animate-spin"
                style={{ animationDuration: "60s" }}
              />
            </svg>

            {/* Workflow step nodes */}
            {workflowSteps.map((step, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180)
              const radius = 42 // percentage from center
              const x = 50 + radius * Math.cos(angle)
              const y = 50 + radius * Math.sin(angle)
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 transition-all duration-300",
                    activeStep === index
                      ? "border-accent bg-accent text-accent-foreground scale-110 shadow-lg shadow-accent/20"
                      : "border-border bg-card text-foreground hover:border-accent/50 hover:bg-secondary"
                  )}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <step.icon className="h-6 w-6" />
                </button>
              )
            })}

            {/* Step labels */}
            {workflowSteps.map((step, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180)
              const labelRadius = 58
              const x = 50 + labelRadius * Math.cos(angle)
              const y = 50 + labelRadius * Math.sin(angle)
              
              return (
                <div
                  key={`label-${step.id}`}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-300",
                    activeStep === index ? "opacity-100" : "opacity-60"
                  )}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <p className={cn(
                    "text-xs font-semibold",
                    activeStep === index ? "text-accent" : "text-foreground"
                  )}>
                    {step.title}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Active step details */}
          <div className="space-y-6">
            {/* Step navigation pills */}
            <div className="flex flex-wrap gap-2">
              {workflowSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                    activeStep === index
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  <step.icon className="h-4 w-4" />
                  {step.title}
                </button>
              ))}
            </div>

            {/* Active step content */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-xl",
                  "bg-accent/10 text-accent"
                )}>
                  {(() => {
                    const IconComponent = workflowSteps[activeStep].icon
                    return <IconComponent className="h-7 w-7" />
                  })()}
                </div>
                <div>
                  <p className="text-sm font-medium text-accent">
                    Step {workflowSteps[activeStep].id} of 6
                  </p>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {workflowSteps[activeStep].subtitle}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {workflowSteps[activeStep].description}
              </p>
              
              {/* Progress indicator */}
              <div className="mt-6 flex gap-1">
                {workflowSteps.map((_, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "h-1 flex-1 rounded-full transition-colors",
                      index <= activeStep ? "bg-accent" : "bg-border"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
