import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: '#github', icon: '🐙' },
    { name: 'LinkedIn', url: '#linkedin', icon: '💼' },
    { name: 'Twitter', url: '#twitter', icon: '🐦' },
    { name: 'Email', url: 'mailto:contact@example.com', icon: '✉️' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            {socialLinks.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                title={link.name}
                className="social-link"
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3>About This Site</h3>
          <p>A modern portfolio website built with React, showcasing projects and skills.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        <p className="built-with">Built with React & GitHub Pages</p>
      </div>
    </footer>
  );
}

export default Footer;
