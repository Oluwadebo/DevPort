import React from 'react';

const Skills = () => {
  //   const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Node.js'];
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS / Bootstrap', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React.js', level: '75%' },
    { name: 'Node.js', level: '65%' },
  ];

  return (
    <div>
      {/* <section className="bg-light text-dark py-5" id="skills">
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <div className="row text-center">
            {skills.map((skill, index) => (
              <div key={index} className="col-6 col-md-4 mb-3">
                <div className="card shadow-sm p-3">
                  <h5>{skill}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Skills</h2>
          <div className="row">
            {skills.map((skill, index) => (
              <div key={index} className="col-md-6 mb-4" data-aos="fade-up">
                <h6 className="fw-bold">{skill.name}</h6>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: skill.level }}
                    aria-valuenow={parseInt(skill.level)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
