// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });
//   const [activeSection, setActiveSection] = useState("hero");

//   useEffect(() => {
//     document.body.className = darkMode ? "bg-dark text-white" : "bg-white text-dark";
//     localStorage.setItem("theme", darkMode ? "dark" : "light");
//   }, [darkMode]);

//   // Track scroll position to update active link
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["hero", "about", "skills", "projects", "contact"];
//       let current = "hero";
//       sections.forEach((id) => {
//         const element = document.getElementById(id);
//         if (element && window.scrollY >= element.offsetTop - 70) {
//           current = id;
//         }
//       });
//       setActiveSection(current);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow-sm fixed-top`}>
//       <div className="container">
//         <a className="navbar-brand fw-bold" href="#hero">OGUNWE DEBO</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             {["about", "skills", "projects", "contact"].map((section) => (
//               <li className="nav-item" key={section}>
//                 <a
//                   className={`nav-link ${activeSection === section ? "active fw-bold" : ""}`}
//                   href={`#${section}`}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               </li>
//             ))}
//             <li className="nav-item">
//               <button
//                 className="btn btn-sm btn-outline-secondary ms-3"
//                 onClick={() => setDarkMode(!darkMode)}
//               >
//                 {darkMode ? "🌞 Light" : "🌙 Dark"}
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';

const Navbar = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          OGUNWE DEBO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
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
    </nav> */}
      <nav className="navbar navbar-expand-md fixed-top navbar-dark shadow" style={{ background: "#0d1b2a" }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#hero">
            OGUNWE DEBO
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
