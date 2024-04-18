import React from 'react';
import '../styles/Hero.css';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
 const handleNavigate=()=>{
   navigate('/appointments');
 }

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Your Trusted Dentistry Clinic</h1>
        <p className="hero-description">Providing quality dental care for your smile.</p>
        <div className="cta-buttons">
          <button className="cta-btn" onClick={handleNavigate}>Book Appointment</button>
          <button className="cta-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
