"use client"

import Image from "next/image"

export function ProgramDetailsSection() {
  const sections = [
    {
      id: "private-practices",
      title: "Private Practices & Physicians",
      content: (
        <>
          <p className="mb-4">
            ProWellCare provides private practices with a comprehensive solution through our <span className="font-bold">Remote Patient Monitoring (RPM)</span>, <span className="font-bold">Chronic Care Management (CCM)</span>, and <span className="font-bold">Clinical Monitoring System (CHARMS)</span>. Our platform enables real-time tracking of vital signs via RPM cellular devices, managed by our licensed nurses. This ensures proactive care and better patient outcomes without additional strain on your staff.
          </p>
          <p>
            We handle everything from patient onboarding and eligibility verification to device delivery and billing, simplifying your workflow and enhancing patient engagement.
          </p>
        </>
      ),
    },
    {
      id: "value-based",
      title: "Value-Based Care Organizations",
      content: (
        <>
          <p className="mb-4">
            For Value-Based Care (VBC) Organizations, ProWellCare's integrated solutions improve care coordination by continuously monitoring chronic conditions. Our <span className="font-bold">CHARMS platform</span> and <span className="font-bold">RPM devices</span> provide real-time data, enabling care teams to make informed decisions and take timely action, leading to better health management and improved performance metrics.
          </p>
          <p>
            This approach helps maximize reimbursements and reduces hospitalizations, supporting both care quality and efficiency.
          </p>
        </>
      ),
    },
    {
      id: "hospitals",
      title: "Hospitals & Health Systems",
      content: (
        <>
          <p className="mb-4">
            ProWellCare enables hospitals and health systems to <span className="font-bold">improve clinical outcomes through integrated RPM and CCM services</span>. Our CHARMS platform provides <span className="font-bold">continuous patient monitoring</span> and <span className="font-bold">actionable insights</span>, empowering care teams to <span className="font-bold">reduce readmissions</span> and <span className="font-bold">enhance patient engagement</span>.
          </p>
          <p>
            With secure RPM cellular devices, our solution ensures reliable data collection and facilitates proactive care management, optimizing both patient outcomes and operational efficiency. By supporting your transition to value-based care, ProWellCare helps you achieve quality benchmarks, maximize reimbursement, and deliver better long-term results for your patients and your organization.
          </p>
        </>
      ),
    },
    {
      id: "fqhc",
      title: "Federally Qualified Health Centers (FQHCs)",
      content: (
        <>
          <p className="mb-4">
            ProWellCare supports FQHCs in providing equitable care through our <span className="font-bold">RPM</span> and <span className="font-bold">CCM</span> services. By leveraging <span className="font-bold">CHARMS</span>, we facilitate continuous monitoring of chronic conditions and ensure real-time alerts for elevated vitals. Our platform helps FQHCs bridge care gaps, improving health outcomes for underserved populations with minimal in-person visits.
          </p>
          <p>
             We streamline patient onboarding, eligibility checks, device shipping, and remote monitoring, ensuring efficient and effective care delivery.
          </p>
        </>
      ),
       image: "/images/programs-fqhc.png"
    }
  ]

  return (
    <div className="bg-slate-50">
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="py-24 border-b border-slate-200 last:border-0">
          <div className="container px-4 mx-auto">
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                    <p className="text-[#F36076] font-bold uppercase tracking-wider text-sm">
                        Care Management Programs
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans">
                        {section.title}
                    </h2>
                    <div className="text-lg text-muted-foreground leading-relaxed">
                        {section.content}
                    </div>
                </div>
                 <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Reusing existing images or placeholders appropriately */}
                     {section.image ? (
                        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                            <Image
                                src={section.image}
                                alt={section.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                     ) : (
                         <div className="bg-white rounded-3xl p-8 shadow-sm flex items-center justify-center aspect-[4/3] border border-slate-100">
                             <p className="text-muted-foreground italic">Image for {section.title}</p>
                         </div>
                     )}
                </div>
             </div>
          </div>
        </section>
      ))}
    </div>
  )
}
