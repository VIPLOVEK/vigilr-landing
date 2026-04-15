import { Check, X, Minus } from "lucide-react"

const comparisonData = [
  {
    feature: "Real-time continuous monitoring",
    vigilr: true,
    traditional: false,
    grc: "partial",
  },
  {
    feature: "AI-powered questionnaire analysis",
    vigilr: true,
    traditional: false,
    grc: false,
  },
  {
    feature: "Day 1 onboarding (no implementation)",
    vigilr: true,
    traditional: false,
    grc: false,
  },
  {
    feature: "Automated CVE/breach correlation",
    vigilr: true,
    traditional: false,
    grc: "partial",
  },
  {
    feature: "MCP API for AI agents",
    vigilr: true,
    traditional: false,
    grc: false,
  },
  {
    feature: "Dynamic risk scoring (5 dimensions)",
    vigilr: true,
    traditional: false,
    grc: "partial",
  },
  {
    feature: "50+ automated data sources",
    vigilr: true,
    traditional: false,
    grc: "partial",
  },
  {
    feature: "Enterprise SSO/SAML",
    vigilr: true,
    traditional: true,
    grc: true,
  },
]

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-accent">
          <Check className="h-4 w-4" />
        </div>
      </div>
    )
  }
  if (status === "partial") {
    return (
      <div className="flex items-center justify-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <Minus className="h-4 w-4" />
        </div>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-destructive/20 text-destructive">
        <X className="h-4 w-4" />
      </div>
    </div>
  )
}

export function Comparison() {
  return (
    <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Comparison</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Why teams switch to Vigilr
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how Vigilr compares to traditional TPRM approaches and legacy GRC platforms.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-xl border border-border shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="px-6 py-5 text-left text-sm font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="px-6 py-5 text-center">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                      Vigilr
                    </span>
                  </th>
                  <th className="px-6 py-5 text-center text-sm font-medium text-muted-foreground">
                    Annual Questionnaires
                  </th>
                  <th className="px-6 py-5 text-center text-sm font-medium text-muted-foreground">
                    Legacy GRC
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={row.feature}
                    className={index !== comparisonData.length - 1 ? "border-b border-border" : ""}
                  >
                    <td className="bg-card px-6 py-4 text-sm font-medium text-foreground">{row.feature}</td>
                    <td className="bg-accent/5 px-6 py-4">
                      <StatusIcon status={row.vigilr} />
                    </td>
                    <td className="bg-card px-6 py-4">
                      <StatusIcon status={row.traditional} />
                    </td>
                    <td className="bg-card px-6 py-4">
                      <StatusIcon status={row.grc} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
