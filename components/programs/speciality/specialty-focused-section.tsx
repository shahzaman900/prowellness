"use client"

import Image from "next/image"

export function SpecialtyFocusedSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans leading-tight">
              A Specialty-Focused <br />
              Approach to Remote <br />
              Healthcare
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                <span className="font-bold text-foreground">RPM and CCM</span> aren&apos;t one-size-fits-all. Each medical specialty has unique challenges when managing chronic disease patients. That&apos;s why ProWellCare <span className="font-bold text-foreground">offers flexible remote care programs with integrated clinical services</span>, condition-specific device support, and real-time health data monitoring to drive better outcomes-without adding extra workload to your staff.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square bg-slate-100">
               {/* Reusing a relevant ecosystem/dashboard image as placeholder */}
               <Image
                  src="/images/programs-ecosystem.png"
                  alt="Specialty Focused Care"
                  fill
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply"></div>
            </div>
             {/* Decorative Elements */}
             <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl"></div>
             <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-pink-100 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
