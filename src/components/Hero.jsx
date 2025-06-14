import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Transform Your Digital Presence</h1>
          <p className="hero-description">
            Expert guidance, training, and resources for your digital journey.
            Empowering businesses to thrive in the modern digital landscape.
          </p>
          <div className="hero-actions">
            <Link to="/resources" className="btn btn-primary">
              Explore Resources
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <div className="card-icon">📊</div>
              <div className="card-text">Analytics</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🚀</div>
              <div className="card-text">Growth</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">💡</div>
              <div className="card-text">Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
