// Katharina Brandtner
// navbar

import React from 'react';
import styles from "../app/page.module.css";

export default function Navbar(){
    return (
        <nav className={`navbar  ${styles.navbar} fixed-top navbar-expand-sm justify-content-center`}>
          <div className="container">
            
            <a className="navbar-brand" href="/">
              <img src="/images/logo.png" className="img-fluid" alt="Logo" style={{ width: "50%" }}/>
            </a>
            
            <ul className="navbar-nav">
              <li className={`nav-item ${styles.navitem}`}>
                <a className={`nav-link ${styles.navlink} ${styles.active}`} href="/">Home</a>
              </li>
              <li className={`nav-item ${styles.navitem}`}>
                <a className={`nav-link ${styles.navlink}`} href="/allJourneys">All Journeys</a>
              </li>
              <li className={`nav-item ${styles.navitem}`}>
                <a className={`nav-link ${styles.navlink}`} href="/gallery">Gallery</a>
              </li>
              <li className={`nav-item ${styles.navitem}`}>
                <a className={`nav-link ${styles.navlink}`} href="/guides">Guides</a>
              </li>
              <li className={`nav-item ${styles.navitem}`}>
                <a className={`nav-link ${styles.navlink}`} href="/profile">Profile</a>
              </li>
            </ul>
          </div>
        </nav>
    );
};

