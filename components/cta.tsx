"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import { openDemoModal } from "@/components/demo-modal"
import { SIGNUP_URL } from "@/lib/app-url"

export function Cta() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/5 px-6 py-16 sm:px-16 lg:px-24">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Shield className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
              Ready to transform your vendor risk program?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start your free 14-day trial today. No credit card required. 
              Import your vendors and see real-time risk scores in minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="h-12 gap-2 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href={SIGNUP_URL}>
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12"
                onClick={() => openDemoModal()}
              >
                Schedule a Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Join 500+ security teams already using Vigilr
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
