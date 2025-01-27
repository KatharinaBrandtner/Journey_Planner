// Katharina Brandtner
// navbar

"use client";

import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";

export default function Navbar({ active }: { active: string }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); // true, wenn Token existiert
}, []);

const handleLogout = () => {
    localStorage.removeItem("authToken"); // Token löschen
    setIsAuthenticated(false);
    window.location.reload(); // Seite aktualisieren
};

return (
    <nav className={`navbar ${styles.navbar} fixed-top navbar-expand-sm justify-content-center`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.png" className="img-fluid" alt="Logo" style={{ width: "50%" }} />
        </a>

        <ul className="navbar-nav">
          <li className={`nav-item ${styles.navitem}`}>
            <a className={`nav-link ${styles.navlink} ${active === 'home' ? styles.active : ''}`} href="/">Home</a>
          </li>
          <li className={`nav-item ${styles.navitem}`}>
            <a className={`nav-link ${styles.navlink} ${active === 'allJourneys' ? styles.active : ''}`} href="/allJourneys">All Journeys</a>
          </li>
          <li className={`nav-item ${styles.navitem}`}>
            <a className={`nav-link ${styles.navlink}`} href="#">Gallery</a>
          </li>
          <li className={`nav-item ${styles.navitem}`}>
            <a className={`nav-link ${styles.navlink}`} href="#">Guides</a>
          </li>

          <li className={`nav-item ${styles.navitem}`}>
            {isAuthenticated ? (<button className={`nav-link ${styles.navlink}`} onClick={handleLogout}>Logout</button>) : (
              <a className={`nav-link ${styles.navlink} ${active === "Login" ? styles.active : ''}`} href="/login">Login</a>)}
          </li>
          {/* <li className={`nav-item ${styles.navitem}`}>
            <a className={`nav-link ${styles.navlink} ${active === 'Login' ? styles.active : ''}`} href="/login">Login</a>
          </li> */}

          <li className={`nav-item ${styles.navitem}`}>
            <a className={`nav-link ${styles.navlink} ${active === 'Register' ? styles.active : ''}`} href="/register">Create Account</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

