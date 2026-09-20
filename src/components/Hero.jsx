import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { submitLead } from '../utils/submitLead'
import './Hero.css'

const Hero = () => {
  const videoRef = useRef(null)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isCallbackOpen, setIsCallbackOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    destination: '',
    name: '',
    email: ''
  })

  const destinations = ['Mumbai', 'Goa', 'Kochi', 'Lakshadweep', 'Maldives', 'Chennai']

  const selectDestination = (value) => {
    setFormData((prev) => ({ ...prev, destination: value }))
    setOpenDropdown(null)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.destination || !formData.name || !formData.email || isSubmitting) return

    setIsSubmitting(true)
    setSubmitError('')
    try {
      await submitLead({
        destination: formData.destination,
        name: formData.name,
        email: formData.email
      })
      setFormData({ destination: '', name: '', email: '' })
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError(error.message || 'Could not send your details. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const openCallback = () => {
    if (window.openOfferModal) {
      window.openOfferModal()
      return
    }
    setIsCallbackOpen(true)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.search-filter-field')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openDropdown])

  return (
    <section className="hero" id="top">
      <div className="hero-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video"
        >
          <source src="/vedio1.mp4" type="video/mp4" />
        </video>
        <div className="hero-fade" />
      </div>

      <button className="callback-tab" type="button" onClick={openCallback}>
        <span>Request a callback</span>
      </button>

      <div id="vacation-search" className="hero-search-card-wrapper">
        <form className="hero-search-card" onSubmit={handleSubmit}>
          <div className="hero-form-header">
            <img src="/assets/cordelia-logo.svg" alt="Cordelia Cruises" className="hero-form-logo" />
            <h2 className="hero-form-title">Book your Journey Now</h2>
          </div>

          {isSubmitted ? (
            <p className="hero-form-success">Thank you. Our cruise expert will contact you shortly.</p>
          ) : (
            <div className="search-filters-grid">
              <div className="search-filter-field">
                <label className="filter-label">Where to?</label>
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setOpenDropdown(openDropdown === 'destination' ? null : 'destination')}
                >
                  <span className={formData.destination ? 'has-value' : ''}>
                    {formData.destination || 'Select destination'}
                  </span>
                  <ChevronDown size={18} className={`chevron ${openDropdown === 'destination' ? 'open' : ''}`} />
                </button>
                {openDropdown === 'destination' && (
                  <div className="dropdown-menu">
                    {destinations.map((dest) => (
                      <div key={dest} className="dropdown-item" onClick={() => selectDestination(dest)}>
                        {dest}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="field-divider" />

              <div className="search-filter-field">
                <label className="filter-label" htmlFor="hero-name">Name</label>
                <input
                  id="hero-name"
                  name="name"
                  type="text"
                  className="filter-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-divider" />

              <div className="search-filter-field">
                <label className="filter-label" htmlFor="hero-email">Email</label>
                <input
                  id="hero-email"
                  name="email"
                  type="email"
                  className="filter-input"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="hero-form-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Get Cruise Offers'}
              </button>
            </div>
          )}
          {submitError && <p className="hero-form-error">{submitError}</p>}
        </form>
      </div>

      {isCallbackOpen && (
        <div className="callback-panel" role="dialog" aria-label="Request a callback">
          <button className="callback-close" onClick={() => setIsCallbackOpen(false)} aria-label="Close">
            <X size={18} />
          </button>
          <p>Our cruise expert will call you back shortly.</p>
        </div>
      )}
    </section>
  )
}

export default Hero
