"use client"

import Image from "next/image"

export function ComplianceSection() {
  const partners = [
    { name: "SOC 2 Type II", src: "/logoes/1c64e3e82297193742d357ab51f6e570d150ff4a-1280x720.png" },
    { name: "HIPAA Compliant", src: "/logoes/360_F_114960357_Uk8k1KnlarHciamLWlXBaQBM8viG0IPL.jpg" },
    { name: "FDA Registered", src: "/logoes/image (4).png" },
    { name: "AWS Partner", src: "/logoes/Amazon_Web_Services_Logo.png" },
    { name: "HITRUST CSF", src: "/logoes/certification-HITRUST-CSF.png" },
    { name: "ISO Certified", src: "/logoes/360_F_1536218192_ObUGfQ281p2tXcpemF0jhqUc8xGRwK78 (1).png" },
    { name: "Google Play", src: "/logoes/Google_Play-Logo.wine.png" },
    { name: "App Store", src: "/logoes/image (sds4).png" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans">
              Built on Trust, Backed by Compliance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At ProactiveWellness Care, security, compliance, and interoperability are the cornerstones of how we operate. From protecting patient data to seamlessly integrating with your EHR, we ensure a frictionless and secure experience for every partner.
            </p>
            <p className="text-[#F36076] font-semibold text-lg">
                We don’t just connect data—we connect care.
            </p>
          </div>

          {/* Compliance Visual/Logos */}
          <div className="flex-1 w-full">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {partners.map((partner, index) => (
                        <div key={index} className="aspect-video flex items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#121576]/20 transition-colors group relative">
                             <div className="relative w-full h-full">
                                <Image 
                                    src={partner.src} 
                                    alt={partner.name}
                                    fill
                                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                                />
                             </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
