import React from 'react';
import { useCartContext } from '../../context/CartContext';
import "./ItemCart.css";


const ItemCart = ({product}) => {
const {removeProduct} = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.image} alt={product.title} />
            <div>
            <h4>{product.title}</h4>
            <p>Quantity: {product.quantity}</p>
            <p>Unit Price: ${product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button className='deleteProduct' onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
    </div>
    )
}

export default ItemCart;