import React from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thankyou-page">
      <div className="thankyou-card">
        <div className="success-icon">✓</div>

        <h1 className="thankyou-title">Thank You!</h1>

        <p className="thankyou-subtitle">
          Your enquiry has been submitted successfully.
        </p>

        <p className="thankyou-description">
          Our cruise expert will contact you shortly.
        </p>

        <Link to="/" className="thankyou-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;