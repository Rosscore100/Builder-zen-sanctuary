import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CourseDetailPage.scss";

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Course data - in a real app, this would come from an API
  const courseData = {
    "digital-strategy-fundamentals": {
      title: "Digital Strategy Fundamentals",
      duration: "3 weeks",
      level: "Beginner",
      price: "$297",
      originalPrice: "$497",
      rating: 4.9,
      students: 2847,
      description:
        "Master the core principles of digital transformation and strategic planning for modern businesses. This comprehensive course will equip you with frameworks, tools, and strategies used by Fortune 500 companies.",
      image: "/course-images/digital-strategy.jpg",
      instructor: {
        name: "Dr. Sarah Chen",
        title: "Digital Transformation Expert",
        experience: "15+ years",
        companies: ["Google", "Microsoft", "McKinsey"],
        image: "/instructors/sarah-chen.jpg",
      },
      modules: [
        {
          title: "Week 1: Digital Transformation Foundations",
          lessons: [
            "Understanding Digital Transformation",
            "Assessment of Current State",
            "Digital Maturity Models",
            "Building the Business Case",
          ],
          duration: "3 hours",
        },
        {
          title: "Week 2: Strategic Planning & Implementation",
          lessons: [
            "Digital Strategy Framework",
            "Technology Roadmapping",
            "Change Management Strategies",
            "Stakeholder Alignment",
          ],
          duration: "4 hours",
        },
        {
          title: "Week 3: Execution & Optimization",
          lessons: [
            "Implementation Planning",
            "KPI Definition & Tracking",
            "Risk Management",
            "Continuous Improvement",
          ],
          duration: "3.5 hours",
        },
      ],
      resources: {
        ebooks: [
          {
            title: "Digital Transformation Playbook",
            pages: 45,
            description:
              "Comprehensive guide with step-by-step frameworks for planning and executing digital transformation initiatives.",
          },
          {
            title: "Strategic Planning Template Pack",
            pages: 23,
            description:
              "Ready-to-use templates for strategy documents, roadmaps, and stakeholder presentations.",
          },
          {
            title: "ROI Measurement Framework",
            pages: 18,
            description:
              "Tools and methodologies for measuring the return on investment of digital initiatives.",
          },
        ],
        podcasts: [
          {
            title: "Digital Strategy Secrets with Tech Leaders",
            duration: "42 minutes",
            description:
              "Exclusive interviews with CTOs from Fortune 500 companies sharing their transformation secrets.",
          },
          {
            title: "Transformation Success Stories",
            duration: "38 minutes",
            description:
              "Real case studies of successful digital transformations across different industries.",
          },
        ],
        bonuses: [
          "Excel-based ROI Calculator",
          "PowerPoint Template Library",
          "Industry-specific Checklists",
          "Private LinkedIn Community Access",
        ],
      },
      outcomes: [
        "Develop a comprehensive digital transformation strategy",
        "Create detailed implementation roadmaps",
        "Build compelling business cases for digital initiatives",
        "Establish KPIs and measurement frameworks",
        "Navigate organizational change effectively",
        "Present strategies to C-level executives",
      ],
      requirements: [
        "Basic understanding of business operations",
        "Access to computer with internet connection",
        "Willingness to complete practical exercises",
        "No prior technical experience required",
      ],
      testimonials: [
        {
          name: "Michael Rodriguez",
          title: "VP of Operations",
          company: "TechStart Inc.",
          quote:
            "This course transformed how we approach digital initiatives. The frameworks are incredibly practical and immediately applicable.",
          rating: 5,
        },
        {
          name: "Jennifer Park",
          title: "Strategy Director",
          company: "Global Solutions",
          quote:
            "Dr. Chen's expertise shines through every module. The templates and tools alone are worth the investment.",
          rating: 5,
        },
      ],
    },
    // Add other courses here...
    "advanced-analytics-data-science": {
      title: "Advanced Analytics & Data Science",
      duration: "4 weeks",
      level: "Intermediate",
      price: "$497",
      originalPrice: "$797",
      rating: 4.8,
      students: 1923,
      // ... similar structure
    },
    "leadership-digital-age": {
      title: "Leadership in the Digital Age",
      duration: "6 weeks",
      level: "Advanced",
      price: "$797",
      originalPrice: "$1297",
      rating: 4.9,
      students: 1456,
      // ... similar structure
    },
  };

  const course = courseData[courseId];

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="container">
          <div className="not-found">
            <h1>Course Not Found</h1>
            <p>The course you're looking for doesn't exist.</p>
            <Link to="/training" className="back-btn">
              ← Back to Training
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="breadcrumb">
                <Link to="/training">Training</Link> /{" "}
                <span>{course.title}</span>
              </div>

              <h1 className="course-title">{course.title}</h1>
              <p className="course-description">{course.description}</p>

              <div className="course-meta">
                <div className="meta-item">
                  <span className="meta-icon">⭐</span>
                  <span>
                    {course.rating} ({course.students} students)
                  </span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">🕐</span>
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">📈</span>
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="instructor-info">
                <div className="instructor-avatar">
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="avatar-placeholder"
                    style={{ display: "none" }}
                  >
                    <span>👨‍🏫</span>
                  </div>
                </div>
                <div className="instructor-details">
                  <div className="instructor-name">
                    {course.instructor.name}
                  </div>
                  <div className="instructor-title">
                    {course.instructor.title}
                  </div>
                  <div className="instructor-experience">
                    {course.instructor.experience} experience
                  </div>
                </div>
              </div>
            </div>

            <div className="enrollment-card">
              <div className="course-image">
                <img
                  src={course.image}
                  alt={course.title}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="image-placeholder" style={{ display: "none" }}>
                  <span className="placeholder-icon">📚</span>
                </div>
              </div>

              <div className="pricing-section">
                <div className="price-display">
                  <span className="current-price">{course.price}</span>
                  <span className="original-price">{course.originalPrice}</span>
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

              <div className="enrollment-actions">
                <button className="enroll-btn">Enroll Now</button>
                <button className="preview-btn">Preview Course</button>
              </div>

              <div className="guarantees">
                <div className="guarantee-item">
                  <span className="guarantee-icon">🛡️</span>
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="guarantee-item">
                  <span className="guarantee-icon">📱</span>
                  <span>Lifetime access on all devices</span>
                </div>
                <div className="guarantee-item">
                  <span className="guarantee-icon">🏆</span>
                  <span>Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="course-content">
        <div className="container">
          <div className="content-tabs">
            <button
              className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${activeTab === "curriculum" ? "active" : ""}`}
              onClick={() => setActiveTab("curriculum")}
            >
              Curriculum
            </button>
            <button
              className={`tab-btn ${activeTab === "resources" ? "active" : ""}`}
              onClick={() => setActiveTab("resources")}
            >
              Resources
            </button>
            <button
              className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "overview" && (
              <div className="overview-content">
                <div className="content-grid">
                  <div className="main-content">
                    <h2>What You'll Learn</h2>
                    <ul className="outcomes-list">
                      {course.outcomes.map((outcome, index) => (
                        <li key={index} className="outcome-item">
                          <span className="outcome-check">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>

                    <h2>Course Requirements</h2>
                    <ul className="requirements-list">
                      {course.requirements.map((requirement, index) => (
                        <li key={index} className="requirement-item">
                          <span className="requirement-bullet">•</span>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sidebar-content">
                    <div className="instructor-card">
                      <h3>Your Instructor</h3>
                      <div className="instructor-profile">
                        <div className="instructor-avatar">
                          <img
                            src={course.instructor.image}
                            alt={course.instructor.name}
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div
                            className="avatar-placeholder"
                            style={{ display: "none" }}
                          >
                            <span>👨‍🏫</span>
                          </div>
                        </div>
                        <div className="instructor-bio">
                          <h4>{course.instructor.name}</h4>
                          <p>{course.instructor.title}</p>
                          <p>{course.instructor.experience} experience at:</p>
                          <div className="companies">
                            {course.instructor.companies.map(
                              (company, index) => (
                                <span key={index} className="company-tag">
                                  {company}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div className="curriculum-content">
                <h2>Course Curriculum</h2>
                <div className="modules-list">
                  {course.modules.map((module, index) => (
                    <div key={index} className="module-card">
                      <div className="module-header">
                        <h3 className="module-title">{module.title}</h3>
                        <span className="module-duration">
                          {module.duration}
                        </span>
                      </div>
                      <ul className="lessons-list">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="lesson-item">
                            <span className="lesson-icon">▶️</span>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "resources" && (
              <div className="resources-content">
                <h2>Course Resources</h2>

                <div className="resources-grid">
                  <div className="resource-section">
                    <h3>📖 Ebooks ({course.resources.ebooks.length})</h3>
                    <div className="resource-items">
                      {course.resources.ebooks.map((ebook, index) => (
                        <div key={index} className="resource-item">
                          <div className="resource-info">
                            <h4>{ebook.title}</h4>
                            <p>{ebook.description}</p>
                            <span className="resource-meta">
                              {ebook.pages} pages
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="resource-section">
                    <h3>🎙️ Podcasts ({course.resources.podcasts.length})</h3>
                    <div className="resource-items">
                      {course.resources.podcasts.map((podcast, index) => (
                        <div key={index} className="resource-item">
                          <div className="resource-info">
                            <h4>{podcast.title}</h4>
                            <p>{podcast.description}</p>
                            <span className="resource-meta">
                              {podcast.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="resource-section">
                    <h3>🎁 Bonus Materials</h3>
                    <div className="bonus-items">
                      {course.resources.bonuses.map((bonus, index) => (
                        <div key={index} className="bonus-item">
                          <span className="bonus-check">✓</span>
                          {bonus}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="reviews-content">
                <h2>Student Reviews</h2>
                <div className="reviews-summary">
                  <div className="rating-overview">
                    <div className="average-rating">
                      <span className="rating-number">{course.rating}</span>
                      <div className="rating-stars">
                        {"★".repeat(Math.floor(course.rating))}
                      </div>
                    </div>
                    <p>{course.students} students</p>
                  </div>
                </div>

                <div className="reviews-list">
                  {course.testimonials.map((testimonial, index) => (
                    <div key={index} className="review-card">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <h4>{testimonial.name}</h4>
                          <p>
                            {testimonial.title}, {testimonial.company}
                          </p>
                        </div>
                        <div className="review-rating">
                          {"★".repeat(testimonial.rating)}
                        </div>
                      </div>
                      <p className="review-text">"{testimonial.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="related-courses">
        <div className="container">
          <h2>Related Courses</h2>
          <div className="related-grid">
            <Link
              to="/course/advanced-analytics-data-science"
              className="related-card"
            >
              <h3>Advanced Analytics & Data Science</h3>
              <p>4 weeks • Intermediate • $497</p>
            </Link>
            <Link to="/course/leadership-digital-age" className="related-card">
              <h3>Leadership in the Digital Age</h3>
              <p>6 weeks • Advanced • $797</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
