import { cn } from "@/lib/utils"

interface PageHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  align?: "center" | "left"
}

export function PageHero({
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-secondary/30 py-16 md:py-24",
        align === "center" ? "text-center" : "text-left",
        className
      )}
      {...props}
    >
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-sans text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
