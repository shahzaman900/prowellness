"use client"

import Image from "next/image"

export function TransformCareSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans leading-tight">
              Transform Chronic Care with <br />
              <span className="text-[#121576]">Continuous Remote</span> <br />
              <span className="text-[#121576]">Monitoring</span>
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Managing chronic illnesses effectively takes more than just occasional office visits. Our chronic care programs use <span className="font-bold text-foreground">remote monitoring technology</span> and <span className="font-bold text-foreground">expert clinical oversight</span> to keep patients on track-day in and day out. The result? <span className="font-bold text-foreground">Better outcomes, greater engagement, and less pressure on your team.</span>
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square bg-slate-100">
               {/* Reusing a relevant ecosystem/dashboard image as placeholder */}
               <Image
                  src="/images/programs-ecosystem.png"
                  alt="Remote Monitoring Dashboard"
                  fill
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply"></div>
            </div>
             {/* Decorative Elements */}
             <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-pink-100 rounded-full blur-2xl"></div>
             <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
