import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { PreventiveServicesSection } from "@/components/home/preventive-services-section"
import { ComprehensiveSolutionsSection } from "@/components/home/comprehensive-solutions-section"
import { OutcomesSolutionsSection } from "@/components/home/outcomes-solutions-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { OutcomesSection } from "@/components/outcomes-section"
import { FaqSection } from "@/components/faq-section"
import { ComplianceSection } from "@/components/home/compliance-section"
import { EhrIntegrationsSection } from "@/components/home/ehr-integrations-section"
import { IntegratedRemoteSolutionsSection } from "@/components/home/integrated-remote-solutions-section"
import { BlogSection } from "@/components/home/blog-section"
import { CtaSection } from "@/components/cta-section"
import { Activity, Heart, Monitor, Stethoscope } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />

        <PreventiveServicesSection />
        <ComprehensiveSolutionsSection />
        <OutcomesSolutionsSection />



        <OutcomesSection />

        {/* Benefits Section - How it Works */}
        <section className="py-20 bg-muted/30">
             <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Maximize Outcomes with Effective Solutions</h2>
                        
                        <div className="flex gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">1</div>
                            <div>
                                <h3 className="font-semibold text-xl mb-2">Comprehensive / Holistic Care</h3>
                                <p className="text-muted-foreground">Prioritize patients who need immediate attention while ensuring that everyone gets the care and support they deserve.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">2</div>
                            <div>
                                <h3 className="font-semibold text-xl mb-2">Engaged Patient Journey</h3>
                                <p className="text-muted-foreground">Shift to a more dynamic care approach by using real-time data to track patient progress.</p>
                            </div>
                        </div>

                         <div className="flex gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">3</div>
                            <div>
                                <h3 className="font-semibold text-xl mb-2">Provider-Centric Technology</h3>
                                <p className="text-muted-foreground">Streamline workflows and offer easy implementation to ensure your practice runs efficiently.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="bg-white p-2 rounded-2xl shadow-2xl border transform hover:scale-[1.02] transition-transform duration-500">
                           <Image 
                              src="/images/outcomes-dashboard.png" 
                              alt="Clinical Outcomes Dashboard" 
                              width={600} 
                              height={600} 
                              className="rounded-xl w-full h-auto"
                           />
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
             </div>
        </section>

        <FaqSection />
        <ComplianceSection />
        <EhrIntegrationsSection />
        <IntegratedRemoteSolutionsSection />
        <BlogSection />

        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
