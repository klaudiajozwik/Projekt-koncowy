import { useState } from "react";
import { Link, Element } from 'react-scroll';
import SignOut from "./SignOut";


function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="menu__container">
            <h1 className="logo">ReadingJournal</h1>


            <div className={`menu__link ${showMenu ? "show" : ""}`}>
                {/*<ul>*/}
                {/*    <li>*/}
                {/*        <a href="#add">Dodaj </a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a href="#list">lista</a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a href="#last">Ostatnio dodane</a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                <ul>
                    <li>
                        <Link to="add" smooth={true} duration={500}>Dodaj</Link>
                    </li>
                    <li>
                        <Link to="list" smooth={true} duration={500}>Lista</Link>
                    </li>
                    <li>
                        <Link to="last" smooth={true} duration={500}>Ostatnio dodane</Link>
                    </li>
                </ul>
            </div>
            <div className="menu__toggle" onClick={handleMenuClick}>
                <span className={`menu__bar ${showMenu ? "active" : ""}`}></span>
                <span className={`menu__bar ${showMenu ? "active" : ""}`}></span>
                <span className={`menu__bar ${showMenu ? "active" : ""}`}></span>
            </div>
            <SignOut/>
        </div>
    );
}

export default Menu;



