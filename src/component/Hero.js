import React from 'react';
import { ReactTyped } from 'react-typed';
import Particles from 'react-tsparticles';

const Hero = () => {
  return (
    <section
      id="hero"
      className="text-center text-white d-flex align-items-center"
      style={{ height: '80vh', position: 'relative', overflow: 'hidden' }}
    >
      <Particles
        options={{
          background: { color: '#0d1b2a' },
          fullScreen: { enable: false },
          particles: {
            color: { value: '#00bcd4' },
            links: { enable: true, color: '#00bcd4' },
            move: { enable: true, speed: 1 },
            number: { value: window.innerWidth < 768 ? 25 : 50 },
          },
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <div className="container position-relative px-3 text-center">
        <h1 className="display-5 fw-bold">
          Hello, I’m <span style={{ color: '#00bcd4' }}>OGUNWE DEBO</span>
        </h1>
        <p className="lead mt-2">
          Crafting modern web experiences that inspire, engage, and deliver real
          value.
        </p>
        <h2 className="h4 mt-3">
          <ReactTyped
            strings={[
              'Full-Stack Web Developer',
              'Creative Digital Innovator',
              'UI/UX Design Enthusiast',
              'Strategic Problem Solver',
            ]}
            typeSpeed={80}
            backSpeed={40}
            backDelay={1500} 
            loop
          />
        </h2>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
          <a
            href="#projects"
            className="btn btn-primary fw-semibold text-white px-4"
          >
            Explore My Work{' '}
            <i className="fas fa-arrow-right animate__animated animate__bounce animate__infinite"></i>
          </a>
          <a
            href="/Ogunwe_Debo_CV.pdf"
            download
            className="btn btn-outline-light px-4"
          >
            Download CV <i className="fas fa-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
