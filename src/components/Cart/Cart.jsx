import React from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length ===0) {
        return (
            <>
                <p className='noItems'>No items in Cart</p>
                <h2 className='cartPlus'><i class="fa-solid fa-cart-plus"></i></h2>
                <Link to='/' className='addProducts'>Add Products</Link>
            </>
        );
    }

    return (
        <>
        <div className='cart'>Cart</div>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p className='totalPrice'>
            Total: ${totalPrice()}
        </p>
        </>
    )
}

export default Cart;