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

import { CtaSection } from "@/components/cta-section"
import { CcmHeroSection } from "@/components/ccm/hero-section"
import { CcmBenefitsSection } from "@/components/ccm/benefits-section"
import { CcmEngagementSection } from "@/components/ccm/engagement-section"
import { CcmBillingSection } from "@/components/ccm/billing-section"
import { CcmFaqSection } from "@/components/ccm/faq-section"
import { CcmCtaSection } from "@/components/ccm/cta-section"

export default function CCMPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <CcmHeroSection />
        
        <CcmBenefitsSection />
        <CcmEngagementSection />
        <CcmBillingSection />

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
        <CcmFaqSection />
        <CcmCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
