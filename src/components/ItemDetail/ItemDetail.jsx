import './ItemDetail.css';

import React, {useState} from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

export const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity)
    }

    return (
    <div className="container">
    <div className="detail">
        <img src={data.image} className="detail__image" alt='' />
        <div className="content">
            <h1>{data.title}</h1>
            <p className='product__detail'>{data.detail}</p>
            <span className='price'>{data.price}</span>
            {
                goToCart
                ? <Link to='/cart' className='checkOut'>Check Out</Link>
                : <ItemCount initial={1} stock={5} onAdd={onAdd} />

            }
            {/* <div className="purchase__buttons">
                <button className='btn__buy'>{data.btn1}</button>
                <button className='btn__buy'>{data.btn2}</button>
            </div> */}
            <div className='product__features_container'>
            <p className='product__features'>{data.description1}</p>
            <p className='product__features'>{data.description2}</p>
            <p className='product__features'>{data.description3}</p>
            </div>
        </div>
    </div>
    </div>
    )
}

export default ItemDetail;