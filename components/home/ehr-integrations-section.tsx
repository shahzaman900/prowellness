"use client"

import Image from "next/image"

export function EhrIntegrationsSection() {
  const partners = [
    { name: "eClinicalWorks", src: "/partners-logo/eClinicalWorks.png" },
    { name: "athenahealth", src: "/partners-logo/Athenahealth-Logo.wine.png" },
    { name: "Practice Fusion", src: "/partners-logo/Practicefusion-600x315.png" },
    { name: "Medent", src: "/partners-logo/medent-logo-min-600x315.png" },
    { name: "DispatchHealth", src: "/partners-logo/dispatchhealth-logo-png_seeklogo-441972.png" },
    { name: "AdvancedMD", src: "/partners-logo/image (4).png" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#121576] mb-8 font-sans">
            Proudly working with
          </h2>
          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
             {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 w-[180px] h-[100px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    <Image
                        src={partner.src}
                        alt={partner.name}
                        fill
                        className="object-contain"
                    />
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
