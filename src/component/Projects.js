import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        title: 'Portfolio Website',
        description:
          'A responsive personal portfolio built with React and Bootstrap.',
        image: 'https://picsum.photos/seed/beauty1/600/600',
        link: '#',
      },
      {
        title: 'School Portal',
        description:
          'A school management system for primary & secondary schools.',
        link: 'https://yourproject2.netlify.app',
        image: 'https://picsum.photos/seed/wallet3/600/600',
        github: 'https://github.com/yourrepo2',
      },
      {
        title: 'Crypto Tracker',
        description: 'Real-time cryptocurrency price tracking dashboard.',
        image: 'https://picsum.photos/seed/sunglasses1/600/600',
        link: '#',
      },
    ]);
  }, []);

  return (
    <section className="container py-5" id="projects">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
          >
            <div className="card glass-card h-100 shadow-lg">
              <img
                src={project.image}
                className="card-img-top img-fluid text-light"
                alt={project.title}
              />
              <div className="card-body text-light">
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark btn-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
