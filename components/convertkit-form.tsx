"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Script from "next/script"
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
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
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
    <>
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" />
      <form 
        action="https://app.kit.com/forms/7891215/subscriptions" 
        className="seva-form formkit-form w-full"
        method="post" 
        data-sv-form="7891215" 
        data-uid="b6e7f4a69f" 
        data-format="inline" 
        data-version="5"
      >
        <div data-style="clean" className="flex flex-col sm:flex-row w-full gap-3">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" data-stacked="false" className="flex flex-col sm:flex-row w-full gap-3">
            <div className="formkit-field flex-1">
              <Input
                className="formkit-input bg-transparent border-white text-white placeholder:text-white/70 h-10 rounded-full focus:ring-0 focus:border-white w-full"
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
              data-element="submit" 
              className="formkit-submit bg-[#fc3c3d] hover:bg-[#e03536] text-white h-10 px-8 rounded-full whitespace-nowrap"
            >
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Subscribe</span>
            </Button>
          </div>
        </div>
      </form>
    </>
  )
} 