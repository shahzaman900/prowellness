"use client"

import { 
  HeartHandshake, 
  Route, 
  Laptop, 
  Settings2, 
  TrendingUp, 
  Users 
} from "lucide-react"

export function OutcomesSolutionsSection() {
  const features = [
    {
      icon: HeartHandshake,
      title: "Comprehensive / Holistic Care",
      description: "Our platform helps you prioritize patients who need immediate attention while ensuring that everyone gets the care and support they deserve. Deliver efficient, personalized care to improve patient outcomes and optimize provider time."
    },
    {
      icon: Route,
      title: "Engaged Patient Journey",
      description: "Shift to a more dynamic care approach by using real-time data to track patient progress. Our RPM and CCM solutions enable continuous monitoring and data sharing, enhancing the patient experience with proactive, tailored care."
    },
    {
      icon: Laptop,
      title: "Provider-Centric Technology",
      description: "Our technology is designed to work with your practice. By streamlining workflows and offering easy implementation, we ensure your practice runs efficiently, while enhancing patient care and ensuring regulatory compliance."
    },
    {
      icon: Settings2,
      title: "Operational Efficiency",
      description: "Our RPM and CCM solutions optimize resource allocation, freeing up staff time and reducing burnout. By automating routine processes, your team can focus on delivering higher quality care and improving operational outcomes."
    },
    {
      icon: TrendingUp,
      title: "Financial Optimization",
      description: "Simplify the complexities of reimbursement and ensure consistent cash flow with our efficient billing workflows. Maximize revenue potential for chronic care management services while staying compliant with industry standards."
    },
    {
      icon: Users,
      title: "Collaborative Success",
      description: "We're here to work alongside your team. By providing ongoing support and expertise, we help you achieve your goals—whether it's improving patient outcomes, increasing practice profitability, or achieving better work-life balance."
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl mb-6 font-sans">
            Maximize Outcomes with Effective Chronic Care Solutions
          </h2>
          <div className="h-1.5 w-24 bg-[#F36076] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="h-14 w-14 rounded-xl bg-[#121576]/5 flex items-center justify-center mb-6 group-hover:bg-[#121576] transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-[#121576] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-[#121576] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed flex-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
