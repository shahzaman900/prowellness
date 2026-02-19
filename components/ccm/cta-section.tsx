"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function CcmCtaSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="py-24 bg-white text-left">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-[#121576] font-sans leading-tight">
          Empower At-Risk Patients <br className="hidden sm:block" />
          with ProWellCare’s CCM <br className="hidden sm:block" />
          Services
        </h2>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-2xl">
          Deliver coordinated, proactive care for patients managing multiple chronic diseases. ProWellCare’s end-to-end CCM platform supports continuous care, helping you close care gaps and improve health outcomes while reducing unnecessary hospital visits.
        </p>
        <div>
           <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-[#F36076] hover:bg-[#F36076]/90 text-white font-bold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
            >
            REQUEST A CONSULTATION
            </Button>
        </div>
      </div>
      
       <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  )
}
