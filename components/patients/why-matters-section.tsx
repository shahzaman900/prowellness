"use client"

import { Check } from "lucide-react"

export function PatientWhyMattersSection() {
  const conditions = [
    "High blood pressure (hypertension)",
    "Diabetes (Type 1 or Type 2)",
    "Congestive heart failure or heart disease",
    "Multiple chronic conditions (also called multimorbidity)",
    "Take multiple medications (polypharmacy)",
    "Live alone or lack regular support at home",
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121576] mb-4 font-sans">
                Why These Services Matter
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
                These Medicare-covered programs are especially helpful if you have:
            </p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                {conditions.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="mt-1 h-5 w-5 rounded-full bg-[#F36076]/20 flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 text-[#F36076] stroke-[3]" />
                        </div>
                        <span className="text-lg text-slate-700 font-medium">{item}</span>
                    </div>
                ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
                Many patients feel overwhelmed managing everything alone. With ProWellCare, you’ll have real people checking in, listening, and guiding you. For adult children caring for aging parents, our service brings peace of mind—knowing a trusted healthcare team is checking in regularly.
            </p>
        </div>
      </div>
    </section>
  )
}
