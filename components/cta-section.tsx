"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function CtaSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="py-24 bg-[#121576] text-white overflow-hidden relative">
      <div className="container px-4 mx-auto text-center relative z-10 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 !text-white font-sans">
          Ready to elevate your patient care?
        </h2>
        <p className="!text-blue-100 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Join healthcare providers across the country who are using ProWell Care to improve outcomes and revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
             size="lg" 
             onClick={() => setIsDemoModalOpen(true)}
             className="bg-[#F36076] hover:bg-[#F36076]/90 text-white font-bold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
          >
            Book Strategy Session
          </Button>
          <Link href="/contact" passHref>
             <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white rounded-full px-8 py-6 text-base"
            >
                Contact Us
            </Button>
          </Link>
        </div>
      </div>
      
        {/* Background shapes for depth/contrast */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/5 blur-3xl -z-10 pointer-events-none"></div>

       <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  )
}
