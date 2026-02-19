"use client"

import {
  Activity,
  GitMerge,
  BellRing,
  MessageSquare,
  Layers,
  LayoutDashboard,
  Settings2,
  Users
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function SoftwareFeaturesSection() {
    const features = [
    {
      title: "Comprehensive Chronic Condition Tracking",
      description: "Easily monitor conditions like hypertension and diabetes with real-time readings, clear timestamps, and intuitive color-coded alerts for urgent values. Auto-calculated vital sign thresholds and dynamic graphing make it simple to track trends, compare visits, and quickly identify patients needing attention.",
      icon: Activity,
    },
    {
      title: "Customizable Workflow Automation and Triage",
      description: "Integrates with your clinic’s existing processes and filters out non-essential data, highlighting only actionable trends-so clinicians spend less time reviewing information and avoid workflow disruptions.",
      icon: Settings2,
    },
    {
      title: "Personalized Alerts and Actionable Insights for Better Outcomes and ROI",
      description: "Set individualized alert thresholds and align care plans with patient goals, enabling timely interventions and improved compliance. Actionable reporting highlights trends and care gaps, helping you optimize outcomes and demonstrate ROI for value-based contracts.",
      icon: BellRing,
    },
    {
      title: "Personalized, Multi-Channel Patient Engagement",
      description: "Empower patients with secure messaging, education, and real-time updates via their preferred channels, strengthening relationships and improving compliance.",
      icon: MessageSquare,
    },
    {
      title: "Scalable, User-Friendly Platform",
      description: "Easily expand your RPM and CCM programs as your patient population grows, with flexible turnkey and SaaS options that adapt to any workflow or staffing model. Seamless scalability means you can increase patient engagement and care capacity-unlocking greater recurring revenue and long-term growth for your practice.",
      icon: Layers,
    }
  ]
    
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl lg:text-5xl font-sans">
            Discover What CHARMS RPM Software Can Do for Your Practice
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] border-none shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-[#F36076]/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-[#F36076]" />
                </div>
                <CardTitle className="text-xl text-[#121576] font-bold leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
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
