import { TrendingUp, Users, Activity, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export function BenefitsSection() {
  const benefits = [
    {
      title: "New Revenue Streams",
      description: "Unlock additional revenue through Medicare and commercial reimbursements for RPM and CCM services.",
      icon: TrendingUp,
      color: "bg-green-100 text-green-700", // Sesame-ish mint/green
    },
    {
      title: "Improved Outcomes",
      description: "Consistent health tracking leads to reduced hospital readmissions and better chronic disease management.",
      icon: Activity,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Scale Care Delivery",
      description: "Expand your practice's capacity to care for patients without overwhelming your in-office staff.",
      icon: Users,
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Modern Engagement",
      description: "Stay competitive with technology-driven solutions that align with modern patient expectations.",
      icon: Clock, // Or Smartphone/Zap
      color: "bg-orange-100 text-orange-700",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 font-sans">
            What benefits can your practice gain <br className="hidden md:block" />
            <span className="text-primary font-serif italic">from a remote care program?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Implementing a remote care program, such as Remote Patient Monitoring (RPM) and Chronic Care Management (CCM), offers your medical practice numerous advantages. These include improved patient outcomes through consistent health tracking, increased patient engagement, reduced hospital readmissions, and enhanced chronic disease management.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Additionally, remote care programs provide new revenue streams through Medicare and commercial reimbursements, while helping your practice scale care delivery without overwhelming your in-office staff. By adopting technology-driven healthcare solutions, your practice stays competitive and aligned with modern patient expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-card rounded-2xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={cn("inline-flex p-3 rounded-xl mb-6", benefit.color)}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements (Sesame style often has soft blobs) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
