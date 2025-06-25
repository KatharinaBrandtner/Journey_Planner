"use client";

// Katharina Brandtner
// alljourneys

import React, { useEffect, useState } from "react";

import Navbar from "@components/navbar"
import Footer from '@components/footer';
import Heading from '@components/heading';
import AllCards from '@components/allcards';
import styles from "../page.module.css";

//test comment2 wegen merge
export default function Page(){
  const [isAuthenticated, setIsAuthenticated]=useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); 

    if (!token) {
      // Wenn kein Token vorhanden ist, nach 10 Sekunden zur Login-Seite weiterleiten
      const redirectTimeout = setTimeout(() => {
        window.location.href = "/login"; // Weiterleitung zur Login-Seite
      }, 5000); //5sek
      return () => clearTimeout(redirectTimeout); // Timeout beim Verlassen der Komponente löschen
    }

  }, []);

  if (!isAuthenticated) {
    return (
      <>
        <Navbar active="allJourneys" />
        <div className="container mt-5 text-center">
          <br/>
          <br/>
          <br/>
          <br/>
          <p className="alert alert-warning">
            Bitte logge dich ein, um alle Reisen zu sehen.<br/> 
            In 5 Sekunden werden Sie automatisch auf die Login Seite weitergeleitet.<br/>
            Sollte es nicht funktionieren kommen sie <a href="/login">hier</a> auf die Login Seite
          </p>
        </div>
        <Footer />
      </>
    );
  }

    return (
      <>
        <Navbar active='allJourneys'/>
        <br/>
        <br/>
        <br/>
  
        <div className='container mb-5'>
          <Heading text="All" variant='light'/>
          <Heading text="Journeys" variant='bold'/>

          
          
          <a href='/allJourneysTable' className={styles.link}>View as table</a>
           
        </div>



        <div className="container" id="trips-container">
          <AllCards/>
          </div>  
  
        <Footer/>
      </>
    );
  };
  
  
