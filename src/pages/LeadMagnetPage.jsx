import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LeadMagnetPage.scss";

export default function LeadMagnetPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    role: "",
    interests: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Lead captured:", formData);
    setIsSubmitted(true);

    // Simulate download trigger
    setTimeout(() => {
      // In a real app, this would trigger actual downloads
      alert("Check your email! Your free resources are being sent now.");
    }, 1000);
  };

  const freeResources = [
    {
      type: "ebook",
      title: "Digital Transformation Starter Kit",
      description:
        "25-page comprehensive guide with frameworks, checklists, and templates",
      pages: "25 pages",
      icon: "📚",
      topics: [
        "Strategy Framework",
        "Implementation Checklist",
        "ROI Calculator",
        "Team Templates",
      ],
    },
    {
      type: "podcast",
      title: "Executive Insights Podcast Series",
      description:
        "3 exclusive episodes with Fortune 500 CTOs sharing transformation secrets",
      duration: "45 min each",
      icon: "🎙️",
      topics: [
        "Leadership Strategies",
        "Common Pitfalls",
        "Success Metrics",
        "Future Trends",
      ],
    },
    {
      type: "toolkit",
      title: "Analytics Quick-Start Toolkit",
      description:
        "Ready-to-use Excel templates and Python scripts for immediate implementation",
      items: "8 templates",
      icon: "🔧",
      topics: [
        "KPI Dashboard",
        "Data Analysis Templates",
        "Python Scripts",
        "SQL Queries",
      ],
    },
  ];

  const testimonials = [
    {
      name: "James Mitchell",
      title: "CTO",
      company: "StartupPro",
      quote:
        "The free toolkit saved me weeks of work. The templates are incredibly practical and well-designed.",
      avatar: "👨‍💼",
    },
    {
      name: "Lisa Wang",
      title: "VP Strategy",
      company: "Enterprise Corp",
      quote:
        "Best free resource I've found. Implemented the frameworks immediately with great results.",
      avatar: "👩‍💼",
    },
    {
      name: "Carlos Rodriguez",
      title: "Digital Director",
      company: "Innovation Inc",
      quote:
        "The podcast insights are gold. Finally, practical advice from people who've actually done it.",
      avatar: "👨‍💻",
    },
  ];

  const pricingComparison = [
    {
      name: "Consulting Firms",
      price: "$50,000+",
      features: [
        "Generic frameworks",
        "Limited templates",
        "No ongoing support",
        "6-month timeline",
      ],
    },
    {
      name: "University Courses",
      price: "$5,000+",
      features: [
        "Academic theory",
        "No practical tools",
        "Semester long",
        "Limited networking",
      ],
    },
    {
      name: "Our Training",
      price: "$297-797",
      features: [
        "Practical frameworks",
        "Complete toolkits",
        "Expert support",
        "Immediate access",
      ],
      highlight: true,
    },
  ];

  if (isSubmitted) {
    return (
      <div className="lead-magnet-page">
        <section className="success-section">
          <div className="container">
            <div className="success-content">
              <div className="success-icon">🎉</div>
              <h1>Thank You!</h1>
              <p>Your free resources are being sent to your email right now.</p>

              <div className="next-steps">
                <h2>What happens next?</h2>
                <div className="steps-list">
                  <div className="step">
                    <span className="step-number">1</span>
                    <div className="step-content">
                      <h3>Check Your Email</h3>
                      <p>Your free resources will arrive within 5 minutes</p>
                    </div>
                  </div>
                  <div className="step">
                    <span className="step-number">2</span>
                    <div className="step-content">
                      <h3>Join Our Community</h3>
                      <p>
                        Get access to exclusive content and networking
                        opportunities
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <span className="step-number">3</span>
                    <div className="step-content">
                      <h3>Upgrade Your Skills</h3>
                      <p>Take advantage of our limited-time course discounts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="upgrade-offer">
                <h2>Special Offer: 50% Off Any Course</h2>
                <p>
                  As a thank you, get exclusive access to our premium training
                  courses
                </p>
                <Link to="/training" className="upgrade-btn">
                  View Courses →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="lead-magnet-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Get $2,000+ Worth of Digital Transformation Resources</h1>
              <h2>Absolutely FREE</h2>
              <p className="hero-description">
                Download our exclusive toolkit used by Fortune 500 companies to
                accelerate their digital transformation. No fluff, just
                actionable frameworks and templates you can implement
                immediately.
              </p>

              <div className="value-props">
                <div className="value-prop">
                  <span className="value-icon">⚡</span>
                  <span>Instant Access</span>
                </div>
                <div className="value-prop">
                  <span className="value-icon">📊</span>
                  <span>Proven Frameworks</span>
                </div>
                <div className="value-prop">
                  <span className="value-icon">🏆</span>
                  <span>Enterprise Grade</span>
                </div>
              </div>
            </div>

            <div className="hero-form">
              <div className="form-container">
                <div className="form-header">
                  <h3>Get Your Free Resources</h3>
                  <p>Join 5,000+ professionals who've downloaded these tools</p>
                </div>

                <form onSubmit={handleSubmit} className="lead-form">
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Work Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Your Role</option>
                        <option value="ceo">CEO/Founder</option>
                        <option value="cto">CTO/Technology Leader</option>
                        <option value="director">Director/VP</option>
                        <option value="manager">Manager</option>
                        <option value="consultant">Consultant</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="interests-section">
                    <label>
                      What interests you most? (Select all that apply)
                    </label>
                    <div className="interests-grid">
                      {[
                        "Digital Strategy",
                        "Data Analytics",
                        "Leadership",
                        "Technology",
                        "Change Management",
                        "Innovation",
                      ].map((interest) => (
                        <label key={interest} className="interest-checkbox">
                          <input
                            type="checkbox"
                            value={interest}
                            checked={formData.interests.includes(interest)}
                            onChange={handleChange}
                          />
                          <span className="checkmark"></span>
                          {interest}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="submit-btn">
                    Get My Free Resources Now
                    <span className="btn-arrow">→</span>
                  </button>

                  <div className="form-footer">
                    <p>🔒 Your information is secure. We'll never spam you.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="resources-section">
        <div className="container">
          <h2 className="section-title">What You'll Get (Worth $2,000+)</h2>
          <div className="resources-grid">
            {freeResources.map((resource, index) => (
              <div key={index} className="resource-card">
                <div className="resource-icon">{resource.icon}</div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-meta">
                  <span className="meta-badge">
                    {resource.pages || resource.duration || resource.items}
                  </span>
                </div>
                <div className="resource-topics">
                  <h4>Includes:</h4>
                  <ul>
                    {resource.topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">
            Join Thousands of Successful Professionals
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.quote}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-title">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title">
            Why Smart Professionals Choose Our Training
          </h2>
          <div className="comparison-grid">
            {pricingComparison.map((option, index) => (
              <div
                key={index}
                className={`comparison-card ${option.highlight ? "highlighted" : ""}`}
              >
                <h3 className="option-name">{option.name}</h3>
                <div className="option-price">{option.price}</div>
                <ul className="option-features">
                  {option.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={option.highlight ? "positive" : "negative"}
                    >
                      <span className="feature-icon">
                        {option.highlight ? "✓" : "✗"}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {option.highlight && (
                  <div className="best-value">
                    <span>Best Value</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Digital Strategy?</h2>
            <p>
              Don't let another quarter pass without the tools you need to
              succeed. Download your free resources now and start implementing
              proven frameworks today.
            </p>
            <a href="#hero-form" className="cta-btn">
              Get My Free Resources
            </a>
            <div className="urgency-text">
              <span className="urgency-icon">⏰</span>
              Limited time: Bonus templates included for next 100 downloads
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
