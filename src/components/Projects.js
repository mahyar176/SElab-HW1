import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and responsive design',
      fullDescription: 'A fully responsive portfolio website showcasing projects, skills, and contact information. Features smooth scrolling, dynamic components, and GitHub Pages deployment.',
      technologies: ['React', 'CSS3', 'HTML5', 'GitHub Actions'],
      image: 'WEB',
      links: { github: '#', demo: '#' }
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A real-time weather application with location-based services',
      fullDescription: 'Real-time weather application with geolocation support. Features current weather, forecasts, and weather alerts with beautiful UI.',
      technologies: ['JavaScript', 'Weather API', 'CSS3', 'Geolocation'],
      image: 'WX',
      links: { github: '#', demo: '#' }
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'A productivity application for managing daily tasks',
      fullDescription: 'Productivity application with task management capabilities. Features local storage persistence, task filtering, and priority management.',
      technologies: ['React', 'LocalStorage', 'CSS3', 'JavaScript'],
      image: 'TASK',
      links: { github: '#', demo: '#' }
    },
    {
      id: 4,
      title: 'E-Commerce Store',
      description: 'An online store with shopping cart and payment integration',
      fullDescription: 'Full-featured e-commerce platform with product catalog, shopping cart, and secure payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'SHOP',
      links: { github: '#', demo: '#' }
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Explore my recent work and projects</p>

        <div className="projects-grid">
          {projects.map(project => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <button className="view-more">View More &gt;</button>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedProject(null)}>x</button>
              <div className="modal-image">{selectedProject.image}</div>
              <h2>{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.fullDescription}</p>
              <div className="modal-technologies">
                {selectedProject.technologies.map(tech => (
                  <span key={tech} className="modal-tech-badge">{tech}</span>
                ))}
              </div>
              <div className="modal-links">
                <a href={selectedProject.links.github} className="modal-link github">View Code</a>
                <a href={selectedProject.links.demo} className="modal-link demo">View Demo</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;