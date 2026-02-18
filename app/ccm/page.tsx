import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, ClipboardList, Users, Clock, HeartPulse, ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

export default function CCMPage() {
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
                  Chronic Care Management
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                  Empowering providers to improve patient health, boost revenue, and enhance care coordination—all without adding staff burden.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="rounded-full px-8 h-12 text-base">
                    Request a Demo
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-background transform hover:scale-[1.02] transition-transform duration-500">
                   <Image 
                      src="/images/ccm-hero.png" 
                      alt="Care manager connecting with patient" 
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
        
        {/* Core Pillars / Benefits Section */}
        <section className="py-16 lg:py-24 container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                    Comprehensive Care Beyond the Office
                </h2>
                <p className="text-lg text-muted-foreground">
                    Our CCM program acts as an extension of your practice, providing continuous support to your most vulnerable patients.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <HeartPulse className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Reduces Hospitalizations</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Regular check-ins enable early detection of issues, allowing for intervention before they become emergencies.
                    </CardContent>
                 </Card>
                 
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                            <ClipboardList className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <CardTitle className="text-xl">Medication Adherence</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        We review medication lists monthly, reconciling discrepancies and ensuring patients stay on track.
                    </CardContent>
                 </Card>

                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">24/7 Support Access</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Patients have round-the-clock access to clinical staff for questions, reducing anxiety and ER visits.
                    </CardContent>
                 </Card>

                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-6 w-6 text-green-600" />
                        </div>
                        <CardTitle className="text-xl">Patient Engagement</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Personalized education and goal setting empower patients to take an active role in their health.
                    </CardContent>
                 </Card>

                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                            <Clock className="h-6 w-6 text-orange-600" />
                        </div>
                        <CardTitle className="text-xl">Turnkey Implementation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        We handle enrollment, care planning, and monthly calls, integrating seamlessly with your EHR.
                    </CardContent>
                 </Card>

                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle2 className="h-6 w-6 text-purple-600" />
                        </div>
                        <CardTitle className="text-xl">Compliance & Revenue</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Full audit trails and automated time tracking ensure 100% Medicare compliance and maximized billing.
                    </CardContent>
                 </Card>
            </div>
        </section>

        {/* Personalized Care Plan Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container px-4 mx-auto">
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-auto bg-background rounded-2xl overflow-hidden shadow-xl ring-1 ring-border group order-2 lg:order-1">
                        <Image 
                          src="/images/ccm-care-plan.png" 
                          alt="Personalized Digital Care Plan" 
                          width={800} 
                          height={600} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                         <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                            Personalized Care Plans for Every Patient
                         </h2>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            CCM isn't just about calling patients—it's about creating a roadmap for better health. Our comprehensive care plans are tailored to each individual's unique needs, covering:
                         </p>
                         
                         <ul className="space-y-4 pt-4">
                            {[
                                "Comprehensive health assessment and goal setting",
                                "Medication management and reconciliation",
                                "Coordination with specialists and community resources",
                                "Preventive care scheduling and reminders",
                                "Ongoing psychosocial support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                    <span className="text-base">{item}</span>
                                </li>
                            ))}
                         </ul>

                         <div className="pt-6">
                            <Button size="lg" className="rounded-full">
                                Learn about Enrollment <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
            <div className="container px-4 mx-auto max-w-3xl">
                 <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-12 text-center text-foreground">
                    CCM Frequently Asked Questions
                 </h2>
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left text-lg font-medium">What is Chronic Care Management (CCM)?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            CCM is a Medicare program that pays for non-face-to-face care coordination services for patients with two or more chronic conditions. It is designed to keep patients healthier and reduce costs by preventing acute care episodes.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left text-lg font-medium">How does Medicare reimburse for CCM?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            Reimbursement is based on CPT code 99490 (and others for complex care), typically providing ~$62 per patient per month for 20 minutes of clinical staff time.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left text-lg font-medium">Can external clinical staff deliver CCM services?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            Yes. CMS allows "incident to" supervision, meaning our clinical staff can perform CCM services under your general supervision, integrating seamlessly as an extension of your practice.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left text-lg font-medium">What is involved in enrolling patients?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            We identify eligible patients using your EMR data, obtain their verbal or written consent, and create an initial comprehensive care plan to begin the service.
                        </AccordionContent>
                    </AccordionItem>
                 </Accordion>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 text-center container px-4 mx-auto bg-primary text-primary-foreground relative overflow-hidden">
             <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-serif text-white">
                    Start your CCM program today
                </h2>
                <p className="text-xl text-primary-foreground/90">
                    Improve outcomes and generate revenue without hiring new staff.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base font-semibold text-primary">
                        Book a Strategy Session
                    </Button>
                </div>
             </div>
             {/* Background shapes */}
             <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
