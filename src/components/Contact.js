import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { label: 'Email', value: 'contact@example.com', link: 'mailto:contact@example.com' },
    { label: 'Location', value: 'Tehran, Iran', link: null },
    { label: 'Availability', value: 'Open to new opportunities', link: null }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Send a message.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <ul>
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <span className="info-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} className="info-value">{item.value}</a>
                  ) : (
                    <span className="info-value">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="contact-note">
              I typically respond within 24 hours on weekdays.
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
            {isSubmitted && (
              <p className="success-message">Thanks! Your message has been sent.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;