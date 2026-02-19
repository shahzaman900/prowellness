import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TypesHeroSection } from "@/components/programs/types/hero-section"
import { PathSelectionSection } from "@/components/programs/types/path-selection-section"
import { EcosystemSection } from "@/components/programs/types/ecosystem-section"
import { ProgramDetailsSection } from "@/components/programs/types/program-details-section"
import { UnlockPotentialSection } from "@/components/programs/types/unlock-potential-section"
import { TypesCtaSection } from "@/components/programs/types/cta-section"

export default function TypesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <TypesHeroSection />
        <PathSelectionSection />
        <EcosystemSection />
        <ProgramDetailsSection />
        <UnlockPotentialSection />
        <TypesCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
