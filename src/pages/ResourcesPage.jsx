import React from "react";
import "./ResourcesPage.scss";

export default function ResourcesPage() {
  const resources = [
    {
      category: "Strategy Guides",
      items: [
        "Digital Transformation Roadmap",
        "Change Management Framework",
        "Technology Assessment Guide",
        "ROI Measurement Toolkit",
      ],
    },
    {
      category: "Best Practices",
      items: [
        "Agile Implementation Guide",
        "Cloud Migration Checklist",
        "Data Security Framework",
        "User Experience Guidelines",
      ],
    },
    {
      category: "Industry Templates",
      items: [
        "Project Planning Templates",
        "Stakeholder Communication Kit",
        "Performance Metrics Dashboard",
        "Risk Assessment Framework",
      ],
    },
  ];

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="container">
          <h1 className="page-title">Resource Library</h1>
          <p className="page-subtitle">
            Comprehensive guides, templates, and tools for successful digital
            transformation
          </p>
        </div>
      </section>

      <section className="resources-content">
        <div className="container">
          <div className="resources-grid">
            {resources.map((category, index) => (
              <div key={index} className="resource-category">
                <h2 className="category-title">{category.category}</h2>
                <ul className="resource-list">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="resource-item">
                      <span className="resource-icon">📄</span>
                      <span className="resource-name">{item}</span>
                      <button className="download-btn">Download</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h2>Need Custom Resources?</h2>
            <p>
              Contact our team to discuss custom resources tailored to your
              specific needs.
            </p>
            <button className="cta-button">Get Custom Resources</button>
          </div>
        </div>
      </section>
    </div>
  );
}
