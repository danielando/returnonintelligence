import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, LinkedinIcon, TwitterIcon, YoutubeIcon, Globe } from "lucide-react"
import Link from "next/link"

export default function Episode3Page() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <a 
            href="https://youtu.be/rZ1l5m1x1DM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white bg-[#fc3c3d] hover:bg-[#e03536] w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <Play size={36} className="ml-1" />
            </Button>
          </a>
        </div>

        <div className="flex-grow">
          <h1 className="text-3xl md:text-4xl font-serif text-[#004851] mb-4">
            The real power is in the conversation
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-[#4a5568] mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>April 8, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>29:24</span>
            </div>
          </div>

          <p className="text-[#4a5568] text-lg mb-6">
            In this engaging conversation, Daniel Anderson and Abram Jackson explore the evolving landscape of AI, particularly focusing on Microsoft's Copilot and its applications in enhancing productivity. Abram shares his extensive experience at Microsoft, detailing the journey from traditional AI to conversational models and the importance of adapting organizational mindsets towards AI adoption.
          </p>
        </div>
      </div>

      {/* Show Notes Content */}
      <section className="w-full py-12 md:py-16 bg-[#f5f5f0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif text-[#004851] mb-6">Show Notes</h2>
              
              <p className="mb-6">
                Hey there! Welcome to another episode of the Return on Intelligence podcast. I'm your host, Daniel Anderson, and today I had a fantastic conversation with my co-host Abram Jackson about the critical role of leadership in AI adoption and what it takes to thrive in this rapidly evolving landscape.
              </p>

              <p className="mb-6">
                We kicked things off by discussing a leaked letter from Shopify CEO Toby Lütke to his organization, outlining how AI usage is now a baseline expectation for all employees. This sparked an insightful discussion about how leadership's personal engagement with AI tools dramatically impacts adoption across the entire organization.
              </p>

              <p className="mb-6">
                Abram then shared his thoughts on what he calls the "doer mindset" – the willingness to take action despite uncertainty and the courage to make decisions even when you might be wrong. We explored how this mindset is becoming increasingly crucial as AI continues to accelerate the pace of change in our work environments.
              </p>

              <p className="mb-6">
                We also touched on upcoming Microsoft developments, including new agent capabilities and what's in store for the upcoming Microsoft Build event in May. This episode provides valuable insights for leaders looking to foster an AI-first culture and for individuals wanting to maximize their impact in an AI-augmented workplace.
              </p>

              <h3 className="text-xl font-serif text-[#004851] mt-8 mb-4">Key Insights</h3>
              <ul className="list-disc pl-6 mb-8">
                <li className="mb-2">Leadership by example: When executives personally use and champion AI tools, organization-wide adoption significantly increases. Toby Lütke's letter demonstrates how leadership commitment accelerates cultural change.</li>
                <li className="mb-2">The new productivity gap: AI amplifies existing productivity differences between employees. Those with a "doer mindset" will see exponentially greater benefits compared to those paralyzed by process or perfectionism.</li>
                <li className="mb-2">Decision paralysis traps: Process obsession, framework dependence, and data overreliance can all prevent action. While these elements are important, they shouldn't remove personal decision-making responsibility.</li>
                <li className="mb-2">Agents as AI onramps: Purpose-specific AI agents are proving more effective for initial AI adoption than open-ended chat interfaces since they provide clearer use cases and expectations.</li>
                <li className="mb-2">Context is king: Future AI capabilities like memory and project context awareness will dramatically enhance AI's ability to support long-running projects and complex work.</li>
              </ul>

              <h3 className="text-xl font-serif text-[#004851] mt-8 mb-4">Timestamps</h3>
              <ul className="list-none pl-0 mb-8">
                <li className="mb-2">00:00 - 03:12: Introduction and setup</li>
                <li className="mb-2">03:12 - 05:59: Discussion of Shopify CEO Toby Lütke's letter on AI adoption</li>
                <li className="mb-2">05:59 - 11:28: Leadership's role in AI adoption and organization-wide impact</li>
                <li className="mb-2">11:28 - 19:46: The "doer mindset" and why it matters for AI implementation</li>
                <li className="mb-2">19:46 - 23:54: Common obstacles to organizational AI adoption</li>
                <li className="mb-2">23:54 - 26:27: OpenAI's memory feature and its potential workplace applications</li>
                <li className="mb-2">26:27 - 29:39: Balancing governance with implementation speed</li>
                <li className="mb-2">29:39 - 32:53: AI agents as effective onramps to broader AI adoption</li>
              </ul>

              <h3 className="text-xl font-serif text-[#004851] mt-8 mb-4">Notable Quotes</h3>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "AI works super well for leaders of organizations. One of the things that AI does so well is gathering information to help you make a decision, which is a lot of an executive's job." - Abram Jackson
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "High agency really should just be called high willingness to make decisions and potentially be wrong." - Abram Jackson
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "Once it becomes the thing that is preventing your company from succeeding, it can't be as important anymore as rolling out AI... It's not going to be perfect, but that doesn't mean you need to wait for it to be perfect and spend five years on data governance before you start using AI. You won't have a company in five years." - Abram Jackson
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "People are waiting for the perfect outcome or the perfect result... You'll be 12 months down the track, and you'll still be paralyzed waiting for the perfect thing as opposed to making quick decisions, iterating." - Daniel Anderson
              </blockquote>

              <h3 className="text-xl font-serif text-[#004851] mt-8 mb-4">Connect with the Hosts</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Host Card 1 - Daniel Anderson */}
                <div className="bg-white shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="p-8 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full mb-6 border-2 border-[#fc3c3d] overflow-hidden relative">
                      <Image src="/images/daniel-anderson.png" alt="Daniel Anderson" fill className="object-cover" />
                    </div>
                    <h4 className="text-2xl font-serif mb-2 text-[#004851]">Daniel Anderson</h4>
                    <p className="text-[#4a5568] text-center max-w-xs font-light mb-4">
                      Daniel is a Microsoft MVP driving business & individual success with SharePoint & Copilot. Daniel
                      enables professionals to accomplish more through optimized processes.
                    </p>
                    <div className="flex space-x-4">
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
                        className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                      >
                        <TwitterIcon size={20} />
                      </a>
                      <a
                        href="https://www.youtube.com/@DanielAndersonAU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                      >
                        <YoutubeIcon size={20} />
                      </a>
                      <a
                        href="https://danielanderson.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
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
                    <h4 className="text-2xl font-serif mb-2 text-[#004851]">Abram Jackson</h4>
                    <p className="text-[#4a5568] text-center max-w-xs font-light mb-4">
                      Don Quixote never turned down a challenge because it was too hard, and neither have I. For the last 15
                      years, including 12 years as a Product Manager at Microsoft, I've been on a mission to drastically
                      improve the world's productivity through AI.
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/in/abramj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                      >
                        <LinkedinIcon size={20} />
                      </a>
                      <a
                        href="https://x.com/abrakjamson"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                      >
                        <TwitterIcon size={20} />
                      </a>
                      <a
                        href="https://www.abramjackson.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                      >
                        <Globe size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 