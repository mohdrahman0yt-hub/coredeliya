import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, Ship } from 'lucide-react'
import './CruiseItineraries.css'

const CruiseItineraries = () => {
  const [activeTab, setActiveTab] = useState('weekend')
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories = [
    { id: 'weekend', label: 'Weekend Cruises' },
    { id: 'kochi', label: 'Cruise from Kochi' },
    { id: 'goa', label: 'Cruise from Goa' },
    { id: 'lakshadweep', label: 'Cruise to Lakshadweep' },
    { id: 'maldives', label: 'Cruise to Maldives' }
  ]

  const itineraries = {
    weekend: [
      {
        id: 'weekend-1',
        title: '2-Night Mumbai Weekend',
        badge: 'WEEKEND ESCAPE',
        image: '/image copy 6.png',
        date: '19 Sep 2026 → 21 Sep 2026',
        ship: 'EMPRESS',
        route: 'Mumbai → Goa',
        cta: 'Check Current Offers'
      },
      {
        id: 'weekend-2',
        title: '2-Night Goa Weekend',
        badge: 'COASTAL GETAWAY',
        image: '/image copy 7.png',
        date: '26 Sep 2026 → 28 Sep 2026',
        ship: 'EMPRESS',
        route: 'Goa → Mumbai',
        cta: 'Check Current Offers'
      },
      {
        id: 'weekend-3',
        title: '3-Night Weekend Escape',
        badge: 'EXTENDED WEEKEND',
        image: '/image copy 8.png',
        date: '03 Oct 2026 → 06 Oct 2026',
        ship: 'EMPRESS',
        route: 'Mumbai → Goa → Mumbai',
        cta: 'Check Current Offers'
      }
    ],
    kochi: [
      {
        id: 'kochi-1',
        title: '3-Night Kochi Adventure',
        badge: 'SOUTH INDIA',
        image: '/image copy 8.png',
        date: '10 Oct 2026 → 13 Oct 2026',
        ship: 'EMPRESS',
        route: 'Kochi → Lakshadweep → Kochi',
        cta: 'Check Current Offers'
      },
      {
        id: 'kochi-2',
        title: '4-Night Coastal Journey',
        badge: 'ISLAND HOPPING',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        date: '17 Oct 2026 → 21 Oct 2026',
        ship: 'EMPRESS',
        route: 'Kochi → Goa → Kochi',
        cta: 'Check Current Offers'
      }
    ],
    goa: [
      {
        id: 'goa-1',
        title: '2-Night Goa Coastal',
        badge: 'GOA EXPERIENCE',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        date: '24 Oct 2026 → 26 Oct 2026',
        ship: 'EMPRESS',
        route: 'Goa → Mumbai',
        cta: 'Check Current Offers'
      },
      {
        id: 'goa-2',
        title: '3-Night Goa Escape',
        badge: 'BEACH PARADISE',
        image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80',
        date: '31 Oct 2026 → 03 Nov 2026',
        ship: 'EMPRESS',
        route: 'Mumbai → Goa → Mumbai',
        cta: 'Check Current Offers'
      }
    ],
    lakshadweep: [
      {
        id: 'lakshadweep-1',
        title: '3-Night Lakshadweep',
        badge: 'ISLAND PARADISE',
        image: '/image copy 9.png',
        date: '07 Nov 2026 → 10 Nov 2026',
        ship: 'EMPRESS',
        route: 'Mumbai → Lakshadweep → Mumbai',
        cta: 'Check Current Offers'
      },
      {
        id: 'lakshadweep-2',
        title: '4-Night Island Discovery',
        badge: 'DEEP SEA',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        date: '14 Nov 2026 → 18 Nov 2026',
        ship: 'EMPRESS',
        route: 'Mumbai → Lakshadweep → Goa → Mumbai',
        cta: 'Check Current Offers'
      }
    ],
    maldives: [
      {
        id: 'maldives-1',
        title: '5-Night Maldives',
        badge: 'INTERNATIONAL',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
        date: '21 Nov 2026 → 26 Nov 2026',
        ship: 'EMPRESS',
        route: 'Mumbai → Maldives → Mumbai',
        cta: 'Check Current Offers'
      }
    ]
  }

  const currentItineraries = itineraries[activeTab] || []
  const visibleCards = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
  const maxIndex = Math.max(0, currentItineraries.length - visibleCards)

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="itineraries" className="cruise-itineraries section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">DISCOVER YOUR JOURNEY</span>
          <h2 className="section-title">Find Your <span className="highlight">Perfect Sailing</span></h2>
          <p className="section-subtitle">
            Whether it's your first cruise or your fifth, discover a journey that fits your calendar, mood, and travel dreams.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="tabs-container">
          <div className="tabs-wrapper">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`tab ${activeTab === category.id ? 'tab-active' : ''}`}
                onClick={() => {
                  setActiveTab(category.id)
                  setCurrentIndex(0)
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Itinerary Cards */}
        <div className="itinerary-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="itinerary-cards"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentItineraries.map((itinerary, index) => (
                <motion.div
                  key={itinerary.id}
                  className="itinerary-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="itinerary-image-wrapper">
                    <img 
                      src={itinerary.image} 
                      alt={itinerary.title}
                      className="itinerary-image"
                      loading="lazy"
                    />
                    <div className="itinerary-overlay"></div>
                    <span className="itinerary-badge">{itinerary.badge}</span>
                  </div>
                  
                  <div className="itinerary-content">
                    <h3 className="itinerary-title">{itinerary.title}</h3>
                    
                    <div className="itinerary-meta">
                      <div className="meta-item">
                        <Calendar size={16} className="meta-icon" />
                        <span>{itinerary.date}</span>
                      </div>
                      <div className="meta-item">
                        <Ship size={16} className="meta-icon" />
                        <span>{itinerary.ship}</span>
                      </div>
                    </div>
                    
                    <div className="itinerary-route">
                      <span className="route-text">{itinerary.route}</span>
                    </div>
                    
                    <div className="itinerary-divider"></div>
                    
                    <button
                      className="itinerary-cta"
                      onClick={() => scrollToSection('vacation-search')}
                    >
                      {itinerary.cta}
                      <motion.span
                        className="cta-arrow"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={18} />
                      </motion.span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {currentItineraries.length > visibleCards && (
            <div className="carousel-nav">
              <button 
                className="nav-btn nav-btn-prev"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous cruises"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="nav-btn nav-btn-next"
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                aria-label="Next cruises"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CruiseItineraries
