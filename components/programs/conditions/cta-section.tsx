"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function ConditionsCtaSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans mb-6">
            Build a Remote Chronic Care <br />
            Strategy That Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Modernize your approach to chronic care without overloading your practice.
            Our complete solution makes it easy to launch a remote program that's both
            effective and sustainable. Ready to start seeing the difference?
          </p>
          <Button
            size="lg"
            onClick={() => setIsDemoModalOpen(true)}
            className="rounded-full px-10 py-8 text-lg font-bold uppercase tracking-wider bg-[#F36076] hover:bg-[#F36076]/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white"
          >
            CONNECT WITH US
          </Button>
        </div>
      </div>
      <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  )
}
