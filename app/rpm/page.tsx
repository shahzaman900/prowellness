import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaSection } from "@/components/cta-section"
import { HeroSection } from "@/components/rpm/hero-section"
import { DriveBetterOutcomesSection } from "@/components/rpm/drive-better-outcomes-section"
import { BenefitsSection } from "@/components/rpm/benefits-section"
import { StepsSection } from "@/components/rpm/steps-section"
import { FaqSection } from "@/components/rpm/faq-section"

export default function RPMPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <DriveBetterOutcomesSection />
        <BenefitsSection />
        <StepsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
