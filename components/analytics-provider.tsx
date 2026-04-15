"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/next"

const STORAGE_KEY = "vigilr-cookie-consent"

export function AnalyticsProvider() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Check existing consent on mount
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "accepted") setEnabled(true)

    // Listen for runtime acceptance (when user clicks Accept in the banner)
    const handler = () => setEnabled(true)
    window.addEventListener("cookie-consent-accepted", handler)
    return () => window.removeEventListener("cookie-consent-accepted", handler)
  }, [])

  if (!enabled) return null
  return <Analytics />
}
