"use client"

import { useState, useEffect } from "react"
import { Check, Palette, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type ThemeColors = {
  background: string
  foreground: string
  card: string
  cardForeground: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  accent: string
  accentForeground: string
  border: string
}

type Theme = {
  id: string
  name: string
  subtitle: string
  badge?: string
  badgeType?: "trending" | "rising" | "unique" | "classic" | "premium" | "bold" | "recommended" | "trust" | "innovation"
  description: string
  inspiration: string[]
  category: "trust" | "innovation" | "security" | "premium" | "enterprise"
  light: ThemeColors
  dark: ThemeColors
  previewColors: string[]
}

// Research-backed palettes for enterprise security/AI products
// Sources: I Love Hue Tech Palettes, Colorhero Dark Mode Guide 2025, Color Psychology Research
const themes: Theme[] = [
  // === RECOMMENDED FOR VIGILR (Security + Trust) ===
  {
    id: "deep-navy-electric",
    name: "Deep Navy & Electric",
    subtitle: "Enterprise intelligence",
    badge: "RECOMMENDED",
    badgeType: "recommended",
    category: "trust",
    description: "Deep navy signals trust and reliability. Electric blue accent conveys innovation without aggression. The #1 choice for enterprise security SaaS.",
    inspiration: ["Stripe", "Plaid", "Datadog"],
    previewColors: ["#f8fafc", "#3b82f6", "#2563eb", "#1e40af", "#1e293b", "#0f172a"],
    light: {
      background: "oklch(0.985 0.005 250)",
      foreground: "oklch(0.15 0.02 250)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.15 0.02 250)",
      primary: "oklch(0.15 0.02 250)",
      primaryForeground: "oklch(0.985 0.005 250)",
      secondary: "oklch(0.96 0.008 250)",
      secondaryForeground: "oklch(0.15 0.02 250)",
      muted: "oklch(0.94 0.008 250)",
      mutedForeground: "oklch(0.45 0.02 250)",
      accent: "oklch(0.55 0.20 260)",
      accentForeground: "oklch(0.98 0 0)",
      border: "oklch(0.90 0.008 250)",
    },
    dark: {
      background: "oklch(0.13 0.02 250)",
      foreground: "oklch(0.96 0.005 250)",
      card: "oklch(0.17 0.02 250)",
      cardForeground: "oklch(0.96 0.005 250)",
      primary: "oklch(0.96 0.005 250)",
      primaryForeground: "oklch(0.13 0.02 250)",
      secondary: "oklch(0.21 0.02 250)",
      secondaryForeground: "oklch(0.96 0.005 250)",
      muted: "oklch(0.23 0.02 250)",
      mutedForeground: "oklch(0.65 0.015 250)",
      accent: "oklch(0.65 0.20 260)",
      accentForeground: "oklch(0.13 0.02 250)",
      border: "oklch(0.27 0.02 250)",
    },
  },
  {
    id: "graphite-teal",
    name: "Graphite & Teal",
    subtitle: "Calm intelligence",
    badge: "TOP RATED",
    badgeType: "trending",
    category: "trust",
    description: "Earthy teal on warm graphite. 2025's top trend for AI products. Builds trust with enterprise buyers through natural, sustainable-feeling palettes.",
    inspiration: ["Anthropic", "Vercel", "Linear"],
    previewColors: ["#f5f7f7", "#14b8a6", "#0d9488", "#0f766e", "#44403c", "#1c1917"],
    light: {
      background: "oklch(0.985 0.003 180)",
      foreground: "oklch(0.18 0.015 60)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.015 60)",
      primary: "oklch(0.18 0.015 60)",
      primaryForeground: "oklch(0.985 0.003 180)",
      secondary: "oklch(0.96 0.005 180)",
      secondaryForeground: "oklch(0.18 0.015 60)",
      muted: "oklch(0.94 0.005 180)",
      mutedForeground: "oklch(0.45 0.015 60)",
      accent: "oklch(0.60 0.14 175)",
      accentForeground: "oklch(0.98 0 0)",
      border: "oklch(0.90 0.005 180)",
    },
    dark: {
      background: "oklch(0.14 0.01 60)",
      foreground: "oklch(0.96 0.003 180)",
      card: "oklch(0.18 0.01 60)",
      cardForeground: "oklch(0.96 0.003 180)",
      primary: "oklch(0.96 0.003 180)",
      primaryForeground: "oklch(0.14 0.01 60)",
      secondary: "oklch(0.22 0.01 60)",
      secondaryForeground: "oklch(0.96 0.003 180)",
      muted: "oklch(0.24 0.01 60)",
      mutedForeground: "oklch(0.65 0.01 180)",
      accent: "oklch(0.70 0.14 175)",
      accentForeground: "oklch(0.14 0.01 60)",
      border: "oklch(0.28 0.01 60)",
    },
  },
  {
    id: "slate-steel",
    name: "Slate & Steel",
    subtitle: "Aerospace control room",
    badge: "CLASSIC",
    badgeType: "classic",
    category: "enterprise",
    description: "Cold blue-steel on deep slate. The palette of trading floors and control rooms. Proven to convey institutional authority and precision.",
    inspiration: ["Palantir", "Bloomberg", "Anduril"],
    previewColors: ["#f8fafc", "#94a3b8", "#64748b", "#475569", "#1e293b", "#0f172a"],
    light: {
      background: "oklch(0.985 0.005 250)",
      foreground: "oklch(0.18 0.025 250)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.025 250)",
      primary: "oklch(0.18 0.025 250)",
      primaryForeground: "oklch(0.985 0.005 250)",
      secondary: "oklch(0.96 0.01 250)",
      secondaryForeground: "oklch(0.18 0.025 250)",
      muted: "oklch(0.94 0.01 250)",
      mutedForeground: "oklch(0.45 0.02 250)",
      accent: "oklch(0.55 0.08 250)",
      accentForeground: "oklch(0.98 0 0)",
      border: "oklch(0.90 0.01 250)",
    },
    dark: {
      background: "oklch(0.13 0.025 250)",
      foreground: "oklch(0.96 0.005 250)",
      card: "oklch(0.17 0.025 250)",
      cardForeground: "oklch(0.96 0.005 250)",
      primary: "oklch(0.96 0.005 250)",
      primaryForeground: "oklch(0.13 0.025 250)",
      secondary: "oklch(0.21 0.025 250)",
      secondaryForeground: "oklch(0.96 0.005 250)",
      muted: "oklch(0.23 0.025 250)",
      mutedForeground: "oklch(0.65 0.015 250)",
      accent: "oklch(0.65 0.08 250)",
      accentForeground: "oklch(0.13 0.025 250)",
      border: "oklch(0.27 0.025 250)",
    },
  },

  // === SECURITY-FOCUSED PALETTES ===
  {
    id: "cyber-shield",
    name: "Cyber Shield",
    subtitle: "Security-first design",
    badge: "SECURITY",
    badgeType: "bold",
    category: "security",
    description: "Navy base with cyan accents. Modern cybersecurity aesthetic that signals protection without fear. Used by leading security platforms.",
    inspiration: ["CrowdStrike", "SentinelOne", "Palo Alto"],
    previewColors: ["#f0f9ff", "#22d3ee", "#06b6d4", "#0891b2", "#164e63", "#0c4a6e"],
    light: {
      background: "oklch(0.985 0.01 210)",
      foreground: "oklch(0.18 0.03 220)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.03 220)",
      primary: "oklch(0.18 0.03 220)",
      primaryForeground: "oklch(0.985 0.01 210)",
      secondary: "oklch(0.96 0.015 210)",
      secondaryForeground: "oklch(0.18 0.03 220)",
      muted: "oklch(0.94 0.015 210)",
      mutedForeground: "oklch(0.45 0.025 220)",
      accent: "oklch(0.70 0.14 195)",
      accentForeground: "oklch(0.15 0.02 220)",
      border: "oklch(0.90 0.015 210)",
    },
    dark: {
      background: "oklch(0.14 0.03 220)",
      foreground: "oklch(0.96 0.01 210)",
      card: "oklch(0.18 0.03 220)",
      cardForeground: "oklch(0.96 0.01 210)",
      primary: "oklch(0.96 0.01 210)",
      primaryForeground: "oklch(0.14 0.03 220)",
      secondary: "oklch(0.22 0.03 220)",
      secondaryForeground: "oklch(0.96 0.01 210)",
      muted: "oklch(0.24 0.03 220)",
      mutedForeground: "oklch(0.65 0.015 210)",
      accent: "oklch(0.78 0.14 195)",
      accentForeground: "oklch(0.14 0.03 220)",
      border: "oklch(0.28 0.03 220)",
    },
  },
  {
    id: "iron-crimson",
    name: "Iron & Crimson",
    subtitle: "Threat intelligence",
    badge: "BOLD",
    badgeType: "bold",
    category: "security",
    description: "Deep muted crimson signals danger with restraint. Not alarming - authoritative. Perfect for incident-response and threat detection context.",
    inspiration: ["Mandiant", "FireEye", "Red Canary"],
    previewColors: ["#fef2f2", "#f87171", "#dc2626", "#b91c1c", "#44403c", "#1c1917"],
    light: {
      background: "oklch(0.985 0.008 25)",
      foreground: "oklch(0.18 0.02 30)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.02 30)",
      primary: "oklch(0.18 0.02 30)",
      primaryForeground: "oklch(0.985 0.008 25)",
      secondary: "oklch(0.96 0.012 25)",
      secondaryForeground: "oklch(0.18 0.02 30)",
      muted: "oklch(0.94 0.012 25)",
      mutedForeground: "oklch(0.45 0.02 30)",
      accent: "oklch(0.55 0.20 25)",
      accentForeground: "oklch(0.98 0 0)",
      border: "oklch(0.90 0.012 25)",
    },
    dark: {
      background: "oklch(0.14 0.015 30)",
      foreground: "oklch(0.96 0.008 25)",
      card: "oklch(0.18 0.015 30)",
      cardForeground: "oklch(0.96 0.008 25)",
      primary: "oklch(0.96 0.008 25)",
      primaryForeground: "oklch(0.14 0.015 30)",
      secondary: "oklch(0.22 0.015 30)",
      secondaryForeground: "oklch(0.96 0.008 25)",
      muted: "oklch(0.24 0.015 30)",
      mutedForeground: "oklch(0.65 0.012 25)",
      accent: "oklch(0.62 0.20 25)",
      accentForeground: "oklch(0.98 0 0)",
      border: "oklch(0.28 0.015 30)",
    },
  },

  // === AI/INNOVATION PALETTES ===
  {
    id: "neural-indigo",
    name: "Neural Indigo",
    subtitle: "AI-native intelligence",
    badge: "AI 2026",
    badgeType: "innovation",
    category: "innovation",
    description: "Electric indigo is 2026's AI color. Signals machine intelligence and computational power. Popular among AI-first products.",
    inspiration: ["OpenAI", "Perplexity", "Cursor"],
    previewColors: ["#eef2ff", "#818cf8", "#6366f1", "#4f46e5", "#312e81", "#1e1b4b"],
    light: {
      background: "oklch(0.985 0.01 275)",
      foreground: "oklch(0.18 0.035 275)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.035 275)",
      primary: "oklch(0.18 0.035 275)",
      primaryForeground: "oklch(0.985 0.01 275)",
      secondary: "oklch(0.96 0.02 275)",
      secondaryForeground: "oklch(0.18 0.035 275)",
      muted: "oklch(0.94 0.02 275)",
      mutedForeground: "oklch(0.45 0.03 275)",
      accent: "oklch(0.55 0.22 275)",
      accentForeground: "oklch(0.98 0 0)",
      border: "oklch(0.90 0.02 275)",
    },
    dark: {
      background: "oklch(0.14 0.035 275)",
      foreground: "oklch(0.96 0.01 275)",
      card: "oklch(0.18 0.035 275)",
      cardForeground: "oklch(0.96 0.01 275)",
      primary: "oklch(0.96 0.01 275)",
      primaryForeground: "oklch(0.14 0.035 275)",
      secondary: "oklch(0.22 0.035 275)",
      secondaryForeground: "oklch(0.96 0.01 275)",
      muted: "oklch(0.24 0.035 275)",
      mutedForeground: "oklch(0.65 0.02 275)",
      accent: "oklch(0.68 0.22 275)",
      accentForeground: "oklch(0.14 0.035 275)",
      border: "oklch(0.28 0.035 275)",
    },
  },
  {
    id: "midnight-violet",
    name: "Midnight & Violet",
    subtitle: "Premium AI aesthetic",
    badge: "TRENDING",
    badgeType: "trending",
    category: "innovation",
    description: "Muted violet is the sophisticated AI color - not garish purple, but a desaturated intelligence tone. Conveys premium AI capabilities.",
    inspiration: ["Notion AI", "Linear", "Raycast"],
    previewColors: ["#faf5ff", "#c4b5fd", "#a78bfa", "#7c3aed", "#4c1d95", "#1e1b2e"],
    light: {
      background: "oklch(0.985 0.012 295)",
      foreground: "oklch(0.18 0.04 295)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.04 295)",
      primary: "oklch(0.18 0.04 295)",
      primaryForeground: "oklch(0.985 0.012 295)",
      secondary: "oklch(0.96 0.02 295)",
      secondaryForeground: "oklch(0.18 0.04 295)",
      muted: "oklch(0.94 0.02 295)",
      mutedForeground: "oklch(0.45 0.03 295)",
      accent: "oklch(0.55 0.20 295)",
      accentForeground: "oklch(0.98 0 0)",
      border: "oklch(0.90 0.02 295)",
    },
    dark: {
      background: "oklch(0.14 0.04 295)",
      foreground: "oklch(0.96 0.012 295)",
      card: "oklch(0.18 0.04 295)",
      cardForeground: "oklch(0.96 0.012 295)",
      primary: "oklch(0.96 0.012 295)",
      primaryForeground: "oklch(0.14 0.04 295)",
      secondary: "oklch(0.22 0.04 295)",
      secondaryForeground: "oklch(0.96 0.012 295)",
      muted: "oklch(0.24 0.04 295)",
      mutedForeground: "oklch(0.65 0.02 295)",
      accent: "oklch(0.68 0.20 295)",
      accentForeground: "oklch(0.14 0.04 295)",
      border: "oklch(0.28 0.04 295)",
    },
  },
  {
    id: "charcoal-neon",
    name: "Charcoal & Neon",
    subtitle: "Developer-first",
    badge: "DEV TOOLS",
    badgeType: "innovation",
    category: "innovation",
    description: "The quintessential tech dark mode. Near-black with neon green for maximum CTA visibility. Signature look for developer tools and technical products.",
    inspiration: ["GitHub", "Vercel", "Supabase"],
    previewColors: ["#f4f4f5", "#4ade80", "#22c55e", "#16a34a", "#27272a", "#18181b"],
    light: {
      background: "oklch(0.985 0.002 120)",
      foreground: "oklch(0.18 0.01 120)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.01 120)",
      primary: "oklch(0.18 0.01 120)",
      primaryForeground: "oklch(0.985 0.002 120)",
      secondary: "oklch(0.96 0.005 120)",
      secondaryForeground: "oklch(0.18 0.01 120)",
      muted: "oklch(0.94 0.005 120)",
      mutedForeground: "oklch(0.45 0.01 120)",
      accent: "oklch(0.65 0.20 145)",
      accentForeground: "oklch(0.15 0.01 120)",
      border: "oklch(0.90 0.005 120)",
    },
    dark: {
      background: "oklch(0.14 0.01 120)",
      foreground: "oklch(0.96 0.002 120)",
      card: "oklch(0.18 0.01 120)",
      cardForeground: "oklch(0.96 0.002 120)",
      primary: "oklch(0.96 0.002 120)",
      primaryForeground: "oklch(0.14 0.01 120)",
      secondary: "oklch(0.22 0.01 120)",
      secondaryForeground: "oklch(0.96 0.002 120)",
      muted: "oklch(0.24 0.01 120)",
      mutedForeground: "oklch(0.65 0.005 120)",
      accent: "oklch(0.72 0.20 145)",
      accentForeground: "oklch(0.14 0.01 120)",
      border: "oklch(0.28 0.01 120)",
    },
  },

  // === PREMIUM/LUXURY PALETTES ===
  {
    id: "obsidian-gold",
    name: "Obsidian & Gold",
    subtitle: "Executive luxury",
    badge: "ULTRA PREMIUM",
    badgeType: "premium",
    category: "premium",
    description: "The most luxurious option. Soft gold against obsidian black creates an exclusive, premium feel. Bloomberg terminal rebuilt for 2026.",
    inspiration: ["Private Equity", "Bloomberg", "Luxury Finance"],
    previewColors: ["#fafaf9", "#d4a574", "#c9a961", "#a68b4b", "#292524", "#1c1917"],
    light: {
      background: "oklch(0.98 0.008 85)",
      foreground: "oklch(0.18 0.015 85)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.015 85)",
      primary: "oklch(0.18 0.015 85)",
      primaryForeground: "oklch(0.98 0.008 85)",
      secondary: "oklch(0.96 0.012 85)",
      secondaryForeground: "oklch(0.18 0.015 85)",
      muted: "oklch(0.94 0.012 85)",
      mutedForeground: "oklch(0.45 0.015 85)",
      accent: "oklch(0.68 0.12 85)",
      accentForeground: "oklch(0.15 0.015 85)",
      border: "oklch(0.90 0.012 85)",
    },
    dark: {
      background: "oklch(0.12 0.01 85)",
      foreground: "oklch(0.96 0.008 85)",
      card: "oklch(0.16 0.01 85)",
      cardForeground: "oklch(0.96 0.008 85)",
      primary: "oklch(0.96 0.008 85)",
      primaryForeground: "oklch(0.12 0.01 85)",
      secondary: "oklch(0.20 0.01 85)",
      secondaryForeground: "oklch(0.96 0.008 85)",
      muted: "oklch(0.22 0.01 85)",
      mutedForeground: "oklch(0.65 0.012 85)",
      accent: "oklch(0.75 0.12 85)",
      accentForeground: "oklch(0.12 0.01 85)",
      border: "oklch(0.26 0.01 85)",
    },
  },
  {
    id: "carbon-brass",
    name: "Carbon & Brass",
    subtitle: "Artisanal authority",
    badge: "RISING",
    badgeType: "rising",
    category: "premium",
    description: "Pantone-adjacent warmth. Brass signals value and permanence - rare in a space full of electric blue. Builds trust through sophistication.",
    inspiration: ["Mocha Mousse 2025", "Bloomberg"],
    previewColors: ["#faf8f5", "#d4a574", "#a67c52", "#78716c", "#44403c", "#1c1917"],
    light: {
      background: "oklch(0.98 0.01 70)",
      foreground: "oklch(0.18 0.02 60)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.02 60)",
      primary: "oklch(0.18 0.02 60)",
      primaryForeground: "oklch(0.98 0.01 70)",
      secondary: "oklch(0.96 0.015 70)",
      secondaryForeground: "oklch(0.18 0.02 60)",
      muted: "oklch(0.94 0.015 70)",
      mutedForeground: "oklch(0.45 0.02 60)",
      accent: "oklch(0.62 0.14 65)",
      accentForeground: "oklch(0.15 0.02 60)",
      border: "oklch(0.90 0.015 70)",
    },
    dark: {
      background: "oklch(0.14 0.015 60)",
      foreground: "oklch(0.96 0.01 70)",
      card: "oklch(0.18 0.015 60)",
      cardForeground: "oklch(0.96 0.01 70)",
      primary: "oklch(0.96 0.01 70)",
      primaryForeground: "oklch(0.14 0.015 60)",
      secondary: "oklch(0.22 0.015 60)",
      secondaryForeground: "oklch(0.96 0.01 70)",
      muted: "oklch(0.24 0.015 60)",
      mutedForeground: "oklch(0.65 0.015 70)",
      accent: "oklch(0.72 0.14 65)",
      accentForeground: "oklch(0.14 0.015 60)",
      border: "oklch(0.28 0.015 60)",
    },
  },

  // === NATURAL/SUSTAINABLE PALETTES ===
  {
    id: "ash-sage",
    name: "Ash & Sage",
    subtitle: "Precision dev tool",
    badge: "TRENDING",
    badgeType: "trending",
    category: "enterprise",
    description: "Muted sage reads as calm intelligence - not alarm. Engineers trust it. Natural tones convey reliability and sustainability.",
    inspiration: ["Linear", "Vercel", "Raycast"],
    previewColors: ["#f5f5f4", "#86efac", "#6b8e6b", "#4a7c59", "#44403c", "#1c1917"],
    light: {
      background: "oklch(0.985 0.003 110)",
      foreground: "oklch(0.20 0.015 110)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.20 0.015 110)",
      primary: "oklch(0.20 0.015 110)",
      primaryForeground: "oklch(0.985 0.003 110)",
      secondary: "oklch(0.96 0.008 110)",
      secondaryForeground: "oklch(0.20 0.015 110)",
      muted: "oklch(0.94 0.008 110)",
      mutedForeground: "oklch(0.45 0.015 110)",
      accent: "oklch(0.55 0.12 145)",
      accentForeground: "oklch(0.98 0 0)",
      border: "oklch(0.90 0.008 110)",
    },
    dark: {
      background: "oklch(0.14 0.01 110)",
      foreground: "oklch(0.96 0.003 110)",
      card: "oklch(0.18 0.01 110)",
      cardForeground: "oklch(0.96 0.003 110)",
      primary: "oklch(0.96 0.003 110)",
      primaryForeground: "oklch(0.14 0.01 110)",
      secondary: "oklch(0.22 0.01 110)",
      secondaryForeground: "oklch(0.96 0.003 110)",
      muted: "oklch(0.24 0.01 110)",
      mutedForeground: "oklch(0.65 0.008 110)",
      accent: "oklch(0.65 0.12 145)",
      accentForeground: "oklch(0.14 0.01 110)",
      border: "oklch(0.28 0.01 110)",
    },
  },
  {
    id: "void-copper",
    name: "Void & Copper",
    subtitle: "Museum editorial",
    badge: "UNIQUE",
    badgeType: "unique",
    category: "premium",
    description: "The warmest option. Copper feels crafted and considered - the furthest thing from template SaaS. Perfect for standing out.",
    inspiration: ["Editorial Intelligence", "DM Serif"],
    previewColors: ["#faf8f5", "#b8714a", "#a65d38", "#8c5236", "#44403c", "#1c1917"],
    light: {
      background: "oklch(0.98 0.012 55)",
      foreground: "oklch(0.18 0.025 55)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.18 0.025 55)",
      primary: "oklch(0.18 0.025 55)",
      primaryForeground: "oklch(0.98 0.012 55)",
      secondary: "oklch(0.96 0.018 55)",
      secondaryForeground: "oklch(0.18 0.025 55)",
      muted: "oklch(0.94 0.018 55)",
      mutedForeground: "oklch(0.45 0.025 55)",
      accent: "oklch(0.55 0.16 45)",
      accentForeground: "oklch(0.98 0 0)",
      border: "oklch(0.90 0.018 55)",
    },
    dark: {
      background: "oklch(0.14 0.02 55)",
      foreground: "oklch(0.96 0.012 55)",
      card: "oklch(0.18 0.02 55)",
      cardForeground: "oklch(0.96 0.012 55)",
      primary: "oklch(0.96 0.012 55)",
      primaryForeground: "oklch(0.14 0.02 55)",
      secondary: "oklch(0.22 0.02 55)",
      secondaryForeground: "oklch(0.96 0.012 55)",
      muted: "oklch(0.24 0.02 55)",
      mutedForeground: "oklch(0.65 0.018 55)",
      accent: "oklch(0.65 0.16 45)",
      accentForeground: "oklch(0.14 0.02 55)",
      border: "oklch(0.28 0.02 55)",
    },
  },
]

const badgeStyles: Record<string, string> = {
  trending: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
  rising: "bg-amber-500/20 text-amber-700 dark:text-amber-400",
  unique: "bg-orange-500/20 text-orange-700 dark:text-orange-400",
  classic: "bg-slate-500/20 text-slate-700 dark:text-slate-400",
  premium: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400",
  bold: "bg-red-500/20 text-red-700 dark:text-red-400",
  recommended: "bg-blue-500/20 text-blue-700 dark:text-blue-400",
  trust: "bg-sky-500/20 text-sky-700 dark:text-sky-400",
  innovation: "bg-violet-500/20 text-violet-700 dark:text-violet-400",
}

const categoryLabels: Record<string, { label: string; description: string }> = {
  trust: { label: "Trust & Authority", description: "Proven to build enterprise trust" },
  innovation: { label: "AI & Innovation", description: "Modern tech aesthetic" },
  security: { label: "Security-First", description: "Cybersecurity standard" },
  premium: { label: "Premium & Luxury", description: "High-end positioning" },
  enterprise: { label: "Enterprise Standard", description: "Institutional feel" },
}

export function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<string>("deep-navy-electric")
  const [filterCategory, setFilterCategory] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("vigilr-theme-id")
    if (saved) {
      setSelectedTheme(saved)
      applyTheme(saved)
    }
  }, [])

  const applyTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId)
    if (!theme) return

    const root = document.documentElement
    const isDark = root.classList.contains("dark")
    const colors = isDark ? theme.dark : theme.light

    root.style.setProperty("--background", colors.background)
    root.style.setProperty("--foreground", colors.foreground)
    root.style.setProperty("--card", colors.card)
    root.style.setProperty("--card-foreground", colors.cardForeground)
    root.style.setProperty("--primary", colors.primary)
    root.style.setProperty("--primary-foreground", colors.primaryForeground)
    root.style.setProperty("--secondary", colors.secondary)
    root.style.setProperty("--secondary-foreground", colors.secondaryForeground)
    root.style.setProperty("--muted", colors.muted)
    root.style.setProperty("--muted-foreground", colors.mutedForeground)
    root.style.setProperty("--accent", colors.accent)
    root.style.setProperty("--accent-foreground", colors.accentForeground)
    root.style.setProperty("--border", colors.border)
    root.style.setProperty("--input", colors.border)
    root.style.setProperty("--ring", colors.accent)

    localStorage.setItem("vigilr-theme-id", themeId)
    setSelectedTheme(themeId)
  }

  useEffect(() => {
    const observer = new MutationObserver(() => {
      applyTheme(selectedTheme)
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [selectedTheme])

  const currentTheme = themes.find((t) => t.id === selectedTheme)
  const filteredThemes = filterCategory 
    ? themes.filter(t => t.category === filterCategory)
    : themes

  const categories = [...new Set(themes.map(t => t.category))]

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full shadow-lg border-border bg-card hover:bg-secondary"
        aria-label="Open theme picker"
      >
        <Palette className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-auto rounded-2xl border border-border bg-card shadow-2xl">
            <div className="sticky top-0 z-20 border-b border-border bg-card px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Choose Your Theme</h2>
                  <p className="text-xs text-muted-foreground">
                    Research-backed palettes for enterprise security products • Currently:{" "}
                    <span className="text-accent font-medium">{currentTheme?.name}</span>
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filterCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterCategory(null)}
                  className="h-7 text-xs"
                >
                  All Themes
                </Button>
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={filterCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterCategory(cat)}
                    className="h-7 text-xs"
                  >
                    {categoryLabels[cat]?.label || cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {/* Recommended section */}
              {!filterCategory && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-4 w-4 text-amber-500" />
                    <h3 className="text-sm font-semibold text-foreground">Recommended for Security Products</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {themes.filter(t => t.badge === "RECOMMENDED" || t.badge === "TOP RATED").map((theme) => (
                      <ThemeCard 
                        key={theme.id} 
                        theme={theme} 
                        selectedTheme={selectedTheme} 
                        onSelect={applyTheme}
                        featured
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* All themes */}
              <div>
                {!filterCategory && (
                  <h3 className="text-sm font-semibold text-foreground mb-3">All Themes</h3>
                )}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {filteredThemes.filter(t => filterCategory || (t.badge !== "RECOMMENDED" && t.badge !== "TOP RATED")).map((theme) => (
                    <ThemeCard 
                      key={theme.id} 
                      theme={theme} 
                      selectedTheme={selectedTheme} 
                      onSelect={applyTheme}
                    />
                  ))}
                </div>
              </div>

              {/* Current theme details */}
              {currentTheme && (
                <div className="mt-8 rounded-xl border border-border bg-secondary/30 p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{currentTheme.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{currentTheme.description}</p>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>Category: <span className="text-foreground">{categoryLabels[currentTheme.category]?.label}</span></span>
                        <span>Inspired by: <span className="text-foreground">{currentTheme.inspiration.join(", ")}</span></span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {currentTheme.previewColors.map((color, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div
                            className="h-10 w-10 rounded-lg shadow-sm border border-border/50"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-[9px] text-muted-foreground font-mono">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ThemeCard({ 
  theme, 
  selectedTheme, 
  onSelect,
  featured = false
}: { 
  theme: Theme
  selectedTheme: string
  onSelect: (id: string) => void
  featured?: boolean
}) {
  return (
    <button
      onClick={() => onSelect(theme.id)}
      className={`group relative rounded-xl border-2 p-4 text-left transition-all hover:shadow-lg ${
        selectedTheme === theme.id
          ? "border-accent bg-accent/5 shadow-md"
          : "border-border hover:border-muted-foreground/30"
      } ${featured ? "ring-2 ring-amber-500/20" : ""}`}
    >
      {selectedTheme === theme.id && (
        <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent">
          <Check className="h-3.5 w-3.5 text-accent-foreground" />
        </div>
      )}

      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex gap-0.5">
          {theme.previewColors.slice(0, 6).map((color, i) => (
            <div
              key={i}
              className="h-6 w-6 first:rounded-l-md last:rounded-r-md"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="mb-2 flex items-center gap-2 flex-wrap">
        <h3 className="font-semibold text-foreground text-sm">
          {theme.name}
        </h3>
        {theme.badge && theme.badgeType && (
          <span
            className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${badgeStyles[theme.badgeType]}`}
          >
            {theme.badge}
          </span>
        )}
      </div>

      <p className="mb-2 text-xs text-muted-foreground">
        {theme.subtitle}
      </p>

      <p className="mb-3 text-xs leading-relaxed text-muted-foreground/80 line-clamp-2">
        {theme.description}
      </p>

      <p className="text-[10px] text-muted-foreground/60">
        Inspired by:{" "}
        {theme.inspiration.slice(0, 3).map((s, i) => (
          <span key={s}>
            <span className="text-muted-foreground/80">{s}</span>
            {i < Math.min(theme.inspiration.length, 3) - 1 && " • "}
          </span>
        ))}
      </p>
    </button>
  )
}
