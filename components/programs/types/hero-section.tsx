"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function TypesHeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#121576] sm:text-5xl md:text-6xl lg:text-7xl font-sans leading-tight">
              Empowering <span className="text-[#121576]">Every</span> <br />
              Healthcare Organization to <br />
              Deliver Better Care
            </h1>
            <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-[#121576] leading-relaxed">
              Turnkey and flexible RPM & CCM solutions tailored for <span className="font-bold">physician practices</span>, <span className="font-bold">value-based groups</span>, <span className="font-bold">hospitals</span>, and <span className="font-bold">FQHCs</span>-addressing your unique goals, workflows, and patient populations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                className="rounded-full px-10 py-8 text-lg font-bold uppercase tracking-wider bg-[#F36076] hover:bg-[#F36076]/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white"
              >
                FIND YOUR SOLUTION
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500 bg-slate-100 flex items-center justify-center">
               {/* Placeholder for Hero Image */}
               <div className="text-center p-8">
                   <p className="text-muted-foreground text-lg">Hero Image Placeholder</p>
                   <p className="text-sm text-muted-foreground/80">(Generation Failed - Retry or Upload)</p>
               </div>
               {/* 
               <Image
                  src="/images/types-hero.png"
                  alt="Healthcare Organization"
                  fill
                  className="object-cover"
                  priority
               />
               */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Decorative Background Shapes */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-pink-50 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>

      <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  )
}
