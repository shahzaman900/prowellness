"use client"

import Image from "next/image"

export function EhrIntegrationsSection() {
  const partners = [
    "eClinicalWorks",
    "athenahealth",
    "Practice Fusion",
    "AdvancedMD",
    "Medenet",
    "DispatchHealth",
    "Tebra"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#121576] mb-8 font-sans">
            Proudly working with
          </h2>
          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 min-w-[150px]">
                    {/* Placeholder for Logo - In a real app, uses Next/Image */}
                    <span className="text-xl md:text-2xl font-bold text-gray-400 hover:text-[#121576] transition-colors">
                        {partner}
                    </span>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
