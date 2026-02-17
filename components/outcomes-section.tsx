import { cn } from "@/lib/utils"

export function OutcomesSection() {
  const outcomes = [
    {
      value: "18%",
      label: "Reduction in hospital readmissions through consistent RPM usage",
      source: "Industry Standard",
      color: "text-blue-600 bg-blue-50",
    },
    {
      value: "3x",
      label: "Improvement in medication adherence with CCM-enrolled patients",
      source: "AJMC, 2020",
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      value: "17%",
      label: "of hypertensive patients controlled BP within 3 months of RPM use",
      source: "JAMA Internal Medicine, 2019",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      value: "6%",
      label: "More preventive care services received by CCM patients",
      source: "CMS CCM Evaluation Report, 2020",
      color: "text-purple-600 bg-purple-50",
    },
    {
      value: "7%",
      label: "Improvement in A1C levels in diabetic patients using RPM",
      source: "NIH/National Library of Medicine, 2022",
      color: "text-rose-600 bg-rose-50",
    },
    {
      value: "90%",
      label: "patient satisfaction rate with RPM programs",
      source: "KLAS RPM Survey, 2021",
      color: "text-amber-600 bg-amber-50",
    },
    {
      value: "$120–$210",
      label: "More revenue per patient per month using RPM + CCM",
      source: "CMS Fee Schedule & McKinsey Health, 2023",
      color: "text-cyan-600 bg-cyan-50",
    },
    {
      value: "$312/mo",
      label: "Healthcare savings per patient with RPM",
      source: "Health Affairs, 2021",
      color: "text-teal-600 bg-teal-50",
    },
    {
      value: "11%",
      label: "Fewer ER visits from RPM adoption",
      source: "UPMC, 2020",
      color: "text-orange-600 bg-orange-50",
    },
    {
      value: "4%",
      label: "Reduction in inpatient spending",
      source: "CMS CCM Report, 2020",
      color: "text-fuchsia-600 bg-fuchsia-50",
    },
     {
      value: "2%",
      label: "Reduction in outpatient costs via CCM",
      source: "CMS CCM Report, 2020",
      color: "text-sky-600 bg-sky-50",
    },
    {
      value: "$100K+",
      label: "Annual incremental revenue for practices with 100+ CCM patients",
      source: "MGMA Report, 2022",
      color: "text-lime-600 bg-lime-50",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 font-sans">
            Proven Outcomes
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world results demonstrating the clinical and financial impact of remote care programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl border bg-card hover:shadow-md transition-all duration-300"
            >
              <div className={cn("text-4xl lg:text-5xl font-extrabold mb-4 font-sans", outcome.color.split(" ")[0])}>
                {outcome.value}
              </div>
              <p className="text-foreground font-medium mb-3 leading-snug">
                {outcome.label}
              </p>
              <p className="text-xs text-muted-foreground mt-auto uppercase tracking-wider font-semibold">
                {outcome.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
