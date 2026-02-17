import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export function FaqSection() {
  const faqs = [
    {
      question: "What benefits can your practice gain from implementing a remote care program?",
      answer: "Implementing a remote care program, such as Remote Patient Monitoring (RPM) and Chronic Care Management (CCM), offers your medical practice numerous advantages. These include improved patient outcomes through consistent health tracking, increased patient engagement, reduced hospital readmissions, and enhanced chronic disease management. Additionally, remote care programs provide new revenue streams through Medicare and commercial reimbursements, while helping your practice scale care delivery without overwhelming your in-office staff."
    },
    {
      question: "Which chronic conditions can be effectively managed through remote care?",
      answer: "Remote care is especially effective in managing a wide range of chronic conditions, including hypertension, diabetes, congestive heart failure (CHF), chronic obstructive pulmonary disease (COPD), obesity, and asthma. These conditions benefit from continuous monitoring, medication adherence support, and proactive interventions—all of which are central to remote patient care."
    },
    {
      question: "What are the first steps to launching a remote care program?",
      answer: "Launching a remote care program begins with evaluating your patient population to identify those who would benefit most from remote monitoring and chronic care services. Next, choose a reliable remote care partner like ProactiveWellness Care, who can provide end-to-end support including FDA-approved medical devices, a user-friendly platform, and clinical call center services. From there, you’ll onboard your staff, integrate the solution into your workflow, and start enrolling eligible patients."
    },
    {
      question: "In what ways can a remote care program enhance your practice’s service offerings?",
      answer: "A remote care program enhances your practice by extending care beyond clinic walls, allowing continuous patient monitoring, early detection of health issues, and timely interventions. It also supports personalized, data-driven care plans that align with value-based care models. With services like remote vitals tracking, medication reminders, and real-time alerts, your practice can offer a higher standard of care while improving patient satisfaction and loyalty."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-sans text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-medium py-6 text-foreground hover:text-primary transition-colors hover:no-underline">
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
