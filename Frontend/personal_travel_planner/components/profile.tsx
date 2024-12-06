"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchAndTransformPerson } from "@/student-db/services/randomUserService";
import { Student } from "../types/student";
import styles from "../../app/page.module.css";

export default function Profile({ initialStudents }: { initialStudents: Student[] }) {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [gender, setGender] = useState<string>("all");
  const [showMore, setShowMore] = useState<number | null>(null); // null bedeutet, dass alle "mehr infos" ausgeblendet sind

  const fetchStudents = async (gender?: string) => {
    const newStudents = await fetchAndTransformPerson(gender);
    setStudents(newStudents);
  };

  const handleGenderChange = (selectedGender: string) => {
    setGender(selectedGender);
    fetchStudents(selectedGender === "all" ? undefined : selectedGender); // "all" bedeutet keine Filterung
  };

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>Random Profile:</h1>
      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.allgenders}`} onClick={() => handleGenderChange("all")}>Alle</button>
        <button className={`${styles.button} ${styles.female}`} onClick={() => handleGenderChange("male")}>Männlich</button>
        <button className={`${styles.button} ${styles.male}`} onClick={() => handleGenderChange("female")}>Weiblich</button>
      </div>
      <div className={styles.profileCardContainer}> 
      <div className={styles.profileGrid}> 
        {students.map((student, index) => (
          <div key={student.id} className={styles.profileCard}>
            <Image className={styles.profileImage} src={student.picture} width={1000} height={500} alt={student.name} />
            <h3 className={styles.nameh3}>{student.name}</h3>
            <p>{student.email}</p>
            <p>{student.city}</p>
            <button className={`${styles.button} ${styles.btninfo}`} onClick={() => setShowMore(showMore === index ? null : index)}>
              {showMore === index ? "weniger infos" : "mehr infos"}
            </button>
            {showMore === index && (
              <div className={styles.moreInfo}>
                <p>{student.country}</p>
                <p>{student.gender}</p>
                <p>{student.phonenumber}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}