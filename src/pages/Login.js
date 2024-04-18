import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useAuth  from '../services/custom_hook'; 
import EyeIcon from '../components/EyeIcon.js'; 
import '../styles/LoginPage.css'; 
import { login } from '../services/api_login.js';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
// Initialize useAuth hook
  // const { login } = useAuth(); 

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
  const history=useNavigate();


  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleRememberMeChange = (e) => {
    setIsRememberMeChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = { email, password };
       await login(formData);
      
      // Clear any previous errors
      setError(null);
      history('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
       

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={togglePasswordVisibility}
          >
            <EyeIcon isVisible={isPasswordVisible} />
          </button>
        </div>
        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="remember-me"
            name="remember-me"
            checked={isRememberMeChecked}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" className="submit-btn">
          Login
        </button>
        <div className="register-link">
          <span>New User?</span>
          <a href="/signup">Register Now</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
