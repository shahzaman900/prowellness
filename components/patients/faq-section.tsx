"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function PatientFaqSection() {
  const faqs = [
    {
      question: "Does this cost money?",
      answer: "Most remote patient monitoring and chronic care management programs are covered by Medicare and many private insurance plans. Depending on your specific coverage, there may be a small copay, similar to an office visit."
    },
    {
      question: "Is this the same as my doctor’s visit?",
      answer: "No, this program does not replace your regular doctor's visits. Instead, it provides extra support in between appointments to keep you healthy and catch any issues early. We share all data with your doctor so they stay informed."
    },
    {
      question: "What if I forget to check my numbers?",
      answer: "It's understandable to miss a day occasionally. Our care team monitors your readings and may give you a friendly call to check in if we haven't received data for a while. The goal is consistent monitoring, not perfection."
    },
    {
      question: "Who do I talk to?",
      answer: "You will have a dedicated care team, including nurses and care coordinators, who monitor your health data. You can talk to them during your scheduled monthly calls or reach out if you have questions or concerns."
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
