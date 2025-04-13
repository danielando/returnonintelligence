import { ReactNode } from "react"

interface EpisodeLayoutProps {
  children: ReactNode
  params: {
    id: string
  }
}

export default function EpisodeLayout({ children, params }: EpisodeLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Episode Header */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </section>
    </div>
  )
} 