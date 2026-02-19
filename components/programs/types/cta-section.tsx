"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function TypesCtaSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-4xl pt-8 pb-12">
        <div className="text-left">
          <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans mb-6">
            Ready to Transform Patient <br /> Care?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Join the growing number of healthcare providers building customized remote care ecosystems with ProWellCare.
          </p>
          <Button
            size="lg"
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-[#F36076] hover:bg-[#F36076]/90 text-white font-bold rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
      
       <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  )
}
