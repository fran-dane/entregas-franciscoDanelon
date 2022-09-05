import React, {useState, useEffect} from 'react'

import ItemCount from '../ItemCount/ItemCount';
import Title from '../Title/Title';
import ItemList from '../ItemList/ItemList';

// Array de productos -> por el momento quiero hacer de un solo producto y basar toda la pagina en ese producto
const productos = [
    {id: 1, image: "https://cdn.shopify.com/s/files/1/0245/5116/1905/products/Euphoria-2_Natural_Berries_Mockup.png?v=1643094643", title: "EUPHORIA 2.0"}
]


export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 3000);
        });
        getData.then(res => setData(res))

    }, [])

    const onAdd = (quantity) => {
    alert(`Se agregaron ${quantity} unidades al carrito`);
    }

    return (
        <>
            <Title greeting='Catalog' />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}


export default ItemListContainer;