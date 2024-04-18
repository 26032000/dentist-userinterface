export async function resetPassword(email, newPassword) {
  try {
    const response = await fetch('https://dentist-nfwz.onrender.com/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, newPassword }), 
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Reset password failed: ${errorMessage}`);
    }

    return true; 
  } catch (error) {
    console.error('Reset password error:', error.message);
    throw error;
  }
}
