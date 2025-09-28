import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="images/debo.png"
              alt="Ogunwe Debo"
              className="img-fluid rounded-circle shadow-sm"
            />
          </div>
          <div className="col-12 col-md-8" data-aos="fade-left">
            <h2 className="fw-bold">About Me</h2>
            <p className="lead text-justify">
              I’m <strong>Ogunwe Debo</strong>, a dedicated web developer with
              hands-on experience in building modern, responsive, and
              user-friendly applications. I specialize in front-end development
              with HTML, CSS, JavaScript, React, and Bootstrap, and I also work
              with Node.js. <br />I enjoy transforming ideas into clean,
              functional, and visually appealing designs that deliver real
              value. With a strong focus on problem-solving and continuous
              learning, I’m always exploring new tools and technologies to stay
              ahead in the ever-evolving tech landscape.
            </p>
            <a href="#contact" className="btn btn-primary mt-2">
              Let’s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
