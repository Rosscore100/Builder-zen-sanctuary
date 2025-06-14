import React from "react";
import "./TermsPage.scss";

export default function TermsPage() {
  const lastUpdated = "January 2025";

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="container">
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-subtitle">
            Please read these terms carefully before using our services.
          </p>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="content-sections">
            <div className="content-section">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using Digital Platform's services, you accept
                and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </div>

            <div className="content-section">
              <h2>Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on
                Digital Platform's website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to reverse engineer any software contained on our
                  website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by us at any time.
              </p>
            </div>

            <div className="content-section">
              <h2>Services Description</h2>
              <p>
                Digital Platform provides digital transformation consulting,
                training programs, educational resources, and related services.
                Our services include:
              </p>
              <ul>
                <li>Digital strategy consulting and guidance</li>
                <li>Online training courses and workshops</li>
                <li>Educational resources and downloadable materials</li>
                <li>Expert insights and industry analysis</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>User Responsibilities</h2>
              <p>When using our services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Payment Terms</h2>
              <p>For paid services, the following terms apply:</p>
              <ul>
                <li>Payment is due as specified in your service agreement</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Prices are subject to change with advance notice</li>
                <li>Late payments may result in service suspension</li>
                <li>You are responsible for all applicable taxes</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Intellectual Property</h2>
              <p>
                All content, materials, and intellectual property on this
                website are owned by Digital Platform or our licensors. This
                includes:
              </p>
              <ul>
                <li>Training materials and course content</li>
                <li>Proprietary methodologies and frameworks</li>
                <li>Website design and functionality</li>
                <li>Logos, trademarks, and brand elements</li>
                <li>Written content, images, and multimedia</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Disclaimers</h2>
              <p>
                The materials on Digital Platform's website are provided on an
                'as is' basis. Digital Platform makes no warranties, expressed
                or implied, and hereby disclaims and negates all other
                warranties including without limitation:
              </p>
              <ul>
                <li>Implied warranties or conditions of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property</li>
                <li>Accuracy, reliability, or completeness of materials</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Limitations of Liability</h2>
              <p>
                In no event shall Digital Platform or its suppliers be liable
                for any damages (including, without limitation, damages for loss
                of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on Digital
                Platform's website, even if we have been notified orally or in
                writing of the possibility of such damage.
              </p>
            </div>

            <div className="content-section">
              <h2>Privacy Policy</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how
                we collect, use, and protect your information when you use our
                services. By using our services, you also agree to our Privacy
                Policy.
              </p>
            </div>

            <div className="content-section">
              <h2>Termination</h2>
              <p>
                We may terminate or suspend your access to our services
                immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms
                of Service.
              </p>
            </div>

            <div className="content-section">
              <h2>Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with applicable laws, and you irrevocably submit to
                the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div className="content-section">
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days notice prior to any new
                terms taking effect.
              </p>
            </div>

            <div className="content-section">
              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:digitalplatformonline@outlook.com">
                    digitalplatformonline@outlook.com
                  </a>
                </p>
                <p>
                  <strong>Subject Line:</strong> Terms of Service Inquiry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
