import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* <footer className="bg-dark text-white text-center py-3">
        <p>© {new Date().getFullYear()} OGUNWE DEBO. All Rights Reserved.</p>
      </footer> */}
      <footer className=" text-white text-center py-3 mt-5" style={{ background: "#0d1b2a" }}>
        <p className="mb-1">
          &copy; {new Date().getFullYear()} OGUNWE DEBO. All Rights Reserved.
        </p>
        <hr />
        <div>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
            className="text-white me-3"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
            className="text-white me-3"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:ogunweoluwadebo1@gmail.com" className="text-white">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
