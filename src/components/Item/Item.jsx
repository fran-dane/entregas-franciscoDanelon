import './Item.css'

import { Link } from 'react-router-dom'
import React from 'react'

// Creo un producto

const Item = ({info}) => {
    return (
        <Link to={`/detail/${info.id}`} className='product'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;