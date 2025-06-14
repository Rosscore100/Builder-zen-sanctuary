import React from "react";
import { Link } from "react-router-dom";
import "./Services.scss";

export default function Services() {
  const services = [
    {
      icon: "🎓",
      title: "Digital Training",
      description:
        "Expert-led courses and workshops designed to upgrade your team's digital skills and capabilities.",
      features: [
        "Interactive Learning",
        "Certified Programs",
        "Hands-on Projects",
      ],
      link: "/training",
    },
    {
      icon: "📚",
      title: "Resources Library",
      description:
        "Comprehensive guides, templates, and tools for successful digital transformation initiatives.",
      features: ["Strategy Guides", "Best Practices", "Industry Templates"],
      link: "/resources",
    },
    {
      icon: "🎙️",
      title: "Expert Podcasts",
      description:
        "Industry insights, success stories, and expert interviews to keep you ahead of digital trends.",
      features: ["Weekly Episodes", "Industry Leaders", "Actionable Insights"],
      link: "/podcasts",
    },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Empowering your digital transformation with comprehensive solutions
            and expert guidance
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to={service.link} className="service-link">
                Learn More
                <span className="link-arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
