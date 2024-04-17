

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
