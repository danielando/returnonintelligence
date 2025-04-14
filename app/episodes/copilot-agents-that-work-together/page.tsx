import { EpisodeTemplate } from "@/components/episode-template"

export default function Episode2Page() {
  return (
    <EpisodeTemplate
      title="Copilot Agents That Work Together"
      date="April 15, 2025"
      duration="30:42"
      youtubeUrl="https://youtu.be/LvTfXA2nW_g"
      introduction="Daniel Anderson and Abram Jackson explore Microsoft's latest AI developments, focusing on the new Researcher and Analyst agents. They discuss how these agents work together to provide more comprehensive and accurate information."
      showNotes={[
        `<div class="w-full max-w-4xl mx-auto my-8">
          <iframe
            src="https://share.transistor.fm/e/return-on-intelligence/2"
            width="100%"
            height="180"
            frameborder="0"
            scrolling="no"
            seamless="true"
            style="width: 100%; height: 180px;"
          ></iframe>
        </div>`,
        "In this episode, Daniel Anderson and Abram Jackson dive deep into Microsoft's latest AI developments, focusing on the newly announced Researcher and Analyst agents for Copilot. They explore how these agents work together to provide more comprehensive and accurate information, and discuss the implications for business productivity and decision-making."
      ]}
      keyInsights={[
        "Microsoft's new Researcher and Analyst agents represent a significant advancement in AI capabilities",
        "The agents work together to provide more comprehensive and accurate information",
        "This development has major implications for business productivity and decision-making",
        "The integration of these agents into Copilot will transform how we work with AI"
      ]}
      timestamps={[
        "00:00 - Introduction",
        "05:15 - Overview of Microsoft's AI developments",
        "12:30 - Deep dive into Researcher agent capabilities",
        "18:45 - Exploring Analyst agent features",
        "25:10 - How the agents work together",
        "30:00 - Future implications and closing thoughts"
      ]}
      quotes={[
        {
          text: "The way these agents collaborate is truly remarkable. It's not just about individual capabilities, but how they complement each other to provide a more complete picture.",
          author: "Daniel Anderson"
        },
        {
          text: "This represents a fundamental shift in how we think about AI assistance. It's no longer about single-purpose tools, but about creating a network of intelligent agents that work together.",
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