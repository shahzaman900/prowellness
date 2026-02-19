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
      <DialogContent className='sm:max-w-[800px] p-0 overflow-hidden bg-white border-none shadow-2xl'>
        {/* Close Button - Custom Position & Style matching image */}
        <button
          onClick={() => onOpenChange(false)}
          className='absolute top-0 left-0 bg-[#0A1A78] text-white p-2 z-[60] focus:outline-none hover:bg-[#0A1A78]/90'
        >
          <X className='h-5 w-5' />
        </button>

        <div className='flex flex-col md:flex-row h-full min-h-[500px]'>
          {/* Left Side - Empty/White space or Image placeholder based on design image, 
              but based on image provided it looks like just white space on left 
              and content is right aligned or centered. 
              Actually the image shows distinct layout. 
              Let's mimic the layout: Title opens on nice white space. */}

          <div className='flex-1 p-8 md:p-12 flex flex-col justify-center items-center text-center'>
            <DialogHeader className='mb-8 w-full'>
              <DialogTitle className='text-3xl md:text-4xl text-[#1E2596] font-normal mb-4 text-center'>
                Let&apos;s get connected!
              </DialogTitle>
              <DialogDescription className='text-gray-600 text-center text-base'>
                Drop us the below information and our representative will call
                you shortly.
              </DialogDescription>
            </DialogHeader>

            <form ref={formRef} action={action} className='w-full max-w-lg space-y-6 text-left'>
              {state.message && (
                <div className={`p-4 rounded-md text-sm text-center ${state.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                  {state.message}
                </div>
              )}
              {/* Name Fields */}
              <div className='space-y-2'>
                <label className='text-sm font-medium text-gray-700'>
                  Name *
                </label>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <input
                      name="firstName"
                      required
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Enter first name'
                    />
                    <span className='text-xs text-gray-500 mt-1 block'>
                      First
                    </span>
                    {state.errors?.firstName && <p className="text-red-500 text-xs">{state.errors.firstName[0]}</p>}
                  </div>
                  <div>
                    <input
                      name="lastName"
                      required
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Enter last name'
                    />
                    <span className='text-xs text-gray-500 mt-1 block'>
                      Last
                    </span>
                    {state.errors?.lastName && <p className="text-red-500 text-xs">{state.errors.lastName[0]}</p>}
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className='space-y-2'>
                <label className='text-sm font-medium text-gray-700'>
                  Phone Number *
                </label>
                <input
                  name="phone"
                  required
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  placeholder='XXX-XXX-XXXX'
                />
                {state.errors?.phone && <p className="text-red-500 text-xs">{state.errors.phone[0]}</p>}
              </div>

              {/* Clinic Name */}
              <div className='space-y-2'>
                <label className='text-sm font-medium text-gray-700'>
                  Clinic Name
                </label>
                <input
                  name="clinicName"
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  placeholder='Clinic Name'
                />
              </div>

              {/* Email */}
              <div className='space-y-2'>
                <label className='text-sm font-medium text-gray-700'>
                  Email
                </label>
                <input
                  name="email"
                  type='email'
                  required
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  placeholder='abc@domain.com'
                />
                {state.errors?.email && <p className="text-red-500 text-xs">{state.errors.email[0]}</p>}
              </div>

              <div className='pt-4'>
                <Button disabled={isPending} className='rounded-full bg-[#0A1A78] hover:bg-[#0A1A78]/90 text-white font-bold px-8 py-6 uppercase tracking-wider text-sm w-auto'>
                  {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
