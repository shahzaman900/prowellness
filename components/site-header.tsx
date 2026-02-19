"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Activity, Heart, Laptop, Smartphone, Users, FileText, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { RequestDemoModal } from "@/components/request-demo-modal"
import React from "react"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            {icon && (
              <div className="mt-0.5 hidden md:block text-primary/80 group-hover:text-primary transition-colors">
                {icon}
              </div>
            )}
            <div>
              <div className="text-sm font-bold leading-none text-primary uppercase mb-1.5 tracking-wide">{title}</div>
              <p className="line-clamp-2 text-[10px] font-semibold leading-snug text-gray-500 uppercase tracking-wider group-hover:text-primary/80">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function SiteHeader() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="container flex h-24 items-center mx-auto px-4 relative z-50 bg-white">
        <Link href="/" className="mr-8 flex items-center space-x-2">
           <Image 
              src="/prologo.png" 
              alt="ProactiveWellness Care Logo" 
              width={220} 
              height={50} 
              className="h-14 w-auto object-contain"
              priority
           />
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-8 text-sm font-bold uppercase tracking-wider hidden md:flex">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-secondary",
                pathname === "/" ? "text-secondary" : "text-primary"
              )}
            >
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-secondary focus:text-secondary data-[state=open]:text-secondary focus:bg-transparent h-auto py-0 px-0 text-sm font-bold uppercase tracking-wider",
                    pathname?.startsWith("/rpm") || pathname?.startsWith("/ccm") ? "text-secondary" : "text-primary"
                  )}>
                    How We Help
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[220px_1fr] bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden">
                      <li className="row-span-4">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-[#121576] to-[#0A0D5C] p-6 no-underline outline-none focus:shadow-md group relative overflow-hidden"
                            href="/"
                          >
                            <div className="absolute inset-0 bg-[url('/images/hero-bg-pattern.svg')] opacity-10"></div>
                            <div className="relative z-10">
                              <Activity className="h-8 w-8 text-white mb-4" />
                              <div className="mb-2 text-xl font-bold text-white capitalize">
                                ProactiveWellness Care
                              </div>
                              <p className="text-sm leading-relaxed text-blue-100 font-normal normal-case mb-4">
                                Comprehensive remote care solutions tailored for modern practices to improve patient outcomes.
                              </p>
                              <div className="flex items-center text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                Learn More <ChevronRight className="h-3 w-3 ml-1" />
                              </div>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/rpm" title="Remote Patient Monitoring" icon={<Activity className="h-5 w-5" />}>
                        Continuous trend tracking for improved hypertension & chronic condition management.
                      </ListItem>
                      <ListItem href="/ccm" title="Chronic Care Management" icon={<Heart className="h-5 w-5" />}>
                        Personalized monthly care plans for comprehensive health oversight.
                      </ListItem>
                      <ListItem href="/software" title="Clinical Monitoring Software" icon={<Laptop className="h-5 w-5" />}>
                        Integrated software to drive outcomes and ensuring maximizing revenue.
                      </ListItem>
                      <ListItem href="/devices" title="Devices" icon={<Smartphone className="h-5 w-5" />}>
                        FDA-approved cellular devices for easy patient use and reliable data.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-secondary focus:text-secondary data-[state=open]:text-secondary focus:bg-transparent h-auto py-0 px-0 text-sm font-bold uppercase tracking-wider",
                    pathname?.startsWith("/programs") ? "text-secondary" : "text-primary"
                  )}>
                    Who We Serve
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[450px] bg-white border border-gray-100 shadow-xl rounded-lg">
                      <ListItem href="/programs/types" title="Care Programs by Types" icon={<FileText className="h-5 w-5" />}>
                        Explore our comprehensive range of care models designed for diverse patient needs.
                      </ListItem>
                      <ListItem href="/programs/conditions" title="Care Programs by Condition" icon={<Heart className="h-5 w-5" />}>
                        Specialized management plans tailored for specific chronic conditions like Diabetes & COPD.
                      </ListItem>
                      <ListItem href="/programs/speciality" title="Care Programs by Speciality" icon={<Users className="h-5 w-5" />}>
                        Targeted solutions optimized for your specific medical specialty and practice workflow.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link
              href="https://web-app.prowellcare.com/test/login"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-secondary text-primary"
            >
              PORTAL
            </Link>

            <Link
              href="/contact"
              className={cn(
                "transition-colors hover:text-secondary",
                pathname === "/contact" ? "text-secondary" : "text-primary"
              )}
            >
              Contact
            </Link>
            <Link
              href="/news"
              className={cn(
                "transition-colors hover:text-secondary",
                pathname === "/news" ? "text-secondary" : "text-primary"
              )}
            >
              News & Updates
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button 
                onClick={() => setIsDemoModalOpen(true)}
                className="hidden md:flex rounded-sm px-8 py-6 font-bold tracking-widest uppercase bg-secondary hover:bg-secondary/90 text-white shadow-md hover:shadow-lg transition-all"
            >
                Request Demo
            </Button>
            <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden text-primary hover:text-secondary hover:bg-transparent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? (
                    <X className="h-7 w-7" />
                ) : (
                    <Menu className="h-7 w-7" />
                )}
                <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 overflow-y-auto animate-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col space-y-6 pb-20">
                <Link
                    href="/"
                    className={cn(
                        "text-lg font-bold uppercase tracking-wider border-b border-gray-100 pb-4",
                        pathname === "/" ? "text-secondary" : "text-primary"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Home
                </Link>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="how-we-help" className="border-b border-gray-100">
                        <AccordionTrigger className={cn(
                            "text-lg font-bold uppercase tracking-wider hover:no-underline py-4",
                            pathname?.startsWith("/rpm") || pathname?.startsWith("/ccm") ? "text-secondary" : "text-primary"
                        )}>
                            How We Help
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                            <div className="flex flex-col space-y-4 pl-4 border-l-2 border-gray-100 ml-2">
                                <Link 
                                    href="/rpm" 
                                    className="flex items-center gap-3 text-sm font-semibold text-gray-600 hover:text-secondary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Activity className="h-4 w-4" /> Remote Patient Monitoring
                                </Link>
                                <Link 
                                    href="/ccm" 
                                    className="flex items-center gap-3 text-sm font-semibold text-gray-600 hover:text-secondary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Heart className="h-4 w-4" /> Chronic Care Management
                                </Link>
                                <Link 
                                    href="/software" 
                                    className="flex items-center gap-3 text-sm font-semibold text-gray-600 hover:text-secondary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Laptop className="h-4 w-4" /> Clinical Monitoring Software
                                </Link>
                                <Link 
                                    href="/devices" 
                                    className="flex items-center gap-3 text-sm font-semibold text-gray-600 hover:text-secondary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Smartphone className="h-4 w-4" /> Devices
                                </Link>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="who-we-serve" className="border-b border-gray-100">
                        <AccordionTrigger className={cn(
                            "text-lg font-bold uppercase tracking-wider hover:no-underline py-4",
                            pathname?.startsWith("/programs") ? "text-secondary" : "text-primary"
                        )}>
                            Who We Serve
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                            <div className="flex flex-col space-y-4 pl-4 border-l-2 border-gray-100 ml-2">
                                <Link 
                                    href="/programs/types" 
                                    className="flex items-center gap-3 text-sm font-semibold text-gray-600 hover:text-secondary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <FileText className="h-4 w-4" /> Care Programs by Types
                                </Link>
                                <Link 
                                    href="/programs/conditions" 
                                    className="flex items-center gap-3 text-sm font-semibold text-gray-600 hover:text-secondary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Heart className="h-4 w-4" /> Care Programs by Condition
                                </Link>
                                <Link 
                                    href="/programs/speciality" 
                                    className="flex items-center gap-3 text-sm font-semibold text-gray-600 hover:text-secondary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Users className="h-4 w-4" /> Care Programs by Speciality
                                </Link>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Link
                    href="https://web-app.prowellcare.com/test/login"
                    target="_blank"
                    className="text-lg font-bold uppercase tracking-wider text-primary border-b border-gray-100 pb-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    PORTAL
                </Link>

                <Link
                    href="/contact"
                    className={cn(
                        "text-lg font-bold uppercase tracking-wider border-b border-gray-100 pb-4",
                        pathname === "/contact" ? "text-secondary" : "text-primary"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Contact
                </Link>
                
                <Link
                    href="/news"
                    className={cn(
                        "text-lg font-bold uppercase tracking-wider border-b border-gray-100 pb-4",
                        pathname === "/news" ? "text-secondary" : "text-primary"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    News & Updates
                </Link>

                <Button 
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsDemoModalOpen(true);
                    }}
                    className="w-full rounded-sm px-8 py-6 font-bold tracking-widest uppercase bg-secondary hover:bg-secondary/90 text-white shadow-md hover:shadow-lg transition-all mt-4"
                >
                    Request Demo
                </Button>
            </nav>
        </div>
      )}

      <RequestDemoModal isOpen={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </header>
  )
}
