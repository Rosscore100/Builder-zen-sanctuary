import React from "react";
import "./PodcastsPage.scss";

export default function PodcastsPage() {
  const podcasts = [
    {
      title: "Digital Transformation Fundamentals",
      episode: "Episode 1",
      duration: "42 min",
      description:
        "An introduction to digital transformation, covering key concepts, common challenges, and success strategies.",
      topics: ["Digital Strategy", "Change Management", "Leadership"],
      date: "January 15, 2025",
    },
    {
      title: "Building Data-Driven Organizations",
      episode: "Episode 2",
      duration: "38 min",
      description:
        "How to leverage data analytics to make informed decisions and drive business growth.",
      topics: ["Data Analytics", "Business Intelligence", "Decision Making"],
      date: "January 8, 2025",
    },
    {
      title: "The Future of Remote Work Technology",
      episode: "Episode 3",
      duration: "45 min",
      description:
        "Exploring emerging technologies that are reshaping how we work remotely and collaborate.",
      topics: ["Remote Work", "Collaboration Tools", "Future Trends"],
      date: "January 1, 2025",
    },
    {
      title: "Cybersecurity in the Digital Age",
      episode: "Episode 4",
      duration: "51 min",
      description:
        "Essential cybersecurity practices for businesses navigating digital transformation.",
      topics: ["Cybersecurity", "Risk Management", "Best Practices"],
      date: "December 25, 2024",
    },
    {
      title: "Customer Experience Revolution",
      episode: "Episode 5",
      duration: "39 min",
      description:
        "How digital technologies are transforming customer experiences across industries.",
      topics: ["Customer Experience", "Digital Touchpoints", "Innovation"],
      date: "December 18, 2024",
    },
    {
      title: "Artificial Intelligence for Business Leaders",
      episode: "Episode 6",
      duration: "47 min",
      description:
        "Understanding AI applications, implementation strategies, and ethical considerations.",
      topics: ["Artificial Intelligence", "Machine Learning", "Ethics"],
      date: "December 11, 2024",
    },
  ];

  const featuredGuests = [
    {
      name: "Sarah Johnson",
      title: "Chief Digital Officer",
      company: "TechCorp Industries",
      expertise: "Enterprise Digital Transformation",
    },
    {
      name: "Michael Chen",
      title: "Data Science Director",
      company: "Analytics Pro",
      expertise: "Business Intelligence & Analytics",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "AI Research Lead",
      company: "Innovation Labs",
      expertise: "Artificial Intelligence & Ethics",
    },
  ];

  return (
    <div className="podcasts-page">
      <section className="podcasts-hero">
        <div className="container">
          <h1 className="page-title">Expert Podcasts</h1>
          <p className="page-subtitle">
            Industry insights, success stories, and expert interviews to keep
            you ahead of digital trends
          </p>
        </div>
      </section>

      <section className="podcasts-content">
        <div className="container">
          {/* Podcast Episodes */}
          <div className="episodes-section">
            <h2 className="section-title">Latest Episodes</h2>
            <div className="episodes-grid">
              {podcasts.map((podcast, index) => (
                <div key={index} className="episode-card">
                  <div className="episode-header">
                    <div className="episode-meta">
                      <span className="episode-number">{podcast.episode}</span>
                      <span className="episode-duration">
                        {podcast.duration}
                      </span>
                      <span className="episode-date">{podcast.date}</span>
                    </div>
                    <h3 className="episode-title">{podcast.title}</h3>
                    <p className="episode-description">{podcast.description}</p>
                  </div>

                  <div className="episode-topics">
                    <h4>Topics Covered:</h4>
                    <div className="topics-list">
                      {podcast.topics.map((topic, idx) => (
                        <span key={idx} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="episode-actions">
                    <button className="play-btn">
                      <span className="play-icon">▶️</span>
                      Play Episode
                    </button>
                    <button className="download-btn">Download</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Guests */}
          <div className="guests-section">
            <h2 className="section-title">Featured Guests</h2>
            <div className="guests-grid">
              {featuredGuests.map((guest, index) => (
                <div key={index} className="guest-card">
                  <div className="guest-avatar">
                    <span className="avatar-placeholder">👤</span>
                  </div>
                  <div className="guest-info">
                    <h3 className="guest-name">{guest.name}</h3>
                    <p className="guest-title">{guest.title}</p>
                    <p className="guest-company">{guest.company}</p>
                    <p className="guest-expertise">{guest.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="subscribe-section">
            <div className="subscribe-content">
              <h2>Stay Updated</h2>
              <p>
                Subscribe to our podcast to receive notifications about new
                episodes and exclusive content.
              </p>
              <div className="subscribe-platforms">
                <button className="platform-btn apple">
                  🎵 Apple Podcasts
                </button>
                <button className="platform-btn spotify">🎧 Spotify</button>
                <button className="platform-btn google">
                  🎙️ Google Podcasts
                </button>
                <button className="platform-btn rss">📡 RSS Feed</button>
              </div>
            </div>
          </div>

          {/* Podcast Features */}
          <div className="features-section">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Expert Insights</h3>
                <p>
                  Learn from industry leaders and digital transformation experts
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Actionable Strategies</h3>
                <p>
                  Get practical advice you can implement in your organization
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3>Industry Trends</h3>
                <p>Stay ahead with the latest digital transformation trends</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>Real Case Studies</h3>
                <p>Discover real-world success stories and lessons learned</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
