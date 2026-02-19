import { 
  ClipboardCheck, 
  HeartHandshake, 
  ShieldCheck, 
  Share2, 
  BarChart3 
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function CcmEngagementSection() {
  const features = [
    {
      title: "Truly Turnkey, Staff-Free Implementation",
      description: "Our dedicated clinical team manages all aspects of CCM—including patient outreach, enrollment, monthly check-ins, and care plan documentation—ensuring patients receive consistent follow-up. This proactive approach reduces hospitalizations and ER visits, and ensures timely screenings and preventive care.",
      icon: ClipboardCheck,
      colSpan: "md:col-span-1"
    },
    {
      title: "Superior Patient Engagement and Outcomes",
      description: "High-touch, monthly communication and ongoing education keep patients engaged, improve medication and care plan adherence, and promote self-management. Individualized care plans are continuously updated, supporting better patient engagement and overall health outcomes.",
      icon: HeartHandshake,
      colSpan: "md:col-span-1"
    },
    {
      title: "Compliance, Quality, and Revenue Optimization",
      description: "Our CMS-compliant processes and accurate time tracking ensure all care activities are properly documented, leading to timely preventive care and screenings. This helps practices boost quality scores and maximize reimbursements, while reducing audit risk.",
      icon: ShieldCheck,
      colSpan: "md:col-span-1"
    },
    {
      title: "Scalable, Personalized Service",
      description: "We tailor care plans to each patient and coordinate between specialists, pharmacies, and community resources. This individualized approach enhances access to care, closes care gaps, and ensures patients receive the right support at the right time, all as an extension of your practice!",
      icon: Share2,
      colSpan: "md:col-span-1"
    },
    {
      title: "Data-Driven Results and Transparent Reporting",
      description: "Regular, actionable reports give you insight into patient progress, engagement, and program ROI. This transparency allows for continuous improvement in care delivery and ensures that patients benefit from evidence-based, outcome-focused management. By combining turnkey implementation, superior engagement, rigorous compliance, personalized service, and transparent reporting, ProWellCare’s CCM program delivers the consistent follow-up, education, and coordination that drive better adherence, fewer hospitalizations, improved preventive care, and ultimately, better clinical outcomes for your patients.",
      icon: BarChart3,
      colSpan: "md:col-span-2"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121576] tracking-tight">
            Boost Patient Participation and Engagement
          </h2>
          <p className="text-xl text-[#F36076] font-medium uppercase tracking-wide">
            Strengthen Patient Engagement for Better Results
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 ${feature.colSpan} bg-slate-50/50`}
            >
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#121576] transition-colors duration-300 border border-slate-100">
                  <feature.icon className="w-7 h-7 text-[#121576] group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-[#121576]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
