import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SpecialityHeroSection } from "@/components/programs/speciality/hero-section"
import { SpecialtiesGridSection } from "@/components/programs/speciality/specialties-grid-section"
import { SpecialtyFocusedSection } from "@/components/programs/speciality/specialty-focused-section"
import { SpecialtiesDetailListSection } from "@/components/programs/speciality/specialties-detail-list-section"
import { SpecialtyBenefitsSection } from "@/components/programs/speciality/specialty-benefits-section"
import { SpecialtyCtaSection } from "@/components/programs/speciality/cta-section"

export default function SpecialityPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <SpecialityHeroSection />
        <SpecialtyFocusedSection />
        {/* The short grid is redundant with the detailed list, but keeping both for now as per flow. 
            User might want to remove one later. */}
        <SpecialtiesGridSection /> 
        <SpecialtiesDetailListSection />
        <SpecialtyBenefitsSection />
        <SpecialtyCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
