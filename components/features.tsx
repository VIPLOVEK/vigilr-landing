import { 
  Activity, 
  Database, 
  FileSearch, 
  Server, 
  Users, 
  Zap,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export function Features() {
  const features = [
    {
      icon: Activity,
      title: "Real-time Risk Scoring",
      description: "Dynamic 0-100 risk scores across Cybersecurity Posture, Compliance, Data Privacy, Business Continuity, and Reputational Signals.",
    },
    {
      icon: Database,
      title: "Automated Data Ingestion",
      description: "Ingest from NVD/NIST CVEs, CISA KEV, HaveIBeenPwned, Shodan scans, SEC EDGAR filings, and GDELT news feeds.",
    },
    {
      icon: FileSearch,
      title: "AI Questionnaire Engine",
      description: "Adaptive questionnaires tailored to vendor type and regulatory context. AI extracts and validates claims from SOC 2 reports.",
    },
    {
      icon: Server,
      title: "MCP Server API",
      description: "Query vendor risk data programmatically via mcp.vigilr.io. Compatible with Claude, Cursor, and custom AI agents.",
    },
    {
      icon: Users,
      title: "Multi-tenant Architecture",
      description: "Enterprise-grade SaaS with SSO/SAML integration, role-based access control, and tenant isolation.",
    },
    {
      icon: Zap,
      title: "Day 1 Onboarding",
      description: "Get started immediately. No 6-12 month implementations. Import existing vendor lists and start monitoring in minutes.",
    },
  ]

  const dataSourcesTop = [
    "NVD/NIST CVE Database",
    "CISA Known Exploited Vulnerabilities",
    "HaveIBeenPwned Breach Data",
  ]
  
  const dataSourcesBottom = [
    "Shodan Infrastructure Scans",
    "SEC EDGAR Regulatory Filings",
    "GDELT Global News",
  ]

  return (
    <section id="features" className="border-t border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Capabilities</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need for continuous vendor risk monitoring
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vigilr combines real-time external intelligence with AI-powered analysis 
            to give you a complete picture of your vendor ecosystem.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              {index === 3 && (
                <Link 
                  href="#api" 
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Data sources visualization */}
        <div className="mt-16 rounded-xl border border-border bg-card p-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Intelligence Sources
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Automated ingestion from 50+ data sources
              </h3>
              <p className="mt-2 text-muted-foreground max-w-md">
                We continuously monitor global threat intelligence feeds so you don&apos;t have to.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
                {dataSourcesTop.map((source) => (
                  <span
                    key={source}
                    className="rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-foreground"
                  >
                    {source}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
                {dataSourcesBottom.map((source) => (
                  <span
                    key={source}
                    className="rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-foreground"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integration logos */}
        <div className="mt-12 border-t border-border pt-12">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Integrates with your existing security stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {[
              "Slack",
              "Microsoft Teams",
              "ServiceNow",
              "Coupa",
              "Jira",
              "Okta",
              "Splunk",
              "Microsoft Sentinel",
            ].map((name) => (
              <span
                key={name}
                className="text-sm font-semibold tracking-wide text-muted-foreground/50 transition-colors hover:text-muted-foreground select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
