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
        className="sm:max-w-3xl p-0 overflow-hidden gap-0 border-none shadow-2xl rounded-2xl [&>button]:hidden bg-slate-50" 
        onInteractOutside={(e) => e.preventDefault()} 
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="bg-white p-8 md:p-12 text-center border-b border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#121576] to-[#F36076]"></div>
            <div className="flex justify-center mb-8 relative z-10">
                 <Image src="/prologo.png" alt="Charms Logo" width={220} height={60} className="h-14 w-auto object-contain" priority />
            </div>
            <DialogTitle className="text-3xl md:text-4xl font-extrabold font-sans mb-3 text-[#121576] tracking-tight relative z-10">
                Welcome to Charms
            </DialogTitle>
            <DialogDescription className="text-slate-500 text-lg max-w-lg mx-auto relative z-10 font-medium">
                Please select your role below to be navigated to the appropriate experience.
            </DialogDescription>
            <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-blue-50/50 to-pink-50/50 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="p-8 md:p-12 grid gap-6 md:grid-cols-2 bg-slate-50/50">
          <Button 
            onClick={handleProfessional}
            className="h-auto flex-col p-8 bg-white hover:bg-[#121576] border border-slate-200 hover:border-[#121576] text-[#121576] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-20 w-20 rounded-2xl bg-[#121576]/5 group-hover:bg-white/20 text-[#121576] group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-inner rotate-3 group-hover:rotate-0">
                <Stethoscope className="h-10 w-10" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Healthcare</span>
            <span className="text-2xl font-bold tracking-tight mb-3">Professional</span>
            <span className="text-sm opacity-80 font-medium text-slate-500 group-hover:text-blue-100 transition-colors">I am a provider or practice staff</span>
          </Button>

          <Button 
            onClick={handlePatient}
            className="h-auto flex-col p-8 bg-white hover:bg-[#F36076] border border-slate-200 hover:border-[#F36076] text-[#121576] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-20 w-20 rounded-2xl bg-[#F36076]/5 group-hover:bg-white/20 text-[#F36076] group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-inner -rotate-3 group-hover:rotate-0">
                <User className="h-10 w-10" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Patient</span>
            <span className="text-2xl font-bold tracking-tight mb-3 opacity-0 group-hover:opacity-0">&nbsp;</span>
            <span className="text-sm opacity-80 font-medium text-slate-500 group-hover:text-pink-100 transition-colors">I am a patient receiving care</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
