"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const BLOCKED_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com", "protonmail.com"]

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .email("Enter a valid email address")
    .refine((email) => {
      const domain = email.split("@")[1]?.toLowerCase()
      return !BLOCKED_DOMAINS.includes(domain)
    }, "Please use your work email address"),
  company: z.string().min(1, "Company name is required"),
  vendorCount: z.string().min(1, "Please select your vendor program size"),
  note: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

// Formspree endpoint — replace XXXXXXXX with your form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdqdwwk"

export function DemoModal() {
  const [open, setOpen] = useState(false)
  const [plan, setPlan] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      setPlan(detail?.plan ?? null)
      setSubmitted(false)
      setOpen(true)
    }
    document.addEventListener("open-demo-modal", handler)
    return () => document.removeEventListener("open-demo-modal", handler)
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, plan: plan ?? "Not specified" }),
      })
      if (!res.ok) throw new Error("Submission failed")
      setSubmitted(true)
      reset()
      toast.success("Request received! We'll be in touch within 1 business day.")
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset() }}>
      <DialogContent className="sm:max-w-lg">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent text-2xl">
              ✓
            </div>
            <DialogTitle className="text-xl font-semibold">You&apos;re on the list</DialogTitle>
            <p className="text-muted-foreground">
              We&apos;ll reach out within 1 business day to schedule your personalized demo.
            </p>
            <Button onClick={() => setOpen(false)} className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
              Done
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Request a demo</DialogTitle>
              <DialogDescription>
                {plan
                  ? `You selected the ${plan} plan. Fill in your details and we'll set up a personalised walkthrough.`
                  : "Fill in your details and we'll set up a personalised walkthrough of Vigilr."}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="Alex" {...register("firstName")} />
                  {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Smith" {...register("lastName")} />
                  {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" type="email" placeholder="alex@company.com" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Corp" {...register("company")} />
                {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="vendorCount">How many vendors do you manage?</Label>
                <Select onValueChange={(v) => setValue("vendorCount", v)}>
                  <SelectTrigger id="vendorCount">
                    <SelectValue placeholder="Select vendor count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<25">Fewer than 25</SelectItem>
                    <SelectItem value="25-100">25 – 100</SelectItem>
                    <SelectItem value="100-500">100 – 500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
                {errors.vendorCount && <p className="text-xs text-destructive">{errors.vendorCount.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="note">Anything you&apos;d like us to know? <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea id="note" placeholder="E.g. current tools, compliance requirements, timeline…" rows={3} {...register("note")} />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isSubmitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                ) : (
                  <>Request demo <ArrowRight className="h-4 w-4" /></>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                No spam. Unsubscribe any time.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

/** Call this helper from any button to open the demo modal */
export function openDemoModal(plan?: string) {
  document.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { plan } }))
}
