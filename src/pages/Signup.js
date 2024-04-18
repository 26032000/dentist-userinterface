import React, { useState } from 'react';
import { signUp } from '../services/api_services';
import '../styles/SignUpPage.css';

const passwordStrengthRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z])(?=.{8,})$/; // Regular expression for strong passwords

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({}); // State to store validation errors
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: undefined }); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordStrengthRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters and include a lowercase letter, an uppercase letter, a number, and a special character';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Exit if validation fails

    try {
      await signUp(formData);
      window.location.href = '/';
    } catch (error) {
      console.error('Sign up error:', error.message);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <p className="error-message">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <i
              className={`fas fa-eye${showPassword ? '' : '-slash'}`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>}
          <p className="password-strength">
            {formData.password.length > 0 && !errors.password && (
              passwordStrengthRegex.test(formData.password) ? (
                <span className="strong">Strong Password</span>
              ) : (
                <span className="weak">Weak Password</span>
              )
            )}
          </p>
        </div>
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
        <p className="login-link">
          Already have an account? <a href="/login">Login Here</a>
        </p>
        </form>
        </div>
        );
      }      
      export default SignUpPage;