import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TypesHeroSection } from "@/components/programs/types/hero-section"

export default function TypesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <TypesHeroSection />
      </main>
      <SiteFooter />
    </div>
  )
}
