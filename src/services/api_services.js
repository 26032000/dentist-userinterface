

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


// function to log in


export async function login(formData) {
  try {
    const response = await fetch('https://dentist-nfwz.onrender.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      // Handle non-200 status code, e.g., show error message
      const errorMessage = await response.text();
      throw new Error(`Login failed: ${errorMessage}`);
    }

    // If login is successful, return the response
    return await response.json();
  } catch (error) {
    console.error('Login error:', error.message);
    throw error;
  }
}

// register
export async function signUp(formData) {
  try {
    const response = await fetch('https://dentist-nfwz.onrender.com/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      // Handle non-200 status code, e.g., show error message
      const errorMessage = await response.text();
      throw new Error(`Sign up failed: ${errorMessage}`);
    }

    // If sign up is successful, return the response
    return await response.json();
  } catch (error) {
    console.error('Sign up error:', error.message);
    throw error;
  }
}
