export function CcmBenefitsSection() {
  const benefits = [
    {
      title: "Reduces Hospitalizations",
      description: "Reduces hospitalizations and ER visits by enabling early intervention and better symptom control."
    },
    {
      title: "Medication & Treatment Adherence",
      description: "Improves medication and care plan adherence through regular check-ins and ongoing support."
    },
    {
      title: "24/7 Support",
      description: "Enhances access to care with 24/7 support and easier care coordination."
    },
    {
      title: "Patient Engagement",
      description: "Promotes patient engagement and self-management with personalized education and frequent communication."
    },
    {
      title: "Timely Screenings",
      description: "Ensures timely screenings and preventive care, reducing complications and disease progression."
    },
    {
      title: "Tailored Care Plans",
      description: "Provides individualized care plans tailored to each patient's needs, improving overall health outcomes"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121576] mb-16 md:mb-24 text-center tracking-tight leading-tight">
          How CCM improves clinical outcomes
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#121576]">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
