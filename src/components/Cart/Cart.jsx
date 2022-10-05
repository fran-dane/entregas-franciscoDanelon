import React from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2'


const Cart = () => {
    const {cart, totalPrice} = useCartContext();


    const order = {
        buyer: {
            name: 'Francisco',
            email: 'fran@gmail.com',
            phone: '+1 202-918-2132',
            addres: 'Ocean Drive'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your order has been completed',
            showConfirmButton: false,
            timer: 4500
        })

        addDoc(ordersCollection, order)
        .then(({ id }) => {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Your Order Number',
                text: `${id}`,
                showConfirmButton: false,
                timer: 5500
              })
        })
    }

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
        <button className='check-out' onClick={handleClick}>Check Out</button>
        </>
    )
}

export default Cart;