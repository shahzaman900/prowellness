export function UnlockPotentialSection() {
  const benefits = [
    "Enhance Patient Support Across Multiple Chronic Conditions",
    "Reduce Hospital Admissions with Real-Time Interventions",
    "Boost Engagement with Smart Communication Tools",
    "Improve Clinical Outcomes with Daily Vital Tracking",
    "Drive Shared Savings and Operational Efficiency",
    "Connect Teams and Streamline Data Sharing",
    "Automate Clinical Notes and Admin Workflows"
  ]

  return (
    <section className="py-24 bg-white/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans">
            Unlock the Full Potential of Remote Care with ProWellCare
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
               {/* 
               <div className="mr-4 mt-1 bg-[#F36076]/10 p-2 rounded-full">
                  <div className="w-2 h-2 bg-[#F36076] rounded-full"></div>
               </div>
               */}
              <h3 className="text-xl font-bold text-[#121576] font-sans leading-snug">
                {benefit}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
