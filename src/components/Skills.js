import React, { useState } from 'react';
import '../styles/Skills.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skills = [
    { 
      category: 'Frontend', 
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
      description: 'Creating modern, interactive user interfaces'
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs'],
      description: 'Building scalable server-side applications'
    },
    { 
      category: 'Tools & DevOps', 
      items: ['Git & GitHub', 'Docker', 'GitHub Actions', 'VS Code', 'Webpack'],
      description: 'Development tools and continuous integration'
    }
  ];

  const allSkills = skills.flatMap(group => group.items);

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          A comprehensive set of tools and technologies I've mastered
        </p>
        
        <div className="skills-tabs">
          {skills.map(skillGroup => (
            <button
              key={skillGroup.category}
              className={`skill-tab ${activeCategory === skillGroup.category ? 'active' : ''}`}
              onClick={() => setActiveCategory(skillGroup.category)}
            >
              {skillGroup.category}
            </button>
          ))}
        </div>

        <div className="skills-container">
          {skills.map(skillGroup => (
            activeCategory === skillGroup.category && (
              <div key={skillGroup.category} className="skill-group active">
                <h3>{skillGroup.category}</h3>
                <p className="skill-description">{skillGroup.description}</p>
                <ul className="skill-items">
                  {skillGroup.items.map(skill => (
                    <li key={skill} className="skill-item">
                      <span className="skill-badge">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>

        <div className="all-skills-preview">
          <h3>Quick Overview</h3>
          <div className="skills-grid">
            {allSkills.map(skill => (
              <div key={skill} className="skill-preview">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
