"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function SoftwareHeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#121576] sm:text-5xl md:text-6xl lg:text-7xl font-sans leading-tight">
              Powerful RPM & CCM <br className="hidden lg:block"/> Software-Your Way: <span className="text-[#F36076] block mt-2">Fully Managed or Self-Directed</span>
            </h1>
            <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-[#121576] leading-relaxed">
              Leverage our intuitive, secure platform as part of ProWellCare’s turnkey clinical monitoring services-or empower your own team with our easy-to-use SaaS solution for remote and chronic care management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                className="rounded-full px-10 py-8 text-lg font-bold uppercase tracking-wider bg-[#F36076] hover:bg-[#F36076]/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white"
              >
                REQUEST A DEMO
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500 bg-slate-100">
               <Image
                  src="/images/Gemini_Generated_Image_hdbz0qhdbz0qhdbz.png"
                  alt="Clinical Monitoring Software Dashboard"
                  fill
                  className="object-cover"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>
            
            {/* Decorative Background Shapes similar to other pages */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-pink-50 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
      
      <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  )
}
