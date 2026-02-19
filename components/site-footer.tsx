"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="bg-[#0b0d36] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block p-2 bg-white rounded">
                <div className="relative h-12 w-48 ">
                    <Image 
                        src="/prologo.png" 
                        alt="ProactiveWellness Logo" 
                        fill
                        className="object-contain object-left"
                    />
                </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Empowering healthcare providers with data-driven, patient-centric technology. We combine expertise with a flexible model to help you focus on exceptional patient care.
            </p>
            <div className="flex gap-4">
               <Link 
                  href="https://www.linkedin.com/company/proactivewellness" 
                  target="_blank"
                  className="bg-white/10 hover:bg-[#0077b5] p-2 rounded-full transition-colors duration-300"
                  aria-label="LinkedIn"
              >
                  <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                  href="https://www.facebook.com/proactivewellnesscare" 
                  target="_blank"
                  className="bg-white/10 hover:bg-[#1877F2] p-2 rounded-full transition-colors duration-300"
                  aria-label="Facebook"
              >
                  <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=" font-semibold !text-white mb-6 text-lg">Solutions</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/rpm" className="hover:text-[#F36076] transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />Remote Patient Monitoring</Link></li>
              <li><Link href="/ccm" className="hover:text-[#F36076] transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />Chronic Care Management</Link></li>
              <li><Link href="/software" className="hover:text-[#F36076] transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />Clinical Software</Link></li>
               <li><Link href="/programs/types" className="hover:text-[#F36076] transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />Care Programs</Link></li>
               <li><Link href="/news" className="hover:text-[#F36076] transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />News & Updates</Link></li>
            </ul>
          </div>

          {/* Contact Info */}  
          <div>
            <h3 className="!text-white font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
               <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#F36076] shrink-0" />
                <span>(972) 327 3687</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#F36076] shrink-0" />
                <a href="mailto:info@prowellcare.com" className="hover:text-white transition-colors">info@prowellcare.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#F36076] shrink-0" />
                <address className="not-italic">
                  235 Park Ave.<br />
                  Swarthmore, PA 19081
                </address>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="!text-white font-semibold mb-6 text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for the latest healthcare insights.
            </p>
            <div className="flex gap-2">
                <Input 
                    placeholder="Enter your email" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#F36076]" 
                />
                <Button className="bg-[#F36076] hover:bg-[#F36076]/90 text-white">
                    Join
                </Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ProactiveWellness. Powered by Cognitive Healthcare International.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
