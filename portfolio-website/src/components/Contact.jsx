
import React, { useState } from 'react';
import { 
  FaEnvelope, FaMapMarkerAlt, FaShareAlt, 
  FaGithub, FaLinkedinIn, FaTwitter, FaDribbble 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <a href="mailto:noorunnisa.soomroo@gmail.com">sadaqatalee31@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Larkana, Sindh, Pakistan</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaShareAlt />
              </div>
              <div className="contact-text">
                <h4>Social Media</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/sadaqat-ali-43655532a" aria-label="LinkedIn"><FaLinkedinIn /></a>
                  
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Sadaqat " 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="sadaqatalee31@gmail.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  placeholder="Hello, I would like to talk about..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;