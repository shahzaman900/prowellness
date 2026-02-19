"use client"

import Image from "next/image"

export function EcosystemSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans leading-tight">
              Build a <span className="text-[#121576]">Care Management <br className="hidden md:block"/> Services Ecosystem</span> with <br className="hidden md:block"/>
              CCM & RPM That Works for <br className="hidden md:block"/>
              <span className="text-[#121576]">Your Practice</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Developing a successful remote care program means more than just adding devices-it requires an integrated, sustainable system tailored to your clinical structure and patient population. Whether you're a private practice, multi-specialty group, or healthcare system, ProWellCare helps you design and deploy a personalized solution. With our advanced RPM platform, end-to-end clinical monitoring services, and dedicated support for both providers and patients, we ensure your remote care ecosystem is seamless, scalable, and impactful
            </p>
          </div>
          <div className="relative">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square transform hover:scale-[1.02] transition-transform duration-500 bg-slate-100">
               <Image
                  src="/images/programs-ecosystem.png"
                  alt="Care Management Ecosystem"
                  fill
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>
             {/* Decorative Background Shapes */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-pink-50 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
