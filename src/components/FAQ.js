import React from 'react';
import '../styles/FAQ.css';

function FAQ() {
  return (
    <div className="faq">
      <div className="faq-content">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-description">
          Have questions about our services or your dental health? Browse our frequently asked questions below.
        </p>
        <button className="faq-btn">Browse FAQs</button>
      </div>
    </div>
  );
}

export default FAQ;
