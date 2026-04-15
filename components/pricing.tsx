"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { openDemoModal } from "@/components/demo-modal"

const tiers = [
  {
    name: "Starter",
    id: "starter",
    price: "$499",
    period: "/month",
    description: "For growing teams getting started with vendor risk management.",
    features: [
      "Up to 50 vendors monitored",
      "Real-time risk scoring",
      "CVE & breach monitoring",
      "Email alerts",
      "Basic reporting",
      "API access (1,000 calls/month)",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    id: "professional",
    price: "$1,499",
    period: "/month",
    description: "For security teams requiring comprehensive vendor oversight.",
    features: [
      "Up to 250 vendors monitored",
      "Everything in Starter, plus:",
      "AI questionnaire engine",
      "SOC 2 report analysis",
      "Slack & Teams integration",
      "Custom alert thresholds",
      "API access (10,000 calls/month)",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced security and compliance needs.",
    features: [
      "Unlimited vendors",
      "Everything in Professional, plus:",
      "SSO/SAML integration",
      "Custom data source integration",
      "Dedicated MCP server instance",
      "SLA guarantees",
      "Unlimited API access",
      "Dedicated success manager",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Pricing</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start monitoring your vendors in minutes. No setup fees, no long-term contracts.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "relative flex flex-col rounded-xl border p-8 transition-all",
                tier.highlighted
                  ? "border-accent bg-accent/5 shadow-lg shadow-accent/10 scale-[1.02]"
                  : "border-border bg-card hover:border-accent/30"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                      tier.highlighted ? "bg-accent text-accent-foreground" : "bg-accent/10 text-accent"
                    )}>
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={cn(
                  "mt-8 w-full",
                  tier.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                variant={tier.highlighted ? "default" : "secondary"}
                onClick={() => openDemoModal(tier.name)}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
