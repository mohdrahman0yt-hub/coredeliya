import React from 'react'
import { motion } from 'framer-motion'
import { scrollToBookingForm } from '../utils/scrollToBookingForm'
import './Fleet.css'

const ships = [
  {
    id: 'cordelia-sun',
    name: 'Cordelia Sun',
    arriving: 'Arriving 2027',
    image: '/fleet/sun.png',
    position: '28% 78%'
  },
  {
    id: 'cordelia-sky',
    name: 'Cordelia Sky',
    arriving: 'Arriving 2026',
    image: '/fleet/sky.png',
    position: '22% 72%'
  },
  {
    id: 'cordelia-empress',
    name: 'Cordelia Empress',
    arriving: null,
    image: '/fleet/empress.png',
    position: '18% 68%'
  }
]

const Fleet = () => {
  const openBookingForm = () => {
    scrollToBookingForm()
  }

  return (
    <section id="cruise-experience" className="fleet">
      <div className="fleet-bg" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="fleet-header"
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="fleet-title">
            Our Fleet <span>Your Future Cruises</span>
          </h2>
          <p className="fleet-subtitle">
            Our growing fleet is designed to keep you exploring year after year.
          </p>
        </motion.div>

        <div className="fleet-cards">
          {ships.map((ship, index) => (
            <motion.button
              key={ship.id}
              type="button"
              className="fleet-card"
              onClick={openBookingForm}
              initial={{ opacity: 1, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <img src={ship.image} alt="" style={{ objectPosition: ship.position }} />
              {ship.arriving && <span className="fleet-card-badge">{ship.arriving}</span>}
              <span className="fleet-card-copy">
                <span className="fleet-card-name">{ship.name}</span>
                <span className="fleet-card-cta">Explore <span aria-hidden="true">›</span></span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fleet
