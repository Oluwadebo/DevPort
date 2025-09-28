import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './component/dashboard';
import NotFound from './component/notfound';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/Navbar" element={<Navigate to="/" />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="/Registration" element={<Registration />} />
        <Route path="/Ordered" element={<Ordered />} />
        <Route path="/RegistAdmin" element={<RegistAdmin />} />
        <Route path="/Addtocart" element={<Addtocart />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Viewproduct" element={<Viewproduct />} /        
         */}
      </Routes>
    </>
  );
}

export default App;
