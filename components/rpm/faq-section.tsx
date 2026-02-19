import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container px-4 mx-auto max-w-4xl">
             <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-12 text-center text-foreground">
                Common Questions about RPM
             </h2>
             <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-lg font-medium">How does patient engagement work?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                        We use easy-to-use connected devices (like blood pressure cuffs or scales) combined with a dedicated clinical monitoring team. This ensures continuous support, builds patient trust, and drives high adherence rates without burdening your staff.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left text-lg font-medium">What about billing and reimbursement?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                        RPM is reimbursed under specific CPT codes (99453, 99454, 99457, 99458) by Medicare and many commercial payers. Our software tracks all billable time and generates reports to ensure accurate and maximized reimbursement, with potential revenue of ~$1,900 per patient annually.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left text-lg font-medium">How does this help with prevention?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                        Real-time data alerts allow for early intervention before vital sign changes escalate into emergency events. This proactive approach significantly reduces hospital readmissions and emergency room visits for chronic conditions.
                    </AccordionContent>
                </AccordionItem>
             </Accordion>
        </div>
    </section>
  )
}
