import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import CruiseOptions from './components/CruiseOptions'
import Fleet from './components/Fleet'
import FinalCTA from './components/FinalCTA'
import AwardsRecognition from './components/AwardsRecognition'
import MobileStickyCTA from './components/MobileStickyCTA'
import OfferModal from './components/OfferModal'

function App() {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false)

  useEffect(() => {
    window.openOfferModal = () => setIsOfferModalOpen(true)
    return () => {
      delete window.openOfferModal
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero />
      <Destinations />
      <CruiseOptions />
      <Fleet />
      <FinalCTA />
      <AwardsRecognition />
      <MobileStickyCTA />
      <OfferModal
        isOpen={isOfferModalOpen}
        onClose={() => setIsOfferModalOpen(false)}
      />
    </div>
  )
}

export default App
