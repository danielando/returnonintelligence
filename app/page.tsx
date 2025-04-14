import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, LinkedinIcon, TwitterIcon, YoutubeIcon, Globe, Headphones, Users } from "lucide-react"
import Link from "next/link"
import { ConvertKitForm } from "@/components/convertkit-form"

export default function LandingPage() {
  return (
    <>
      {/* Header with Opt-in Form */}
      <header id="hero" className="w-full py-8 md:py-10 bg-[#004851] text-white">
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
              The go-to show for forward-thinking business leaders, IT professionals, and decision-makers who
              understand that AI isn't just a trend—it's the ultimate investment in the future of work.
            </p>
            <div className="w-full max-w-2xl mx-auto">
              <ConvertKitForm />
            </div>
          </div>
        </div>
      </header>

      {/* Previous Episodes Section - Horizontal Card Layout */}
      <section id="episodes" className="w-full py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#004851] flex items-center justify-center gap-2">
              <Headphones size={32} className="text-[#fc3c3d]" />
              Latest Episodes
            </h2>
            <div className="w-16 h-[1px] bg-[#fc3c3d] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Episode 1 Card */}
            <div className="bg-white shadow-sm group hover:shadow-md transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-4 text-[#004851] group-hover:text-[#fc3c3d] transition-colors">
                  <Link href="/episodes/the-evolution-of-ai-in-the-workplace">
                    The Evolution of AI in the Workplace
                  </Link>
                </h3>
                <p className="text-[#4a5568] mb-4">
                  Join Daniel and Abram as they explore the transformative impact of AI on modern workplaces, from leadership challenges to practical implementation strategies.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#4a5568] mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>April 8, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>29:24</span>
                  </div>
                </div>
                <Link 
                  href="/episodes/the-evolution-of-ai-in-the-workplace" 
                  className="inline-flex items-center justify-center bg-[#004851] text-white px-4 py-1.5 rounded-full hover:bg-[#003a42] transition-colors text-sm"
                >
                  <Play size={16} className="mr-2" />
                  Listen or Watch Now
                </Link>
              </div>
            </div>

            {/* Episode 2 Card */}
            <div className="bg-white shadow-sm group hover:shadow-md transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-4 text-[#004851] group-hover:text-[#fc3c3d] transition-colors">
                  <Link href="/episodes/copilot-agents-that-work-together">
                    Copilot Agents That Work Together
                  </Link>
                </h3>
                <p className="text-[#4a5568] mb-4">
                  Explore Microsoft's cutting-edge AI developments with Daniel and Abram, focusing on the newly announced Researcher and Analyst agents for Copilot.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#4a5568] mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>April 15, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>30:42</span>
                  </div>
                </div>
                <Link 
                  href="/episodes/copilot-agents-that-work-together" 
                  className="inline-flex items-center justify-center bg-[#004851] text-white px-4 py-1.5 rounded-full hover:bg-[#003a42] transition-colors text-sm"
                >
                  <Play size={16} className="mr-2" />
                  Listen or Watch Now
                </Link>
              </div>
            </div>

            {/* Episode 3 Card */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-gray-100 rounded-sm">
              <div className="flex flex-col mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-[#f5f5f0] flex items-center justify-center">
                    <span className="text-2xl text-[#004851]">🎙️</span>
                  </div>

                  <h3 className="text-xl font-serif text-[#004851] text-left">
                    Working on it
                  </h3>
                </div>
                
                <div className="w-full">
                  <p className="text-[#4a5568] text-sm font-light text-left mb-4">
                    We're hard at work on the next episode. Subscribe to our newsletter to be the first to know when it's published and get exclusive insights about AI and productivity.
                  </p>
                  <Link 
                    href="/#subscribe" 
                    className="mt-4 inline-flex items-center justify-center bg-[#fc3c3d] text-white px-4 py-1.5 rounded-full hover:bg-[#e03536] transition-colors text-sm"
                  >
                    Subscribe for updates
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#4a5568] border-t border-gray-100 pt-3 mt-auto">
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  <span>Coming Soon</span>
                </div>
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>30:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Subscription Options */}
      <section id="subscribe" className="w-full py-16 bg-[#004851] border-t border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-serif text-white text-center mb-4">
              Available on <a href="https://www.youtube.com/playlist?list=PLCkrTqFsjJnzoZ1a7UCsgxOZxNb3Z4n9v" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#fc3c3d] text-white px-3 py-0.5 rounded-full hover:bg-[#e03536] transition-colors text-3xl md:text-4xl font-serif align-middle">YouTube</a>, and wherever you get your podcasts
            </h3>
            <p className="text-lg text-white/90 text-center max-w-2xl mx-auto">
              Subscribe to stay updated with our latest episodes and insights on AI in the workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Your Hosts Section */}
      <section className="w-full py-12 md:py-16 bg-[#f5f5f0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#004851] flex items-center justify-center gap-2">
              <Users size={32} className="text-[#fc3c3d]" />
              Meet Your Hosts
            </h2>
            <div className="w-16 h-[1px] bg-[#fc3c3d] mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Host Card 1 - Daniel Anderson */}
            <div className="bg-white shadow-sm group hover:shadow-md transition-all duration-300">
              <div className="p-8 flex flex-col items-center">
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
    </>
  )
}
