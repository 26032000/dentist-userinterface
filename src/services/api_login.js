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
      const errorMessage = await response.text();
      throw new Error(` ${errorMessage}`);

    }

    // If login is successful, extract the token from response
    const data = await response.json();
    const token = data.token;

    // Store the token in local storage
    localStorage.setItem('token', token);
    console.log('Token stored in local storage:', token);

    // Return the response data
    return data;
  } catch (error) {
    console.error('Login error:', error.message);
    throw error;
  }
}
