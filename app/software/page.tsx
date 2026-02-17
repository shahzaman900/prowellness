import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Laptop } from "lucide-react"

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero 
            title="Clinical Monitoring Software" 
            subtitle="Integrated, intuitive, and interoperable software designed for modern healthcare practices."
        />
        
        <section className="py-16 container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className="order-2 lg:order-1 bg-muted rounded-2xl aspect-square flex items-center justify-center">
                    <Laptop className="h-32 w-32 text-muted-foreground/20" />
                 </div>
                 <div className="order-1 lg:order-2">
                     <h2 className="text-3xl font-bold mb-6">Eliminate Blind Spots with Data Integration</h2>
                     <p className="text-lg text-muted-foreground mb-6">
                        Our clinical monitoring software aggregates data from various sources—RPM devices, patient reports, and EHRs—into a single, unified view.
                     </p>
                     
                     <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Seamless EHR Integration</h3>
                            <p className="text-muted-foreground">Compatible with major Electronic Health Record systems to ensure data flows smoothly without double entry.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Automated Billing Workflows</h3>
                            <p className="text-muted-foreground">Track billable time automatically and generate reports for CPT reimbursement, maximizing revenue capture.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
                            <p className="text-muted-foreground">Built on a HIPAA-compliant infrastructure with robust security measures to protect patient health information.</p>
                        </div>
                     </div>
                 </div>
            </div>
        </section>

        <section className="py-20 text-center container px-4 mx-auto">
             <h2 className="text-3xl font-bold mb-6">See the software in action</h2>
             <Button size="lg" className="rounded-full px-8">Request a Live Demo</Button>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
