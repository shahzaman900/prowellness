import { Search, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-sans leading-tight">
              Value-Based Care Excellence <br className="hidden lg:block" />
              <span className="text-primary font-serif italic">Starts with RPM & CCM</span>
            </h1>
            <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Elevate your clinic’s reputation, results, and revenue by prioritizing proactive care management for chronic conditions through proven RPM and CCM programs.
            </p>

            <div className="mx-auto lg:mx-0 max-w-md relative">
              <div className="relative flex items-center w-full shadow-lg rounded-full bg-background p-2 ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-primary transition-all">
                <Search className="ml-4 h-6 w-6 text-muted-foreground shrink-0" />
                <Input 
                  type="text" 
                  placeholder="What care program are you looking for?" 
                  className="border-0 shadow-none focus-visible:ring-0 text-lg py-6 px-4 bg-transparent"
                />
                <Button size="lg" className="rounded-full px-8 text-base">
                  Search
                </Button>
              </div>
              <div className="mt-4 flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                 <span className="font-semibold">Popular:</span>
                 <a href="/rpm" className="underline hover:text-primary transition-colors">RPM</a>
                 <a href="/ccm" className="underline hover:text-primary transition-colors">CCM</a>
                 <a href="/software" className="underline hover:text-primary transition-colors">Software</a>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src="/images/hero-lifestyle.png"
                alt="Doctor showing health data to a senior patient"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-background p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">HIPAA Compliant</p>
                <p className="text-xs text-muted-foreground">Secure & Private Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl -z-10 pointer-events-none"></div>
    </section>
  )
}
