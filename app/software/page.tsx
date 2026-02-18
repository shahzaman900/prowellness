import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Laptop, BarChart3, ShieldCheck, Zap, Layers, RefreshCw, ArrowRight, CheckCircle2, Users } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

export default function SoftwarePage() {
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
                  Clinical Monitoring Software
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                  Powerful, intuitive, and compliant. Our "Smart Dashboard" turns remote patient data into actionable clinical insights and revenue.
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
                      src="/images/software-dashboard.png" 
                      alt="Smart Clinical Dashboard Interface" 
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
        
        {/* Features / Smart Dashboard Section */}
        <section className="py-16 lg:py-24 container px-4 mx-auto">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                    A Dashboard That Thinks Like a Clinician
                </h2>
                <p className="text-lg text-muted-foreground">
                    Don't get buried in data. Our intelligent triage system filters the noise so you can focus on the patients who need you most.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Smart Triage</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Color-coded alerts based on customizable thresholds immediately flag patients with critical vital signs.
                    </CardContent>
                 </Card>
                 
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                            <BarChart3 className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <CardTitle className="text-xl">Trend Analysis</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Dynamic graphing visualizes health trends over time, helping identifying deteriorating conditions early.
                    </CardContent>
                 </Card>

                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <Laptop className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">Workflow Automation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Automated tasks and reminders streamline your daily routine, reducing administrative burden.
                    </CardContent>
                 </Card>
            </div>
        </section>

         {/* Compliance & Integration Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container px-4 mx-auto">
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                         <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                            Seamless Integration & Compliance
                         </h2>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            We understand that adding new software can be a headache. That's why Charms is designed to play nicely with your existing systems while keeping you 100% compliant.
                         </p>
                         
                         <ul className="space-y-4 pt-4">
                            {[
                                "EHR Integration capable",
                                "HIPAA Compliant Secure Messaging",
                                "Automated Time Tracking for Billing",
                                "Audit-Ready Reporting",
                                "Scalable Cloud Infrastructure"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                    <span className="text-base">{item}</span>
                                </li>
                            ))}
                         </ul>

                         <div className="pt-6">
                            <Button size="lg" className="rounded-full">
                                View Technical Specs <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                         </div>
                    </div>
                     <div className="relative aspect-auto bg-background rounded-2xl overflow-hidden shadow-xl ring-1 ring-border group">
                        <Image 
                          src="/images/software-integrations.png" 
                          alt="Software Integrations Visual" 
                          width={800} 
                          height={600} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Benefits Section */}
         <section className="py-16 lg:py-24 container px-4 mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                 <div className="p-6">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                         <RefreshCw className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Recurring Revenue</h3>
                    <p className="text-muted-foreground">Unlock new revenue streams with automated billing activity tracking.</p>
                 </div>
                 <div className="p-6">
                    <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                         <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Better Patient Engagement</h3>
                    <p className="text-muted-foreground">Communicate with patients via their preferred channels directly from the dashboard.</p>
                 </div>
                 <div className="p-6">
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                         <ShieldCheck className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Risk Reduction</h3>
                    <p className="text-muted-foreground">Proactive monitoring reduces the risk of adverse events and hospital readmissions.</p>
                 </div>
            </div>
         </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 text-center container px-4 mx-auto bg-primary text-primary-foreground relative overflow-hidden">
             <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-serif text-white">
                    Experience the power of Smart Monitoring
                </h2>
                <p className="text-xl text-primary-foreground/90">
                    Schedule a demo to see how our software can transform your practice workflow.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base font-semibold text-primary">
                        Request a Live Demo
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
