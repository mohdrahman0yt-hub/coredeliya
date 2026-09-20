import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { scrollToBookingForm } from '../utils/scrollToBookingForm'
import './Header.css'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.75.46 3.45 1.32 4.95L2 22l5.31-1.39a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.89-4.43 9.89-9.89C21.94 6.43 17.5 2 12.04 2zm5.75 14.07c-.24.68-1.4 1.3-1.94 1.35-.5.04-1.13.06-1.82-.11-.42-.11-.96-.31-1.65-.61-2.9-1.26-4.79-4.19-4.94-4.39-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.15.12.32.02.52-.09.19-.14.32-.27.49-.14.17-.29.38-.41.51-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.22 1.36.28.14.44.12.6-.07.17-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.09 1.66.78 1.95.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z"
    />
  </svg>
)

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    if (sectionId === 'vacation-search') {
      scrollToBookingForm()
      setIsMobileMenuOpen(false)
      setOpenMenu(null)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const header = document.querySelector('.site-header')
      const offset = (header?.offsetHeight || 118) + 12
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
      setIsMobileMenuOpen(false)
      setOpenMenu(null)
    }
  }

  const openOfferModal = () => {
    if (window.openOfferModal) window.openOfferModal()
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="topbar-inner">
          <span className="topbar-item">
            <strong>Book Now:</strong>
            <a href="tel:02268811111">
              <Phone size={13} strokeWidth={2.4} />
              022-68811111
            </a>
          </span>
          <a className="topbar-item topbar-whatsapp" href="https://wa.me/917738850000" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            +91 7738850000
          </a>
          <span className="topbar-divider" aria-hidden="true" />
          <span className="topbar-item">
            <strong>For Group Enquiries:</strong>
            <a href="tel:02265545206">
              <Phone size={13} strokeWidth={2.4} />
              022-65545206
            </a>
          </span>
        </div>
      </div>

      <div className="navbar">
        <div className="navbar-inner">
          <a href="#top" className="brand" aria-label="Cordelia Cruises">
            <img src="/assets/cordelia-logo.svg" alt="Cordelia Cruises" />
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            <div
              className={`nav-item has-dropdown ${openMenu === 'ships' ? 'open' : ''}`}
              onMouseEnter={() => setOpenMenu('ships')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="nav-link" onClick={() => setOpenMenu(openMenu === 'ships' ? null : 'ships')}>
                Our Ships
                <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown">
                <button onClick={() => scrollToSection('cruise-experience')}>Cordelia Sky</button>
                <button onClick={() => scrollToSection('cruise-experience')}>Cordelia Sun</button>
              </div>
            </div>

            <div
              className={`nav-item has-dropdown ${openMenu === 'destinations' ? 'open' : ''}`}
              onMouseEnter={() => setOpenMenu('destinations')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="nav-link" onClick={() => setOpenMenu(openMenu === 'destinations' ? null : 'destinations')}>
                Destinations
                <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown">
                <button onClick={() => scrollToSection('destinations')}>Goa</button>
                <button onClick={() => scrollToSection('destinations')}>Lakshadweep</button>
                <button onClick={() => scrollToSection('destinations')}>Maldives</button>
                <button onClick={() => scrollToSection('destinations')}>Kochi</button>
                <button onClick={() => scrollToSection('destinations')}>Southeast Asia</button>
              </div>
            </div>

            <button className="nav-link" onClick={openOfferModal}>Group Enquiry</button>
            <button className="nav-link" onClick={() => scrollToSection('offers')}>Offers</button>
          </nav>

          <div className="navbar-actions">
            <button className="btn-find-cruise" onClick={() => scrollToSection('vacation-search')}>
              Find A Cruise
            </button>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
              <ul className="mobile-nav-list">
                <li><button onClick={() => scrollToSection('cruise-experience')}>Our Ships</button></li>
                <li><button onClick={() => scrollToSection('destinations')}>Destinations</button></li>
                <li><button onClick={openOfferModal}>Group Enquiry</button></li>
                <li><button onClick={() => scrollToSection('offers')}>Offers</button></li>
                <li className="mobile-nav-divider" />
                <li>
                  <button className="mobile-cta" onClick={() => scrollToSection('vacation-search')}>
                    Find A Cruise
                  </button>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
