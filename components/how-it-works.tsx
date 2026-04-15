"use client"

import { useState } from "react"
import { Upload, Radar, Bell, LineChart } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Connect Your Vendor List",
    description: "Import via CSV, integrate with your procurement system, or use our API. We'll automatically begin enriching each vendor profile.",
    detail: "Supports bulk import from Excel, direct integrations with ServiceNow, Coupa, and SAP Ariba.",
  },
  {
    number: "02", 
    icon: Radar,
    title: "Continuous Monitoring Begins",
    description: "Our AI agents continuously scan 50+ threat intelligence feeds, regulatory databases, and news sources for relevant signals.",
    detail: "Real-time CVE correlation, breach detection, and regulatory filing analysis.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Dynamic Risk Scoring",
    description: "Each vendor receives a 0-100 risk score across five dimensions, updated in real-time as new intelligence emerges.",
    detail: "Cybersecurity, Compliance, Data Privacy, Business Continuity, and Reputation.",
  },
  {
    number: "04",
    icon: Bell,
    title: "Alerts & Actions",
    description: "Receive instant notifications when vendor risk profiles change. Trigger automated workflows or escalate to your team.",
    detail: "Slack, Teams, email, webhook integrations. Custom alert thresholds per vendor tier.",
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">How It Works</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            From onboarding to continuous monitoring in minutes
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Steps list */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "w-full rounded-lg border p-6 text-left transition-all",
                  activeStep === index
                    ? "border-accent bg-accent/5"
                    : "border-border bg-card hover:border-accent/30"
                )}
              >
                <div className="flex items-start gap-4">
                  <span className={cn(
                    "font-mono text-sm font-medium",
                    activeStep === index ? "text-accent" : "text-muted-foreground"
                  )}>
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className="flex items-center justify-center rounded-lg border border-border bg-card p-8 lg:p-12">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                {(() => {
                  const IconComponent = steps[activeStep].icon
                  return <IconComponent className="h-8 w-8 text-accent" />
                })()}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{steps[activeStep].title}</h3>
              <p className="mt-4 text-muted-foreground">{steps[activeStep].detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
