import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DevicesHeroSection } from "@/components/devices/hero-section"
import { DeviceCatalogSection } from "@/components/devices/device-catalog-section"
import { DeviceFeaturesSection } from "@/components/devices/features-section"

export default function DevicesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <DevicesHeroSection />
        <DeviceCatalogSection />
        <DeviceFeaturesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
