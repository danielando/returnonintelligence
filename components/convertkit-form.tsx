"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function ConvertKitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('https://app.convertkit.com/forms/7891215/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email_address: email,
          api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      // Redirect to thank you page with full domain
      window.location.href = 'https://returnonintelligence.ai/thank-you'
    } catch (err) {
      setError('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="flex flex-col sm:flex-row w-full gap-3">
        {error && (
          <div className="text-red-500 text-sm mb-2">{error}</div>
        )}
        <div className="flex flex-col sm:flex-row w-full gap-3">
          <div className="flex-1">
            <Input
              className="bg-transparent border-white text-white placeholder:text-white/70 h-10 rounded-full focus:ring-0 focus:border-white w-full"
              name="email_address"
              aria-label="Email Address"
              placeholder="Enter your email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-[#fc3c3d] hover:bg-[#e03536] text-white h-10 px-8 rounded-full whitespace-nowrap"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>
      </div>
    </form>
  )
} 