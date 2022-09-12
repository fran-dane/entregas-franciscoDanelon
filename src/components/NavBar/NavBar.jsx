import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='container'>
            <div className='announcement'>
                <h6>Free shipping on domestic orders over $150</h6>
            </div>
            <nav className='nav'>
                <ul className="nav__list">
                    <li>
                        <NavLink to='/' className="nav__link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categories' className="nav__link">All Products</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='' className="nav__link">Privacy Policy</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className="nav__link">Refund Policy</NavLink>
                    </li>
                    <li>
                        <NavLink to='' className="nav__link">Terms of Service</NavLink>
                    </li> */}
                    <li>
                        <NavLink to='cart' id='carrito' className="nav__link">
                        <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;