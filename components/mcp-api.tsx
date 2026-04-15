import { Terminal, Bot, Cpu, ArrowRight, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function McpApi() {
  return (
    <section id="api" className="border-t border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
              <Terminal className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">MCP Server API</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Query vendor risk from your AI tools
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Vigilr exposes a Model Context Protocol (MCP) server at{" "}
              <code className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-sm text-foreground">
                mcp.vigilr.io
              </code>
              . Connect it to Claude, Cursor, or any MCP-compatible AI agent to query 
              vendor risk data in natural language.
            </p>
            
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Natural Language Queries</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ask questions like &quot;What&apos;s the risk score for Acme Corp?&quot; or 
                    &quot;Show me all critical vendors with recent CVEs.&quot;
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Agentic Workflows</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Build automated risk assessment pipelines that query Vigilr 
                    as part of procurement or security workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#">
                  Read API Documentation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Code example */}
          <div className="flex items-center">
            <div className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-xl">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                  <div className="h-3 w-3 rounded-full bg-accent/60" />
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <Code2 className="h-4 w-4 text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">
                    mcp-config.json
                  </span>
                </div>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
                <code className="text-foreground">{`{
  "mcpServers": {
    "vigilr": {
      "url": "https://mcp.vigilr.io",
      "transport": "sse",
      "headers": {
        "Authorization": "Bearer $VIGILR_API_KEY"
      }
    }
  }
}`}</code>
              </pre>
              <div className="border-t border-border bg-secondary/30 px-5 py-4">
                <p className="font-mono text-sm">
                  <span className="text-accent">$</span>
                  <span className="text-muted-foreground"> claude </span>
                  <span className="text-foreground">&quot;What vendors have critical CVEs this week?&quot;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
