import React, { useState } from "react";
import "./ContactPage.scss";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Ready to transform your digital presence? Let's start the
            conversation.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                We're here to help you navigate your digital transformation
                journey. Reach out to discuss your specific needs and how we can
                support your goals.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-details">
                    <h3>Email Us</h3>
                    <a href="mailto:contact@digitalplatform.online">
                      contact@digitalplatform.online
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">🌐</div>
                  <div className="method-details">
                    <h3>Global Reach</h3>
                    <p>Remote services worldwide</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">⚡</div>
                  <div className="method-details">
                    <h3>Quick Response</h3>
                    <p>We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <span className="social-icon">💼</span>
                    LinkedIn
                  </a>
                  <a href="#" className="social-link">
                    <span className="social-icon">🐦</span>
                    Twitter
                  </a>
                  <a href="#" className="social-link">
                    <span className="social-icon">🔗</span>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us a Message</h2>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and how we can help..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
