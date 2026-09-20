import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import './CruiseExperience.css'

const CruiseExperience = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    'Entertainment',
    'Accommodation',
    'Dining',
    'Bars & Lounges',
    'Activities'
  ]

  return (
    <section id="cruise-experience" className="cruise-experience section">
      <div className="container">
        <div className="grid grid-2">
          <motion.div 
            className="experience-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/image copy 6.png" 
              alt="Cruise ship experience"
              loading="lazy"
            />
          </motion.div>

          <motion.div 
            className="experience-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="experience-title">More Than a Cruise. It's the Holiday.</h2>
            
            <ul className="experience-features">
              {features.map((feature, index) => (
                <li key={index} className="experience-feature">
                  <Check size={20} className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className="btn btn-primary experience-cta"
              onClick={() => scrollToSection('vacation-search')}
            >
              Plan My Cruise
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CruiseExperience
