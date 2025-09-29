import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // 200px offset for navbar height
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-md fixed-top navbar-dark shadow-lg"
      style={{ background: "#0d1b2a", color: "white" }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          <img
            src="images/brand.png"
            alt="OGUNWE DEBO Portfolio Logo"
            style={{ width: "200px", height: "60px", objectFit: "cover" }}
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
            {["about", "skills", "projects", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  className={`nav-link ${
                    activeSection === section ? "active" : ""
                  }`}
                  href={`#${section}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
