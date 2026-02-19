"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function DeviceFaqSection() {
  const faqs = [
    {
      question: "What are remote patient monitoring (RPM) devices?",
      answer: "Remote patient monitoring (RPM) devices are medical-grade tools that patients use at home to track vital signs like blood pressure, blood glucose levels, weight, and oxygen saturation. These devices automatically transmit data to healthcare providers, allowing for continuous monitoring and timely interventions without the need for frequent office visits."
    },
    {
      question: "What types of remote patient monitoring devices are available?",
      answer: "ProWellCare offers a comprehensive suite of RPM devices, including digital Blood Pressure Monitors, Blood Glucose Monitors (with glucometers and test strips), Continuous Glucose Monitors (CGM), digital Weight Scales, and Pulse Oximeters. All our devices are designed for ease of use and seamless data transmission."
    },
    {
      question: "Are the remote monitoring devices secure and HIPAA-compliant?",
      answer: "Yes, absolutely. All our devices and software platforms are fully HIPAA-compliant. Patient data is encrypted during transmission and storage, ensuring end-to-end security and privacy in accordance with all healthcare regulations."
    },
    {
      question: "What is the difference between cellular connectivity and Bluetooth for RPM devices?",
      answer: "Cellular devices have built-in cellular chips (like a phone) and transmit data directly to the cloud immediately after use, requiring no smartphone or WiFi connection setup from the patient. Bluetooth devices usually need to pair with a smartphone app to transmit data. We primarily offer cellular devices to maximize patient adherence and ease of use."
    },
    {
      question: "How do I order RPM devices for my patients with ProWellCare?",
      answer: "Ordering is simple through our provider portal. Once a patient is enrolled in your RPM program, you can order the appropriate device kit directly. We handle the logistics, shipping the fully configured, ready-to-use device directly to the patient's doorstep."
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
