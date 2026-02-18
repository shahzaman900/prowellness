"use client"

import Image from "next/image"

export function ComplianceSection() {
  const partners = [
    "HIPAA Compliance",
    "AWS Partner",
    "Audit Ready",
    "ISO Certified",
    "SOC 2 Type II",
    "Google Play",
    "FDA Registered",
    "Apple App Store",
    "HITRUST CSF"
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
                        <div key={index} className="aspect-video flex items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#121576]/20 transition-colors group">
                             {/* Placeholder for Logo - In a real app, uses Next/Image */}
                            <span className="text-sm font-semibold text-gray-400 group-hover:text-[#121576] transition-colors text-center">
                                {partner}
                            </span>
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
