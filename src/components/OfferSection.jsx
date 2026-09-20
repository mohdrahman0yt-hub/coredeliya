import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './OfferSection.css'

const OfferSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const offers = [
    {
      id: 'weekend',
      title: 'Weekend Cruise',
      description: 'Escape the routine with a relaxing weekend at sea.',
      image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=600&q=80',
      cta: 'Explore Weekend Cruises'
    },
    {
      id: 'goa',
      title: 'Goa Getaway',
      description: 'Sail into a vibrant coastal escape with unforgettable onboard experiences.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
      cta: 'Explore Goa Cruises'
    },
    {
      id: 'lakshadweep',
      title: 'Lakshadweep Escape',
      description: 'Discover pristine islands, turquoise waters and an unforgettable cruise journey.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      cta: 'Explore Lakshadweep'
    }
  ]

  return (
    <section id="offers" className="offer-section section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Your Perfect Cruise Starts Here</h2>
        </motion.div>

        <div className="grid grid-3">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="offer-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="offer-card-image">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  loading="lazy"
                />
              </div>
              <div className="offer-card-content">
                <h3 className="offer-card-title">{offer.title}</h3>
                <p className="offer-card-description">{offer.description}</p>
                <button 
                  className="offer-card-cta"
                  onClick={() => scrollToSection('enquiry-form')}
                >
                  {offer.cta}
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfferSection
