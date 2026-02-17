import Link from "next/link"
import { Menu, Activity } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4">
        <div className="mr-8 flex items-center space-x-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block text-xl">
            ProWell Care
          </span>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium hidden md:flex">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              href="/rpm"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              RPM
            </Link>
            <Link
              href="/ccm"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              CCM
            </Link>
            <Link
              href="/software"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Software
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button className="hidden md:flex">
                Book Strategy Session
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
