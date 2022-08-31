import './ItemCount.css'

import React, {useState, useEffect} from 'react'

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className="counter">
            <button disabled={count <= 1} onClick={decrease} className='btnAmount'>-</button>
            <span className='cantidad'>{count}</span>
            <button disabled={count >= stock} onClick={increase} className='btnAmount'>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className='agregarCarrito'>Agregar al carrito</button>
            </div>
        </div>
    );
} 

export default ItemCount;