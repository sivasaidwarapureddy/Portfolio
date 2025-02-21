import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Layout.css';

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="layout">
      <nav className="header">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <main className="content">
        {children}
      </main>

      <style>{`
        .hamburger-menu {
          display: none;
          cursor: pointer;
          padding: 15px;
        }

        .hamburger {
          width: 35px;
          height: 25px;
          position: relative;
        }

        .bar {
          width: 100%;
          height: 4px;
          background-color: white;
          margin: 8px 0;
          transition: 0.4s;
        }

        .hamburger.active .bar:nth-child(1) {
          transform: rotate(-45deg) translate(-8px, 8px);
        }

        .hamburger.active .bar:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active .bar:nth-child(3) {
          transform: rotate(45deg) translate(-8px, -8px);
        }

        @media (min-width: 769px) {
          .nav-links {
            display: flex;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .header {
            min-height: 60px;
            padding: 1rem;
          }
          
          .hamburger-menu {
            display: block;
            position: absolute;
            top: 10px;
            left: 10px;
          }

          .nav-links {
            display: none;
            width: 100%;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
          }

          .nav-links.active {
            display: flex;
          }

          .nav-link {
            margin: 8px 0;
            font-size: 1rem;
            padding: 8px 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;