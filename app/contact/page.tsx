import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactHeroSection } from "@/components/contact/hero-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ContactHeroSection />
        
        <section className="py-24 container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-4 text-[#121576] font-sans">Get in Touch</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Our team is ready to answer your questions and help you get started with RPM and CCM services. Fill out the form or use the contact information below to reach us directly.
                        </p>
                     </div>
                     
                     <div className="space-y-8 pt-4">
                        <div className="flex items-start gap-5 group">
                            <div className="h-12 w-12 rounded-full bg-[#FFF0F3] flex items-center justify-center shrink-0 group-hover:bg-[#F36076] transition-colors duration-300">
                                <Phone className="h-5 w-5 text-[#F36076] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#121576] text-lg mb-1">Phone</h3>
                                <p className="text-muted-foreground text-lg hover:text-[#F36076] transition-colors">
                                    <a href="tel:9723273687">(972) 327 3687</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 group">
                            <div className="h-12 w-12 rounded-full bg-[#FFF0F3] flex items-center justify-center shrink-0 group-hover:bg-[#F36076] transition-colors duration-300">
                                <Mail className="h-5 w-5 text-[#F36076] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#121576] text-lg mb-1">Email</h3>
                                <p className="text-muted-foreground text-lg hover:text-[#F36076] transition-colors">
                                    <a href="mailto:info@prowellcare.com">info@prowellcare.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 group">
                            <div className="h-12 w-12 rounded-full bg-[#FFF0F3] flex items-center justify-center shrink-0 group-hover:bg-[#F36076] transition-colors duration-300">
                                <MapPin className="h-5 w-5 text-[#F36076] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#121576] text-lg mb-1">Office</h3>
                                <p className="text-muted-foreground text-lg">
                                    235 Park Ave. Swarthmore, PA 19081<br />
                                </p>
                            </div>
                        </div>
                     </div>
                </div>

                <Card className="border-none shadow-2xl bg-white/50 backdrop-blur-sm overflow-hidden rounded-3xl">
                    <div className="h-2 bg-[#F36076] w-full"></div>
                    <CardContent className="p-8 md:p-10">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-semibold text-[#121576] uppercase tracking-wide">First Name</label>
                                    <Input id="first-name" placeholder="John" className="h-12 bg-slate-50 border-slate-200 focus:border-[#F36076] focus:ring-[#F36076]/20 transition-all rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-semibold text-[#121576] uppercase tracking-wide">Last Name</label>
                                    <Input id="last-name" placeholder="Doe" className="h-12 bg-slate-50 border-slate-200 focus:border-[#F36076] focus:ring-[#F36076]/20 transition-all rounded-xl" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-[#121576] uppercase tracking-wide">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-slate-50 border-slate-200 focus:border-[#F36076] focus:ring-[#F36076]/20 transition-all rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-[#121576] uppercase tracking-wide">Message</label>
                                <Textarea id="message" placeholder="How can we help your practice?" className="min-h-[160px] bg-slate-50 border-slate-200 focus:border-[#F36076] focus:ring-[#F36076]/20 transition-all rounded-xl resize-none p-4" />
                            </div>
                            <Button type="submit" className="w-full h-14 text-lg font-bold uppercase tracking-wider bg-[#F36076] hover:bg-[#F36076]/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl">Send Message</Button>
                            
                            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                                <span className="font-bold">Disclaimer:</span> By providing my phone number to “ProactiveWellness Care,” I agree and acknowledge that “ProactiveWellness Care” may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency will vary, and you will be able to opt out by replying “STOP.” For more information on how your data will be handled, please visit our <a href="https://prowellcare.com/privacy/" className="underline hover:text-[#F36076] transition-colors">https://prowellcare.com/privacy/</a>.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
