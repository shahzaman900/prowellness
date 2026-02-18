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
