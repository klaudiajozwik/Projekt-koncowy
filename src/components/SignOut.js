
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { firebaseAuth } from "../firebase";

import { useNavigate } from "react-router-dom";

export default function User() {
    const [setUser] = useState(undefined);
    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setUser(currentUser);
        else navigate("/login");
    });

    return (
        <>
            <div className="container__signout">
                {/*<h3>Witaj {user?.email}</h3>*/}
                <button onClick={() => signOut(firebaseAuth)} className={"btn__signout"}>Wyloguj</button>
            </div>
        </>
    );
}