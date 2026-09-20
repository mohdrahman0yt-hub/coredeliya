import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Ananya Sharma',
    trip: '3-Night Lakshadweep Cruise',
    quote: 'From the moment we boarded, everything felt effortless. The islands were stunning and the team made our anniversary trip unforgettable.',
    rating: 5
  },
  {
    name: 'Rohan Mehta',
    trip: 'Weekend Cruise from Mumbai',
    quote: 'Perfect short break. Great food, live music, and we actually switched off. Already planning the next sailing with friends.',
    rating: 5
  },
  {
    name: 'Priya & Kunal Iyer',
    trip: 'Goa Coastal Cruise',
    quote: 'Travelling with kids is usually chaos. Onboard it was easy, safe and fun for all of us. The stateroom was bigger than we expected.',
    rating: 5
  },
  {
    name: 'Sana Qureshi',
    trip: 'Cordelia Sky Experience',
    quote: 'The spa, the views, the evenings by the pool — it never felt crowded. A genuinely premium holiday without leaving Indian waters.',
    rating: 5
  },
  {
    name: 'Vikram Patel',
    trip: 'Cordelia Sun Voyage',
    quote: 'Dining and entertainment were a highlight every evening. Smooth sailing, attentive staff, and a holiday we keep recommending.',
    rating: 5
  }
]

const avatarColors = ['#92278F', '#c43b8e', '#F16F5B', '#6b2d6e', '#d45a4a']

const Testimonials = () => {
  const [paused, setPaused] = useState(false)
  const looped = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">Guests who sailed with us</h2>
          <p className="section-subtitle">
            Real stories from travellers who chose Cordelia for their next escape.
          </p>
          <div className="testimonials-score">
            <div className="testimonials-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <strong>4.9</strong>
            <span>average from recent sailings</span>
          </div>
        </motion.div>
      </div>

      <div
        className={`testimonials-slider ${paused ? 'is-paused' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="testimonials-track">
          {looped.map((item, index) => (
            <article key={`${item.name}-${index}`} className="testimonial-card">
              <Quote className="testimonial-quote-icon" size={28} />
              <p className="testimonial-text">{item.quote}</p>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: avatarColors[index % avatarColors.length] }}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.trip}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
