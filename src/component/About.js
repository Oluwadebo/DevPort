import React from 'react';

const About = () => {
  return (
    <div>
      {/* <section className="container py-5" id="about">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center">
          I am a passionate web developer with experience in building modern web
          applications using React, Bootstrap, and other technologies. I love
          creating clean, responsive, and user-friendly designs.
        </p>
      </section> */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Profile Image */}
            <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
              <img
                src="https://via.placeholder.com/250"
                alt="Ogunwe Debo"
                className="img-fluid rounded-circle shadow-sm"
              />
            </div>
            {/* About Text */}
            <div className="col-md-8" data-aos="fade-left">
              <h2 className="fw-bold">About Me</h2>
              <p className="lead">
                I am <strong>Ogunwe Debo</strong>, a passionate web developer
                with experience in building modern and responsive websites. I
                focus on creating user-friendly applications that are both
                visually appealing and technically sound.
              </p>
              <p>
                With skills in{' '}
                <strong>React, Bootstrap, and modern JavaScript</strong>, I
                design and develop web solutions that solve real-world problems.
                I am also committed to continuous learning and exploring new
                technologies.
              </p>
              <a href="#contact" className="btn btn-primary mt-2">
                Let’s Work Together
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
