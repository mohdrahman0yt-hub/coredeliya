// import React, { useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './components/Header'
// import Hero from './components/Hero'
// import Destinations from './components/Destinations'
// import CruiseOptions from './components/CruiseOptions'
// import Fleet from './components/Fleet'
// import FinalCTA from './components/FinalCTA'
// import AwardsRecognition from './components/AwardsRecognition'
// import MobileStickyCTA from './components/MobileStickyCTA'
// import OfferModal from './components/OfferModal'
// import ThankYou from './components/ThankYou'


// function App() {
//   const [isOfferModalOpen, setIsOfferModalOpen] = useState(false)

//   useEffect(() => {
//     window.openOfferModal = () => setIsOfferModalOpen(true)
//     return () => {
//       delete window.openOfferModal
//     }
//   }, [])

//   return (
//     <div className="app">
//       <Header />
//       <Hero />
//       <Destinations />
//       <CruiseOptions />
//       <Fleet />
//       <FinalCTA />
//       <AwardsRecognition />
//       <MobileStickyCTA />
//       <OfferModal
//         isOpen={isOfferModalOpen}
//         onClose={() => setIsOfferModalOpen(false)}
//       />

//     <BrowserRouter>
//       <Routes>
//         <Route path="/thank-you" element={<ThankYou />} />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// export default App





import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import CruiseOptions from './components/CruiseOptions'
import Fleet from './components/Fleet'
import FinalCTA from './components/FinalCTA'
import AwardsRecognition from './components/AwardsRecognition'
import MobileStickyCTA from './components/MobileStickyCTA'
import OfferModal from './components/OfferModal'
import ThankYou from './components/ThankYou'


function LandingPage() {
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


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Thank You page */}
        <Route path="/thank-you" element={<ThankYou />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App