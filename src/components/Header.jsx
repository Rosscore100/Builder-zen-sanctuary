import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Training", path: "/training" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" className="logo-link">
            <span className="logo-text">Digital Platform</span>
          </Link>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-navigation ${isMenuOpen ? "open" : ""}`}>
          <ul className="navigation-list">
            {navigation.map((item) => (
              <li key={item.name} className="navigation-item">
                <Link
                  to={item.path}
                  className={`navigation-link ${location.pathname === item.path ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
