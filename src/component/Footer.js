import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer
        className=" text-white text-center py-3 shadow"
        style={{ background: '#0d1b2a' }}
      >
        <hr />{' '}
        <p className="mb-1">
          &copy; {new Date().getFullYear()} OGUNWE DEBO. All Rights Reserved.
        </p>
        <div className=" align-items-center">
          <a
            href="https://github.com/Oluwadebo"
            target="_blank"
            rel="noreferrer"
            className="text-white me-3 fs-4"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
            className="text-white me-3 fs-4"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:ogunweoluwadebo1@gmail.com"
            className="text-white fs-4"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
