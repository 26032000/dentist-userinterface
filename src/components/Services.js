import React from 'react';
import '../styles/Service.css';

function Service() {
  return (
    <div className="service">
      <div className="service-content">
        <h2 className="service-title">Our Services</h2>
        <p className="service-description">
          We offer a wide range of dental services to meet your needs. From routine cleanings and exams to advanced cosmetic procedures, our experienced team is here to help you achieve a healthy and beautiful smile.
        </p>
        <ul className="service-list">
          <li>Dental Cleanings & Exams</li>
          <li>Fillings & Restorations</li>
          <li>Teeth Whitening</li>
          <li>Dental Implants</li>
          <li>Root Canal Therapy</li>
          <li>Orthodontics</li>
          <li>And much more...</li>
        </ul>
        <button className="schedule-appointment-btn">Schedule Appointment</button>
      </div>
    </div>
  );
}

export default Service;
