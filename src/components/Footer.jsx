import React from 'react'
import { MapPin, Phone } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Cordelia Cruises</h2>
            <p className="footer-company">
              Cordelia Cruises by Waterways Leisure Tourism Limited
            </p>
            <p className="footer-tagline">
              India's premium cruise line offering luxurious cruises with premium amenities.
            </p>
            
            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>16th Floor, Marathon Futurex, N.M. Joshi Mrg, Lower Parel, Mumbai - 400013</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} className="contact-icon" />
                <span>022-68811111</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h3 className="footer-link-title">Company</h3>
              <ul className="footer-link-list">
                <li>
                  <a href="https://www.cordeliacruises.com/" target="_blank" rel="noopener noreferrer">About Us</a>
                </li>
                <li>
                  <a href="https://www.cordeliacruises.com/upcoming-cruises" target="_blank" rel="noopener noreferrer">Upcoming Cruises</a>
                </li>
                <li>
                  <a href="https://www.cordeliacruises.com/" target="_blank" rel="noopener noreferrer">Destinations</a>
                </li>
                <li>
                  <a href="https://www.cordeliacruises.com/" target="_blank" rel="noopener noreferrer">Our Fleet</a>
                </li>
              </ul>
            </div>

            <div className="footer-link-group">
              <h3 className="footer-link-title">Support</h3>
              <ul className="footer-link-list">
                <li>
                  <a href="https://www.cordeliacruises.com/" target="_blank" rel="noopener noreferrer">FAQ</a>
                </li>
                <li>
                  <a href="https://www.cordeliacruises.com/" target="_blank" rel="noopener noreferrer">Contact Us</a>
                </li>
                <li>
                  <a href="https://www.cordeliacruises.com/" target="_blank" rel="noopener noreferrer">Help Center</a>
                </li>
              </ul>
            </div>

            <div className="footer-link-group">
              <h3 className="footer-link-title">Legal</h3>
              <ul className="footer-link-list">
                <li>
                  <a href="https://www.cordeliacruises.com/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://www.cordeliacruises.com/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                </li>
                <li>
                  <a href="https://www.cordeliacruises.com/" target="_blank" rel="noopener noreferrer">Cancellation Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Cordelia Cruises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
