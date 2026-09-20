import React from 'react'
import { motion } from 'framer-motion'
import { Shield, DollarSign, CreditCard } from 'lucide-react'
import './DirectBookingBenefits.css'

const DirectBookingBenefits = () => {
  const benefits = [
    {
      icon: <Shield size={32} />,
      title: 'Best Price Guarantee',
      description: 'Book directly with us for the best prices on all cruise packages.'
    },
    {
      icon: <DollarSign size={32} />,
      title: 'No-Cost EMI',
      description: 'Flexible payment options with no-cost EMI available on select cruises.'
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Why Book Directly',
      description: 'Exclusive offers, priority support and seamless booking experience.'
    }
  ]

  return (
    <section className="direct-booking-benefits section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Book Directly With Us</h2>
        </motion.div>

        <div className="grid grid-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DirectBookingBenefits
