import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { scrollToBookingForm } from '../utils/scrollToBookingForm'
import './CruiseOptions.css'

const options = [
  {
    id: '2-night-weekend',
    duration: '2-Night Weekend Cruise',
    nights: '2 nights',
    route: 'Mumbai → Goa',
    description: 'A short, stylish break — sail out Friday, come back ready for the week.',
    badge: 'Weekend getaway',
    image: '/image copy 7.png'
  },
  {
    id: '2-night-goa',
    duration: '2-Night Goa Cruise',
    nights: '2 nights',
    route: 'Goa coastal loop',
    description: 'Sun, sea and Goa’s coastline — without the hotel scramble.',
    badge: 'Goa',
    image: '/image copy 8.png'
  },
  {
    id: '3-night-lakshadweep',
    duration: '3-Night Lakshadweep Cruise',
    nights: '3 nights',
    route: 'Island adventure',
    description: 'Turquoise water, quiet beaches and days that move at sea-speed.',
    badge: 'Island escape',
    image: '/image copy 9.png'
  }
]

const CruiseOptions = () => {
  const openSearch = () => {
    scrollToBookingForm()
  }

  return (
    <section id="offers" className="cruise-options">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">Curated sailings</span>
          <h2 className="section-title"><span>Choose your</span> perfect escape</h2>
          <p className="section-subtitle">
            Weekend hops or island days — three easy ways to start the holiday.
          </p>
        </motion.div>

        <div className="cruise-options-grid">
          {options.map((option, index) => (
            <motion.article
              key={option.id}
              className="cruise-option-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={openSearch}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openSearch()
                }
              }}
            >
              <div className="cruise-card-image-wrapper">
                <img src={option.image} alt="" className="cruise-card-image" loading="lazy" />
                <span className="cruise-card-badge">{option.badge}</span>
              </div>
              <div className="cruise-card-content">
                <h3 className="cruise-card-title">{option.duration}</h3>
                <div className="cruise-card-meta">
                  <span><Clock size={14} /> {option.nights}</span>
                  <span><MapPin size={14} /> {option.route}</span>
                </div>
                <p className="cruise-card-description">{option.description}</p>
                <button className="cruise-card-cta" type="button" onClick={openSearch}>
                  Explore cruise
                  <ArrowRight size={17} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CruiseOptions
