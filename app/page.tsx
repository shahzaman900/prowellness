import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Heart, Monitor, Stethoscope } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />

        {/* Value Proposition Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Revolutionizing Healthcare Through <span className="text-primary">Data-Driven Technology</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Empower your practice with our remote patient monitoring (RPM) platform—designed to enhance clinical outcomes, improve operational efficiency, and generate consistent revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Remote Patient Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuous trend tracking for improved hypertension management to deliver actionable data.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-primary">Learn more &rarr;</Button>
                </CardFooter>
              </Card>

              {/* Feature 2 */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                   <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>Chronic Care Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Personalized monthly care plans tailored for comprehensive health management and oversight.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-primary">Learn more &rarr;</Button>
                </CardFooter>
              </Card>

               {/* Feature 3 */}
               <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                   <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <Monitor className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle>Clinical Software</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Drive better outcomes, eliminate blind spots, and ensure revenue with our integrated software.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-primary">Learn more &rarr;</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section - How it Works */}
        <section className="py-20 bg-muted/30">
             <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Maximize Outcomes with Effective Solutions</h2>
                        
                        <div className="flex gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">1</div>
                            <div>
                                <h3 className="font-semibold text-xl mb-2">Comprehensive / Holistic Care</h3>
                                <p className="text-muted-foreground">Prioritize patients who need immediate attention while ensuring that everyone gets the care and support they deserve.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">2</div>
                            <div>
                                <h3 className="font-semibold text-xl mb-2">Engaged Patient Journey</h3>
                                <p className="text-muted-foreground">Shift to a more dynamic care approach by using real-time data to track patient progress.</p>
                            </div>
                        </div>

                         <div className="flex gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">3</div>
                            <div>
                                <h3 className="font-semibold text-xl mb-2">Provider-Centric Technology</h3>
                                <p className="text-muted-foreground">Streamline workflows and offer easy implementation to ensure your practice runs efficiently.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        {/* Placeholder for an image or graphic */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl aspect-square flex items-center justify-center border">
                           <div className="text-center space-y-4">
                                <Stethoscope className="h-16 w-16 text-primary mx-auto opacity-20" />
                                <p className="text-sm text-muted-foreground italic">"Over 170 million Americans are living with one or more chronic conditions..."</p>
                                <p className="font-semibold text-primary">- CDC 2023</p>
                           </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
            <div className="container px-4 mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white">Ready to elevate your patient care?</h2>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-lg">
                    Join healthcare providers across the country who are using ProWell Care to improve outcomes and revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="font-semibold text-primary">
                        Book Strategy Session
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
                        Contact Us
                    </Button>
                </div>
            </div>
            
             {/* Background shapes */}
             <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
             <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
