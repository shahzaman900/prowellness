"use client"

import { useState } from "react"
import { Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function ConditionsHeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-sans leading-tight">
              Manage High-Risk Conditions <br className="hidden lg:block"/>
              with <span className="text-primary font-serif italic">Proven Chronic Care Programs</span>
            </h1>
            <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Empower your chronic patients with consistent support outside the clinic.
            </p>

            <div className="mx-auto lg:mx-0 max-w-md relative flex flex-col items-center lg:items-start space-y-4">
              <Button
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                className="rounded-full px-10 py-8 text-lg font-bold uppercase tracking-wider bg-secondary hover:bg-secondary/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                CONNECT WITH OUR TEAM
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500">
               <Image
                  src="/images/programs-condition-hero.png"
                  alt="Chronic Care Management"
                  fill
                  className="object-cover"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>

             {/* Floating badge */}
             <div className="absolute -bottom-8 -left-8 bg-background p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards">
               <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                 <Activity className="w-6 h-6" />
               </div>
               <div>
                 <p className="font-bold text-foreground">Clinically Proven</p>
                 <p className="text-xs text-muted-foreground">Better Health Outcomes</p>
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
