"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"
import { Stethoscope, User } from "lucide-react"
import Image from "next/image"

export function RoleSelectionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setHasMounted(true)
    const storedRole = localStorage.getItem("prowell-user-role")
    
    // If no role selected, show modal
    if (!storedRole) {
      setIsOpen(true)
    }
  }, [])

  const handleProfessional = () => {
    localStorage.setItem("prowell-user-role", "professional")
    setIsOpen(false)
    if (pathname.startsWith("/patients")) {
        router.push("/")
    }
  }

  const handlePatient = () => {
    localStorage.setItem("prowell-user-role", "patient")
    setIsOpen(false)
    router.push("/patients")
  }

  if (!hasMounted) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="sm:max-w-2xl p-0 overflow-hidden gap-0 border-none shadow-2xl [&>button]:hidden" 
        onInteractOutside={(e) => e.preventDefault()} 
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="bg-[#121576] p-8 text-center text-white">
            <div className="flex justify-center mb-6">
                <div className="bg-white p-2 rounded-lg inline-block">
                 {/* Using a placeholder if logo isn't handy, but we know logo path is /images/logo.png. 
                     Since background is dark, we might need a white logo or use the existing one in a white box. */}
                 <Image src="/images/logo.png" alt="ProactiveWellness Care" width={150} height={40} className="h-10 w-auto" />
                </div>
            </div>
            <DialogTitle className="text-3xl md:text-4xl font-bold font-sans mb-2 !text-white">
                Welcome to ProactiveWellness Care
            </DialogTitle>
            <DialogDescription className="text-blue-100 text-lg">
                Please select your role to continue to the appropriate portal.
            </DialogDescription>
        </div>
        
        <div className="p-10 bg-white grid gap-6 md:grid-cols-2">
          <Button 
            onClick={handleProfessional}
            className="h-auto flex-col py-8 px-4 bg-slate-50 hover:bg-[#121576] border-2 border-slate-100 hover:border-[#121576] text-[#121576] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl rounded-xl"
          >
            <div className="h-16 w-16 rounded-full bg-blue-100 group-hover:bg-white/20 text-[#121576] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <Stethoscope className="h-8 w-8" />
            </div>
            <span className="text-xl font-bold">Healthcare Professional</span>
            <span className="text-sm opacity-80 mt-2 font-normal">I am a provider or practice staff</span>
          </Button>

          <Button 
            onClick={handlePatient}
            className="h-auto flex-col py-8 px-4 bg-slate-50 hover:bg-[#F36076] border-2 border-slate-100 hover:border-[#F36076] text-[#121576] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl rounded-xl"
          >
            <div className="h-16 w-16 rounded-full bg-pink-100 group-hover:bg-white/20 text-[#F36076] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <User className="h-8 w-8" />
            </div>
            <span className="text-xl font-bold">Patient</span>
            <span className="text-sm opacity-80 mt-2 font-normal">I am a patient receiving care</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
