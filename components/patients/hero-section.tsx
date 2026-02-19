"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PatientHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-24 lg:pt-32 pb-16">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-[#121576] sm:text-5xl md:text-6xl mb-6 font-sans">
              Welcome to ProWellCare
            </h1>
            <h2 className="text-2xl font-bold text-[#F36076] mb-6">
                Remote Patient Monitoring and Chronic Care Management Services to Help You Stay Healthier at Home
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Your doctor has enrolled you in a program that offers extra support between office visits. That’s where ProWellCare comes in. We partner with your healthcare provider to offer you personalized, ongoing care—right from your home.
            </p>
            
            <a href="tel:9723273687">
                <Button 
                    size="lg" 
                    className="rounded-full px-8 py-6 text-lg font-bold uppercase tracking-wider bg-[#121576] hover:bg-[#121576]/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white"
                >
                    Call us to learn more
                </Button>
            </a>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl">
                {/* Fallback pattern if no image */}
                <div className="absolute inset-0 bg-[#F36076]/10 flex items-center justify-center">
                    <p className="text-muted-foreground">Patient Interaction Image</p>
                </div>
                <Image
                    src="/images/hero-lifestyle.png" // Reusing this one for now as it's relevant (lifestyle)
                    alt="Patient receiving care at home"
                    fill
                    className="object-cover"
                    priority
                />
          </div>
        </div>
      </div>
    </section>
  )
}
