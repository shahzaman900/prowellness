import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Stethoscope } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-foreground">
                    Maximize the Benefits of Remote Patient Monitoring
                </h2>
                <p className="text-lg text-muted-foreground">
                    Achieve superior outcomes, delight patients, and grow revenue—all with ease.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">HEDIS Quality Outcomes</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Improves management of hypertension and diabetes, with potential A1c improvements up to 39%.
                    </CardContent>
                 </Card>
                 
                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <CardTitle className="text-xl">Patient Satisfaction</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        90–94% positive patient experience reported with a 93% recommendation rate.
                    </CardContent>
                 </Card>

                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <DollarSign className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">Recurring Revenue</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Medicare reimburses up to $167/patient/month, creating new revenue streams for your practice.
                    </CardContent>
                 </Card>

                 <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <Stethoscope className="h-6 w-6 text-green-600" />
                        </div>
                        <CardTitle className="text-xl">Minimal Staff Burden</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        A turnkey program with dedicated clinical staff handling monitoring and documentation implementation.
                    </CardContent>
                 </Card>
            </div>
        </div>
    </section>
  )
}
