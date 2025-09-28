import React, { useEffect, useState } from 'react';
// import projectsData from "../data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        title: 'Crypto Price Tracker',
        description: 'A React app that tracks real-time cryptocurrency prices.',
        link: 'https://yourproject1.netlify.app',
        github: 'https://github.com/yourrepo1',
        image: 'https://via.placeholder.com/400x200',
      },
      {
        title: 'School Portal',
        description:
          'A school management system for primary & secondary schools.',
        link: 'https://yourproject2.netlify.app',
        github: 'https://github.com/yourrepo2',
        image: 'https://via.placeholder.com/400x200',
      },
    ]);
  }, []);

  return (
    <>
      {/* <section className="container py-5" id="projects">
      <h2 className="text-center text-dark mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm me-2"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section> */}
      <section className="container py-5" id="projects">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top img-fluid"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm me-2"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark btn-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
