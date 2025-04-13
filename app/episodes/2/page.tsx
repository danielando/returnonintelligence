import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, LinkedinIcon, TwitterIcon, YoutubeIcon, Globe } from "lucide-react"
import Link from "next/link"

export default function Episode2Page() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <a 
            href="https://youtu.be/LvTfXA2nW_g"
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
            Copilot Agents That Work Together
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-[#4a5568] mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>April 15, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>30:42</span>
            </div>
          </div>

          <p className="text-[#4a5568] text-lg mb-6">
            In this episode, you'll join Daniel and Abram as they explore Microsoft's cutting-edge AI developments, with a special focus on the newly announced Researcher and Analyst agents for Copilot. Abram shares his experiences from the recent MVP Summit, explaining how these agents represent a fundamental shift in AI interaction patterns.
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
                Hey there! Welcome to another episode of the Return on Intelligence podcast. I'm your host, Daniel Anderson, and today I had a fantastic conversation with my co-host Abram Jackson about Microsoft's exciting new AI agent developments and how they're transforming the way we work.
              </p>

              <p className="mb-6">
                We kicked things off discussing Abram's experience at the recent MVP Summit in Seattle, where he had the opportunity to share Microsoft's multi-month and multi-year vision with the MVP community. Abram highlighted how these events provide valuable opportunities to think beyond immediate sprint work and focus on longer-term strategic directions.
              </p>

              <p className="mb-6">
                The core of our conversation centered around Microsoft's newly announced Researcher and Analyst agents for Copilot. Abram provided an in-depth explanation of how these agents represent a fundamental shift in AI interaction patterns—moving beyond simple autocomplete or real-time chat to a "set up a task and let it work" paradigm that can save hours of human effort.
              </p>

              <p className="mb-6">
                We explored how Researcher can not only search the web but also connect with your entire Microsoft 365 ecosystem, including Teams chats, emails, SharePoint, and now over 25 graph connectors to enterprise SaaS applications. Even more fascinating is Researcher's ability to interact with other agents, opening up true multi-agent functionality that could revolutionize how we approach complex tasks.
              </p>

              <p className="mb-6">
                We also discussed Analyst, which focuses on structured data across Excel documents, tables, and other tabular formats, using Python code interpreter capabilities to process and analyze information that previously required specialized knowledge.
              </p>

              <p className="mb-6">
                The episode wraps up with a fascinating glimpse into the future of image generation and how it's being integrated into workplace tools, with Abram sharing how he's creating custom "style agents" that maintain visual consistency across all content types from Word to PowerPoint to Outlook.
              </p>

              <h3 className="text-xl font-serif text-[#004851] mt-8 mb-4">Key Insights</h3>
              <ul className="list-disc pl-6 mb-8">
                <li className="mb-2">New AI interaction paradigm: Researcher and Analyst agents represent a third paradigm of AI interaction beyond autocomplete and chat—a "set up a task and let it work" model that can perform complex research in minutes that would take humans hours.</li>
                <li className="mb-2">Enterprise data access transforms research: Unlike web-only research tools, Microsoft's Researcher can access your entire Microsoft 365 ecosystem plus connected enterprise SaaS systems, making the research capability exponentially more powerful in work contexts.</li>
                <li className="mb-2">Multi-agent capabilities emerge: Researcher can initiate "subconsiderations" with other agents like Sales Agent, representing one of the first production-ready multi-agent systems that could fundamentally change how we build and interact with AI.</li>
                <li className="mb-2">Democratization of agent creation: The tools for creating and managing AI agents are becoming increasingly accessible, potentially allowing any motivated information worker to create and manage entire "fleets" of agents working on their behalf.</li>
                <li className="mb-2">Visual content creation revolutionized: Recent breakthroughs in image generation are transforming how we create visual content, making it possible to integrate consistent, high-quality visuals into everyday documents and presentations without specialized design skills.</li>
              </ul>

              <h3 className="text-xl font-serif text-[#004851] mt-8 mb-4">Timestamps</h3>
              <ul className="list-none pl-0 mb-8">
                <li className="mb-2">00:00 - 03:54: Introduction and MVP Summit discussion</li>
                <li className="mb-2">03:55 - 06:02: Partner challenges in the AI era</li>
                <li className="mb-2">06:03 - 11:10: Researcher agent introduction and capabilities</li>
                <li className="mb-2">11:11 - 12:45: Impact on SharePoint information architecture</li>
                <li className="mb-2">12:46 - 16:14: Analyst agent and structured data processing</li>
                <li className="mb-2">16:15 - 19:33: Multi-agent functionality and future job roles</li>
                <li className="mb-2">19:34 - 24:03: Democratization of agent creation</li>
                <li className="mb-2">24:04 - 28:12: Image generation breakthroughs</li>
                <li className="mb-2">28:13 - 30:28: Visual styling through agents</li>
              </ul>

              <h3 className="text-xl font-serif text-[#004851] mt-8 mb-4">Notable Quotes</h3>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "The real power is in the conversation. It's not just about getting an answer, it's about the back and forth, the refinement, the ability to ask follow-up questions." - Daniel Anderson
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"The real power is in the conversation. It\'s not just about getting an answer, it\'s about the back and forth, the refinement, the ability to ask follow-up questions." - Daniel Anderson\n\nListen to the full episode: https://returnonintelligence.com/episodes/2')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                </div>
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "AI is not here to replace us, it's here to augment our capabilities and help us focus on what truly matters." - Abram Jackson
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"AI is not here to replace us, it\'s here to augment our capabilities and help us focus on what truly matters." - Abram Jackson\n\nListen to the full episode: https://returnonintelligence.com/episodes/2')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                </div>
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "I think every user is going to be creating these agents, these flows, these systems and managing them in order to get their own work done and working on their behalf." - Abram Jackson
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "I don't think it's exclusively an IT department role... I think any motivated information worker is going to be able to create and manage whole fleets or swarms of agents working on their behalf." - Abram Jackson
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "I can see there's going to be job roles where people are just managing agents. That'll be a role in itself, just being skilled in managing an entire team of agents." - Daniel Anderson
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