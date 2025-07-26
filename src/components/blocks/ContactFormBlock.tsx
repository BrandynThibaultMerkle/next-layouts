'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

interface ContactFormBlockProps {
  title?: string
  description?: string
  fields: string[]
  submitText?: string
}

export function ContactFormBlock({
  title = 'Contact Us',
  description,
  fields,
  submitText = 'Send Message',
}: ContactFormBlockProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Form submitted:', formData)
    setFormData({})
    setIsSubmitting(false)
    alert('Message sent successfully!')
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const renderField = (field: string) => {
    const value = formData[field] || ''

    switch (field) {
      case 'name':
        return (
          <div key={field}>
            <label htmlFor={field} className='block text-sm font-medium mb-2'>
              Name *
            </label>
            <input
              type='text'
              id={field}
              required
              value={value}
              onChange={(e) => handleChange(field, e.target.value)}
              className='w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring'
              placeholder='Your name'
            />
          </div>
        )

      case 'email':
        return (
          <div key={field}>
            <label htmlFor={field} className='block text-sm font-medium mb-2'>
              Email *
            </label>
            <input
              type='email'
              id={field}
              required
              value={value}
              onChange={(e) => handleChange(field, e.target.value)}
              className='w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring'
              placeholder='your@email.com'
            />
          </div>
        )

      case 'phone':
        return (
          <div key={field}>
            <label htmlFor={field} className='block text-sm font-medium mb-2'>
              Phone
            </label>
            <input
              type='tel'
              id={field}
              value={value}
              onChange={(e) => handleChange(field, e.target.value)}
              className='w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring'
              placeholder='Your phone number'
            />
          </div>
        )

      case 'subject':
        return (
          <div key={field}>
            <label htmlFor={field} className='block text-sm font-medium mb-2'>
              Subject
            </label>
            <input
              type='text'
              id={field}
              value={value}
              onChange={(e) => handleChange(field, e.target.value)}
              className='w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring'
              placeholder='Subject'
            />
          </div>
        )

      case 'message':
        return (
          <div key={field}>
            <label htmlFor={field} className='block text-sm font-medium mb-2'>
              Message *
            </label>
            <textarea
              id={field}
              required
              rows={5}
              value={value}
              onChange={(e) => handleChange(field, e.target.value)}
              className='w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-vertical'
              placeholder='Your message'
            />
          </div>
        )

      default:
        return (
          <div key={field}>
            <label
              htmlFor={field}
              className='block text-sm font-medium mb-2 capitalize'>
              {field}
            </label>
            <input
              type='text'
              id={field}
              value={value}
              onChange={(e) => handleChange(field, e.target.value)}
              className='w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring'
              placeholder={`Enter ${field}`}
            />
          </div>
        )
    }
  }

  return (
    <section className='py-16 px-4'>
      <div className='container mx-auto max-w-2xl'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>{title}</h2>
          {description && (
            <p className='text-lg text-muted-foreground'>{description}</p>
          )}
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {fields.map(renderField)}

          <Button
            type='submit'
            size='large'
            disabled={isSubmitting}
            className='w-full'>
            {isSubmitting ? 'Sending...' : submitText}
          </Button>
        </form>
      </div>
    </section>
  )
}
