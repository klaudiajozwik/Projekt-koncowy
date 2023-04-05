import React from 'react';

function Menu() {
    return (
        <div className={"menu__style"} >
            <h1 className={"logo__style"}>ReadingJournal</h1>
            <div className={"menu__link"}>
                <ul className={"menu__link"}>
              <li><a href="#">Dodaj książkę</a></li>
                 <li> <a href ="#list"> Moja lista</a></li>
            </ul>
            </div>
        </div>
    );
}

export default Menu;
