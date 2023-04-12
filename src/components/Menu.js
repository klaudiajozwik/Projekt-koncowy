
import { useState } from "react";


function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="menu__container">
            <h1 className="logo">ReadingJournal</h1>
            <div className="menu__toggle" onClick={handleMenuClick}>
                <span className={`menu__bar ${showMenu ? "active" : ""}`}></span>
                <span className={`menu__bar ${showMenu ? "active" : ""}`}></span>
                <span className={`menu__bar ${showMenu ? "active" : ""}`}></span>
            </div>

            <div className={`menu__link ${showMenu ? "show" : ""}`}>
                <ul>
                    <li>
                        <a href="#add">Dodaj </a>
                    </li>
                    <li>
                        <a href="#list">lista</a>
                    </li>
                    <li>
                        <a href="#last">Ostatnio dodane</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;



