import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
