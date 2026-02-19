"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function SpecialtyCtaSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans mb-6">
            Bring Proactive Care to Your <br />
            Specialty
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Remote care isn&apos;t just the future—it&apos;s now. With ProWellCare&apos;s specialty-ready
            solutions, your team can deliver enhanced care, improve outcomes, and
            simplify practice operations.
          </p>
          <Button
            size="lg"
            onClick={() => setIsDemoModalOpen(true)}
            className="rounded-full px-10 py-8 text-lg font-bold uppercase tracking-wider bg-[#F36076] hover:bg-[#F36076]/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white"
          >
            REQUEST A DEMO
          </Button>
        </div>
      </div>
      <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  )
}
