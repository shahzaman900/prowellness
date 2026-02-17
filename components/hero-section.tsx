import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-secondary/30 pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="container px-4 mx-auto text-center relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-sans">
          Value-Based Care Excellence <br className="hidden md:block" />
          <span className="text-primary font-serif italic">Starts with RPM & CCM</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          Elevate your clinic’s reputation, results, and revenue by prioritizing proactive care management for chronic conditions through proven RPM and CCM programs.
        </p>

        <div className="mx-auto max-w-3xl relative">
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
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
             <span>Popular:</span>
             <a href="/rpm" className="underline hover:text-primary">RPM</a>
             <a href="/ccm" className="underline hover:text-primary">CCM</a>
             <a href="/software" className="underline hover:text-primary">Software</a>
          </div>
        </div>
      </div>
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>
    </div>
  )
}
