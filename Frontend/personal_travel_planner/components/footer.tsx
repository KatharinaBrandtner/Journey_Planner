// Katharina Brandtner
// footer
"use client";

import React, { useEffect } from "react";
import styles from "../app/page.module.css";

export default function Footer(){
    useEffect(()=>{
        const script: HTMLScriptElement = document.createElement("script");
        script.src = "https://kit.fontawesome.com/1b046ec410.js";
        script.crossOrigin = "anonymous";
        script.defer = true;
        document.body.appendChild(script);
    },[]);

  return (
    <div className={`footer ${styles.footer}`}>
        <div className="container mt-5 p-4">
            <div className="row">
                <div className="col-sm-4"><img src="images/logo light.png" className="img-fluid" width="30%" alt="Logo"/></div>
                <div className="col-sm-2">
                    <p>
                        <span className={`${styles.bold}`}>Information</span><br/>
                        <a href="index.html">Home</a><br/>
                        <a href="all_journeys.html">All Journeys</a><br/>
                        <a href="#">Gallery</a><br/>
                        <a href="#">Guides</a><br/>
                        <a href="#">Profil</a><br/>
                    </p>
                </div>
                <div className="col-sm-2">
                    <p>
                        <span className={`${styles.bold}`}>Contacts</span><br/>
                        Lothstraße 34<br/>
                        80335 München<br/><br/>
                        +49 151 123 456 78<br/>
                        brandtne@hm.edu
                    </p>
                </div>
                <div className="col-sm-4">
                    <p><i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-linkedin"></i> <i className="fa-brands fa-pinterest-p"></i></p>
                </div>
            </div>
            <hr/>
            <p className={`${styles.center}`}>&copy; 2024 by Katharina Brandtner</p>
        </div>
    </div>
  );
};
