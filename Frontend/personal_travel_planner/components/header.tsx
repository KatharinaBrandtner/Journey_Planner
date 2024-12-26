// Katharina Brandtner
// header

import React from 'react';
import styles from "../app/page.module.css";
import Btn from "../components/button"
import Heading from "../components/heading"


export default function Header(){
  return(
    <div className="container mt-5 mb-5">
          <div className="row">
              <div className={`col-sm-5 ${styles.headerh1}`}>
                  <Heading text="Personal" variant="light"/>
                  <Heading text="Travel Planner" variant="bold"/>
                </div>
              <div className="col-sm-7">
                  <div className={`${styles.imageheader}`}> 
                      <img src="images/hero.png" className="img-fluid" alt="sea" width="100%"/>
                      <a href="/allJourneys"><Btn text="all journeys" variant='btn-white'/></a>
                  </div>
              </div>
            </div>
      </div>
    );  
  };