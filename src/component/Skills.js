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
      <section
        id="skills"
        className="py-5 text-light"
        style={{ background: '#0d1b2a' }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Skills</h2>
          <div className="row">
            {skills.map((skill, index) => (
              <div key={index} className="col-md-6 mb-4" data-aos="fade-up">
                <h6 className="fw-bold">{skill.name}</h6>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.level, background: '#00bcd4' }}
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
