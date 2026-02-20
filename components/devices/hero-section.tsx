"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RequestDemoModal } from "@/components/request-demo-modal"

export function DevicesHeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#121576] sm:text-5xl md:text-6xl lg:text-7xl font-sans leading-tight">
              Zero-Cost, Ready-to-Use RPM & CCM Devices-No Capital Investment Required
            </h1>
            <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-[#121576] leading-relaxed">
              Deploy easy, out-of-the-box devices with no upfront costs or equipment purchases. Start your remote care program risk-free and maximize patient outcomes without financial barriers.
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
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500 bg-white">
               <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 gap-4 sm:gap-8 z-10">
                  <div className="flex flex-col gap-4 sm:gap-8 justify-center h-full w-1/2">
                    <div className="relative h-1/2 w-full flex items-center justify-center">
                      <Image src="/images/OneTouch.png" alt="Charms Blood Glucose Monitor" width={200} height={200} className="object-contain drop-shadow-xl hover:scale-110 transition-transform duration-500 max-h-full" />
                    </div>
                    <div className="relative h-1/2 w-full flex items-center justify-center">
                      <Image src="/images/WeightScale.png" alt="Charms Weight Scale" width={240} height={240} className="object-contain drop-shadow-xl hover:scale-110 transition-transform duration-500 max-h-full" />
                    </div>
                  </div>
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <Image src="/images/BP2.png" alt="Charms Blood Pressure Monitor" width={300} height={300} className="object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500 max-h-[80%]" />
                  </div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent mix-blend-overlay pointer-events-none"></div>
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
