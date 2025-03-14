"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm } from "@/lib/actions"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState<boolean | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setSuccess(null)
    setMessage("")

    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
      setSuccess(response.success)

      // Clear form if successful
      if (response.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      }
    } catch {
      setMessage("Something went wrong. Please try again.")
      setSuccess(false)
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6 dark:bg-gray-900 dark:border-gray-800">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            className="dark:bg-gray-950 dark:border-gray-800"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="dark:bg-gray-950 dark:border-gray-800"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            className="dark:bg-gray-950 dark:border-gray-800 min-h-[120px]"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white dark:bg-teal-600 dark:hover:bg-teal-700"
          disabled={pending}
        >
          {pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
        {message && (
          <div
            className={`flex items-center justify-center gap-2 text-sm mt-4 ${success ? "text-teal-600 dark:text-teal-400" : "text-red-500 dark:text-red-400"
              }`}
          >
            {success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <p>{message}</p>
          </div>
        )}
      </form>
    </Card>
  )
}

