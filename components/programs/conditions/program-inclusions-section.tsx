import { Smartphone, Brain, HeartHandshake, Settings, FileText } from "lucide-react"

export function ProgramInclusionsSection() {
  const inclusions = [
    {
      title: "Cellular-enabled Devices",
      description: "No Wi-Fi or tech setup needed for patients",
      icon: Smartphone
    },
    {
      title: "AI-Driven Platform",
      description: "Immediate insights, trend analysis, and alerting",
      icon: Brain
    },
    {
      title: "Nurse Support",
      description: "Licensed professionals handle outreach and monitoring",
      icon: HeartHandshake
    },
    {
      title: "Practice-Friendly Tools",
      description: "Flexible configurations aligned with your workflow",
      icon: Settings
    },
    {
      title: "Billing Guidance",
      description: "Maximize reimbursement without the administrative burden",
      icon: FileText
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl font-sans mb-16 text-center lg:text-left">
          What Your Program Will Include
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {inclusions.map((item, index) => (
            <div key={index} className="flex flex-col items-start group">
              <div className="mb-6 p-4 rounded-2xl bg-slate-50 text-[#F36076] group-hover:bg-[#F36076] group-hover:text-white transition-colors duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#121576] font-sans mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
