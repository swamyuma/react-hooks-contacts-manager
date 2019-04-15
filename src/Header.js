import React from "react";

export default function Header() {
  const branding = "Contacts Manager";
  return (
    <nav className="navbar navbar-expand-sm navbar-dark narvbar-danger bg-danger py-0 mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
