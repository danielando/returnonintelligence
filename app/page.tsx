import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LinkedinIcon, TwitterIcon, YoutubeIcon, Play, Calendar, Clock, Globe } from "lucide-react"
import { ConvertKitForm } from "@/components/convertkit-form"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      {/* Hero Section - With larger title */}
      <section className="w-full py-8 md:py-10 bg-[#004851] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            {/* Podcast Logo - Smaller */}
            <div className="flex justify-center mb-1">
              <div className="w-16 h-16 md:w-20 md:h-20 relative">
                <Image
                  src="/images/podcast-logo.png"
                  alt="Return on Intelligence Podcast"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-serif tracking-tight text-white leading-tight">
              Return on Intelligence
            </h1>
            <p className="text-base md:text-lg text-white mx-auto leading-snug max-w-2xl font-light">
              The go-to podcast for forward-thinking business leaders, IT professionals, and decision-makers who
              understand that AI isn't just a trend—it's the ultimate investment in the future of work.
            </p>
            <div className="w-full max-w-2xl mx-auto">
              <ConvertKitForm />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Hosts Section */}
      <section className="w-full py-16 md:py-20 bg-[#f5f5f0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#004851]">Meet Your Hosts</h2>
            <div className="w-16 h-[1px] bg-[#fc3c3d] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Host Card 1 - Daniel Anderson */}
            <div className="bg-white shadow-sm group hover:shadow-md transition-all duration-300">
              <div className="p-8 flex flex-col items-center">
                {/* Using Image component for Daniel's photo */}
                <div className="w-32 h-32 rounded-full mb-6 border-2 border-[#fc3c3d] overflow-hidden relative">
                  <Image src="/images/daniel-anderson.png" alt="Daniel Anderson" fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-serif mb-2 text-[#004851]">Daniel Anderson</h3>
                <p className="text-[#4a5568] text-center max-w-xs font-light">
                  Daniel is a Microsoft MVP driving business & individual success with SharePoint & Copilot. Daniel
                  enables professionals to accomplish more through optimized processes.
                </p>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/danielando/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004851] hover:text-[#fc3c3d] transition-colors"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="https://x.com/sharepointfocus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004851] hover:text-[#fc3c3d] transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/@DanielAndersonAU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004851] hover:text-[#fc3c3d] transition-colors"
                  >
                    <YoutubeIcon size={20} />
                  </a>
                  <a
                    href="https://danielanderson.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004851] hover:text-[#fc3c3d] transition-colors"
                  >
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Host Card 2 - Abram Jackson */}
            <div className="bg-white shadow-sm group hover:shadow-md transition-all duration-300">
              <div className="p-8 flex flex-col items-center">
                {/* Using Image component for Abram's photo */}
                <div className="w-32 h-32 rounded-full mb-6 border-2 border-[#fc3c3d] overflow-hidden relative">
                  <Image src="/images/abram-jackson.png" alt="Abram Jackson" fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-serif mb-2 text-[#004851]">Abram Jackson</h3>
                <p className="text-[#4a5568] text-center max-w-xs font-light">
                  Don Quixote never turned down a challenge because it was too hard, and neither have I. For the last 15
                  years, including 12 years as a Product Manager at Microsoft, I've been on a mission to drastically
                  improve the world's productivity through AI.
                </p>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/abramj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004851] hover:text-[#fc3c3d] transition-colors"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="https://x.com/abrakjamson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004851] hover:text-[#fc3c3d] transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                  <a
                    href="https://www.abramjackson.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004851] hover:text-[#fc3c3d] transition-colors"
                  >
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Episodes Section - Horizontal Card Layout */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#004851]">Previous Episodes</h2>
            <div className="w-16 h-[1px] bg-[#fc3c3d] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Episode Card 1 - Horizontal Layout */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-100 rounded-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#fc3c3d] uppercase tracking-wider">Episode 03</span>
                <Button variant="ghost" size="sm" className="text-[#004851] hover:text-[#fc3c3d] p-0 h-auto">
                  <Play size={18} className="mr-1" />
                  <span className="text-sm">Play</span>
                </Button>
              </div>

              <h3 className="text-xl font-serif text-[#004851] mb-2 line-clamp-2">
                The Future of AI in Strategic Decision Making
              </h3>

              <p className="text-[#4a5568] font-light mb-4 text-sm flex-grow line-clamp-3">
                In this episode, we explore how artificial intelligence is transforming the landscape of strategic
                decision-making in Fortune 500 companies.
              </p>

              <div className="flex items-center justify-between text-xs text-[#4a5568] border-t border-gray-100 pt-3 mt-auto">
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  <span>April 2, 2023</span>
                </div>
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>45 minutes</span>
                </div>
              </div>
            </div>

            {/* Episode Card 2 - Horizontal Layout */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-100 rounded-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#fc3c3d] uppercase tracking-wider">Episode 02</span>
                <Button variant="ghost" size="sm" className="text-[#004851] hover:text-[#fc3c3d] p-0 h-auto">
                  <Play size={18} className="mr-1" />
                  <span className="text-sm">Play</span>
                </Button>
              </div>

              <h3 className="text-xl font-serif text-[#004851] mb-2 line-clamp-2">
                Intelligence-Driven Growth Strategies
              </h3>

              <p className="text-[#4a5568] font-light mb-4 text-sm flex-grow line-clamp-3">
                Daniel and Abram discuss how data-driven intelligence is reshaping growth strategies for modern
                businesses in competitive markets.
              </p>

              <div className="flex items-center justify-between text-xs text-[#4a5568] border-t border-gray-100 pt-3 mt-auto">
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  <span>March 15, 2023</span>
                </div>
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>52 minutes</span>
                </div>
              </div>
            </div>

            {/* Episode Card 3 - Horizontal Layout */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-100 rounded-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#fc3c3d] uppercase tracking-wider">Episode 01</span>
                <Button variant="ghost" size="sm" className="text-[#004851] hover:text-[#fc3c3d] p-0 h-auto">
                  <Play size={18} className="mr-1" />
                  <span className="text-sm">Play</span>
                </Button>
              </div>

              <h3 className="text-xl font-serif text-[#004851] mb-2 line-clamp-2">
                Introduction to Return on Intelligence
              </h3>

              <p className="text-[#4a5568] font-light mb-4 text-sm flex-grow line-clamp-3">
                In our inaugural episode, we introduce the concept of Return on Intelligence and how it's becoming the
                new metric for business success.
              </p>

              <div className="flex items-center justify-between text-xs text-[#4a5568] border-t border-gray-100 pt-3 mt-auto">
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  <span>February 28, 2023</span>
                </div>
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>38 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Footer Section */}
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
    </main>
  )
}
