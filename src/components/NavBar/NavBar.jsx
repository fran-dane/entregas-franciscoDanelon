import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <div className='container'>
            <div className='announcement'>
                <h6>Free shipping on domestic orders over $150</h6>
            </div>
            <nav className='nav'>
                <ul className="nav__list">
                    <li>
                        <a href="#" className="nav__link">Home</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Contact Us</a>
                    </li>
                    <li>
                        <a href="" className="nav__link">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="" className="nav__link">Refund Policy</a>
                    </li>
                    <li>
                        <a href="" className="nav__link">Terms of Service</a>
                    </li>
                    <li>
                        <a href="#" id='carrito' className="nav__link">
                        <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;