import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TypesHeroSection } from "@/components/programs/types/hero-section"
import { PathSelectionSection } from "@/components/programs/types/path-selection-section"

export default function TypesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <TypesHeroSection />
        <PathSelectionSection />
      </main>
      <SiteFooter />
    </div>
  )
}
