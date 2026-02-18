import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Building2, Stethoscope, Users, Network, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

export default function CareProgramsByTypePage() {
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
                  Empowering Every Healthcare Organization
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                   From private practices to large health systems, our scalable remote care solutions are designed to streamline workflows, improve outcomes, and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="rounded-full px-8 h-12 text-base">
                    Find Your Solution
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-background transform hover:scale-[1.02] transition-transform duration-500">
                   <Image 
                      src="/images/programs-ecosystem.png" 
                      alt="Connected Healthcare Ecosystem" 
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

        {/* Ecosystem Introduction */}
        <section className="py-16 container px-4 mx-auto text-center max-w-4xl">
             <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 text-foreground">
                Build a Care Management Services Ecosystem with CCM & RPM That Works for Your Practice
             </h2>
             <p className="text-xl text-muted-foreground leading-relaxed">
                We understand that a successful remote care program requires more than just software—it requires a sustainable ecosystem tailored to your clinical structure and patient population. Whether you are a solo practitioner or a large health system, our platform adapts to your workflows to drive clinical and financial success.
             </p>
        </section>
        
        {/* Organization Types Grid */}
        <section className="py-16 lg:py-24 container px-4 mx-auto">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                    Tailored Solutions for Your Organization
                </h2>
                <p className="text-lg text-muted-foreground">
                    We understand that one size doesn't fit all. Choose the path that matches your operational needs.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                 {/* Private Practices */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                    <CardHeader className="bg-primary/5 pb-8">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                            <Stethoscope className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">Private Practices & Physicians</CardTitle>
                        <p className="text-muted-foreground mt-2">
                            Add a virtual care team to your practice without hiring new staff.
                        </p>
                    </CardHeader>
                    <CardContent className="pt-8 flex-1">
                        <ul className="space-y-3">
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Generate recurring revenue via CMS codes (99453, 99454, 99457)</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>dedicated clinical staff to monitor your patients</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Seamless EMR integration</span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter className="pb-8 pt-0">
                        <Button variant="outline" className="w-full">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardFooter>
                 </Card>

                  {/* ACOs */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                    <CardHeader className="bg-accent/5 pb-8">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                            <TrendingUp className="h-7 w-7 text-accent-foreground" />
                        </div>
                        <CardTitle className="text-2xl">Value-Based Care & ACOs</CardTitle>
                        <p className="text-muted-foreground mt-2">
                             Hit quality benchmarks and maximize shared savings.
                        </p>
                    </CardHeader>
                    <CardContent className="pt-8 flex-1">
                        <ul className="space-y-3">
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Real-time data to prevent costly hospitalizations</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Improve HEDIS and quality scores</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Population health management at scale</span>
                            </li>
                        </ul>
                    </CardContent>
                     <CardFooter className="pb-8 pt-0">
                        <Button variant="outline" className="w-full">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardFooter>
                 </Card>

                 {/* Hospitals */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                    <CardHeader className="bg-blue-50 pb-8">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                            <Building2 className="h-7 w-7 text-blue-600" />
                        </div>
                        <CardTitle className="text-2xl">Hospitals & Health Systems</CardTitle>
                        <p className="text-muted-foreground mt-2">
                            Enhance post-discharge care and reduce readmission rates.
                        </p>
                    </CardHeader>
                    <CardContent className="pt-8 flex-1">
                        <ul className="space-y-3">
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Continuous monitoring improves recovery stability</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Reduce ER overcrowding with proactive triage</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Enterprise-grade security and scalability</span>
                            </li>
                        </ul>
                    </CardContent>
                     <CardFooter className="pb-8 pt-0">
                        <Button variant="outline" className="w-full">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardFooter>
                 </Card>

                 {/* FQHCs */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                    <CardHeader className="bg-purple-50 pb-8">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                            <Users className="h-7 w-7 text-purple-600" />
                        </div>
                        <CardTitle className="text-2xl">FQHCs & Community Centers</CardTitle>
                        <p className="text-muted-foreground mt-2">
                             Bridge health equity gaps with accessible technology.
                        </p>
                    </CardHeader>
                    <CardContent className="pt-8 flex-1">
                        <ul className="space-y-3">
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Cellular devices require no Wi-Fi or smartphones</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Improve UDS clinical quality measures</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Culturally competent care coordination</span>
                            </li>
                        </ul>
                    </CardContent>
                     <CardFooter className="pb-8 pt-0">
                        <Button variant="outline" className="w-full">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardFooter>
                 </Card>
            </div>
        </section>

        {/* Unlock the Full Potential Section */}
        <section className="py-16 lg:py-24 bg-background">
            <div className="container px-4 mx-auto">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 text-foreground">
                        Unlock the Full Potential of Remote Care with ProWellCare
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our platform is built to address the core challenges of modern healthcare delivery.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {/* Feature 1 */}
                    <Card className="border shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <Users className="h-6 w-6 text-primary" />
                                Comprehensive Oversight
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            Enhance patient support across multiple chronic conditions with unified care plans.
                        </CardContent>
                    </Card>

                    {/* Feature 2 */}
                    <Card className="border shadow-sm hover:shadow-md transition-shadow">
                         <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <TrendingUp className="h-6 w-6 text-primary" />
                                Real-Time Interventions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                             Reduce hospital admissions by acting on live data alerts before conditions escalate.
                        </CardContent>
                    </Card>

                    {/* Feature 3 */}
                    <Card className="border shadow-sm hover:shadow-md transition-shadow">
                         <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <Network className="h-6 w-6 text-primary" />
                                Smart Engagement
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            Boost patient-provider connection with automated check-ins and smart communication tools.
                        </CardContent>
                    </Card>

                     {/* Feature 4 */}
                    <Card className="border shadow-sm hover:shadow-md transition-shadow">
                         <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <Stethoscope className="h-6 w-6 text-primary" />
                                Improved Outcomes
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            Drive better clinical results through consistent, daily vital tracking and feedback.
                        </CardContent>
                    </Card>

                     {/* Feature 5 */}
                    <Card className="border shadow-sm hover:shadow-md transition-shadow">
                         <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <Building2 className="h-6 w-6 text-primary" />
                                Operational Efficiency
                            </CardTitle>
                        </CardHeader>
                         <CardContent className="text-muted-foreground">
                            Drive shared savings and streamline workflows with automated documentation.
                        </CardContent>
                    </Card>

                     {/* Feature 6 */}
                    <Card className="border shadow-sm hover:shadow-md transition-shadow">
                         <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <CheckCircle2 className="h-6 w-6 text-primary" />
                                Streamlined Data
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                           Connect care teams and streamline data sharing across your entire organization.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

         {/* FQHC Visual / Underserved Communities Section */}
         <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container px-4 mx-auto">
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div className="relative aspect-auto bg-background rounded-2xl overflow-hidden shadow-xl ring-1 ring-border group">
                        <Image 
                          src="/images/programs-fqhc.png" 
                          alt="Community Health Focus" 
                          width={800} 
                          height={600} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-6">
                         <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                            Closing the Health Equity Gap
                         </h2>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            For FQHCs and Rural Health Clinics, access to care is the biggest hurdle. Our program removes technology barriers by providing cellular-enabled devices that work anywhere, ensuring that even your most vulnerable patients receive the continuous care they deserve.
                         </p>
                         <div className="pt-4">
                            <Button size="lg" className="rounded-full">
                                Explore FQHC Solutions <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 text-center container px-4 mx-auto bg-primary text-primary-foreground relative overflow-hidden">
             <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-serif text-white">
                    Ready to transform your organization?
                </h2>
                <p className="text-xl text-primary-foreground/90">
                    Let's discuss a custom implementation plan for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base font-semibold text-primary">
                        Schedule a Consultation
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
