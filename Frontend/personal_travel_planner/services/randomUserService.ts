import { Student } from "../types/student";
import axios from "axios";

export async function fetchAndTransformPerson(gender?: string): Promise<Student[]> {
    // Hier geben wir die Anzahl der gewünschten Ergebnisse an
    const url = gender ? `https://randomuser.me/api/?gender=${gender}&results=3` : `https://randomuser.me/api?results=3`;
    const response = await axios.get(url);
    
    // Wir mappen die Ergebnisse in ein Array von Studenten
    const students: Student[] = response.data.results.map((person: any) => ({
        name: `${person.name.first} ${person.name.last}`,
        email: person.email,
        city: person.location.city,
        picture: person.picture.large,
        gender: person.gender,
        country: person.location.country,
        phonenumber: person.phone,
    }));
    
    return students;
}