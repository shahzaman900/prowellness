import Link from "next/link"
import { ArrowRight, Building2, Stethoscope, HeartPulse } from "lucide-react"

export function ComprehensiveSolutionsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container px-4 mx-auto">
        
        {/* Top Content: Future of Healthcare */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 items-start">
            <div className="flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl leading-tight font-sans">
                    The Future of Healthcare Lies in Proactive Chronic Disease Management
                </h2>
            </div>
            <div className="flex-1">
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Over 170 million Americans are living with one or more chronic conditions, accounting for 90% of the nation's annual healthcare expenditures, straining the providers & payers (CDC 2023)
                </p>
            </div>
        </div>

        {/* Bottom Content: Solutions Grid */}
        <div>
            <h3 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl mb-12 font-sans">
                Comprehensive RPM & CCM Solutions
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1: By Organization Type */}
                <Link href="/programs/types" className="group">
                    <div className="bg-[#F36076] rounded-xl h-64 flex flex-col justify-between p-8 transition-transform transform group-hover:-translate-y-2 shadow-lg hover:shadow-2xl relative overflow-hidden">
                        <div className="z-10 bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
                             <Building2 className="text-white h-6 w-6" />
                        </div>
                        <div className="w-full z-10">
                            <h4 className="text-white text-2xl font-bold mb-2">By Organization Type</h4>
                            <div className="h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
                        </div>
                        {/* Decorative Icon Background */}
                         <Building2 className="text-white/10 h-32 w-32 absolute -right-4 -bottom-4 rotate-12" />
                    </div>
                </Link>

                {/* Card 2: By Specialty */}
                <Link href="/programs/speciality" className="group">
                    <div className="bg-[#F36076] rounded-xl h-64 flex flex-col justify-between p-8 transition-transform transform group-hover:-translate-y-2 shadow-lg hover:shadow-2xl relative overflow-hidden">
                         <div className="z-10 bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
                             <Stethoscope className="text-white h-6 w-6" />
                        </div>
                        <div className="w-full z-10">
                            <h4 className="text-white text-2xl font-bold mb-2">By Specialty</h4>
                             <div className="h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
                        </div>
                         {/* Decorative Icon Background */}
                         <Stethoscope className="text-white/10 h-32 w-32 absolute -right-4 -bottom-4 rotate-12" />
                    </div>
                </Link>

                {/* Card 3: By Condition */}
                <Link href="/programs/condition" className="group">
                    <div className="bg-[#F36076] rounded-xl h-64 flex flex-col justify-between p-8 transition-transform transform group-hover:-translate-y-2 shadow-lg hover:shadow-2xl relative overflow-hidden">
                        <div className="z-10 bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
                             <HeartPulse className="text-white h-6 w-6" />
                        </div>
                         <div className="w-full z-10">
                            <h4 className="text-white text-2xl font-bold mb-2">By Condition</h4>
                             <div className="h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
                        </div>
                         {/* Decorative Icon Background */}
                         <HeartPulse className="text-white/10 h-32 w-32 absolute -right-4 -bottom-4 rotate-12" />
                    </div>
                </Link>
            </div>
        </div>

      </div>
    </section>
  )
}
