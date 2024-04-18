
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
