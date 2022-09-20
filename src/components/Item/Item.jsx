import './Item.css';

import { Link } from 'react-router-dom';
import React, {useContext} from 'react'

// Creo un producto (solo muestro titulo e imagen) -> el itemdetail se encarga del detalle

const Item = ({info}) => {

    return (
        <Link to={`/detail/${info.id}`} className='product'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;