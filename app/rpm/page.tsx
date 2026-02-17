import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function RPMPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero 
            title="Remote Patient Monitoring (RPM)" 
            subtitle="Empower your practice with real-time patient data to enhance clinical outcomes and improve operational efficiency."
        />
        
        <section className="py-16 container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-3xl font-bold mb-6">Drive Better Outcomes with Continuous Tracking</h2>
                     <p className="text-lg text-muted-foreground mb-6">
                        Our RPM platform allows you to monitor patient vitals in real-time, enabling early intervention and personalized care adjustments. 
                        By tracking trends, you can manage chronic conditions like hypertension more effectively.
                     </p>
                     <ul className="space-y-4">
                        {[
                            "Real-time vital sign monitoring",
                            "Automated alerts for threshold breaches",
                            "Easy-to-use patient devices",
                            "Seamless EHR integration",
                            "Improved patient engagement and adherence"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                     </ul>
                </div>
                <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center p-8">
                    {/* Placeholder for RPM Dashboard Image */}
                    <div className="text-center">
                        <p className="text-muted-foreground italic">Interactive Dashboard Preview</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-muted/30">
            <div className="container px-4 mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Benefits for Your Practice</h2>
                <div className="grid md:grid-cols-3 gap-8">
                     <Card>
                        <CardHeader><CardTitle>Revenue Generation</CardTitle></CardHeader>
                        <CardContent>Create consistent monthly revenue streams through CPT codes associated with RPM services.</CardContent>
                     </Card>
                     <Card>
                        <CardHeader><CardTitle>Operational Efficiency</CardTitle></CardHeader>
                        <CardContent>Reduce hospital readmissions and emergency visits by catching issues before they escalate.</CardContent>
                     </Card>
                     <Card>
                        <CardHeader><CardTitle>Patient Satisfaction</CardTitle></CardHeader>
                        <CardContent>Patients feel more connected and cared for, leading to higher retention and trust.</CardContent>
                     </Card>
                </div>
            </div>
        </section>

        <section className="py-20 text-center container px-4 mx-auto">
             <h2 className="text-3xl font-bold mb-6">Ready to start your RPM program?</h2>
             <Button size="lg" className="rounded-full px-8">Book a Demo</Button>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
