import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SoftwareHeroSection } from "@/components/software/hero-section"
import { SoftwareFeaturesSection } from "@/components/software/features-section"
import { SoftwareFaqSection } from "@/components/software/faq-section"
import { SoftwareCtaSection } from "@/components/software/cta-section"

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <SoftwareHeroSection />
        <SoftwareFeaturesSection />
        <SoftwareFaqSection />
        <SoftwareCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
