"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function PathSelectionSection() {
  const paths = [
    {
      title: "Private Practices & Physicians",
      href: "#private-practices"
    },
    {
      title: "Value-Based Practices & ACOs",
      href: "#value-based"
    },
    {
      title: "Hospitals & Health Systems",
      href: "#hospitals"
    },
    {
      title: "Federally Qualified Health Centers",
      href: "#fqhc"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans mb-6">
            Choose Your Path
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Select the profile that best fits your organization to see how ProWellCare addresses your specific needs:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => (
            <a key={index} href={path.href} className="block group h-full">
              <Card className="h-full border border-[#F36076] hover:bg-[#F36076] transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer group-hover:border-[#F36076]">
                <CardContent className="p-8 flex items-center justify-center h-[200px] text-center">
                  <h3 className="text-xl font-bold text-[#121576] group-hover:text-white font-sans transition-colors duration-300 leading-snug">
                    {path.title}
                  </h3>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
