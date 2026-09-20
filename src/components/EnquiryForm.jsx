import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './EnquiryForm.css'

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/
    return re.test(phone)
  }

  return (
    <section id="enquiry-form" className="enquiry-form-section">
      <div className="container">
        <motion.div 
          className="enquiry-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="enquiry-card-content">
            {!isSubmitted ? (
              <>
                <h2 className="enquiry-title">Get Exclusive Cruise Offers</h2>
                <p className="enquiry-subtitle">
                  Share your details and our cruise expert will help you find the right cruise experience.
                </p>

                <form className="enquiry-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-input"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    id="enquiry-form-submit"
                    className="btn btn-cta enquiry-submit"
                  >
                    Get Cruise Offers
                  </button>

                  <p className="enquiry-privacy">
                    Your details are safe with us. A cruise expert will contact you shortly.
                  </p>
                </form>
              </>
            ) : (
              <div className="enquiry-success">
                <div className="success-icon">✓</div>
                <h2 className="enquiry-title">Thank You!</h2>
                <p className="enquiry-subtitle">
                  Our cruise expert will contact you shortly.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnquiryForm
