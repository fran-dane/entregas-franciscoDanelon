import React from 'react'
import css from './ItemDetail.css';

export const ItemDetail = ({data}) => {
    return (
    <div className="container">
    <div className="detail">
        <img src={data.image} className="detail__image" alt='' />
        <div className="content">
            <h1>{data.title}</h1>
            <p className='product__detail'>{data.detail}</p>
            <span className='price'>{data.price}</span>
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