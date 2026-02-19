import { Activity, Droplet, Scale, Wind, Heart } from "lucide-react"

export function ConditionsListSection() {
  const conditions = [
    {
      title: "Hypertension, High Blood Pressure & CHF",
      description: "Keep cardiovascular patients stable by tracking trends in real time. Our platform gives you a complete picture of blood pressure history and flags issues early-so you can intervene before complications arise.",
      icon: Activity
    },
    {
      title: "Diabetes Care",
      description: "Glucometers integrated with our system provide ongoing visibility into blood sugar patterns. This data informs medication changes, diet plans, and proactive coaching-leading to better A1C control and fewer complications.",
      icon: Droplet
    },
    {
      title: "Obesity & Weight Control",
      description: "For patients working toward healthier weights, connected scales automatically record and share readings. This encourages accountability, uncovers trends, and supports long-term goals without added clinic visits.",
      icon: Scale
    },
    {
      title: "Chronic Lung Conditions (COPD, Asthma)",
      description: "Respiratory patients need close monitoring to avoid flare-ups. Pulse oximeters offer daily oxygen saturation readings, enabling early intervention and better long-term management of pulmonary diseases.",
      icon: Wind
    },
    {
      title: "Kidney & Heart-Related Diseases",
      description: "From CKD to general cardiovascular conditions, having access to continuous data like glucose, weight, and BP allows providers to slow disease progression and reduce hospitalizations.",
      icon: Heart
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl font-sans mb-12">
          Chronic Conditions We Help You Tackle
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {conditions.map((condition, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full"
            >
              <div className="h-12 w-12 rounded-xl bg-[#F36076]/10 flex items-center justify-center mb-6">
                <condition.icon className="h-6 w-6 text-[#F36076]" />
              </div>
              <h3 className="text-xl font-bold text-[#121576] font-sans mb-4">
                {condition.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {condition.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
