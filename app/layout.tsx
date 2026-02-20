import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { RoleSelectionModal } from "@/components/role-selection-modal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProactiveWellness Care",
  description: "Value-Based Care Excellence Starts with RPM & CCM Patient Oversight.",
    icons: {
    icon: '/prologo.png', // Or the path to wherever your icon is in the public folder
    apple: '/prologo.png',
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZK7B3VN3RZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZK7B3VN3RZ');
          `}
        </Script>
        <RoleSelectionModal />
        {children}
      </body>
    </html>
  );
}
