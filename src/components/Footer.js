import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="#schedule-call">Schedule Call</a></li>
              <li><a href="#schedule-appointment">Schedule Appointment</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#treatment">Treatment</a></li>
              <li><a href="#terms-of-service">Terms of Service</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><FontAwesomeIcon icon={faPhone} /> +1 123 456 7890</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> info@example.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Your Clinic Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
