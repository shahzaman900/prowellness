import { Ambulance, ShieldCheck, MessageSquare, BarChart3, TrendingUp } from "lucide-react"

export function SpecialtyBenefitsSection() {
  const benefits = [
    {
      title: "Reduce ER visits and hospital admissions",
      icon: Ambulance
    },
    {
      title: "Improve treatment and medication adherence",
      icon: ShieldCheck
    },
    {
      title: "Maintain regular communication with patients",
      icon: MessageSquare
    },
    {
      title: "Understand how care plans are working through real-world data",
      icon: BarChart3
    },
    {
      title: "Grow your RPM & CCM program with end-to-end support—eligibility, onboarding, device fulfillment, and monitoring",
      icon: TrendingUp
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl font-sans mb-16 text-center lg:text-left">
          Why Specialty Practices <br className="hidden md:block"/>Choose ProWellCare
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 rounded-xl bg-blue-100 text-[#121576]">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#121576] font-sans leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
