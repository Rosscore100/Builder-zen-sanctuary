import React from "react";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Digital Platform</h1>
          <p className="page-subtitle">
            Pioneering digital transformation solutions for modern businesses
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-section">
              <h2>Our Mission</h2>
              <p>
                We believe that every business deserves access to world-class
                digital transformation guidance. Our mission is to democratize
                expert knowledge and provide actionable insights that drive real
                business results.
              </p>
            </div>

            <div className="content-section">
              <h2>Our Approach</h2>
              <p>
                Through comprehensive training programs, curated resources, and
                expert insights, we help organizations navigate the complex
                digital landscape with confidence and strategic clarity.
              </p>
            </div>

            <div className="content-section">
              <h2>Why Choose Us</h2>
              <ul className="feature-list">
                <li>✓ Industry-leading expertise</li>
                <li>✓ Proven methodologies</li>
                <li>✓ Comprehensive support</li>
                <li>✓ Measurable results</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Our Impact</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Companies Transformed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Expert Trainers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
