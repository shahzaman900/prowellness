"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog" // Assuming basic label exists or fallback to span
import { X } from "lucide-react"

interface RequestDemoModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function RequestDemoModal({ isOpen, onOpenChange }: RequestDemoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-white border-none shadow-2xl">
        
        {/* Close Button - Custom Position & Style matching image */}
        <button 
            onClick={() => onOpenChange(false)}
            className="absolute top-0 left-0 bg-[#0A1A78] text-white p-2 z-[60] focus:outline-none hover:bg-[#0A1A78]/90"
        >
            <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col md:flex-row h-full min-h-[500px]">
          {/* Left Side - Empty/White space or Image placeholder based on design image, 
              but based on image provided it looks like just white space on left 
              and content is right aligned or centered. 
              Actually the image shows distinct layout. 
              Let's mimic the layout: Title opens on nice white space. */}
          
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center text-center">
            
            <DialogHeader className="mb-8 w-full">
              <DialogTitle className="text-3xl md:text-4xl text-[#1E2596] font-normal mb-4 text-center">
                Let's get connected!
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-center text-base">
                Drop us the below information and our representative will call you shortly.
              </DialogDescription>
            </DialogHeader>

            <form className="w-full max-w-lg space-y-6 text-left">
              
              {/* Name Fields */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Name *</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter first name" 
                    />
                    <span className="text-xs text-gray-500 mt-1 block">First</span>
                  </div>
                  <div>
                    <input 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter last name" 
                    />
                    <span className="text-xs text-gray-500 mt-1 block">Last</span>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                <input 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="XXX-XXX-XXXX" 
                />
              </div>

              {/* Clinic Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Clinic Name</label>
                <input 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Clinic Name" 
                />
              </div>

               {/* Email */}
               <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="abc@domain.com" 
                />
              </div>

              <div className="pt-4">
                <Button 
                    className="rounded-full bg-[#0A1A78] hover:bg-[#0A1A78]/90 text-white font-bold px-8 py-6 uppercase tracking-wider text-sm w-auto"
                >
                    Submit
                </Button>
              </div>

            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
