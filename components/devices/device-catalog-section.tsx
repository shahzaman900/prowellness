"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function DeviceCatalogSection() {
  const devices = [
    {
      title: "Blood Pressure Monitor",
      image: "/images/device-bp-monitor.png",
      alt: "Digital Blood Pressure Monitor"
    },
    {
      title: "Blood Glucose Monitor",
      image: "/images/device-glucose-monitor.png",
      alt: "Digital Blood Glucose Monitor"
    },
    {
      title: "Continuous Glucose Monitor",
      image: "/images/device-cgm.png",
      alt: "Continuous Glucose Monitor Sensor and Receiver"
    },
    {
      title: "Weight Scale",
      image: "/images/device-scale.png",
      alt: "Digital Weight Scale"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-[#121576] sm:text-4xl md:text-5xl font-sans mb-6">
            Easy, Ready-to-Use Devices <br className="hidden md:block" />
            for Seamless Remote Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Our remote patient monitoring program features a suite of user-friendly, out-of-the-box devices designed for immediate activation-no technical complexity, no capital investment, and no financial risk to your practice. We provide:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {devices.map((device, index) => (
            <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between overflow-hidden group">
              <CardContent className="p-8 flex items-center justify-center flex-1 bg-white relative">
                 <div className="relative w-full aspect-square flex items-center justify-center">
                    <Image
                      src={device.image}
                      alt={device.alt}
                      width={300}
                      height={300}
                      className="object-contain max-h-[200px] w-auto group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
              </CardContent>
              <CardHeader className="bg-transparent pt-0 pb-8 text-center">
                <h3 className="text-xl font-bold text-[#121576] font-sans">
                  {device.title}
                </h3>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
