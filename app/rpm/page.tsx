import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, Users, DollarSign, Stethoscope, ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

export default function RPMPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-secondary/30 py-20 lg:py-32 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left z-10">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 font-sans text-foreground">
                  Remote Patient Monitoring
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                  Enhance patient outcomes with advanced remote patient monitoring for your practice. Monitor patient health in between visits, optimizing care beyond the office.
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
                      src="/images/rpm-hero.png" 
                      alt="Doctor explaining RPM data to patient" 
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
        
        {/* Drive Better Outcomes Section */}
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

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                        Maximize the Benefits of Remote Patient Monitoring
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Achieve superior outcomes, delight patients, and grow revenue—all with ease.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <TrendingUp className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl">HEDIS Quality Outcomes</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            Improves management of hypertension and diabetes, with potential A1c improvements up to 39%.
                        </CardContent>
                     </Card>
                     
                     <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-accent-foreground" />
                            </div>
                            <CardTitle className="text-xl">Patient Satisfaction</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            90–94% positive patient experience reported with a 93% recommendation rate.
                        </CardContent>
                     </Card>

                     <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <DollarSign className="h-6 w-6 text-blue-600" />
                            </div>
                            <CardTitle className="text-xl">Recurring Revenue</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            Medicare reimburses up to $167/patient/month, creating new revenue streams for your practice.
                        </CardContent>
                     </Card>

                     <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Stethoscope className="h-6 w-6 text-green-600" />
                            </div>
                            <CardTitle className="text-xl">Minimal Staff Burden</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            A turnkey program with dedicated clinical staff handling monitoring and documentation implementation.
                        </CardContent>
                     </Card>
                </div>
            </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 container px-4 mx-auto">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                    How ProWell Care RPM Works
                </h2>
                <p className="text-lg text-muted-foreground">
                    A simple, four-step process to seamless remote care integration.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                {[
                    { step: "01", title: "Patient Enrollment", desc: "We identify and onboard eligible patients with ease." },
                    { step: "02", title: "Device & Data", desc: "FDA-approved cellular devices transmit real-time data securely." },
                    { step: "03", title: "Clinical Review", desc: "Our care team reviews data and alerts you to concerning trends." },
                    { step: "04", title: "Actionable Insights", desc: "You intervene proactively to optimize treatment plans." }
                ].map((item, i) => (
                    <div key={i} className="bg-background pt-4 md:pt-0">
                        <div className="w-24 h-24 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary shadow-sm relative z-10 font-serif">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
                        <p className="text-center text-muted-foreground text-sm leading-relaxed px-4">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container px-4 mx-auto max-w-4xl">
                 <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-12 text-center text-foreground">
                    Common Questions about RPM
                 </h2>
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left text-lg font-medium">How does patient engagement work?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            We use easy-to-use connected devices (like blood pressure cuffs or scales) combined with a dedicated clinical monitoring team. This ensures continuous support, builds patient trust, and drives high adherence rates without burdening your staff.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left text-lg font-medium">What about billing and reimbursement?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            RPM is reimbursed under specific CPT codes (99453, 99454, 99457, 99458) by Medicare and many commercial payers. Our software tracks all billable time and generates reports to ensure accurate and maximized reimbursement, with potential revenue of ~$1,900 per patient annually.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left text-lg font-medium">How does this help with prevention?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            Real-time data alerts allow for early intervention before vital sign changes escalate into emergency events. This proactive approach significantly reduces hospital readmissions and emergency room visits for chronic conditions.
                        </AccordionContent>
                    </AccordionItem>
                 </Accordion>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 text-center container px-4 mx-auto">
             <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-serif text-foreground">
                    Ready to transform your practice?
                </h2>
                <p className="text-xl text-muted-foreground">
                    Join the future of healthcare with ProWell Care's comprehensive RPM solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="rounded-full px-8 h-12 text-base">Book a Strategy Session</Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">Contact Sales</Button>
                </div>
             </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
