import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Stethoscope } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl mb-6 text-foreground">
                    Maximize the Benefits of Remote Patient Monitoring
                </h2>
                <p className="text-lg md:text-xl font-medium text-primary mb-6">
                    Achieve Superior Outcomes, Delight Patients, and Grow Revenue- All with Ease
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    ProWellCare’s RPM platform improves patient outcomes and revenue by offering complete visibility into patient health and seamless clinical and billing integration.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                 <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <TrendingUp className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">1. HEDIS Quality Outcomes</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground leading-relaxed">
                        Remote Patient Monitoring (RPM) directly improves HEDIS quality measures by enabling proactive management of chronic conditions like hypertension and diabetes, with clinics reporting up to a 39% improvement in A1c control and 11% in blood pressure control within six months; higher HEDIS scores can strengthen value-based care performance, expand payer contract eligibility, and boost Medicare Advantage bonus payments by 5–20%.
                    </CardContent>
                 </Card>
                 
                 <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                        <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-7 w-7 text-accent-foreground" />
                        </div>
                        <CardTitle className="text-2xl">2. Patient Satisfaction</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground leading-relaxed">
                        RPM consistently delivers high patient satisfaction, with studies showing 90–94% of patients reporting positive experiences and 93% saying they would recommend RPM to others. Patients and their family appreciate the convenience, near real-time support, and the ability to manage their health from home—leading to better engagement, adherence, and outcomes.
                    </CardContent>
                 </Card>

                 <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <DollarSign className="h-7 w-7 text-blue-600" />
                        </div>
                        <CardTitle className="text-2xl">3. Recurring Revenue</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground leading-relaxed">
                        RPM creates a sustainable, recurring revenue stream for your practice. Medicare reimburses up to $167 per patient per month for RPM services, and enrolling just 100 patients can generate over $100,000 in annual revenue. When combined with chronic care management, this can increase to nearly $210,000 annually, all while improving patient outcomes.
                    </CardContent>
                 </Card>

                 <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <Stethoscope className="h-7 w-7 text-green-600" />
                        </div>
                        <CardTitle className="text-2xl">4. Minimal Staff Burden</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground leading-relaxed">
                        Our turnkey RPM program provides dedicated clinical staff who handle triaging, monitoring oversight, and documentation for your patients. We manage the entire process—including device setup, patient education, and ongoing support—so your team can focus on in-person care. This means you benefit from comprehensive RPM services with minimal staff burden and no added payroll expenses to your organization.
                    </CardContent>
                 </Card>
            </div>
        </div>
    </section>
  )
}
