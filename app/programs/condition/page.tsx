import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, Activity, Scale, Wind, Stethoscope, Smartphone, BarChart3, UserCheck, FileText, ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

import { CtaSection } from "@/components/cta-section"

export default function CareProgramsByConditionPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
          <div className="container px-4 mx-auto">
             <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left z-10">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 font-sans text-foreground">
                  Manage High-Risk Conditions with Proven Proven Care
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                   Empower your chronic patients with consistent support outside the clinic. Monitor populations, prevent acute events, and improve long-term outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="rounded-full px-8 h-12 text-base">
                    Start Your Strategy
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-background transform hover:scale-[1.02] transition-transform duration-500">
                   <Image 
                      src="/images/programs-condition-hero.png" 
                      alt="Doctor reviewing patient data" 
                      width={800} 
                      height={600} 
                      className="w-full h-auto object-cover"
                      priority
                   />
                </div>
                {/* Decorative blob */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl opacity-50"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why It Matters */}
        <section className="py-16 container px-4 mx-auto text-center max-w-4xl">
             <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 text-foreground">
                Why Dedicated Condition Care Matters
             </h2>
             <p className="text-xl text-muted-foreground leading-relaxed">
                Chronic care shouldn't stop when the patient leaves the office. By bridging the gap between visits with continuous data and support, you can catch warning signs early, adjust treatment plans in real-time, and significantly improve quality of life for your most vulnerable patients.
             </p>
        </section>

        {/* Chronic Conditions Grid */}
        <section className="py-16 lg:py-24 container px-4 mx-auto bg-muted/30 rounded-3xl my-8">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                    Chronic Conditions We Help You Tackle
                </h2>
                <p className="text-lg text-muted-foreground">
                    Tailored care pathways for the most prevalent and costly chronic diseases.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {/* Hypertension */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-background">
                    <CardHeader>
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                            <Heart className="h-6 w-6 text-red-600" />
                        </div>
                        <CardTitle className="text-xl">Hypertension & CHF</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Continuous BP monitoring to manage trends, titrate medication, and prevent hypertensive crises or heart failure exacerbations.
                    </CardContent>
                 </Card>

                 {/* Diabetes */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-background">
                    <CardHeader>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <Activity className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">Diabetes Care</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Real-time glucose tracking (BGM & CGM) to optimize glycemic control and prevent long-term diabetic complications.
                    </CardContent>
                 </Card>

                 {/* Obesity */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-background">
                    <CardHeader>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <Scale className="h-6 w-6 text-green-600" />
                        </div>
                        <CardTitle className="text-xl">Obesity & Weight Control</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Daily weight tracking and behavioral support to manage obesity as a gateway driver for other chronic conditions.
                    </CardContent>
                 </Card>

                 {/* Lung Conditions */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-background">
                    <CardHeader>
                        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                            <Wind className="h-6 w-6 text-sky-600" />
                        </div>
                        <CardTitle className="text-xl">Chronic Lung Conditions</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Monitor oxygen saturation and respiratory symptoms for COPD and Asthma patients to prevent acute respiratory distress.
                    </CardContent>
                 </Card>

                 {/* Kidney Disease */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-background">
                    <CardHeader>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <Stethoscope className="h-6 w-6 text-purple-600" />
                        </div>
                        <CardTitle className="text-xl">Kidney & Heart Disease</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Integrated management of cardiorenal syndrome, tracking fluid retention and blood pressure carefully.
                    </CardContent>
                 </Card>
            </div>
        </section>

        {/* Tools to Support Section */}
        <section className="py-16 lg:py-24 container px-4 mx-auto">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                    The Tools to Support Your High-Risk Patients
                </h2>
                <p className="text-lg text-muted-foreground">
                    We provide a complete ecosystem to ensure your strategy succeeds.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                 <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Cellular-Enabled Devices</h3>
                        <p className="text-muted-foreground">FDA-approved devices that transmit data instantly without Wi-Fi or smartphone pairing.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">AI-Driven Platform</h3>
                        <p className="text-muted-foreground">Smart triage system that prioritizes patients who need immediate attention based on live data.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <UserCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Clinical Nurse Support</h3>
                        <p className="text-muted-foreground">Our dedicated care team monitors your patients and escalates only clinically significant events to you.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Billing & Compliance</h3>
                        <p className="text-muted-foreground">Automated time tracking and audit-ready documentation to maximize reimbursement (CPT 99454, 99457).</p>
                    </div>
                 </div>
            </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
