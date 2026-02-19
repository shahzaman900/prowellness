"use client"

export function PatientHowItWorksSection() {
  const steps = [
    {
      number: "01",
      text: "Your doctor enrolls you in the program",
    },
    {
      number: "02",
      text: "We provide easy-to-use devices and train you to use them.",
    },
    {
      number: "03",
      text: "Your vitals are automatically shared with our nursing team every day.",
    },
    {
      number: "04",
      text: "You'll receive a monthly call from a familiar nurse to go over your numbers, discuss medications, and support healthy changes.",
    },
    {
      number: "05",
      text: "If anything looks concerning, we'll alert your doctor and help get care sooner.",
    },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121576] mb-4 font-sans">
                How the Program Works
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
                Getting started is simple:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
                {steps.slice(0, 3).map((step, index) => (
                    <div key={index} className="bg-[#F36076] p-8 rounded-3xl text-center text-white shadow-lg flex flex-col items-center justify-center min-h-[220px]">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#F36076] font-bold text-lg mb-6 shadow-sm">
                            {step.number}.
                        </div>
                        <p className="text-lg font-medium leading-normal">
                            {step.text}
                        </p>
                    </div>
                ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:w-2/3 mx-auto md:mr-auto md:ml-0">
                 {/* Replicating the distinct layout from image: 3 top, 2 bottom left */}
                 {steps.slice(3).map((step, index) => (
                    <div key={index + 3} className="bg-[#F36076] p-8 rounded-3xl text-center text-white shadow-lg flex flex-col items-center justify-center min-h-[220px]">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#F36076] font-bold text-lg mb-6 shadow-sm">
                            {step.number}.
                        </div>
                        <p className="text-lg font-medium leading-normal">
                            {step.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
