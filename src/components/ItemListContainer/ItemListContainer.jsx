import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Title from '../Title/Title';

export const ItemListContainer = () => {

    const onAdd = (quantity) => {
    alert(`Se agregaron ${quantity} unidades al carrito`);
    }

    return (
        <>
            <Title greeting='Catalog' />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
    );
}


export default ItemListContainer;