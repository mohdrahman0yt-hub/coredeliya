
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import './MobileStickyCTA.css'

const CALL_NUMBER = 'tel:+91 9402325828'

const MobileStickyCTA = () => {
  const openOfferModal = () => {
    if (window.openOfferModal) window.openOfferModal()
  }

  const startCall = (event) => {
    event.stopPropagation()
    window.location.href = CALL_NUMBER
  }

  return (
    <motion.div
      className="mobile-sticky-cta"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ duration: 0.3 }}
    >
      <a
        id="mobile-sticky-connect"
        className="mobile-sticky-cta-button mobile-sticky-connect"
        href={CALL_NUMBER}
        onClick={startCall}
        aria-label="Call 9402325828"
      >
        <Phone size={18} strokeWidth={2.3} />
        Connect
      </a>
      <button
        id="mobile-sticky-cta"
        className="mobile-sticky-cta-button mobile-sticky-offer"
        onClick={openOfferModal}
      >
        Get Cruise Offer
      </button>
    </motion.div>
  )
}

export default MobileStickyCTA
