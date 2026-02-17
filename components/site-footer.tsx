import Link from "next/link"
import { Activity, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5 text-sm">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">ProWell Care</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Empowering healthcare providers with data-driven, patient-centric technology for better outcomes and revenue.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/proactivewellness" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.facebook.com/proactivewellnesscare" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/rpm" className="hover:text-primary transition-colors">Remote Patient Monitoring</Link></li>
              <li><Link href="/ccm" className="hover:text-primary transition-colors">Chronic Care Management</Link></li>
              <li><Link href="/software" className="hover:text-primary transition-colors">Clinical Software</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">News & Updates</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:9723273687" className="hover:text-primary transition-colors">(972) 327 3687</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@prowellcare.com" className="hover:text-primary transition-colors">info@prowellcare.com</a>
              </li>
              {/* Add address if available in content, checking... */}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} ProWell Care. Powered by Cognitive Healthcare International.</p>
        </div>
      </div>
    </footer>
  )
}
