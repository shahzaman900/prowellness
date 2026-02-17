import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero 
            title="About ProWell Care" 
            subtitle="Revolutionizing healthcare through data-driven, patient-centric technology."
        />
        
        <section className="py-16 container px-4 mx-auto">
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
                 <p>
                    At ProactiveWellness (ProWell Care), security, compliance, and interoperability are the cornerstones of how we operate. 
                    From protecting patient data to seamlessly integrating with your EHR, we ensure a frictionless and secure experience for every partner.
                 </p>
                 <p>
                    Our mission is to empower healthcare providers to reclaim their focus on delivering exceptional patient care. 
                    We combine dedicated clinical expertise with a flexible model that adapts to the unique needs of your practice.
                 </p>
                 <p>
                    By leveraging advanced Remote Patient Monitoring (RPM) and Chronic Care Management (CCM) solutions, 
                    we help clinics improve patient outcomes, enhance operational efficiency, and generate consistent revenue streams.
                 </p>
            </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
