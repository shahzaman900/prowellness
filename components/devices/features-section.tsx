export function DeviceFeaturesSection() {
  const features = [
    {
      title: "Streamlined Referral Process and Guided Onboarding",
      description: "Patients and staff experience a simple, step-by-step enrollment with clear instructions and educational materials, ensuring high engagement and faster program adoption."
    },
    {
      title: "Customizable Workflow and EMR Integration",
      description: "Tailor the software to your clinic's processes, automating routine tasks and documentation for smoother adoption, less disruption, and scalable growth."
    },
    {
      title: "Real-Time, Reliable Data Transmission",
      description: "No Wi-Fi or smartphone required-patients simply power on and transmit data instantly, improving accessibility and adherence for all populations."
    },
    {
      title: "End-to-End HIPAA-Compliant Security",
      description: "All patient data is encrypted during transmission, and our HIPAA-compliant software platform securely stores and protects this information-ensuring privacy and regulatory compliance."
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#121576] font-sans">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
