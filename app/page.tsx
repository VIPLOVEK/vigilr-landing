import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { Testimonials } from "@/components/testimonials"
import { Problem } from "@/components/problem"
import { Features } from "@/components/features"
import { VendorWorkflow } from "@/components/vendor-workflow"
import { Comparison } from "@/components/comparison"
import { Pricing } from "@/components/pricing"
import { McpApi } from "@/components/mcp-api"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ThemePicker } from "@/components/theme-picker"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <SocialProof />
      <Testimonials />
      <Problem />
      <Features />
      <VendorWorkflow />
      <Comparison />
      <Pricing />
      <McpApi />
      <Faq />
      <Cta />
      <Footer />
      <ThemePicker />
    </main>
  )
}
