import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Users, FileText, Phone } from "lucide-react"

export default function CCMPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero 
            title="Chronic Care Management (CCM)" 
            subtitle="Personalized, comprehensive care plans for patients with multiple chronic conditions."
        />
        
        <section className="py-16 container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
                 <h2 className="text-3xl font-bold mb-6">Holistic Care Beyond the Office Visit</h2>
                 <p className="text-lg text-muted-foreground">
                    CCM extends your care beyond the exam room. Our dedicated care teams work with your patients to ensure they follow their care plans, manage medications, and coordinate with specialists.
                 </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-6 bg-primary/5 border-none">
                    <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mb-2">Care Planning</CardTitle>
                    <CardContent className="px-0">
                        Comprehensive, patient-centered care plans updated regularly to reflect health goals and progress.
                    </CardContent>
                </Card>
                <Card className="text-center p-6 bg-primary/5 border-none">
                     <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mb-2">Care Coordination</CardTitle>
                    <CardContent className="px-0">
                        Seamless coordination between providers, specialists, and community resources to close care gaps.
                    </CardContent>
                </Card>
                <Card className="text-center p-6 bg-primary/5 border-none">
                     <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mb-2">24/7 Access</CardTitle>
                    <CardContent className="px-0">
                        Patients have access to care teams for urgent needs, questions, and medication management support.
                    </CardContent>
                </Card>
            </div>
        </section>

         <section className="py-20 text-center bg-muted/30">
             <div className="container px-4 mx-auto">
                <h2 className="text-3xl font-bold mb-6">Enhance Patient Quality of Life</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground mb-10">
                    Patients enrolled in CCM programs report higher satisfaction, better symptom control, and fewer hospitalizations.
                </p>
                <Button size="lg" className="rounded-full px-8">Learn More</Button>
             </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
