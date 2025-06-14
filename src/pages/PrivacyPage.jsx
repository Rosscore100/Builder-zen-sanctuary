import React from "react";
import "./PrivacyPage.scss";

export default function PrivacyPage() {
  const lastUpdated = "January 2025";

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">
            Your privacy is important to us. Learn how we collect, use, and
            protect your information.
          </p>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="content-sections">
            <div className="content-section">
              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when
                you:
              </p>
              <ul>
                <li>Contact us through our website forms</li>
                <li>Subscribe to our newsletters or updates</li>
                <li>Register for our training programs</li>
                <li>Download resources from our library</li>
              </ul>

              <h3>Types of Information</h3>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  company name
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages, feedback, and
                  inquiries
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our website
                  and services
                </li>
              </ul>
            </div>

            <div className="content-section">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you relevant updates and educational content</li>
                <li>Analyze website usage to enhance user experience</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties. We may share information only in
                these limited circumstances:
              </p>
              <ul>
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>
                  With trusted service providers who assist our operations
                </li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Secure data transmission using SSL encryption</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with regulatory authorities</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar technologies to enhance
                your browsing experience. You can control cookie settings
                through your browser preferences.
              </p>

              <h3>Types of Cookies</h3>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand website
                  usage
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings
                  and choices
                </li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these external sites. We recommend reviewing their privacy
                policies before providing any personal information.
              </p>
            </div>

            <div className="content-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="content-section">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:digitalplatformonline@outlook.com">
                    digitalplatformonline@outlook.com
                  </a>
                </p>
                <p>
                  <strong>Subject Line:</strong> Privacy Policy Inquiry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
