"use client"

import Image from "next/image"

export function PatientBenefitsSection() {
  const benefits = [
    {
      title: "Lower Blood Pressure",
      description: "Daily tracking helps manage high blood pressure, reducing risk of stroke, kidney disease, and heart failure."
    },
    {
      title: "Better Blood Sugar Control",
      description: "We help you manage highs and lows. Better blood glucose control can mean more energy, fewer complications, and feeling better each day."
    },
    {
      title: "Fewer ER Visits & Hospitalizations",
      description: "Early detection prevents emergencies."
    },
    {
      title: "Stronger, Safer Living",
      description: "Get guidance on diet, exercise, and habits that protect your health."
    },
    {
      title: "Support for You and Your Family",
      description: "Caregivers also benefit from knowing someone is helping their loved one daily."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#121576] mb-12 font-sans leading-tight">
                    What You Can Expect: <br/>
                    <span className="text-[#F36076]">Health Benefits</span>
                </h2>
                
                <div className="space-y-10">
                    {benefits.map((benefit, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-[#121576] mb-2 font-sans">
                                {benefit.title}
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative sticky top-24">
                <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
                    <Image
                        src="/images/patient-benefits.png"
                        alt="Benefits of remote patient monitoring"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-[#121576]/5 rounded-[40px]" />
                <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-[#F36076]/5 rounded-[40px]" />
            </div>
        </div>
      </div>
    </section>
  )
}
