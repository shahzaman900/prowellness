
export function StepsSection() {
  return (
    <section className="py-16 lg:py-24 container px-4 mx-auto">
         <div className="text-left mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4 text-[#121576]">
                How It Works
            </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
            {[
                { step: "01.", title: "Patient Enrollment:", desc: "Easy onboarding for eligible patients." },
                { step: "02.", title: "Device & Data Collection:", desc: "Connected health devices transmit real-time data securely." },
                { step: "03.", title: "Clinical Review & Alerts:", desc: "Care teams notified of concerning trends." },
                { step: "04.", title: "Actionable Insights:", desc: "Providers intervene proactively to optimize outcomes." }
            ].map((item, i) => (
                <div key={i} className="bg-[#F36076] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                        <span className="text-xl font-bold text-[#F36076]">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
    </section>
  )
}
