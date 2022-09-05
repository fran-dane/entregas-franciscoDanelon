import './Item.css'

import React from 'react'

// Creo un producto

const Item = ({info}) => {
    return (
        <a href='' className='producto'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </a>
    );
}

export default Item;