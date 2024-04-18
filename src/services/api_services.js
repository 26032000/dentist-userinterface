
const BASE_URL="https://dentist-nfwz.onrender.com";




// Function to fetch treatments data from the backend
export async function fetchTreatments() {
  try {
    const response = await fetch(`${BASE_URL}/api/treatments`);
    if (!response.ok) {
      throw new Error('Failed to fetch treatments');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching treatments:', error.message);
    throw error;
  }
}
// Function to Fetch Dentist data
export async function fetchDentist() {
  try {
    const response = await fetch(`${BASE_URL}/api/dentists`); 
    if (!response.ok) {
      throw new Error('Failed to fetch dentist');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching dentist:', error.message);
    throw error;
  }
}
export const bookAppointment = async (formData) => {
  try {
    const response = await fetch('https://dentist-nfwz.onrender.com/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error('Failed to book appointment');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Book appointment error:', error);
    throw error;
  }
};

