import { AlertTriangle, Clock, FileQuestion, DollarSign } from "lucide-react"

export function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Annual Snapshots",
      description: "Traditional TPRM relies on once-a-year questionnaires, leaving you blind to risks that emerge between reviews.",
    },
    {
      icon: FileQuestion,
      title: "Manual Processes",
      description: "Security teams spend thousands of hours chasing vendor responses, manually reviewing documents, and updating spreadsheets.",
    },
    {
      icon: AlertTriangle,
      title: "No External Signals",
      description: "Legacy platforms ignore breach disclosures, CVE publications, and news events that indicate emerging vendor risks.",
    },
    {
      icon: DollarSign,
      title: "Costly & Slow",
      description: "Enterprise TPRM implementations take 6-12 months and cost $100K-$500K+ annually with outdated vendors.",
    },
  ]

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-destructive">The Problem</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Legacy TPRM is broken
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The platforms your organization relies on for vendor risk management were built 
            for a different era. Annual questionnaires and manual reviews cannot keep pace 
            with today&apos;s threat landscape.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div 
              key={problem.title}
              className="group relative overflow-hidden rounded-xl border border-destructive/20 bg-destructive/5 p-6 transition-all hover:border-destructive/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
