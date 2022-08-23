import React from 'react'

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className="nav__brand">
                    <a href="#" className="nav__link">Rosean</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a href="#" className="nav__link">Categoria 1</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Categoria 2</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Categoria 3</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;