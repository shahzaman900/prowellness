import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function CcmFaqSection() {
  const faqs = [
    {
      question: "What is Chronic Care Management (CCM)?",
      answer: "CCM is a Medicare program that pays for non-face-to-face care coordination services for patients with two or more chronic conditions. It is designed to help patients manage their health better, prevent acute care episodes, and improve quality of life through continuous support."
    },
    {
      question: "How does Medicare reimburse for CCM?",
      answer: "Medicare reimburses providers for CCM services under CPT code 99490 (for at least 20 minutes of clinical staff time per month) and other complex care codes. Reimbursement rates vary by region but generally provide a significant new revenue stream for practices."
    },
    {
      question: "Which conditions does CCM help manage?",
      answer: "CCM covers any chronic condition expected to last at least 12 months or until the death of the patient, and that places the patient at significant risk of death, acute exacerbation/decompensation, or functional decline. Common examples include diabetes, hypertension, arthritis, heart disease, and depression."
    },
    {
      question: "Can external clinical staff deliver CCM services?",
      answer: "Yes. Under CMS rules, CCM services can be provided by clinical staff under general supervision of the billing practitioner. This allows our ProWellCare clinical team to act as an extension of your practice, delivering the care without adding to your internal staff's workload."
    },
    {
      question: "Does a patient need a diagnosis for CCM?",
      answer: "Yes, patients eligible for CCM services must have two or more chronic conditions expected to last at least 12 months. These conditions must be documented in the patient's medical record."
    },
    {
      question: "What's involved in enrolling patients into CCM?",
      answer: "Enrolling patients is straightforward with ProWellCare. We help identify eligible patients from your EMR data, and then our team handles the outreach to explain the program and obtain the necessary patient consent (verbal or written) to begin services."
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
