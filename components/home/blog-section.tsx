"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogSection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const blogs = [
    {
      title: "How to Simplify RPM for Your Medical Practice: Webinar Recap",
      excerpt: "Introduction In today’s rapidly evolving healthcare landscape, Remote Patient Monitoring (RPM) has become an essential tool for medical practices aiming to enhance patient care while streamlining their workflow. However, the adoption of RPM can come with its own set of challenges. ProactiveWellness Care, in a recent webinar hosted by Rob Sanchez, addressed these concerns and..."
    },
    {
      title: "The Link Between PTSD and Hypertension: How ProactiveWellness Care Can Help",
      excerpt: "National PTSD Awareness Day serves as a powerful reminder of the millions of Americans living with post-traumatic stress disorder (PTSD). PTSD can develop after experiencing or witnessing a traumatic event, and its effects can be long-lasting and debilitating. But did you know there’s a surprising connection between PTSD and hypertension (high blood pressure)? In this..."
    },
    {
      title: "Prioritizing Patient Privacy & Cybersecurity in Remote Patient Monitoring",
      excerpt: "Remote Patient Monitoring (RPM) platforms collect and transmit sensitive patient data, including vital signs, medical history, and treatment information. A data breach in this system could have devastating consequences, exposing patients to identity theft, fraudulent medical claims, and even emotional distress. At ProactiveWellness, we understand the importance of continuous health monitoring while safeguarding your patients’..."
    },
    {
      title: "Maximizing Reimbursements with Chronic Care Management",
      excerpt: "Chronic Care Management (CCM) services are a vital component of value-based care, offering a significant revenue opportunity for practices while improving patient health. Understanding the complex billing codes and documentation requirements is key to maximizing these reimbursements. Learn how our dedicated team and software can help streamline your billing process."
    }
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft = direction === "left" 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container px-4 mx-auto relative group">
        
        <div className="flex items-center justify-between mb-12">
           <h2 className="text-3xl font-bold tracking-tight text-[#121576] font-sans">
            Latest Insights
          </h2>
           <div className="hidden md:flex gap-2">
            <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll("left")}
                className="rounded-full border-[#F36076] text-[#F36076] hover:bg-[#F36076] hover:text-white transition-colors"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll("right")}
                className="rounded-full border-[#F36076] text-[#F36076] hover:bg-[#F36076] hover:text-white transition-colors"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
           </div>
        </div>

        {/* Scroll Container */}
        <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="min-w-[300px] md:min-w-[400px] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-t-4 border-gray-100 border-t-[#F36076] p-8 snap-start flex flex-col"
            >
              <h3 className="text-xl font-bold text-[#121576] mb-4 leading-tight">
                {blog.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {blog.excerpt}
              </p>
              <button className="text-[#F36076] font-semibold text-sm hover:underline self-start">
                Read More &rarr;
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Indicators/Arrows if needed, though native swipe is usually preferred on mobile */}
         <div className="flex md:hidden justify-center gap-4 mt-4">
            <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll("left")}
                className="rounded-full border-[#F36076] text-[#F36076]"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll("right")}
                className="rounded-full border-[#F36076] text-[#F36076]"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
         </div>

      </div>
    </section>
  )
}
