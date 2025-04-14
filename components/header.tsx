"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()

  const handleEpisodesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const episodesSection = document.getElementById('episodes')
    if (episodesSection) {
      episodesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="w-full bg-[#004851]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/podcast-logo.png"
                alt="Return on Intelligence Podcast"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-serif text-white">Return on Intelligence</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </Link>
            <div className="flex items-center gap-8">
              <Link 
                href="/#episodes" 
                className="text-white/80 hover:text-white transition-all duration-300 relative group"
                onClick={handleEpisodesClick}
              >
                Episodes
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 