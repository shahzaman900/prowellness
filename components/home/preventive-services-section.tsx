"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { RequestDemoModal } from "@/components/request-demo-modal"
import { CheckCircle2 } from "lucide-react"

export function PreventiveServicesSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="py-20 lg:py-32 container px-4 mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="flex-1 space-y-8 relative z-10">
          <div className="inline-block">
            <h4 className="text-[#F36076] font-bold uppercase tracking-wider text-sm mb-2">
              Comprehensive Preventive Services
            </h4>
            <div className="h-1 w-full bg-[#F36076]/20 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-[#121576] sm:text-5xl md:text-6xl leading-tight font-sans">
            Revolutionizing Healthcare for Any Organization Through Data-Driven, Patient-Centric Technology
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Empower your practice with our remote patient monitoring (RPM) platform — designed to enhance clinical outcomes, improve operational efficiency, and generate consistent revenue for healthcare providers while reducing the risks associated with costly hospitalizations.
          </p>
          
          <Button 
            size="lg" 
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-[#F36076] hover:bg-[#F36076]/90 text-white font-bold rounded-full px-10 py-7 text-lg shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
          >
            Experience Our Platform with a Demo
          </Button>
        </div>

        {/* Right Column: Visuals */}
        <div className="flex-1 relative w-full">
            {/* Main Generated Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white z-10">
                <Image 
                    src="/images/rpm-dashboard.png" 
                    alt="Preventive Services Dashboard" 
                    width={800} 
                    height={600} 
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Floating Feature Cards (to match the reference image's layout feel) */}
            <div className="absolute top-10 -right-12 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[200px] hidden xl:block animate-in fade-in slide-in-from-right-10 duration-1000">
                <p className="text-sm font-semibold text-[#121576] italic">
                    "Continuous trend tracking for improved hypertension management to deliver actionable data"
                </p>
            </div>

            <div className="absolute -bottom-8 -left-12 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[200px] hidden xl:block animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
                <p className="text-sm font-semibold text-[#121576] italic">
                    "Personalized monthly care plans tailored for comprehensive health management"
                </p>
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

      <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  )
}
