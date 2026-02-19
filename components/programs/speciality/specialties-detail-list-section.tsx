export function SpecialtiesDetailListSection() {
  const specialties = [
    {
      title: "Primary Care / General Practice",
      description: "Primary care physicians are the backbone of chronic care management. Extend your support beyond appointments by remotely tracking patients with diabetes, hypertension, obesity, CKD, and more. With access to our clinical nurse team, you can monitor vitals daily and reduce preventable escalations—all without overwhelming your practice resources."
    },
    {
      title: "Cardiology",
      description: "Heart health demands continuous oversight. With ProWellCare, cardiologists gain 24/7 visibility into vital signs like blood pressure, heart rate, and oxygen saturation. Scale your program to reduce ER visits and enhance long-term heart care plans."
    },
    {
      title: "Nephrology",
      description: "CKD patients are high-risk and need close monitoring. RPM allows nephrologists to intervene earlier, slowing disease progression and reducing cardiac-related events."
    },
    {
      title: "Endocrinology",
      description: "Streamline diabetes management with daily tracking of glucose levels, weight, and blood pressure—all synced to your care plan via CCM. With this data, you can personalize interventions, optimize medication use, and maintain tighter control of A1C levels."
    },
    {
      title: "Pulmonology",
      description: "Manage COPD and asthma more effectively with pulse oximetry and respiratory monitoring. Our tools enable pulmonologists to keep high-risk patients out of the ER and ensure long-term care plans are working as expected."
    },
    {
      title: "Geriatrics",
      description: "Older adults often live with multiple chronic conditions. Our user-friendly devices, patient reminders, and caregiver communication tools help keep seniors compliant and connected, reducing emergency episodes and improving independence and quality of life."
    },
    {
      title: "Pain management",
      description: "RPM fills the gap in understanding chronic pain patients' day-to-day vitals. Get insights into respiratory patterns, blood pressure, and other indicators that influence pain—so you can refine treatment plans and improve medication adherence."
    },
    {
      title: "Other specialties",
      description: "Specialties like neurology, urology, and rheumatology can also benefit from remote care programs. Use continuous data tracking, CCM-led communication, and our turnkey support to better manage complex, multi-morbidity patients."
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {specialties.map((specialty, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-[#121576] font-sans">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
