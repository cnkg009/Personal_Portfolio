import React, { useState } from 'react'
import  Button  from "../components/Button"
import { Mail } from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validate = () => {
    let valid = true
    const newErrors = {
      name: '',
      email: '',
      message: ''
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
      valid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      // Handle form submission
      alert('Form submitted successfully!')
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      setErrors({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  return (
    <section id="contact" className="py-12 md:py-24 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-white text-gray-900 sm:text-sm ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 sm:text-sm ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-white text-gray-900 sm:text-sm ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            <Button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300 ease-in-out">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage