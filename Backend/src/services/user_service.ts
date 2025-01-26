// Autor: Katharina Brandtner
// passwort udn benutzer anlegen


import bcrypt from "bcryptjs";
import User from "../models/user_model";

export const createUser = async (email: string, password: string) => {
    // Prüfen, ob Benutzer schon existiert
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists.");
    }

    // Passwort verschlüsseln
    const hashedPassword = await bcrypt.hash(password, 10);

    // Benutzer speichern
    const user = new User({ email, password: hashedPassword });
    await user.save();

    return user;
};
