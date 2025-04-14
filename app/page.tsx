import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, LinkedinIcon, TwitterIcon, YoutubeIcon, Globe, Headphones, Users, Radio } from "lucide-react"
import Link from "next/link"
import { ConvertKitForm } from "@/components/convertkit-form"

export default function LandingPage() {
  return (
    <>
      {/* Header with Opt-in Form */}
      <header id="hero" className="w-full py-8 md:py-10 bg-[#004851] text-white relative overflow-hidden bg-[url('/images/rocketbg.png')] bg-cover bg-top">
        <div className="absolute inset-0 bg-[#004851]/70"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* Episode 2 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Radio size={16} className="text-[#fc3c3d]" />
                    <span className="text-sm text-[#4a5568]">April 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#4a5568]" />
                    <span className="text-sm text-[#4a5568]">30:42</span>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-[#004851] mb-2">
                  <Link href="/episodes/copilot-agents-that-work-together" className="hover:text-[#fc3c3d] transition-colors">
                    Copilot Agents That Work Together
                  </Link>
                </h3>
                <p className="text-[#4a5568] mb-4">
                  Daniel Anderson and Abram Jackson explore Microsoft's latest AI developments, focusing on the new Researcher and Analyst agents. They discuss how these agents work together to provide more comprehensive and accurate information.
                </p>
                <Link 
                  href="/episodes/copilot-agents-that-work-together" 
                  className="inline-flex items-center justify-center bg-[#004851] text-white px-4 py-1.5 rounded-full hover:bg-[#003a42] transition-colors text-sm"
                >
                  <Play size={16} className="mr-2" />
                  Listen or Watch Now
                </Link>
              </div>
            </div>

            {/* Episode 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Radio size={16} className="text-[#fc3c3d]" />
                    <span className="text-sm text-[#4a5568]">April 8, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#4a5568]" />
                    <span className="text-sm text-[#4a5568]">29:24</span>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-[#004851] mb-2">
                  <Link href="/episodes/the-evolution-of-ai-in-the-workplace" className="hover:text-[#fc3c3d] transition-colors">
                    The Evolution of AI in the Workplace
                  </Link>
                </h3>
                <p className="text-[#4a5568] mb-4">
                  Daniel Anderson and Abram Jackson explore how AI is transforming workplace productivity and changing the fundamental nature of work. They discuss the shift from traditional tools to AI-powered agents.
                </p>
                <Link 
                  href="/episodes/the-evolution-of-ai-in-the-workplace" 
                  className="inline-flex items-center justify-center bg-[#004851] text-white px-4 py-1.5 rounded-full hover:bg-[#003a42] transition-colors text-sm"
                >
                  <Play size={16} className="mr-2" />
                  Listen or Watch Now
                </Link>
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
