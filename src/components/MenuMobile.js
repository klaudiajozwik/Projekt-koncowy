import {useState } from "react";
import {Link} from 'react-scroll';
import SignOut from "./SignOut";

function MenuMobile() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="menu__container">
            <h1 className="logo">ReadingJournal</h1>
            <div className={`menu__link ${showMenu ? "show" : ""}`}>
                <ul>
                    <li>
                        <Link to="add" smooth={true} duration={500} onClick={handleMenuClick}>Dodaj</Link>
                    </li>
                    <li>
                        <Link to="list" smooth={true} duration={500} onClick={handleMenuClick}>Lista</Link>
                    </li>
                    <li>
                        <Link to="last" smooth={true} duration={500} onClick={handleMenuClick}>Ostatnio dodane</Link>
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

export default MenuMobile;
