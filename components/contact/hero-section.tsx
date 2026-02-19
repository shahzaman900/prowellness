"use client"

import { Button } from "@/components/ui/button"

export function ContactHeroSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#121576]">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-500/10 blur-[100px] rounded-full transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-400/10 blur-[100px] rounded-full transform -translate-x-1/2"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight !text-white mb-6 font-sans">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-blue-100 mb-10 leading-relaxed font-light">
          Get in touch to learn how ProactiveWellness Care can transform your practice with our comprehensive remote care solutions.
        </p>
      </div>
    </section>
  )
}
