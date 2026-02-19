import { Heart, Brain, Wind, Activity, PersonStanding, Trees } from "lucide-react"

export function SpecialtiesGridSection() {
  const specialties = [
    {
      title: "Primary Care & Family Medicine",
      description: "Extend your practice beyond the office. Manage diverse chronic conditions like hypertension and diabetes with a single, integrated workflow.",
      icon: Activity
    },
    {
      title: "Cardiology",
      description: "Monitor heart health in real-time. Track BP, weight, and symptoms to prevent decompensation and reduce hospital readmissions.",
      icon: Heart
    },
    {
      title: "Endocrinology",
      description: "Optimize diabetes management. Get continuous glucose data to adjust care plans and improve A1C levels remotely.",
      icon: Brain
    },
    {
      title: "Pulmonology",
      description: "Manage COPD and asthma more effectively. Monitor oxygen saturation and respiratory trends to catch flare-ups early.",
      icon: Wind
    },
    {
      title: "Nephrology",
      description: "Support kidney health with close monitoring of blood pressure and weight, crucial for slowing CKD progression.",
      icon:  Trees // Using Trees as a metaphor for kidneys/filtration or just a distinct icon if kidney isn't available
    },
    {
      title: "Geriatrics",
      description: "Provide comprehensive remote support for seniors. Monitor multiple vitals and ensure adherence to care plans for complex patients.",
      icon: PersonStanding
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl font-sans mb-4">
            Specialties We Support
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform is accessible and adaptable, ready to support the specific remote monitoring needs of your specialty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-6 inline-flex p-3 rounded-2xl bg-blue-50 text-[#121576] group-hover:bg-[#121576] group-hover:text-white transition-colors duration-300">
                <specialty.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#121576] font-sans mb-3">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
