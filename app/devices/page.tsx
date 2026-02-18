import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Wifi, BatteryMedium, ShieldCheck, Truck, CheckCircle2, ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

export default function DevicesPage() {
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
                  Zero-Cost, Ready-to-Use Devices
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                   Deploy easy, out-of-the-box RPM devices with no upfront costs. Start your remote care program risk-free and maximize patient outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="rounded-full px-8 h-12 text-base">
                    Order Devices
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-background transform hover:scale-[1.02] transition-transform duration-500">
                   <Image 
                      src="/images/devices-collection.png" 
                      alt="Collection of ProWell Care Medical Devices" 
                      width={800} 
                      height={600} 
                      className="w-full h-auto object-cover"
                      priority
                   />
                </div>
                {/* Decorative blob */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl opacity-50"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Device Showcase Section */}
        <section className="py-16 lg:py-24 container px-4 mx-auto">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                    FDA-Approved, Cellular-Connected
                </h2>
                <p className="text-lg text-muted-foreground">
                    Our devices work right out of the box—no smartphone pairing, no Wi-Fi setup, and no technical headaches for your patients.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {/* Device 1 */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                    <div className="h-48 bg-muted/50 flex items-center justify-center p-6">
                        {/* Placeholder for individual device icons/images if we had them, using generic for now or the collection split */}
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-4xl">🩺</span>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl">Blood Pressure Monitor</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Simple one-touch operation. Automatically sends readings to the clinician dashboard instantly.
                    </CardContent>
                 </Card>
                 
                 {/* Device 2 */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                     <div className="h-48 bg-muted/50 flex items-center justify-center p-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                             <span className="text-4xl">⚖️</span>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl">Weight Scale</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Cellular-enabled scale for tracking weight fluctuations, critical for CHF management.
                    </CardContent>
                 </Card>

                 {/* Device 3 */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                     <div className="h-48 bg-muted/50 flex items-center justify-center p-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                             <span className="text-4xl">🩸</span>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl">Glucometer</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Accurate blood glucose monitoring with instant data transmission for diabetes care.
                    </CardContent>
                 </Card>
                 
                 {/* Device 4 */}
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                     <div className="h-48 bg-muted/50 flex items-center justify-center p-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                             <span className="text-4xl">💉</span>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl">Continuous Glucose (CGM)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Real-time glucose tracking for intensive diabetes management and insights.
                    </CardContent>
                 </Card>
            </div>
        </section>

         {/* Features / How it Works Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container px-4 mx-auto">
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-auto bg-background rounded-2xl overflow-hidden shadow-xl ring-1 ring-border group order-2 lg:order-1">
                        <Image 
                          src="/images/devices-connectivity.png" 
                          alt="Cellular Connectivity Visual" 
                          width={800} 
                          height={600} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                         <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                            Seamless Connection, Secure Data
                         </h2>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            We've removed the barriers to technology adoption. Our devices use cellular networks just like a mobile phone, ensuring reliable data transmission from anywhere.
                         </p>
                         
                         <ul className="space-y-4 pt-4">
                             <li className="flex items-start gap-3">
                                <Wifi className="h-6 w-6 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-foreground">Zero Setup Required</h3>
                                    <p className="text-muted-foreground">No Wi-Fi passwords, no bluetooth pairing, no apps to install.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Truck className="h-6 w-6 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-foreground">Direct-to-Patient Shipping</h3>
                                    <p className="text-muted-foreground">We handle logistics, shipping devices directly to your patients' doorsteps.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-foreground">HIPAA Secure</h3>
                                    <p className="text-muted-foreground">End-to-end encryption keeps patient health data safe and compliant.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <BatteryMedium className="h-6 w-6 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-foreground">Long Battery Life</h3>
                                    <p className="text-muted-foreground">Devices are designed for longevity and ease of maintenance.</p>
                                </div>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
            <div className="container px-4 mx-auto max-w-3xl">
                 <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-12 text-center text-foreground">
                    Device FAQs
                 </h2>
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left text-lg font-medium">Do patients need Wi-Fi?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            No. All our devices are cellular-enabled, meaning they have their own built-in connection. They work right out of the box, anywhere there is cell service.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left text-lg font-medium">Who pays for the devices?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            With our standard program, there is no upfront cost to the practice for the devices. We handle the inventory and shipping.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left text-lg font-medium">What if a device stops working?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            We provide full technical support. If a device malfunctions, we will troubleshoot with the patient and replace it if necessary at no cost.
                        </AccordionContent>
                    </AccordionItem>
                 </Accordion>
            </div>
        </section>


        {/* Final CTA */}
        <section className="py-20 lg:py-32 text-center container px-4 mx-auto bg-primary text-primary-foreground relative overflow-hidden">
             <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-serif text-white">
                    Equip your patients for success
                </h2>
                <p className="text-xl text-primary-foreground/90">
                    Get started with our risk-free device program today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base font-semibold text-primary">
                        Partner with ProWell
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
