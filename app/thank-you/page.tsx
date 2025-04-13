import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Podcast Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 relative">
              <Image
                src="/images/podcast-logo.png"
                alt="Return on Intelligence Podcast"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-[#004851] mb-6">
            Thank You for Subscribing to Return on Intelligence!
          </h1>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm text-left">
            <h2 className="text-2xl font-serif text-[#004851] mb-6">What Happens Next</h2>
            <p className="text-[#4a5568] mb-8">
              Check your inbox - You'll receive a welcome email from Daniel Anderson (Microsoft MVP) and Abram Jackson (PM for extensibility of Copilot for Microsoft 365) shortly.
            </p>

            <h2 className="text-2xl font-serif text-[#004851] mb-6">We'd Love to Hear From You!</h2>
            <p className="text-[#4a5568] mb-4">
              When you receive our welcome email, please take a moment to reply and let us know:
            </p>
            <ul className="list-disc pl-6 text-[#4a5568] mb-8 space-y-2">
              <li>What AI challenges is your organization currently facing?</li>
              <li>Which areas of your business are you most interested in optimizing with AI?</li>
              <li>What specific Microsoft Copilot or automation topics would you like us to cover?</li>
            </ul>
            <p className="text-[#4a5568] mb-12">
              Your input directly shapes future episodes as we continue exploring how AI delivers tangible returns for forward-thinking businesses like yours.
            </p>

            <h2 className="text-2xl font-serif text-[#004851] mb-6">Stay Connected</h2>
            <p className="text-[#4a5568] mb-8">
              Return on Intelligence is dedicated to helping business leaders and IT professionals turn AI from a concept into a competitive advantage. We cut through the theoretical noise to deliver actionable insights on Microsoft Copilot, automation strategies, and scaling AI across your operations.
            </p>
            <p className="text-[#4a5568] mb-8">
              We're excited to have you join us on this journey!
            </p>
            <div className="text-[#4a5568]">
              <p className="font-medium">Daniel Anderson (Microsoft MVP) & Abram Jackson (PM for extensibility of Copilot for Microsoft 365)</p>
              <p>Hosts, Return on Intelligence Podcast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 