"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PatientsSiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 mx-auto flex h-20 items-center justify-between">
        <Link href="/patients" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="ProactiveWellness Care Logo"
            width={180}
            height={50}
            className="w-auto h-10 md:h-12"
            priority
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="https://web-app.prowellcare.com/test/login"
            className="text-sm font-medium hover:text-[#F36076] transition-colors"
          >
            <Button variant="outline" className="border-[#121576] text-[#121576] hover:bg-[#121576] hover:text-white">
                Patient Portal
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
