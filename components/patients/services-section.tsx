"use client"

import Image from "next/image"

export function PatientServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h3 className="text-xl font-bold text-[#F36076] mb-8 font-sans">
                    Our two key services include:
                </h3>
                
                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#121576] mb-4 font-sans">
                            Remote Patient Monitoring <br/>
                            (RPM)
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We use at-home health monitoring devices (like a blood pressure cuff or glucose meter) to track your vitals every day.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#121576] mb-4 font-sans">
                            Chronic Care Management <br/>
                            (CCM)
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Each month, a nurse from our care team will call to support your care plan, help with medication, and encourage healthy lifestyle habits.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl bg-white border-4 border-white">
                {/* Fallback pattern if no image */}
                <div className="absolute inset-0 bg-blue-50 flex items-center justify-center">
                    <p className="text-muted-foreground font-medium">Services Overview Image</p>
                </div>
                <Image
                    src="/images/programs-ccm-hero.png" // Using a fallback relevant image
                    alt="Patient receiving remote care services"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
      </div>
    </section>
  )
}
