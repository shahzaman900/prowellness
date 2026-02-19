import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function DriveBetterOutcomesSection() {
  return (
    <section className="py-16 lg:py-24 container px-4 mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
                 <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground mb-4">
                    How RPM improves Patient Care
                 </h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                    ProWellCare’s Remote Patient Monitoring (RPM) service provides real-time health data, enabling timely interventions and reducing preventable hospitalizations.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="text-5xl font-bold text-red-400 mb-2">0%</div>
                        <div className="text-sm font-semibold text-foreground uppercase tracking-wide">HEDIS Goal</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-5xl font-bold text-red-400 mb-2">0%</div>
                        <div className="text-sm font-semibold text-foreground uppercase tracking-wide">Engagement Rate</div>
                    </div>
                     <div className="flex flex-col items-center">
                        <div className="text-5xl font-bold text-red-400 mb-2">&gt;1%</div>
                        <div className="text-sm font-semibold text-foreground uppercase tracking-wide">Clinic Escalation Rate</div>
                    </div>
                 </div>
            </div>


    </section>
  )
}
