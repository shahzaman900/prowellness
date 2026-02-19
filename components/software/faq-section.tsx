"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function SoftwareFaqSection() {
  const faqs = [
    {
      question: "How do remote devices sync with the CHARMS software?",
      answer: "Our remote monitoring devices sync automatically with the CHARMS software using secure cellular or Bluetooth connectivity. Patients simply use the device, and the data is transmitted in real-time to the platform, eliminating the need for manual entry or complex setup."
    },
    {
      question: "Can CHARMS track billing eligibility for RPM codes?",
      answer: "Yes, CHARMS includes built-in tracking for RPM billing eligibility. The system automatically logs billable time, tracks the number of readings, and ensures all requirements for CPT codes (such as 99453, 99454, 99457, and 99458) are met before generating billing reports."
    },
    {
      question: "How is patient information secured on the CHARMS platform?",
      answer: "Patient information is secured with industry-leading encryption and strict access controls. The CHARMS platform is fully HIPAA-compliant, ensuring that all protected health information (PHI) is stored, transmitted, and accessed securely to maintain patient privacy and data integrity."
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 font-sans text-[#121576]">
            Frequently Asked Questions
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#121576]/10 px-0">
              <AccordionTrigger className="text-lg sm:text-xl font-medium py-6 text-[#121576] hover:text-[#F36076] transition-colors hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
