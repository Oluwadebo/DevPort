import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME;
  const NETLIFY_TOKEN = process.env.REACT_APP_NETLIFY_TOKEN;
  const VERCEL_TOKEN = process.env.REACT_APP_VERCEL_TOKEN;
  const SCREENSHOT_API_KEY = process.env.REACT_APP_SCREENSHOT_API_KEY;

  const sanitizeUrl = (url) => {
    if (!url) return null;
    if (!url.startsWith('http')) return `https://${url}`;
    return url;
  };

  const getScreenshotUrl = async (url) => {
    if (!url) return 'https://via.placeholder.com/600x400';
    try {
      const res = await fetch(
        `https://shot.screenshotapi.net/screenshot?token=${SCREENSHOT_API_KEY}&url=${encodeURIComponent(
          url
        )}&width=600&height=400`
      );
      const data = await res.json();
      return data.screenshot || 'https://via.placeholder.com/600x400';
    } catch (err) {
      console.error('Screenshot API error:', err);
      return 'https://via.placeholder.com/600x400';
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let projectsMap = {};

        // GitHub Projects (top 3 latest)
        const githubRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`
        );
        const githubData = await githubRes.json();

        await Promise.all(
          githubData.map(async (repo) => {
            projectsMap[repo.name.toLowerCase()] = {
              title: repo.name,
              description: repo.description || 'No description',
              image: await getScreenshotUrl(
                sanitizeUrl(repo.homepage || repo.html_url)
              ),
              link: repo.homepage || repo.html_url,
              github: repo.html_url,
              host: 'GitHub Pages',
            };
          })
        );

        // Netlify Projects (top 3)
        const netlifyRes = await fetch('https://api.netlify.com/api/v1/sites', {
          headers: { Authorization: `Bearer ${NETLIFY_TOKEN}` },
        });
        const netlifyData = await netlifyRes.json();

        await Promise.all(
          netlifyData.slice(0, 3).map(async (site) => {
            const key = site.name.toLowerCase();
            projectsMap[key] = {
              ...(projectsMap[key] || {}),
              title: site.name,
              description: site.custom_domain || 'Netlify Project',
              image: await getScreenshotUrl(sanitizeUrl(site.ssl_url)),
              link: site.ssl_url,
              github:
                projectsMap[key]?.github ||
                `https://github.com/${GITHUB_USERNAME}`,
              host: 'Netlify',
            };
          })
        );

        // Vercel Projects (top 3)
        const vercelRes = await fetch('https://api.vercel.com/v6/projects', {
          headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
        });
        const vercelData = await vercelRes.json();

        await Promise.all(
          vercelData.projects.slice(0, 3).map(async (proj) => {
            const key = proj.name.toLowerCase();
            const liveUrl = sanitizeUrl(
              proj.productionDeployment?.url || proj.deploymentUrl || '#'
            );
            projectsMap[key] = {
              ...(projectsMap[key] || {}),
              title: proj.name,
              description: proj.framework || 'Vercel Project',
              image: await getScreenshotUrl(liveUrl),
              link: liveUrl,
              github:
                proj.link?.repo ||
                projectsMap[key]?.github ||
                `https://github.com/${GITHUB_USERNAME}`,
              host: 'Vercel',
            };
          })
        );

        setProjects(Object.values(projectsMap));
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const skeletons = Array.from({ length: 3 }, (_, i) => (
    <div key={i} className="col-md-6 col-lg-4 mb-4">
      <div className="card glass-card h-100 shadow-lg">
        <div className="skeleton-img"></div>
        <div className="card-body">
          <div className="skeleton-title mb-2"></div>
          <div className="skeleton-badge mb-2"></div>
          <div className="skeleton-text mb-2"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="container py-5" id="projects">
      <h2 className="text-center mb-4 fw-bold">Projects</h2>
      <div className="row">
        {loading
          ? skeletons
          : projects.map((project, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
              >
                <div className="card glass-card h-100 shadow-lg">
                  <img
                    src={project.image}
                    className="card-img-top img-fluid text-secondary"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-light">{project.title}</h5>
                    {project.host && (
                      <span className="badge bg-secondary mb-2 p-2">
                        {project.host}
                      </span>
                    )}
                    <p className="card-text text-light">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm me-2 mb-2"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-dark btn-sm mb-2"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Projects;
