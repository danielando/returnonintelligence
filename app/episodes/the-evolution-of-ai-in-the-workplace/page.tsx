import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, LinkedinIcon, TwitterIcon, YoutubeIcon, Globe } from "lucide-react"
import Link from "next/link"

export default function Episode1Page() {
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
            The Evolution of AI in the Workplace
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-[#4a5568] mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>April 1, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>29:50</span>
            </div>
          </div>

          <p className="text-[#4a5568] text-lg mb-6">
            In this inaugural episode, Daniel Anderson and Abram Jackson explore the evolving landscape of AI, focusing specifically on Microsoft Copilot and how it's transforming workplace productivity. Abram shares his extensive background at Microsoft and insights on the differences between various AI platforms.
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
                Hey there! Welcome to the first episode of the Return on Intelligence podcast. I'm your host, Daniel Anderson, and today I had a fantastic conversation with my co-host Abram Jackson about the evolving landscape of AI, focusing specifically on Microsoft Copilot and how it's transforming workplace productivity.
              </p>

              <p className="mb-6">
                We kicked things off with Abram introducing his extensive background at Microsoft, where he's been for 14 years and has played a key role in their AI initiatives since 2016. We discussed how the approach to AI is shifting from simple search-like interactions to more conversational engagements, and Abram offered some valuable insights on the differences between various AI platforms like ChatGPT, Perplexity, and Microsoft 365 Copilot.
              </p>

              <p className="mb-6">
                A significant portion of our conversation focused on how Copilot is specifically designed for work scenarios, making it uniquely valuable in professional settings where context and document awareness matter. We also explored the evolution of prompt engineering and how it's becoming less necessary as models improve, as well as the exciting potential of voice interfaces for more natural AI interactions.
              </p>

              <p className="mb-6">
                One of the highlights was our discussion about AI agents, where Abram (who I like to call "007" because of his 40+ agents) explained how these specialized AI tools can be connected in sequence to handle complex business processes with flexibility that traditional automation can't match. This episode provides valuable insights for anyone looking to understand how to effectively implement AI tools in their organization and personal workflow.
              </p>

              <h3 className="text-xl font-serif text-[#004851] mt-8 mb-4">Key Insights</h3>
              <ul className="list-disc pl-6 mb-8">
                <li className="mb-2">Work-specific AI vs. general-purpose AI: Microsoft 365 Copilot is specifically optimized for work scenarios and document context, while platforms like ChatGPT might excel at more general conversations. Understanding this distinction helps users choose the right tool for their needs.</li>
                <li className="mb-2">Evolving nature of AI interaction: As models improve, the need for specialized prompt engineering is diminishing. Instead, natural conversation and voice interfaces are becoming more effective ways to interact with AI tools.</li>
                <li className="mb-2">Deep Research capabilities: The Deep Research feature represents a significant advancement, allowing professionals across various fields to get substantial value from AI without extensive training or prompt engineering knowledge.</li>
                <li className="mb-2">Agent-based approach: Rather than creating one massive AI agent to handle everything, breaking down processes into task-specific agents provides greater flexibility and effectiveness, especially when they can be connected through a shared conversation context.</li>
                <li className="mb-2">Conversation as project context: Treating an AI chat as a project space where multiple agents can be @mentioned while maintaining the full conversation history enables more complex and contextually aware AI assistance.</li>
              </ul>

              <h3 className="text-xl font-serif text-[#004851] mt-8 mb-4">Timestamps</h3>
              <ul className="list-none pl-0 mb-8">
                <li className="mb-2">00:00 - 01:48: Introduction to the podcast and format</li>
                <li className="mb-2">01:48 - 03:28: Abram introduces his background at Microsoft and involvement in AI</li>
                <li className="mb-2">03:28 - 06:29: Discussion about organizations struggling with AI implementation</li>
                <li className="mb-2">06:29 - 10:01: Comparing search interfaces vs. conversational AI</li>
                <li className="mb-2">10:01 - 13:22: Differences between various AI platforms and their specializations</li>
                <li className="mb-2">13:22 - 17:11: The evolution of Deep Research capabilities</li>
                <li className="mb-2">17:11 - 20:14: Prompt engineering and the shift toward more natural interactions</li>
                <li className="mb-2">20:14 - 26:55: Explanation of AI agents and their applications</li>
                <li className="mb-2">26:55 - 29:50: Example of using multiple agents for creating strategy documents</li>
              </ul>

              <h3 className="text-xl font-serif text-[#004851] mt-8 mb-4">Notable Quotes</h3>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "Microsoft 365 Copilot - we are super focused on work scenarios, right? Drafting your email and reviewing your Word documents and all of these things that we do on our computers at work." - Abram Jackson
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"Microsoft 365 Copilot - we are super focused on work scenarios, right? Drafting your email and reviewing your Word documents and all of these things that we do on our computers at work." - Abram Jackson\n\nListen to the full episode: https://returnonintelligence.com/episodes/the-evolution-of-ai-in-the-workplace')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                </div>
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "I encourage anybody to use multiple of these AI products. Try asking ChatGPT to summarize your most recent emails from your manager... Of course it doesn't do that - that's not its job." - Abram Jackson
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"I encourage anybody to use multiple of these AI products. Try asking ChatGPT to summarize your most recent emails from your manager... Of course it\'s not its job." - Abram Jackson\n\nListen to the full episode: https://returnonintelligence.com/episodes/the-evolution-of-ai-in-the-workplace')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                </div>
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "What Deep Research did... really showed so many more professionals an extremely valuable scenario without a lot of work. You could get huge value out of ChatGPT, but it did require a lot of work, a lot of knowledge, prompt engineering." - Abram Jackson
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"What Deep Research did... really showed so many more professionals an extremely valuable scenario without a lot of work. You could get huge value out of ChatGPT, but it did require a lot of work, a lot of knowledge, prompt engineering." - Abram Jackson\n\nListen to the full episode: https://returnonintelligence.com/episodes/the-evolution-of-ai-in-the-workplace')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                </div>
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "What everybody wants from their AI is a specialist that can handle some set or domain of work... It understands you very deeply. It understands your preferences... and it knows much more about [the domain] than you do." - Abram Jackson
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"What everybody wants from their AI is a specialist that can handle some set or domain of work... It understands you very deeply. It understands your preferences... and it knows much more about [the domain] than you do." - Abram Jackson\n\nListen to the full episode: https://returnonintelligence.com/episodes/the-evolution-of-ai-in-the-workplace')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                </div>
              </blockquote>
              <blockquote className="border-l-4 border-[#fc3c3d] pl-4 italic mb-4">
                "If you have a 10-step business process and it has been the same for 17 years, you probably already automated it. What agents allow you to do is use them in a different order or in different contexts or slightly differently." - Abram Jackson
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"If you have a 10-step business process and it has been the same for 17 years, you probably already automated it. What agents allow you to do is use them in a different order or in different contexts or slightly differently." - Abram Jackson\n\nListen to the full episode: https://returnonintelligence.com/episodes/the-evolution-of-ai-in-the-workplace')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a5568] hover:text-[#fc3c3d] transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                </div>
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