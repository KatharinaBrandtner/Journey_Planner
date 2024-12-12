// Katharina Brandtner
// about
import React from 'react';
import styles from "../app/page.module.css";
import Btn from "../components/button"
import Heading from "../components/heading"


export default function About() {
    return (
        <div className={`container ${styles.bglightgrey} mt-5 pt-2 mb-5`}>
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-3 pt-1">
                    <img className="img-fluid" src="images/coll2.png" width="100%" alt=""/><br/><br/>
                    <img className="img-fluid" src="images/coll3.png" width="100%" alt=""/>
                </div>
                <div className="col-sm-3 pt-5 pb-4">
                    <img className="img-fluid" src="images/coll1.png" width="100%" alt=""/>
                </div>
                <div className="col-sm-4">
                    <Heading text="About" variant="light"/>
                    <p>Welcome to your personal travel planner! We believe that every journey is unique and deserves careful attention to detail. Our platform combines smart planning tools with personalized tips to ensure your travel experience is as smooth and memorable as possible. Start planning your dream trip today!</p>
                    <a href="#"><Btn text="read more" variant='btn-white'/></a>
                  </div>
                <div className="col-sm-1"></div>
            </div>
        </div> 
    );
};