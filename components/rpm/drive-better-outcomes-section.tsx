import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function DriveBetterOutcomesSection() {
  return (
    <section className="py-16 lg:py-24 container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                 <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                    How RPM Improves Patient Care
                 </h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                    ProWell Care’s Remote Patient Monitoring (RPM) service provides real-time health data, enabling timely interventions and reducing preventable hospitalizations. By tracking trends continuously, you can manage chronic conditions more effectively than with episodic care alone.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                    <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-primary mb-1">39%</div>
                        <div className="text-sm text-muted-foreground font-medium">A1c Improvement</div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-primary mb-1">94%</div>
                        <div className="text-sm text-muted-foreground font-medium">Patient Satisfaction</div>
                    </div>
                     <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-primary mb-1">&lt;1%</div>
                        <div className="text-sm text-muted-foreground font-medium">Escalation Rate</div>
                    </div>
                 </div>

                 <div className="pt-4">
                    <Button size="lg" className="rounded-full">
                        Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                 </div>
            </div>
            <div className="relative aspect-auto bg-muted rounded-2xl overflow-hidden shadow-xl ring-1 ring-border group">
                <Image 
                  src="/images/rpm-dashboard.png" 
                  alt="ProWell Care RPM Dashboard Interface" 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
        </div>
    </section>
  )
}
