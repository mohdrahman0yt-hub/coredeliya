import React from 'react'
import { motion } from 'framer-motion'
import './FinalCTA.css'

const FinalCTA = () => {
  const openOfferModal = () => {
    if (window.openOfferModal) {
      window.openOfferModal()
    }
  }

  return (
    <section id="final-cta" className="final-cta">
      <div className="final-cta-background">
        <img 
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1920&q=80" 
          alt="Ocean cruise background"
          loading="lazy"
        />
        <div className="final-cta-overlay"></div>
      </div>

      <div className="container">
        <motion.div 
          className="final-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="final-cta-title">Your Next <span>Escape Is Closer</span> Than You Think.</h2>
          <p className="final-cta-description">
            Tell us your travel plans and let our cruise experts help you discover the right journey.
          </p>
          <div className="final-cta-buttons">
            <button
              id="final-cta-primary"
              className="btn btn-primary"
              onClick={openOfferModal}
            >
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA
