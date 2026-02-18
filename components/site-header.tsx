import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Activity } from "lucide-react"

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
import { cn } from "@/lib/utils"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container flex h-20 items-center mx-auto px-4">
        <Link href="/" className="mr-8 flex items-center space-x-2">
           <Image 
              src="/images/logo.png" 
              alt="ProWell Care Logo" 
              width={200} 
              height={45} 
              className="h-12 w-auto object-contain"
              priority
           />
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-8 text-sm font-bold uppercase tracking-wider hidden md:flex">
            <Link
              href="/"
              className="transition-colors hover:text-primary text-foreground"
            >
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-foreground hover:text-primary focus:bg-transparent h-auto py-0 px-0 text-sm font-bold uppercase tracking-wider">
                    How We Help
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 bg-white p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-secondary to-accent p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white capitalize">
                              ProWell Care
                            </div>
                            <p className="text-sm leading-tight text-white/90 normal-case font-normal">
                              Comprehensive remote care solutions for modern practices.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/rpm" title="Remote Patient Monitoring">
                        Continuous trend tracking for improved hypertension management.
                      </ListItem>
                      <ListItem href="/ccm" title="Chronic Care Management">
                        Personalized monthly care plans for comprehensive health oversight.
                      </ListItem>
                      <ListItem href="/software" title="Clinical Monitoring Software">
                        Integrated software to drive outcomes and ensuring revenue.
                      </ListItem>
                      <ListItem href="/devices" title="Devices">
                        FDA-approved cellular devices for easy patient use.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-foreground hover:text-primary focus:bg-transparent h-auto py-0 px-0 text-sm font-bold uppercase tracking-wider">
                    Who We Serve
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-white">
                      <ListItem href="/programs/types" title="Care Programs by Types">
                        Explore our comprehensive range of care models designed for diverse patient needs.
                      </ListItem>
                      <ListItem href="/programs/condition" title="Care Programs by Condition">
                        Specialized management plans tailored for specific chronic conditions.
                      </ListItem>
                      <ListItem href="/programs/speciality" title="Care Programs by Speciality">
                        Targeted solutions optimized for your specific medical specialty.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/contact"
              className="transition-colors hover:text-primary text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button className="hidden md:flex rounded-sm px-8 font-bold tracking-widest uppercase">
                Request Demo
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
