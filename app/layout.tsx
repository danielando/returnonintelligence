import type { Metadata } from 'next'
import './globals.css'
import Image from "next/image"
import { YoutubeIcon, LinkedinIcon, TwitterIcon, Globe } from "lucide-react"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Return on Intelligence - Podcast',
  description: 'The go-to podcast for forward-thinking business leaders, IT professionals, and decision-makers who understand that AI isn\'t just a trend—it\'s the ultimate investment in the future of work.',
  generator: 'Next.js',
  keywords: ['AI podcast', 'business intelligence', 'future of work', 'technology leadership', 'artificial intelligence', 'business strategy'],
  authors: [{ name: 'Daniel Anderson' }, { name: 'Abram Jackson' }],
  openGraph: {
    title: 'Return on Intelligence - Podcast',
    description: 'The go-to podcast for forward-thinking business leaders, IT professionals, and decision-makers who understand that AI isn\'t just a trend—it\'s the ultimate investment in the future of work.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Return on Intelligence - Podcast',
    description: 'The go-to podcast for forward-thinking business leaders, IT professionals, and decision-makers who understand that AI isn\'t just a trend—it\'s the ultimate investment in the future of work.',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen bg-[#f5f5f0]">
          {/* Main Content */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="w-full py-8 bg-[#004851] text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-10 h-10 relative mr-2">
                    <Image
                      src="/images/podcast-logo.png"
                      alt="Return on Intelligence Podcast"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-serif">Return on Intelligence</h3>
                </div>

                <p className="text-sm text-white/80 mb-4">
                  © {new Date().getFullYear()} Return on Intelligence. All rights reserved.
                </p>

                <div className="text-xs text-white/60">
                  <p>Designed with ♥ for business leaders and IT professionals.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
