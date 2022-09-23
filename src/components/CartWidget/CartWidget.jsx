import React from 'react'
import {useCartContext} from '../../context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {
const {totalProducts} = useCartContext();
    return (
        <>
        <i className="bi bi-cart3"></i>
        <span className='iconCartQuantity'>{totalProducts() || ''}</span>
        </>
    );
}

export default CartWidget ;