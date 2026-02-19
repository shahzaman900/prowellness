"use client"

import { Button } from "@/components/ui/button"

export function PatientCtaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-[#121576] mb-8 font-sans">
                Talk to Your Doctor Today
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-10 max-w-none">
                <p className="mb-4">
                    If you’ve already been enrolled—welcome!
                </p>
                <p className="mb-8">
                    If not, ask your doctor about ProWellCare’s Remote Patient Monitoring and Chronic Care Management programs.
                </p>
                <p>
                    We’re here to help you feel better, avoid the hospital, and take control of your health—from the comfort of home.
                </p>
            </div>
            
            <a href="tel:9723273687">
                <Button 
                    size="lg" 
                    className="rounded-full px-8 py-6 text-lg font-bold uppercase tracking-wider bg-[#F36076] hover:bg-[#F36076]/90 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                >
                    Call us to learn more
                </Button>
            </a>
        </div>
      </div>
    </section>
  )
}
