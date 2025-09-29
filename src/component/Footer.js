import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white text-center py-3 shadow-lg">
      <hr />
      <p className="mb-1">
        &copy; {new Date().getFullYear()} OGUNWE DEBO. All Rights Reserved.
      </p>
      <div className="align-items-center">
        <a
          href="https://github.com/Oluwadebo"
          target="_blank"
          rel="noreferrer"
          className="text-white me-3 fs-4"
          aria-label="GitHub Profile"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-white me-3 fs-4"
          aria-label="LinkedIn Profile"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="mailto:ogunweoluwadebo1@gmail.com"
          className="text-white fs-4"
          aria-label="Send me an Email"
        >
          <i className="bi bi-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
