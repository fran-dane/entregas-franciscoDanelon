import React from 'react'
import estilo1 from './ItemDetail.css'

export const ItemDetail = ({data}) => {
    return (
    <div className="container">
    <div className="detail">
        <img src={data.image} className="detail__image" alt='' />
        <div className="content">
            <h1>{data.title}</h1>
            <p className='product__detail'>{data.detail}</p>
            <span className='price'>{data.price}</span>
        </div>
    </div>
    </div>
    )
}

export default ItemDetail;