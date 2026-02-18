import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Stethoscope, HeartPulse, Activity, Wind, Users, Brain, LucideIcon, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"

interface SpecialtyProps {
  icon: LucideIcon
  title: string
  focus: string
  whyItWorks: string
  colorClass: string
}

function SpecialtyCard({ icon: Icon, title, focus, whyItWorks, colorClass }: SpecialtyProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-md overflow-hidden flex flex-col">
      <CardHeader className={`${colorClass} pb-6`}>
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
          <Icon className="h-6 w-6 text-foreground/80" />
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-foreground/80 font-medium">
          Focus: {focus}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 flex-1 bg-background">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Why It Works</h4>
        <p className="text-muted-foreground">
          {whyItWorks}
        </p>
      </CardContent>
    </Card>
  )
}

export default function CareProgramsBySpecialityPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
          <div className="container px-4 mx-auto">
             <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left z-10">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 font-sans text-foreground">
                  Remote Care Solutions Tailored to Your Specialty
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                   Deliver smarter, data-driven care that aligns with the specific conditions you treat. From Cardiology to Pulmonology, our platform adapts to your clinical needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="rounded-full px-8 h-12 text-base">
                    Explore Specialty Programs
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-background transform hover:scale-[1.02] transition-transform duration-500">
                   <Image 
                      src="/images/programs-speciality-hero.png" 
                      alt="Specialists reviewing patient data" 
                      width={800} 
                      height={600} 
                      className="w-full h-auto object-cover"
                      priority
                   />
                </div>
                {/* Decorative blob */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16 container px-4 mx-auto text-center max-w-4xl">
             <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 text-foreground">
                A Specialty-Focused Approach to Remote Healthcare
             </h2>
             <p className="text-xl text-muted-foreground leading-relaxed">
                One-size-fits-all software doesn't work for complex chronic conditions. That's why ProWellCare builds specialty-specific workflows that capture the right data, alert you to the right trends, and help you drive outcomes without adding to your staff's workload.
             </p>
        </section>

        {/* Specialties Grid */}
        <section className="py-16 lg:py-24 container px-4 mx-auto bg-muted/30 rounded-3xl my-8">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                    Core Specialties We Serve
                </h2>
                <p className="text-lg text-muted-foreground">
                    Discover how our remote care programs align with your specific practice goals.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 <SpecialtyCard 
                    icon={Stethoscope}
                    title="Primary Care"
                    colorClass="bg-blue-50"
                    focus="Diabetes, Hypertension, Obesity, CKD"
                    whyItWorks="Our clinical nurse team monitors vitals daily, bridging the gap between visits and preventing manageable conditions from escalating into acute events."
                 />
                 <SpecialtyCard 
                    icon={HeartPulse}
                    title="Cardiology"
                    colorClass="bg-red-50"
                    focus="Heart Failure, Hypertension, Arrhythmia"
                    whyItWorks="Get 24/7 visibility into BP, heart rate, and weight. Reduce ER visits for CHF patients by detecting fluid retention early."
                 />
                 <SpecialtyCard 
                    icon={Activity}
                    title="Endocrinology"
                    colorClass="bg-yellow-50"
                    focus="Type 1 & 2 Diabetes, Metabolic Syndrome"
                    whyItWorks="Real-time glucose and weight tracking allows for precise medication titration and lifestyle coaching to lower A1C levels."
                 />
                 <SpecialtyCard 
                    icon={Wind}
                    title="Pulmonology"
                    colorClass="bg-sky-50"
                    focus="COPD, Asthma, Respiratory Failure"
                    whyItWorks="Monitor oxygen saturation and respiratory rates to catch exacerbations early and ensure oxygen therapy compliance."
                 />
                 <SpecialtyCard 
                    icon={Activity} 
                    title="Nephrology"
                    colorClass="bg-purple-50"
                    focus="CKD Stages 3-5, ESRD, Hypertension"
                    whyItWorks="Control blood pressure—the #1 driver of kidney failure—and monitor weight to manage fluid overload in dialysis patients."
                 />
                 <SpecialtyCard 
                    icon={Users}
                    title="Geriatrics" // Using Users as proxy for Geriatrics/Elderly
                    colorClass="bg-orange-50"
                    focus="Multi-morbidity, Frailty, Fall Risk"
                    whyItWorks="Simple, cellular devices require no setup, making it easy for seniors to stay connected to their care team from home."
                 />
            </div>
        </section>

        {/* Why Specialty Practices Choose Us */}
        <section className="py-16 lg:py-24 container px-4 mx-auto">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className="space-y-8">
                     <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                        Why Specialty Practices Choose ProWellCare
                     </h2>
                     <div className="space-y-6">
                        <div className="flex gap-4">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold">Reduced Clinical Burden</h3>
                                <p className="text-muted-foreground">We handle eligibility, onboarding, device shipping, and daily monitoring so your staff doesn't have to.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold">Improved Patient Outcomes</h3>
                                <p className="text-muted-foreground">Real-world data helps you understand if your treatment plans are working between visits.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold">Higher Engagement</h3>
                                <p className="text-muted-foreground">Regular touchpoints from our nurses improve medication adherence and patient trust.</p>
                            </div>
                        </div>
                         <div className="flex gap-4">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold">Preventative Care</h3>
                                <p className="text-muted-foreground">Drastically reduce ER visits and hospital readmissions through early detection of warning signs.</p>
                            </div>
                        </div>
                     </div>
                 </div>
                 <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] bg-secondary/20 rounded-2xl overflow-hidden">
                      <Image 
                          src="/images/programs-speciality-icons.png" 
                          alt="Medical Specialties Icons" 
                          width={600} 
                          height={600} 
                          className="w-full h-full object-contain p-12 hover:scale-105 transition-transform duration-700"
                       />
                 </div>
             </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 text-center container px-4 mx-auto bg-primary text-primary-foreground relative overflow-hidden">
             <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-serif text-white">
                    Bring Proactive Care to Your Specialty
                </h2>
                <p className="text-xl text-primary-foreground/90">
                    Let's discuss how ProWellCare can tailor a remote monitoring program for your specific patient population.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base font-semibold text-primary">
                        Let's Get Connected
                    </Button>
                </div>
             </div>
             {/* Background shapes */}
             <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
