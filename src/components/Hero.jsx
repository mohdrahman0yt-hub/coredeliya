
import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { submitLead } from '../utils/submitLead'
import './Hero.css'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  const videoRef = useRef(null)

  const [openDropdown, setOpenDropdown] = useState(null)
  const [isCallbackOpen, setIsCallbackOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Validation errors
  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    destination: '',
    name: '',
    email: '',
    phone: '',
  })

  const destinations = [
    'Mumbai',
    'Goa',
    'Kochi',
    'Lakshadweep',
    'Maldives',
    'Chennai',
  ]

  // =========================
  // DESTINATION SELECT
  // =========================

  const selectDestination = (value) => {
    setFormData((prev) => ({
      ...prev,
      destination: value,
    }))

    // Remove destination error
    setErrors((prev) => ({
      ...prev,
      destination: '',
    }))

    setOpenDropdown(null)
  }

  // =========================
  // INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Remove error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))

    // Remove submit error
    if (submitError) {
      setSubmitError('')
    }
  }

  // =========================
  // FORM VALIDATION
  // =========================

  const validateForm = () => {
    const newErrors = {}

    // Destination
    if (!formData.destination.trim()) {
      newErrors.destination = 'This field is required'
    }

    // Name
    if (!formData.name.trim()) {
      newErrors.name = 'This field is required'
    } else if (
      !/^[a-zA-Z\s]{2,50}$/.test(formData.name.trim())
    ) {
      newErrors.name = 'Please enter a valid name'
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'This field is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone =
        'Please enter a valid 10-digit phone number'
    }

    // Email
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

  // =========================
  // FORM SUBMIT
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Prevent double submission
    if (isSubmitting) {
      return
    }

    // Validate form
    const isValid = validateForm()

    if (!isValid) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      await submitLead({
        destination: formData.destination,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      })

      // Form successfully submitted
      // Redirect to Thank You page
      navigate('/thank-you')
    } catch (error) {
      setSubmitError(
        error.message ||
          'Could not send your details. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // =========================
  // CALLBACK BUTTON
  // =========================

  const openCallback = () => {
    if (window.openOfferModal) {
      window.openOfferModal()
      return
    }

    setIsCallbackOpen(true)
  }

  // =========================
  // VIDEO AUTOPLAY
  // =========================

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  // =========================
  // CLOSE DROPDOWN OUTSIDE
  // =========================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdown &&
        !event.target.closest('.search-filter-field')
      ) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
    }
  }, [openDropdown])

  // =========================
  // RENDER
  // =========================

  return (
    <section className="hero" id="top">

      {/* =========================
          HERO BACKGROUND
      ========================= */}

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

      {/* =========================
          CALLBACK BUTTON
      ========================= */}

      <button
        className="callback-tab"
        type="button"
        onClick={openCallback}
      >
        <span>Request a callback</span>
      </button>

      {/* =========================
          HERO FORM
      ========================= */}

      <div
        id="vacation-search"
        className="hero-search-card-wrapper"
      >
        <form
          className="hero-search-card"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* FORM HEADER */}

          <div className="hero-form-header">
            <img
              src="/assets/cordelia-logo.svg"
              alt="Cordelia Cruises"
              className="hero-form-logo"
            />

            <h2 className="hero-form-title">
              Book your Journey Now
            </h2>
          </div>

          {/* =========================
              FORM FIELDS
          ========================= */}

          <div className="search-filters-grid">

            {/* =========================
                DESTINATION
            ========================= */}

            <div className="search-filter-field">

              <label className="filter-label">
                Where to?
              </label>

              <button
                type="button"
                className={`filter-button ${
                  errors.destination
                    ? 'input-error'
                    : ''
                }`}
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === 'destination'
                      ? null
                      : 'destination'
                  )
                }
              >
                <span
                  className={
                    formData.destination
                      ? 'has-value'
                      : ''
                  }
                >
                  {formData.destination ||
                    'Select destination'}
                </span>

                <ChevronDown
                  size={18}
                  className={`chevron ${
                    openDropdown === 'destination'
                      ? 'open'
                      : ''
                  }`}
                />
              </button>

              {openDropdown === 'destination' && (
                <div className="dropdown-menu">
                  {destinations.map((dest) => (
                    <div
                      key={dest}
                      className="dropdown-item"
                      onClick={() =>
                        selectDestination(dest)
                      }
                    >
                      {dest}
                    </div>
                  ))}
                </div>
              )}

              {errors.destination && (
                <span className="field-error">
                  {errors.destination}
                </span>
              )}

            </div>

            {/* DIVIDER */}

            <div className="field-divider" />

            {/* =========================
                NAME
            ========================= */}

            <div className="search-filter-field">

              <label
                className="filter-label"
                htmlFor="hero-name"
              >
                Name
              </label>

              <input
                id="hero-name"
                name="name"
                type="text"
                className={`filter-input ${
                  errors.name
                    ? 'input-error'
                    : ''
                }`}
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <span className="field-error">
                  {errors.name}
                </span>
              )}

            </div>

            {/* DIVIDER */}

            <div className="field-divider" />

            {/* =========================
                PHONE
            ========================= */}

            <div className="search-filter-field">

              <label
                className="filter-label"
                htmlFor="hero-phone"
              >
                Phone
              </label>

              <input
                id="hero-phone"
                name="phone"
                type="tel"
                className={`filter-input ${
                  errors.phone
                    ? 'input-error'
                    : ''
                }`}
                placeholder="Your phone"
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

            {/* DIVIDER */}

            <div className="field-divider" />

            {/* =========================
                EMAIL
            ========================= */}

            <div className="search-filter-field">

              <label
                className="filter-label"
                htmlFor="hero-email"
              >
                Email
              </label>

              <input
                id="hero-email"
                name="email"
                type="email"
                className={`filter-input ${
                  errors.email
                    ? 'input-error'
                    : ''
                }`}
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <span className="field-error">
                  {errors.email}
                </span>
              )}

            </div>

            {/* =========================
                SUBMIT BUTTON
            ========================= */}

            <button
              className="hero-form-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? 'Sending...'
                : 'Get Cruise Offers'}
            </button>

          </div>

          {/* =========================
              SUBMIT ERROR
          ========================= */}

          {submitError && (
            <p className="hero-form-error">
              {submitError}
            </p>
          )}

        </form>
      </div>

      {/* =========================
          CALLBACK PANEL
      ========================= */}

      {isCallbackOpen && (
        <div
          className="callback-panel"
          role="dialog"
          aria-label="Request a callback"
        >

          <button
            className="callback-close"
            onClick={() =>
              setIsCallbackOpen(false)
            }
            aria-label="Close"
            type="button"
          >
            <X size={18} />
          </button>

          <p>
            Our cruise expert will call you back shortly.
          </p>

        </div>
      )}

    </section>
  )
}

export default Hero