import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, LinkedinIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

interface EpisodeTemplateProps {
  title: string
  date: string
  duration: string
  youtubeUrl: string
  introduction: string
  showNotes: string[]
  keyInsights: string[]
  timestamps: string[]
  quotes: Array<{
    text: string
    author: string
  }>
  hosts: Array<{
    name: string
    image: string
    linkedin: string
    twitter: string
  }>
}

export function EpisodeTemplate({
  title,
  date,
  duration,
  youtubeUrl,
  introduction,
  showNotes,
  keyInsights,
  timestamps,
  quotes,
  hosts
}: EpisodeTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full py-12 md:py-16 bg-[#004851] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 relative">
                <Image
                  src="/images/podcast-logo.png"
                  alt="Return on Intelligence Podcast"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-center mb-6">
              {title}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center text-sm">
                <Calendar size={16} className="mr-2" />
                <span>{date}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock size={16} className="mr-2" />
                <span>{duration}</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="bg-white text-[#004851] hover:bg-white/90 border-white"
                asChild
              >
                <Link href={youtubeUrl}>
                  <Play className="mr-2 h-4 w-4" />
                  Watch on YouTube
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Show Notes */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-[#4a5568] mb-8">
              {introduction}
            </p>
            
            {showNotes.map((note, index) => (
              <p key={index} className="text-lg text-[#4a5568] mb-8">
                {note}
              </p>
            ))}

            <h2 className="text-2xl font-serif text-[#004851] mt-12 mb-6">Key Insights</h2>
            <ul className="list-disc pl-6 space-y-4 text-[#4a5568]">
              {keyInsights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-serif text-[#004851] mt-12 mb-6">Timestamps</h2>
            <ul className="space-y-2 text-[#4a5568]">
              {timestamps.map((timestamp, index) => (
                <li key={index}>{timestamp}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-serif text-[#004851] mt-12 mb-6">Notable Quotes</h2>
            <div className="space-y-6">
              {quotes.map((quote, index) => (
                <div key={index} className="bg-[#f5f5f0] p-6 rounded-lg">
                  <p className="text-[#4a5568] italic mb-2">"{quote.text}"</p>
                  <p className="text-sm text-[#004851]">— {quote.author}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-serif text-[#004851] mt-12 mb-6">Connect with the Hosts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {hosts.map((host, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
                      <Image
                        src={host.image}
                        alt={host.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-serif text-[#004851]">{host.name}</h3>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={host.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#004851] hover:text-[#fc3c3d] transition-colors"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                    <a
                      href={host.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#004851] hover:text-[#fc3c3d] transition-colors"
                    >
                      <TwitterIcon size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 