import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { firebaseAuth } from "../firebase";
export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    return (
        <div className={"signup__container"}>
            <div className="menu__container">
                <h1 className="logo">ReadingJournal</h1>
            </div>
            <div className="container__signup">
                <h2>Załóż konto</h2>
                <input className={"input"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input className={"input"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Hasło"
                />
                <div className="container__button">
                    <button onClick={handleSignIn} className={"btn__signup"}>Zarejestruj</button>
                    <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
                </div>
            </div>
        </div>
    );
};
