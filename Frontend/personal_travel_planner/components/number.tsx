// Katharina Brandtner
// number
import React from 'react';
import styles from "../app/page.module.css";
import Heading from "../components/heading"
 
export default function Number() {
    return (
        <div className="container mt-5 pt-5">
            <Heading text="Plan Your Journey - Your Way" variant="light"/>
            <div className="row numbers">
                <div className="col-sm-1"><p className={`${styles.bignumber}`}>1</p></div>
                <div className="col-sm-4 pt-4"><p className={`${styles.numbersp}`}>Start by planning your journey — choose destinations, set durations, and design your itinerary step by step</p></div>
                <div className="col-sm-2"></div>
                <div className="col-sm-1"><p className={`${styles.bignumber}`}>2</p></div>
                <div className={`col-sm-4 pt-4 ${styles.leftpadding}`}><p className={`${styles.numbersp}`}>Choose personalized guides that match your interests to ensure your adventure unfolds exactly as you imagined.</p></div>
            </div>
        </div>
    );
};

