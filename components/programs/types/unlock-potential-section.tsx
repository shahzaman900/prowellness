import { 
  Users, 
  ShieldCheck, 
  MessageCircle, 
  Activity, 
  TrendingUp, 
  Share2, 
  FileText 
} from "lucide-react"

export function UnlockPotentialSection() {
  const benefits = [
    {
      text: "Enhance Patient Support Across Multiple Chronic Conditions",
      icon: Users
    },
    {
      text: "Reduce Hospital Admissions with Real-Time Interventions",
      icon: ShieldCheck
    },
    {
      text: "Boost Engagement with Smart Communication Tools",
      icon: MessageCircle
    },
    {
      text: "Improve Clinical Outcomes with Daily Vital Tracking",
      icon: Activity
    },
    {
      text: "Drive Shared Savings and Operational Efficiency",
      icon: TrendingUp
    },
    {
      text: "Connect Teams and Streamline Data Sharing",
      icon: Share2
    },
    {
      text: "Automate Clinical Notes and Admin Workflows",
      icon: FileText
    }
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
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex items-start group hover:-translate-y-1 transition-transform duration-300">
                <div className="mr-5 mt-1 bg-[#F36076]/10 p-3 rounded-xl group-hover:bg-[#F36076] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#F36076] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#121576] font-sans leading-snug pt-1">
                  {benefit.text}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
