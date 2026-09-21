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

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ destination: '', fullName: '', email: '', phone: '' })
      setIsSubmitted(false)
      setSubmitError('')
      setIsSubmitting(false)
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
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   if (!formData.destination || !formData.fullName || !formData.email || !formData.phone || isSubmitting) return

  //   setIsSubmitting(true)
  //   setSubmitError('')
  //   try {
  //     await submitLead({
  //       destination: formData.destination,
  //       name: formData.fullName,
  //       email: formData.email,
  //       phone: formData.phone
  //     })
  //     setFormData({ destination: '', fullName: '', email: '', phone: '' })
  //     setIsSubmitted(true)
  //   } catch (error) {
  //     setSubmitError(error.message || 'Could not send your details. Please try again.')
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }


  const handleSubmit = async (e) => {
  e.preventDefault()

  if (
    !formData.destination ||
    !formData.fullName ||
    !formData.email ||
    !formData.phone ||
    isSubmitting
  ) {
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

    // Form successfully submitted → Thank You page
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <>
                <img src="/assets/cordelia-logo.svg" alt="Cordelia Cruises" className="modal-logo" />
                <h2 id="modal-title" className="modal-title">Book your Journey Now</h2>
                <p className="modal-subtitle">
                  Tell us where you want to go and our cruise expert will help you plan it.
                </p>

                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="destination" className="form-label">
                      Where to?
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      className="form-input"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select destination</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Goa">Goa</option>
                      <option value="Kochi">Kochi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Chennai">Chennai</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-input"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    id="enquiry-form-submit"
                    className="btn btn-cta modal-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Get Cruise Offers'}
                  </button>

                  {submitError && <p className="form-privacy" style={{ color: '#c43b3b' }}>{submitError}</p>}

                  <p className="form-privacy">
                    Your details are safe with us. A cruise expert will contact you shortly.
                  </p>
                </form>
              </>
            ) : (
              <div className="modal-success">
                <div className="success-icon">✓</div>
                <h2 className="modal-title">Thank You!</h2>
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
