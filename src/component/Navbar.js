import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md fixed-top navbar-dark shadow-lg"
        style={{ background: '#0d1b2a', color: 'white' }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="#hero">
            <img
              src="images/brand.png"
              alt="O"
              style={{ width: '200px', height: '60px', objectFit: 'cover' }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
