import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 font-sans text-[#121576]">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-[#121576]/10 px-0">
                <AccordionTrigger className="text-lg sm:text-xl font-medium py-6 text-[#121576] hover:text-[#F36076] transition-colors hover:no-underline text-left">
                    How does ProWellCare’s RPM solution keep patients engaged between visits?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    We use easy-to-use connected devices (like blood pressure cuffs or scales) combined with a dedicated clinical monitoring team. This ensures continuous support, builds patient trust, and drives high adherence rates without burdening your staff.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-[#121576]/10 px-0">
                <AccordionTrigger className="text-lg sm:text-xl font-medium py-6 text-[#121576] hover:text-[#F36076] transition-colors hover:no-underline text-left">
                    How is RPM billed and reimbursed, and what are the requirements for Medicare and commercial payers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    RPM is reimbursed under specific CPT codes (99453, 99454, 99457, 99458) by Medicare and many commercial payers. Our software tracks all billable time and generates reports to ensure accurate and maximized reimbursement, with potential revenue of ~$1,900 per patient annually.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-[#121576]/10 px-0">
                <AccordionTrigger className="text-lg sm:text-xl font-medium py-6 text-[#121576] hover:text-[#F36076] transition-colors hover:no-underline text-left">
                    How does ProWellCare’s RPM system help prevent emergency situations?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    Real-time data alerts allow for early intervention before vital sign changes escalate into emergency events. This proactive approach significantly reduces hospital readmissions and emergency room visits for chronic conditions.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
