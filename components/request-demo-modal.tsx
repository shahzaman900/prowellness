"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X, Loader2 } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { submitDemoRequest } from "@/app/actions/contact";

interface RequestDemoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const initialState = {
  success: false,
  message: "",
  errors: undefined,
};

export function RequestDemoModal({
  isOpen,
  onOpenChange,
}: RequestDemoModalProps) {
  const [state, action, isPending] = useActionState(submitDemoRequest, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      // Close modal after a short delay to show success message or immediately
      // For now, let's just close it and maybe rely on a global toast if we had one.
      // Or better, keep it open to show "Success" message then close? 
      // Plan said: "Call onOpenChange(false) to close the modal."
      // Let's reset the form and close it after 2 seconds roughly, or just close it.
      // If I close it immediately, the user won't see the success message if it is inside the modal.
      // I'll show the success message and wait 2 seconds.
      const timer = setTimeout(() => {
        onOpenChange(false);
        if (formRef.current) formRef.current.reset();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.success, onOpenChange]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[600px] p-0 overflow-hidden bg-white border-none shadow-2xl rounded-2xl'>
        {/* Clean Top-Right Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full z-[60] focus:outline-none transition-colors'
        >
          <X className='h-5 w-5' />
        </button>

        <div className='flex flex-col h-full'>
          {/* Header section with gradient border and logo */}
          <div className="bg-slate-50 p-8 text-center border-b border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#121576] to-[#F36076]"></div>
            <DialogHeader className='w-full relative z-10'>
              <DialogTitle className='text-3xl font-extrabold text-[#121576] tracking-tight mb-2 text-center font-sans'>
                Request a Consultation
              </DialogTitle>
              <DialogDescription className='text-slate-500 text-center text-base font-medium'>
                Provide your details below and our representative will contact you shortly to discuss your needs.
              </DialogDescription>
            </DialogHeader>
             <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-blue-50/50 to-pink-50/50 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className='flex-1 p-8 flex flex-col items-center bg-white'>
            <form ref={formRef} action={action} className='w-full max-w-md space-y-5 text-left'>
              {state.message && (
                <div className={`p-4 rounded-xl text-sm text-center font-medium ${state.success ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                  {state.message}
                </div>
              )}
              
              {/* Name Fields */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-1.5'>
                  <label className='text-sm font-semibold text-[#121576]'>
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    required
                    className='flex h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#121576]/20 focus-visible:border-[#121576] transition-all'
                    placeholder='John'
                  />
                  {state.errors?.firstName && <p className="text-red-500 text-xs font-medium">{state.errors.firstName[0]}</p>}
                </div>
                <div className='space-y-1.5'>
                  <label className='text-sm font-semibold text-[#121576]'>
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    required
                    className='flex h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#121576]/20 focus-visible:border-[#121576] transition-all'
                    placeholder='Doe'
                  />
                  {state.errors?.lastName && <p className="text-red-500 text-xs font-medium">{state.errors.lastName[0]}</p>}
                </div>
              </div>

              {/* Phone Number */}
              <div className='space-y-1.5'>
                <label className='text-sm font-semibold text-[#121576]'>
                  Phone Number *
                </label>
                <input
                  name="phone"
                  required
                  className='flex h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#121576]/20 focus-visible:border-[#121576] transition-all'
                  placeholder='(555) 000-0000'
                />
                {state.errors?.phone && <p className="text-red-500 text-xs font-medium">{state.errors.phone[0]}</p>}
              </div>

              {/* Email */}
              <div className='space-y-1.5'>
                <label className='text-sm font-semibold text-[#121576]'>
                  Email Address *
                </label>
                <input
                  name="email"
                  type='email'
                  required
                  className='flex h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#121576]/20 focus-visible:border-[#121576] transition-all'
                  placeholder='john@clinic.com'
                />
                {state.errors?.email && <p className="text-red-500 text-xs font-medium">{state.errors.email[0]}</p>}
              </div>

              {/* Clinic Name */}
              <div className='space-y-1.5 pb-2'>
                <label className='text-sm font-semibold text-[#121576]'>
                  Clinic Name <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  name="clinicName"
                  className='flex h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#121576]/20 focus-visible:border-[#121576] transition-all'
                  placeholder='General Practice LLC'
                />
              </div>

              <div className='pt-2'>
                <Button disabled={isPending} className='w-full rounded-xl bg-[#F36076] hover:bg-[#F36076]/90 text-white font-bold h-12 uppercase tracking-wide text-sm shadow-md hover:shadow-lg transition-all'>
                  {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting Request...</> : "Submit Request"}
                </Button>
                <p className="text-center text-xs text-slate-500 mt-4">By submitting, you agree to our privacy policy regarding data usage.</p>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
