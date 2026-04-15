import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    category: "Data & Privacy",
    items: [
      {
        q: "Where is vendor data stored and processed?",
        a: "Vigilr is SOC 2 Type II certified. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Data residency is in the United States by default. EU data residency is available on the Enterprise plan to support GDPR requirements.",
      },
      {
        q: "Do you store our vendor questionnaire responses?",
        a: "Yes, with a full audit trail. All questionnaire responses, AI analysis outputs, and risk score changes are stored per-tenant in an isolated data environment. You can export or delete your data at any time.",
      },
      {
        q: "How does GDPR apply to the data you process?",
        a: "Vigilr acts as a data processor under GDPR. A Data Processing Agreement (DPA) is available for all customers. We do not sell or share your data with third parties.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    items: [
      {
        q: "What security certifications does Vigilr hold?",
        a: "Vigilr is SOC 2 Type II certified and ISO 27001 compliant. We conduct annual third-party penetration tests. Pen test reports are available to enterprise customers under NDA.",
      },
      {
        q: "Can we get a vendor security questionnaire for Vigilr itself?",
        a: "Yes. Our completed security questionnaire, certifications, and compliance documentation are available in the Vigilr Trust Center. Contact us for access.",
      },
    ],
  },
  {
    category: "Integrations & Onboarding",
    items: [
      {
        q: "How long does onboarding actually take?",
        a: "Your first vendors are monitored within 30 minutes of sign-up. Import via CSV, our REST API, or native connectors for ServiceNow and Coupa (available on Pro and Enterprise). No implementation consultants, no multi-month rollouts.",
      },
      {
        q: "Does Vigilr integrate with our existing GRC platform?",
        a: "Yes. Vigilr exposes a full REST API and webhooks for pushing risk events to any system. Native connectors for ServiceNow and Coupa are included in Pro and Enterprise plans. We also support MCP server integration for AI-native workflows.",
      },
      {
        q: "Which SIEM and alerting tools do you support?",
        a: "Vigilr sends alerts via email, Slack, and Microsoft Teams out of the box. Webhook support lets you forward events to any SIEM, including Splunk, Microsoft Sentinel, and Datadog.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    items: [
      {
        q: "Is there a free trial?",
        a: "Yes — 14 days, no credit card required, up to 10 vendors. You get access to all Starter-tier features so you can evaluate real risk scores before committing.",
      },
      {
        q: "What happens if we exceed our vendor limit?",
        a: "You'll receive a notification when you're approaching your limit. Upgrades are prorated to the day, so you only pay for what you use. There are no surprise overage fees.",
      },
      {
        q: "Do you offer annual pricing discounts?",
        a: "Yes — annual plans are 20% cheaper than monthly billing. Enterprise customers can negotiate multi-year contracts with additional discounts. Contact our sales team to discuss.",
      },
    ],
  },
]

export function Faq() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to know
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Can&apos;t find your answer? Email us at{" "}
            <a href="mailto:hello@vigilr.io" className="text-accent underline-offset-4 hover:underline">
              hello@vigilr.io
            </a>
          </p>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-2 lg:grid-cols-2">
          {faqs.map((group) => (
            <div key={group.category}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h3>
              <Accordion type="single" collapsible className="mb-8">
                {group.items.map((item, i) => (
                  <AccordionItem key={i} value={`${group.category}-${i}`}>
                    <AccordionTrigger className="text-left text-sm font-medium">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
