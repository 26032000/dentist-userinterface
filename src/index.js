import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import ForgotPasswordPage from './pages/ForgotPassword';
import AppointmentsPage from './pages/Appointment';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
        <Route path="/appointments" element={<AppointmentsPage/>} />
        
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);

