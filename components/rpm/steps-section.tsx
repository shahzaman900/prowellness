
export function StepsSection() {
  return (
    <section className="py-16 lg:py-24 container px-4 mx-auto">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                How ProWell Care RPM Works
            </h2>
            <p className="text-lg text-muted-foreground">
                A simple, four-step process to seamless remote care integration.
            </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

            {[
                { step: "01", title: "Patient Enrollment", desc: "We identify and onboard eligible patients with ease." },
                { step: "02", title: "Device & Data", desc: "FDA-approved cellular devices transmit real-time data securely." },
                { step: "03", title: "Clinical Review", desc: "Our care team reviews data and alerts you to concerning trends." },
                { step: "04", title: "Actionable Insights", desc: "You intervene proactively to optimize treatment plans." }
            ].map((item, i) => (
                <div key={i} className="bg-background pt-4 md:pt-0">
                    <div className="w-24 h-24 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary shadow-sm relative z-10 font-serif">
                        {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
                    <p className="text-center text-muted-foreground text-sm leading-relaxed px-4">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
    </section>
  )
}
