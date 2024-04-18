import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDentist, fetchTreatments, bookAppointment } from '../services/api_services'; 
import {useRequireAuth} from '../services/custom_hook';

function AppointmentsPage({ userId }) {
  useRequireAuth();
  const [dentists, setDentists] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    patientId: userId,
    dentistId: '',
    date: '',
    category: '',
    notes: '',
  });
  const history = useNavigate();

  useEffect(() => {
    // Fetch dentists and treatment categories when component mounts
    const fetchData = async () => {
      const fetchedDentists = await fetchDentist();
      const fetchedCategories = await fetchTreatments();
      setDentists(fetchedDentists);
      setCategories(fetchedCategories);
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call API function to book appointment
      await bookAppointment(formData);
      // Redirect to appointments page or show success message
      history.push('/appointments');
    } catch (error) {
      console.error('Failed to book appointment:', error);
      // Handle error, show error message, etc.
    }
  };

  // Function to select a random dentist
  const selectRandomDentist = () => {
    const randomIndex = Math.floor(Math.random() * dentists.length);
    const randomDentist = dentists[randomIndex];
    setFormData({
      ...formData,
      dentistId: randomDentist.id,
    });
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Notes:</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={selectRandomDentist}>
          Select Random Dentist
        </button>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentsPage;
