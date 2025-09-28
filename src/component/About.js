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
            <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
              <img
                src="https://i.pravatar.cc/250"
                alt="Ogunwe Debo"
                className="img-fluid rounded-circle shadow-sm"
              />
            </div>
            <div className="col-12 col-md-8" data-aos="fade-left">
              <h2 className="fw-bold">About Me</h2>
              <p
                className="lead"
                style={{
                  textAlign: 'justify',
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: '1rem',
                  lineHeight: '1.6',
                }}
              >
                I’m <strong>Ogunwe Debo</strong>, a dedicated web developer with
                hands-on experience in building modern, responsive, and
                user-friendly applications. I specialize in front-end
                development with HTML, CSS, JavaScript, React, and Bootstrap,
                and I also work with Node.js to create scalable and efficient
                solutions. <br /> I enjoy transforming ideas into clean,
                functional, and visually appealing designs that deliver real
                value to businesses and users. With a strong focus on
                problem-solving and continuous learning, I’m always exploring
                new tools and technologies to improve my craft and stay ahead in
                the ever-evolving tech landscape.
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
