import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function CcmBillingSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#121576] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#F36076]/10 blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/5 blur-3xl -z-0 pointer-events-none"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white tracking-tight leading-tight">
              Improve Billing Accuracy and Practice Efficiency
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              ProWellCare simplifies billing and CPT code management, helping practices improve accuracy, efficiency, and revenue capture.
            </p>

            {/* Optional visualization of CPT codes or benefits to make the section richer */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8 text-left">
                {[
                    "CPT Code Management",
                    "Automated Documentation",
                    "Revenue Optimization"
                ].map((item, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                        <CheckCircle2 className="w-8 h-8 text-[#F36076] mb-4" />
                        <h3 className="font-semibold !text-white text-lg">{item}</h3>
                    </div>
                ))}
            </div>

            {/* <div className="pt-8">
               <Button 
                size="lg" 
                className="bg-[#F36076] hover:bg-[#F36076]/90 text-white font-bold rounded-full px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
               >
                 View CPT Codes <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
            </div> */}
        </div>
      </div>
    </section>
  )
}
