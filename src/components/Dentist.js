import React, { useState, useEffect } from 'react';
import { fetchDentist } from '../services/api_services';
import '../styles/Dentist.css';
function Dentist() {
  const [dentistData, setDentistData] = useState([]); // Array to hold dentist data

  useEffect(() => {
    async function fetchDentistData() {
      try {
        const data = await fetchDentist();
        setDentistData(data);
      } catch (error) {
        // Handle error
      }
    }
    fetchDentistData();
  }, []);

  return (
    <div className="dentist">
      {dentistData.length > 0 && ( // Check if there's data
        dentistData.map((dentist, index) => (  // Loop through dentistData array
          <div key={index} className="dentist-item">  {/* Add a unique key for each item */}
            <div className="dentist-photo" style={{ backgroundImage: `url(/images/rr.jpg)` }}></div>
            <div className="dentist-info">
              <div className="dentist-card">
                <h3 className="dentist-name">{dentist.name}</h3>
                <p className="dentist-specialty">{dentist.speciality}</p>
              </div>
              <button className='schedule-button'>Shedule Call</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dentist;