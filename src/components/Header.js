import React, { useState } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRequireAuth } from '../services/custom_hook';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">Dental Service</a>
        <nav className={showMenu ? 'nav active' : 'nav'}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="auth-buttons">
      {useRequireAuth ? (
        <>
          <a href="/logout">Logout</a>
          <a href="/profile">Profile</a>
        </>
      ) : (
        <>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </>
      )}
    </div>
          <button className="close-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
}

export default Header;
