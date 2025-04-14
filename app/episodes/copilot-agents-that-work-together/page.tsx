import { EpisodeTemplate } from "@/components/episode-template"

export default function Episode2Page() {
  return (
    <EpisodeTemplate
      title="Copilot Agents That Work Together"
      date="April 15, 2025"
      duration="30:42"
      youtubeUrl="https://www.youtube.com/watch?v=example2"
      introduction="In this episode of Return on Intelligence, Abram and I dive into Microsoft's groundbreaking AI agent developments that are revolutionizing workplace productivity. Fresh from the MVP Summit in Seattle, Abram shares exclusive insights on Microsoft's vision for Copilot's new Researcher and Analyst agents."
      showNotes={[
        "We explored Abram's experience at the recent MVP Summit in Seattle, where he gained insights into Microsoft's long-term vision. The heart of our discussion focused on Microsoft's new Researcher and Analyst agents for Copilot, which represent a fundamental shift in AI interaction patterns—moving from simple chat interfaces to a 'set up a task and let it work' approach that saves hours of effort.",
        "We discussed how Researcher connects with your entire Microsoft 365 ecosystem and can even interact with other agents, creating true multi-agent functionality. Meanwhile, Analyst focuses on structured data analysis across various formats using Python code interpreter capabilities.",
        "We wrapped up by exploring the future of image generation in workplace tools, with Abram sharing how he's creating custom 'style agents' that maintain visual consistency across all content types."
      ]}
      keyInsights={[
        "Agent-based interactions: The shift from chat-based AI to agent-based interactions represents a fundamental evolution in how we'll work with AI systems, potentially saving hours of human effort on complex tasks.",
        "Ecosystem integration: Microsoft's new agents connect deeply with the M365 ecosystem, including Teams, emails, SharePoint, and now over 25 graph connectors to enterprise applications.",
        "Multi-agent collaboration: Researcher's ability to interact with other agents opens up new possibilities for handling complex, multi-step tasks through true multi-agent functionality.",
        "Democratized data analysis: Analyst brings sophisticated data processing capabilities to everyday users without requiring specialized knowledge, potentially transforming how organizations handle data.",
        "Visual consistency automation: Custom 'style agents' are enabling consistent visual branding across all content types, streamlining creative workflows and maintaining brand integrity."
      ]}
      timestamps={[
        "00:00 - 03:15: Introduction and MVP Summit discussion",
        "03:15 - 12:30: Deep dive into Microsoft's Researcher agent capabilities",
        "12:30 - 18:45: Exploring multi-agent interactions and ecosystem integration",
        "18:45 - 25:10: Analyst agent and its data processing capabilities",
        "25:10 - 30:00: Future of image generation and style agents in workplace tools"
      ]}
      quotes={[
        {
          text: "We're moving from autocomplete and real-time chat to a 'set up a task and let it work' paradigm that can save hours of human effort.",
          author: "Abram Jackson"
        },
        {
          text: "Researcher's ability to interact with other agents is opening up true multi-agent functionality that could revolutionize how we approach complex tasks.",
          author: "Abram Jackson"
        },
        {
          text: "These tools aren't just making existing processes faster; they're fundamentally changing how we approach work itself.",
          author: "Daniel Anderson"
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