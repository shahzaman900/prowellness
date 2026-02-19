"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function DeviceCtaSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="py-24 bg-white text-left">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-[#121576] font-sans leading-tight">
          Ready to Transform Patient <br className="hidden sm:block" />
          Care-Without Adding Staff or <br className="hidden sm:block" />
          Upfront Costs?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-3xl">
          Schedule a personalized demo today and see how easy it is to launch a high-impact remote care program for your practice.
        </p>
        <div>
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
