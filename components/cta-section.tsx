"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function CtaSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="py-24 bg-white text-center sm:text-left">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-[#121576] font-sans leading-tight">
          Drive better outcomes, <br className="hidden sm:block" />
          eliminate blind spots, and <br className="hidden sm:block" />
          ensure revenue with <br className="hidden sm:block" />
          <span className="text-[#121576]">ProactiveWellness.</span>
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Get in touch to get started.
        </p>
        <div>
           <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-[#F36076] hover:bg-[#F36076]/90 text-white font-bold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
            >
            GET IN TOUCH
            </Button>
        </div>
      </div>
      
       <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  )
}
