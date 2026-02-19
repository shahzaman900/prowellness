import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ConditionsHeroSection } from "@/components/programs/conditions/hero-section"
import { TransformCareSection } from "@/components/programs/conditions/transform-care-section"
import { ConditionsListSection } from "@/components/programs/conditions/conditions-list-section"
import { ProgramInclusionsSection } from "@/components/programs/conditions/program-inclusions-section"
import { ConditionsCtaSection } from "@/components/programs/conditions/cta-section"

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ConditionsHeroSection />
        <TransformCareSection />
        <ConditionsListSection />
        <ProgramInclusionsSection />
        <ConditionsCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
