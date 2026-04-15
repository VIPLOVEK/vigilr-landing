"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

const STORAGE_KEY = "vigilr-cookie-consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
    // Dispatch event so AnalyticsProvider can enable tracking
    window.dispatchEvent(new Event("cookie-consent-accepted"))
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3 sm:items-center">
          <Cookie className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:mt-0" />
          <p className="text-sm text-muted-foreground">
            We use analytics to understand how visitors use Vigilr — no ad tracking, no third-party data sales.{" "}
            <a href="/privacy" className="text-accent underline-offset-4 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="ghost" size="sm" onClick={decline} className="text-muted-foreground">
            Decline
          </Button>
          <Button size="sm" onClick={accept} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
