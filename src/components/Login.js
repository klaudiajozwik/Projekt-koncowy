
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebase";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error.code);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    return (
        <>
            <div className="menu__container">
                <h1 className="logo">ReadingJournal</h1>
            </div>
            <div className="container__login">
                <h2>Logowanie</h2>
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
                    <button onClick={handleLogin} className={"btn__login"}>Zaloguj</button>
                    <span>
            Nie masz konta ? <Link to="/signup">Zarejestruj się</Link>
          </span>
                </div>
            </div>
        </>
    );
};
