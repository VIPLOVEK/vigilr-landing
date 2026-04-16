"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { LOGIN_URL, SIGNUP_URL } from "@/lib/app-url"

const NAV_SECTIONS = ["features", "workflow", "pricing", "api"]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
              <Shield className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">Vigilr</span>
          </Link>
          <div className="hidden lg:flex lg:gap-8">
            {[
              { href: "#features", label: "Features", id: "features" },
              { href: "#workflow", label: "How It Works", id: "workflow" },
              { href: "#pricing", label: "Pricing", id: "pricing" },
              { href: "#api", label: "API", id: "api" },
            ].map(({ href, label, id }) => (
              <Link
                key={id}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  activeSection === id ? "text-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <ThemeToggle />
          <Link href="#" className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Docs
          </Link>
          <a href={LOGIN_URL} className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Sign in
          </a>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href={SIGNUP_URL}>Get Started</a>
          </Button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-1 px-6 py-4">
            <Link 
              href="#features" 
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#workflow" 
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#pricing" 
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#api" 
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              API
            </Link>
            <Link 
              href="#" 
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
              <Button variant="outline" className="w-full justify-center" asChild>
                <a href={LOGIN_URL}>Sign in</a>
              </Button>
              <Button className="w-full justify-center bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href={SIGNUP_URL} onClick={() => setMobileMenuOpen(false)}>Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
