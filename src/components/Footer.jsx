import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Training", path: "/training" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "💼" },
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "GitHub", url: "#", icon: "🔗" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="footer-logo">
              <img
                src="/logo-white.png"
                alt="Digital Platform"
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="logo-text" style={{ display: "none" }}>
                Digital Platform
              </span>
            </div>
            <p className="company-description">
              Empowering digital transformation through expert guidance,
              comprehensive training, and innovative resources designed for
              modern businesses.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section quick-links">
            <h4 className="section-title">Quick Links</h4>
            <ul className="link-list">
              {quickLinks.map((link, index) => (
                <li key={index} className="link-item">
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h4 className="section-title">Contact Us</h4>
            <div className="contact-details">
              <a
                href="mailto:contact@digitalplatform.online"
                className="contact-link email-link"
              >
                <span className="contact-icon">📧</span>
                contact@digitalplatform.online
              </a>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Global Digital Solutions</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <span>Worldwide Remote Services</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Digital Platform. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <Link to="/privacy" className="legal-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
