"use client"

import { useState } from "react"
import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function CcmHeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#121576] sm:text-5xl md:text-6xl lg:text-7xl font-sans leading-tight">
              Chronic Care Management <span className="font-normal text-foreground">That Delivers Quality Care and Outcomes- <br className="hidden lg:block" /> Without Added Staff Burden</span>
            </h1>
            <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-[#121576] leading-relaxed">
              Empowering Providers to Improve Patient Health, Boost Revenue, and Enhance Care Coordination-All Without Adding Staff Burden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="rounded-full px-10 py-8 text-lg font-bold uppercase tracking-wider bg-[#F36076] hover:bg-[#F36076]/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white"
              >
                REQUEST A CONSULTATION
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500">
               <Image 
                  src="/images/ccm-hero.png" 
                  alt="Compassionate nurse interacting with an elderly patient" 
                  fill
                  className="object-cover"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-background p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards hidden lg:flex">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                    <p className="font-bold text-foreground">HIPAA Compliant</p>
                    <p className="text-xs text-muted-foreground">Secure & Private Data</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl -z-10 pointer-events-none"></div>

      <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  )
}
