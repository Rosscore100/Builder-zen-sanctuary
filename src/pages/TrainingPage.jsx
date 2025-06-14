import React from "react";
import { Link } from "react-router-dom";
import "./TrainingPage.scss";

export default function TrainingPage() {
  const courses = [
    {
      id: "digital-strategy-fundamentals",
      title: "Digital Strategy Fundamentals",
      duration: "3 weeks",
      level: "Beginner",
      price: "$297",
      originalPrice: "$497",
      description:
        "Master the core principles of digital transformation and strategic planning for modern businesses.",
      image: "/course-images/digital-strategy.jpg",
      topics: [
        "Digital Frameworks",
        "Change Management",
        "Strategic Planning",
        "ROI Analysis",
      ],
      includes: [
        "12 Video Lessons",
        "3 Ebooks",
        "2 Bonus Podcasts",
        "Templates & Tools",
        "Certificate",
      ],
      features: [
        "3 comprehensive modules covering digital strategy essentials",
        "Real-world case studies from Fortune 500 companies",
        "Digital transformation frameworks and templates",
        "Weekly live Q&A sessions with industry experts",
        "Private community access for networking",
        "Certificate of completion for professional development",
      ],
      ebooks: [
        "Digital Transformation Playbook (45 pages)",
        "Strategic Planning Template Pack",
        "ROI Measurement Framework Guide",
      ],
      podcasts: [
        "Digital Strategy Secrets with Tech Leaders",
        "Transformation Success Stories",
      ],
    },
    {
      id: "advanced-analytics-data-science",
      title: "Advanced Analytics & Data Science",
      duration: "4 weeks",
      level: "Intermediate",
      price: "$497",
      originalPrice: "$797",
      description:
        "Transform your business with data-driven decision making and advanced analytics techniques.",
      image: "/course-images/data-analytics.jpg",
      topics: [
        "Data Analysis",
        "Machine Learning",
        "Visualization",
        "Predictive Modeling",
      ],
      includes: [
        "16 Video Lessons",
        "4 Ebooks",
        "3 Expert Podcasts",
        "Python/SQL Code",
        "Capstone Project",
      ],
      features: [
        "4 intensive modules from basics to advanced analytics",
        "Hands-on projects with real business datasets",
        "Python and SQL code examples and exercises",
        "Data visualization with Tableau and Power BI",
        "Machine learning fundamentals for business applications",
        "Capstone project with personalized feedback",
      ],
      ebooks: [
        "Business Analytics Masterclass (68 pages)",
        "Machine Learning for Business Leaders",
        "Data Visualization Best Practices",
        "SQL Query Reference Guide",
      ],
      podcasts: [
        "Data Science in Action with Industry Experts",
        "Analytics Success Stories from Leading Companies",
        "Future of AI in Business Decision Making",
      ],
    },
    {
      id: "leadership-digital-age",
      title: "Leadership in the Digital Age",
      duration: "6 weeks",
      level: "Advanced",
      price: "$797",
      originalPrice: "$1297",
      description:
        "Develop advanced leadership skills for managing teams and driving innovation in the digital era.",
      image: "/course-images/digital-leadership.jpg",
      topics: [
        "Digital Leadership",
        "Team Management",
        "Innovation Culture",
        "Change Communication",
      ],
      includes: [
        "24 Video Lessons",
        "6 Ebooks",
        "4 Executive Podcasts",
        "Assessment Tools",
        "1-on-1 Coaching",
      ],
      features: [
        "6 comprehensive modules for digital leadership mastery",
        "Personal leadership assessment and development plan",
        "One-on-one coaching session with executive mentor",
        "Digital team management strategies and tools",
        "Innovation culture building frameworks",
        "Executive networking and peer learning opportunities",
      ],
      ebooks: [
        "Digital Leadership Handbook (89 pages)",
        "Remote Team Management Guide",
        "Innovation Culture Playbook",
        "Executive Communication Strategies",
        "Change Management Toolkit",
        "Leadership Assessment Workbook",
      ],
      podcasts: [
        "Executive Insights: Leading Digital Transformation",
        "Innovation Leadership with C-Suite Executives",
        "Building High-Performance Digital Teams",
        "The Future of Executive Leadership",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "VP of Digital Strategy",
      company: "TechCorp Inc.",
      image: "/testimonials/sarah.jpg",
      quote:
        "The Digital Strategy course transformed how we approach transformation. Our team implemented the frameworks immediately with incredible results.",
    },
    {
      name: "Michael Chen",
      title: "Data Director",
      company: "Analytics Pro",
      image: "/testimonials/michael.jpg",
      quote:
        "The analytics course is incredibly practical. Within 2 weeks, I was applying machine learning concepts to real business problems.",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Chief Innovation Officer",
      company: "Innovation Labs",
      image: "/testimonials/emily.jpg",
      quote:
        "The leadership program gave me the tools to successfully lead our digital transformation. The 1-on-1 coaching was invaluable.",
    },
  ];

  return (
    <div className="training-page">
      <section className="training-hero">
        <div className="container">
          <h1 className="page-title">Professional Training Programs</h1>
          <p className="page-subtitle">
            Transform your career and business with expert-led courses designed
            for digital success
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2,500+</span>
              <span className="stat-label">Students Trained</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9/5</span>
              <span className="stat-label">Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="training-content">
        <div className="container">
          {/* Special Offer Banner */}
          <div className="offer-banner">
            <div className="offer-content">
              <h2>🎉 Limited Time: 40% Off All Courses!</h2>
              <p>
                Join thousands of professionals transforming their careers.
                Offer ends soon!
              </p>
              <Link to="/lead-magnet" className="cta-btn">
                Get Free Resources First →
              </Link>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="courses-section">
            <h2 className="section-title">Choose Your Learning Path</h2>
            <div className="courses-grid">
              {courses.map((course, index) => (
                <div key={course.id} className="course-card">
                  <div className="course-image">
                    <img
                      src={course.image}
                      alt={course.title}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="image-placeholder"
                      style={{ display: "none" }}
                    >
                      <span className="placeholder-icon">📚</span>
                    </div>
                    <div className="course-badge">
                      <span className="badge-text">Most Popular</span>
                    </div>
                  </div>

                  <div className="course-content">
                    <div className="course-header">
                      <div className="course-meta">
                        <span className="duration">{course.duration}</span>
                        <span
                          className={`level level-${course.level.toLowerCase()}`}
                        >
                          {course.level}
                        </span>
                      </div>
                      <h3 className="course-title">{course.title}</h3>
                      <p className="course-description">{course.description}</p>
                    </div>

                    <div className="course-pricing">
                      <div className="price-display">
                        <span className="current-price">{course.price}</span>
                        <span className="original-price">
                          {course.originalPrice}
                        </span>
                      </div>
                      <div className="savings">
                        Save{" "}
                        {Math.round(
                          ((parseInt(course.originalPrice.replace("$", "")) -
                            parseInt(course.price.replace("$", ""))) /
                            parseInt(course.originalPrice.replace("$", ""))) *
                            100,
                        )}
                        %
                      </div>
                    </div>

                    <div className="course-includes">
                      <h4>What's Included:</h4>
                      <ul className="includes-list">
                        {course.includes.map((item, idx) => (
                          <li key={idx} className="include-item">
                            <span className="include-check">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="course-materials">
                      <div className="materials-section">
                        <h5>📖 Ebooks ({course.ebooks.length})</h5>
                        <ul className="materials-list">
                          {course.ebooks.slice(0, 2).map((ebook, idx) => (
                            <li key={idx}>{ebook}</li>
                          ))}
                          {course.ebooks.length > 2 && (
                            <li>+ {course.ebooks.length - 2} more...</li>
                          )}
                        </ul>
                      </div>

                      <div className="materials-section">
                        <h5>🎙️ Podcasts ({course.podcasts.length})</h5>
                        <ul className="materials-list">
                          {course.podcasts.slice(0, 2).map((podcast, idx) => (
                            <li key={idx}>{podcast}</li>
                          ))}
                          {course.podcasts.length > 2 && (
                            <li>+ {course.podcasts.length - 2} more...</li>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="course-actions">
                      <Link to={`/course/${course.id}`} className="enroll-btn">
                        Enroll Now - {course.price}
                      </Link>
                      <Link to={`/course/${course.id}`} className="info-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="testimonials-section">
            <h2 className="section-title">Success Stories</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-mark">"</div>
                    <p className="testimonial-text">{testimonial.quote}</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="avatar-placeholder"
                        style={{ display: "none" }}
                      >
                        <span>👤</span>
                      </div>
                    </div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-title">{testimonial.title}</div>
                      <div className="author-company">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Features */}
          <div className="training-features">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Expert Instructors</h3>
                <p>
                  Learn from C-level executives and industry leaders with proven
                  track records
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h3>Hands-on Projects</h3>
                <p>
                  Apply knowledge through real-world scenarios and practical
                  assignments
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3>Professional Certification</h3>
                <p>
                  Earn industry-recognized certificates to advance your career
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>Community & Support</h3>
                <p>
                  Join our exclusive community and get ongoing support from
                  peers and mentors
                </p>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="guarantee-section">
            <div className="guarantee-content">
              <div className="guarantee-badge">
                <span className="badge-icon">🛡️</span>
                <span className="badge-text">30-Day Money-Back Guarantee</span>
              </div>
              <h2>Risk-Free Learning</h2>
              <p>
                We're so confident in our training quality that we offer a full
                30-day money-back guarantee. If you're not completely satisfied,
                get a full refund - no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
