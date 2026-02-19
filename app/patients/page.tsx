import { PatientHeroSection } from "@/components/patients/hero-section"
import { PatientServicesSection } from "@/components/patients/services-section"
import { PatientWhyMattersSection } from "@/components/patients/why-matters-section"
import { PatientHowItWorksSection } from "@/components/patients/how-it-works-section"
import { PatientBenefitsSection } from "@/components/patients/benefits-section"
import { PatientFaqSection } from "@/components/patients/faq-section"
import { PatientCtaSection } from "@/components/patients/cta-section"

export default function PatientsPage() {
  return (
    <>
      <PatientHeroSection />
      <PatientServicesSection />
      <PatientWhyMattersSection />
      <PatientHowItWorksSection />
      <PatientBenefitsSection />
      <PatientFaqSection />
      <PatientCtaSection />
    </>
  )
}
