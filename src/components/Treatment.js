import React, { useState, useEffect } from 'react';
import { fetchTreatments } from '../services/api_services';
import '../styles/Treatment.css';

function Treatment() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    async function fetchTreatmentsData() {
      try {
        const data = await fetchTreatments();
        setTreatments(data);
      } catch (error) {
        // Handle error
      }
    }
    fetchTreatmentsData();
  }, []);

  return (
    <div className="treatment">
      <h2 className="treatment-title">Treatments</h2>
      <div className="treatment-cards">
        {treatments.map(treatment => (
          <div className="treatment-card" key={treatment._id}>
            <h3 className="treatment-name">{treatment.name}</h3>
            <p className="treatment-description">{treatment.description}</p>
            <p className="treatment-cost">Cost: ${treatment.cost}</p>
            <p className="treatment-procedure">{treatment.procedure}</p>
            <p className="treatment-recovery-time">Recovery Time: {treatment.recoveryTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Treatment;
