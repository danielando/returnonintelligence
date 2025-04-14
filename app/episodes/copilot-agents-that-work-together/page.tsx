import { EpisodeTemplate } from "@/components/episode-template"

export default function Episode2Page() {
  return (
    <EpisodeTemplate
      title="Copilot Agents That Work Together"
      date="April 15, 2025"
      duration="30:42"
      youtubeUrl="https://www.youtube.com/watch?v=example2"
      introduction="In this episode, Daniel Anderson and Abram Jackson dive into Microsoft's latest AI developments, focusing on the new Researcher and Analyst agents. They explore how these agents work together to provide more comprehensive and accurate information, and discuss the implications for business productivity and decision-making."
      showNotes={[
        `<div class="mb-8">
          <iframe 
            width="100%" 
            height="180" 
            frameborder="no" 
            scrolling="no" 
            seamless 
            src="https://share.transistor.fm/e/33058da7"
            class="rounded-lg shadow-sm"
          ></iframe>
        </div>`
      ]}
      keyInsights={[
        "The new Researcher agent can gather and synthesize information from multiple sources",
        "The Analyst agent can process and interpret complex data sets",
        "Together, these agents provide more accurate and comprehensive insights",
        "This represents a shift from single-agent to multi-agent AI systems",
        "The collaboration between agents mirrors effective human teamwork"
      ]}
      timestamps={[
        "00:00 - Introduction",
        "02:15 - Overview of new Microsoft AI agents",
        "08:30 - How the Researcher agent works",
        "15:45 - Capabilities of the Analyst agent",
        "22:10 - Real-world use cases and examples",
        "28:00 - Future implications and closing thoughts"
      ]}
      quotes={[
        {
          text: "The real power comes from how these agents work together, not just what they can do individually.",
          author: "Daniel Anderson"
        },
        {
          text: "This is a game-changer for how we think about AI assistance in the workplace.",
          author: "Abram Jackson"
        }
      ]}
      hosts={[
        {
          name: "Daniel Anderson",
          image: "/images/daniel-anderson.jpg",
          linkedin: "https://linkedin.com/in/danielanderson",
          twitter: "https://twitter.com/danielanderson"
        },
        {
          name: "Abram Jackson",
          image: "/images/abram-jackson.jpg",
          linkedin: "https://linkedin.com/in/abramjackson",
          twitter: "https://twitter.com/abramjackson"
        }
      ]}
    />
  )
} 