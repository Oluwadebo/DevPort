import React from 'react';
import { ReactTyped } from 'react-typed';
import Particles from 'react-tsparticles';

const Hero = () => {
  return (
    <div className="mt-1">
      <section
        id="hero"
        className="text-center text-white d-flex align-items-center"
        style={{
          height: '80vh',
          position: 'relative',
          overflow: 'hidden',
          background: '#0d1b2a',
        }}
      >
        <Particles
          options={{
            background: { color: '#0d1b2a' },
            fullScreen: { enable: false },
            particles: {
              color: { value: '#00bcd4' },
              links: { enable: true, color: '#00bcd4' },
              move: { enable: true, speed: 1 },
              number: { value: 50 },
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
        <div className="container position-relative px-3">
          <h1 className="display-5 fw-bold">
            Hi, I’m <span style={{ color: '#00bcd4' }}>OGUNWE DEBO</span>
          </h1>
          <h2 className="h4 mt-2">
            <ReactTyped
              strings={['Web Developer', 'Designer', 'Innovator']}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </h2>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
            <a href="#projects" className="btn btn-cyan fw-semibold text-white">
              View My Work
            </a>
            <a
              href="/Ogunwe_Debo_CV.pdf"
              download
              className="btn btn-outline-light"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
