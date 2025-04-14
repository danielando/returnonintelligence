import { EpisodeTemplate } from "@/components/episode-template"

export default function Episode1Page() {
  return (
    <EpisodeTemplate
      title="The Evolution of AI in the Workplace"
      date="April 8, 2025"
      duration="29:24"
      youtubeUrl="https://youtu.be/rZ1l5m1x1DM"
      introduction="Daniel Anderson and Abram Jackson explore how AI is transforming workplace productivity and changing the fundamental nature of work. They discuss the shift from traditional tools to AI-powered agents."
      showNotes={[
        `<div class="mb-8">
          <iframe 
            width="100%" 
            height="180" 
            frameborder="no" 
            scrolling="no" 
            seamless 
            src="https://share.transistor.fm/e/484e3ca8"
            class="rounded-lg shadow-sm"
          ></iframe>
        </div>`,
        "We explored Microsoft's new Researcher and Analyst agents for Copilot, which represent a fundamental shift in how we interact with AI. Instead of simple chat interfaces, these agents can be set up to work autonomously on complex tasks, potentially saving hours of human effort.",
        "We discussed how Researcher connects with the entire Microsoft 365 ecosystem, including Teams, emails, SharePoint, and enterprise applications. We also examined how Analyst brings sophisticated data processing capabilities to everyday users without requiring specialized knowledge.",
        "The episode concluded with a look at the future of image generation in workplace tools and how custom 'style agents' can maintain visual consistency across all content types."
      ]}
      keyInsights={[
        "AI interaction evolution: The shift from chat-based AI to agent-based interactions represents a fundamental change in how we'll work with AI systems, enabling more complex and autonomous task completion.",
        "Ecosystem integration: Microsoft's new agents connect deeply with the M365 ecosystem, including Teams, emails, SharePoint, and enterprise applications, making them exponentially more powerful in work contexts.",
        "Multi-agent collaboration: Researcher's ability to interact with other agents opens up new possibilities for handling complex, multi-step tasks through true multi-agent functionality.",
        "Democratized data analysis: Analyst brings sophisticated data processing capabilities to everyday users without requiring specialized knowledge, potentially transforming how organizations handle data.",
        "Visual consistency automation: Custom 'style agents' are enabling consistent visual branding across all content types, streamlining creative workflows and maintaining brand integrity."
      ]}
      timestamps={[
        "00:00 - 03:54: Introduction and MVP Summit discussion",
        "03:55 - 11:10: Researcher and Analyst agents introduction",
        "11:11 - 16:14: Ecosystem integration and data processing",
        "16:15 - 24:03: Multi-agent functionality and future roles",
        "24:04 - 30:28: Image generation and visual styling"
      ]}
      quotes={[
        {
          text: "The real power is in the conversation. It's not just about getting an answer, it's about the back and forth, the refinement, the ability to ask follow-up questions.",
          author: "Daniel Anderson"
        },
        {
          text: "AI is not here to replace us, it's here to augment our capabilities and help us focus on what truly matters.",
          author: "Abram Jackson"
        },
        {
          text: "I think every user is going to be creating these agents, these flows, these systems and managing them in order to get their own work done and working on their behalf.",
          author: "Abram Jackson"
        }
      ]}
      hosts={[
        {
          name: "Daniel Anderson",
          image: "/images/daniel-anderson.png",
          linkedin: "https://www.linkedin.com/in/danielando/",
          twitter: "https://x.com/sharepointfocus"
        },
        {
          name: "Abram Jackson",
          image: "/images/abram-jackson.png",
          linkedin: "https://www.linkedin.com/in/abramj/",
          twitter: "https://x.com/abrakjamson"
        }
      ]}
    />
  )
} 