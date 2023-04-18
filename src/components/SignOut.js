
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { firebaseAuth } from "../firebase";

import { useNavigate } from "react-router-dom";

export default function User() {
    const [user, setUser] = useState(undefined);
    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setUser(currentUser);
        else navigate("/login");
    });

    return (
        <>
            <div className="container">
                {/*<h1>Welcome {user?.email}</h1>*/}
                <button onClick={() => signOut(firebaseAuth)} className={"btn_signout"}>Wyloguj</button>
            </div>
        </>
    );
}