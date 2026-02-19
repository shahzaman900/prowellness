"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left z-10 space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-sans leading-tight">
              Enhance Patient Outcomes <br className="hidden lg:block" />
              <span className="text-primary">with Advanced Remote Patient Monitoring for Your Practice</span>
            </h1>
            <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Monitor patient health in between visits, optimizing care beyond the office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="rounded-full px-10 py-8 text-lg font-bold uppercase tracking-wider bg-secondary hover:bg-secondary/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white"
              >
                REQUEST DEMO
              </Button>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 bg-background transform hover:scale-[1.02] transition-transform duration-500">
               <Image 
                  src="/images/rpm-hero.png" 
                  alt="Doctor explaining RPM data to patient" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                  priority
               />
            </div>
            {/* Decorative blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl opacity-50"></div>
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
