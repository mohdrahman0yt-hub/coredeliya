
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { submitLead } from '../utils/submitLead'
import './OfferModal.css'

const OfferModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    destination: '',
    fullName: '',
    email: '',
    phone: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState({})

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        destination: '',
        fullName: '',
        email: '',
        phone: '',
      })

      setIsSubmitted(false)
      setSubmitError('')
      setIsSubmitting(false)
      setErrors({})
    }
  }, [isOpen])

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  // Form validation
  const validateForm = () => {
    const newErrors = {}

    // Destination validation
    if (!formData.destination.trim()) {
      newErrors.destination = 'This field is required'
    }

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'This field is required'
    } else if (
      !/^[a-zA-Z\s]{2,50}$/.test(formData.fullName.trim())
    ) {
      newErrors.fullName = 'Please enter a valid name'
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'This field is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'This field is required'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSubmitting) return

    const isValid = validateForm()

    if (!isValid) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      await submitLead({
        destination: formData.destination,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
      })

      // Form successfully submitted
      onClose()
      navigate('/thank-you')
    } catch (error) {
      setSubmitError(
        error.message || 'Could not send your details. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Remove field error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))

    // Remove general submit error
    if (submitError) {
      setSubmitError('')
    }
  }

  // Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="modal-content"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close modal"
              type="button"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <>
                <img
                  src="/assets/cordelia-logo.svg"
                  alt="Cordelia Cruises"
                  className="modal-logo"
                />

                <h2
                  id="modal-title"
                  className="modal-title"
                >
                  Book your Journey Now
                </h2>

                <p className="modal-subtitle">
                  Tell us where you want to go and our cruise expert will
                  help you plan it.
                </p>

                <form
                  className="modal-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Destination */}
                  <div className="form-group">
                    <label
                      htmlFor="destination"
                      className="form-label"
                    >
                      Where to?
                    </label>

                    <select
                      id="destination"
                      name="destination"
                      className={`form-input ${
                        errors.destination ? 'input-error' : ''
                      }`}
                      value={formData.destination}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select destination
                      </option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Goa">Goa</option>
                      <option value="Kochi">Kochi</option>
                      <option value="Lakshadweep">
                        Lakshadweep
                      </option>
                      <option value="Maldives">Maldives</option>
                      <option value="Chennai">Chennai</option>
                    </select>

                    {errors.destination && (
                      <span className="field-error">
                        {errors.destination}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <div className="form-group">
                    <label
                      htmlFor="fullName"
                      className="form-label"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={`form-input ${
                        errors.fullName ? 'input-error' : ''
                      }`}
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />

                    {errors.fullName && (
                      <span className="field-error">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label
                      htmlFor="phone"
                      className="form-label"
                    >
                      Phone
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-input ${
                        errors.phone ? 'input-error' : ''
                      }`}
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, '')
                          .slice(0, 10)

                        setFormData((prev) => ({
                          ...prev,
                          phone: value,
                        }))

                        setErrors((prev) => ({
                          ...prev,
                          phone: '',
                        }))

                        if (submitError) {
                          setSubmitError('')
                        }
                      }}
                      inputMode="numeric"
                      maxLength={10}
                    />

                    {errors.phone && (
                      <span className="field-error">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="form-label"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${
                        errors.email ? 'input-error' : ''
                      }`}
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <span className="field-error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="enquiry-form-submit"
                    className="btn btn-cta modal-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? 'Sending...'
                      : 'Get Cruise Offers'}
                  </button>

                  {/* Server / submission error */}
                  {submitError && (
                    <p
                      className="form-privacy"
                      style={{ color: '#c43b3b' }}
                    >
                      {submitError}
                    </p>
                  )}

                  <p className="form-privacy">
                    Your details are safe with us. A cruise expert will
                    contact you shortly.
                  </p>
                </form>
              </>
            ) : (
              <div className="modal-success">
                <div className="success-icon">
                  ✓
                </div>

                <h2 className="modal-title">
                  Thank You!
                </h2>

                <p className="modal-subtitle">
                  Our cruise expert will contact you shortly.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OfferModal