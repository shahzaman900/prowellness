"use client"

import Link from "next/link"
import { Activity, Heart, Monitor } from "lucide-react"

export function IntegratedRemoteSolutionsSection() {
  const solutions = [
    {
      title: "Remote Patient Monitoring",
      href: "/rpm",
      icon: Activity
    },
    {
      title: "Chronic Care Management",
      href: "/ccm",
      icon: Heart
    },
    {
      title: "Clinical Monitoring Software",
      href: "/software",
      icon: Monitor
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl mb-6 font-sans">
            Elevate Your Care with Integrated Remote Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Enhance patient care, improve clinical outcomes, and effectively manage at-risk populations with RPM, CCM, and clinical monitoring solutions. Our platform combines technology with managed services to reduce strain on your team, while ensuring continuous, personalized care for every patient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Link href={solution.href} key={index} className="group">
              <div className="bg-[#F36076] rounded-xl h-64 flex flex-col justify-center items-center p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                
                {/* Icon Background Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                        <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white text-2xl font-bold leading-tight">
                    {solution.title}
                    </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
