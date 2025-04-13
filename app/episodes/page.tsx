import Image from "next/image"
import Link from "next/link"
import { Play, Calendar, Clock } from "lucide-react"

// This would typically come from a database or CMS
const episodes = [
  {
    id: "1",
    title: "The real power is in the conversation",
    date: "April 8, 2025",
    duration: "29:24",
    description: "In this engaging conversation, Daniel Anderson and Abram Jackson explore the evolving landscape of AI, particularly focusing on Microsoft's Copilot and its applications in enhancing productivity.",
    image: "/images/podcast-logo.png",
    youtubeUrl: "https://youtu.be/rZ1l5m1x1DM"
  },
  // Add more episodes here as they become available
]

export default function EpisodesPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif text-[#004851] mb-8">All Episodes</h1>
          
          <div className="space-y-8">
            {episodes.map((episode) => (
              <div key={episode.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Link href={`/episodes/${episode.id}`}>
                        <div className="relative w-48 h-48 rounded-lg overflow-hidden">
                          <Image
                            src={episode.image}
                            alt={episode.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium text-white bg-[#004851] px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Episode {episode.id}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-[#4a5568]">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            <span>{episode.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            <span>{episode.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-serif text-[#004851] mb-3">
                        <Link href={`/episodes/${episode.id}`} className="hover:text-[#fc3c3d] transition-colors">
                          {episode.title}
                        </Link>
                      </h2>
                      
                      <p className="text-[#4a5568] mb-4">{episode.description}</p>
                      
                      <div className="flex items-center gap-4">
                        <Link
                          href={`/episodes/${episode.id}`}
                          className="text-[#004851] hover:text-[#fc3c3d] transition-colors"
                        >
                          Read More
                        </Link>
                        <a
                          href={episode.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-[#004851] hover:text-[#fc3c3d] transition-colors"
                        >
                          <Play size={16} className="mr-1" />
                          Watch on YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 