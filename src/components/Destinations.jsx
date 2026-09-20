import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { scrollToBookingForm } from '../utils/scrollToBookingForm'
import './Destinations.css'

const destinations = [
  {
    id: 'goa',
    name: 'Goa',
    tag: 'Coastal favourite',
    note: 'Sun, spice and easy days ashore',
    image: '/image copy 7.png',
    featured: true
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    tag: 'Island escape',
    note: 'Turquoise water, quiet beaches',
    image: '/image copy 9.png'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    tag: 'Where it begins',
    note: 'Sail out of the city skyline',
    image: '/image copy 8.png'
  },
  {
    id: 'open-sea',
    name: 'Open sea',
    tag: 'Weekend sailing',
    note: 'A short break that still feels far away',
    image: '/image copy 6.png'
  }
]

const Destinations = () => {
  const openSearch = () => {
    scrollToBookingForm()
  }

  return (
    <section id="destinations" className="destinations">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">Destinations</span>
          <h2 className="section-title">Where will <span>you sail next?</span></h2>
          <p className="section-subtitle">
            Pristine islands, vibrant cities and cultural gems — routes that mix adventure with a proper holiday.
          </p>
        </motion.div>

        <div className="destinations-mosaic">
          {destinations.map((destination, index) => (
            <motion.button
              key={destination.id}
              id={`destination-${destination.id}`}
              type="button"
              className={`destination-tile ${destination.featured ? 'is-featured' : ''}`}
              onClick={openSearch}
              initial={{ opacity: 1, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <img src={destination.image} alt="" />
              <span className="destination-tile-overlay" />
              <span className="destination-tile-body">
                <span className="destination-tile-tag">{destination.tag}</span>
                <span className="destination-tile-name">{destination.name}</span>
                <span className="destination-tile-note">{destination.note}</span>
              </span>
              <span className="destination-tile-go" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </motion.button>
          ))}
        </div>

        <div className="destination-chips">
          {['Kochi', 'Malé & Colombo', 'Southeast Asia', 'Vizag', 'Puducherry'].map((place) => (
            <button key={place} type="button" onClick={openSearch}>
              {place}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
