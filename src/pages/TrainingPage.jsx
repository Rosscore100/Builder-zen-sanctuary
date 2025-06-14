import React from "react";
import "./TrainingPage.scss";

export default function TrainingPage() {
  const courses = [
    {
      title: "Digital Strategy Fundamentals",
      duration: "4 weeks",
      level: "Beginner",
      description:
        "Learn the core principles of digital transformation and strategic planning.",
      topics: [
        "Digital Frameworks",
        "Change Management",
        "Strategic Planning",
        "ROI Analysis",
      ],
    },
    {
      title: "Advanced Analytics & Data Science",
      duration: "6 weeks",
      level: "Intermediate",
      description:
        "Master data analytics tools and techniques for business intelligence.",
      topics: [
        "Data Analysis",
        "Machine Learning",
        "Visualization",
        "Predictive Modeling",
      ],
    },
    {
      title: "Leadership in Digital Age",
      duration: "3 weeks",
      level: "Advanced",
      description:
        "Develop leadership skills for managing digital transformation initiatives.",
      topics: [
        "Digital Leadership",
        "Team Management",
        "Innovation Culture",
        "Communication",
      ],
    },
  ];

  return (
    <div className="training-page">
      <section className="training-hero">
        <div className="container">
          <h1 className="page-title">Digital Training Programs</h1>
          <p className="page-subtitle">
            Expert-led courses designed to accelerate your team's digital
            capabilities
          </p>
        </div>
      </section>

      <section className="training-content">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
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

                <div className="course-topics">
                  <h4>What You'll Learn:</h4>
                  <ul className="topics-list">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="topic-item">
                        <span className="topic-check">✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="course-actions">
                  <button className="enroll-btn">Enroll Now</button>
                  <button className="info-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>

          <div className="training-features">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Expert Instructors</h3>
                <p>Learn from industry leaders with proven track records</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h3>Hands-on Projects</h3>
                <p>
                  Apply knowledge through real-world scenarios and case studies
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3>Certification</h3>
                <p>Earn recognized certificates upon successful completion</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>Community Support</h3>
                <p>
                  Join a network of professionals and continue learning together
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
