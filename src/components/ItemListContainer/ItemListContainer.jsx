import React, {useState, useEffect} from 'react'

import Title from '../Title/Title';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

// Array de productos -> por el momento quiero hacer de un solo producto y basar toda la pagina en ese producto
const products = [
    {id: 1, price: 54.99, image: "https://cdn.shopify.com/s/files/1/0245/5116/1905/products/Euphoria-2_Natural_Berries_Mockup.png?v=1643094643", title: "EUPHORIA 2.0", category: 'pre'},
    {id: 2, price: 54.99, image: "https://cdn.shopify.com/s/files/1/0245/5116/1905/products/Euphoria-2_Natural_Berries_STIM-FREE_Mockup.png?v=1643094864", title: "EUPHORIA 2.0 STIM FREE", category: 'pre'}
]


export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {allProducts} = useParams();

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        });
        if (allProducts) {
            getData.then(res => setData(res.filter(product => product.category === allProducts)));
            } else {
                getData.then(res => setData(res));
            }

    }, [allProducts])

    // const onAdd = (quantity) => {
    // alert(`Se agregaron ${quantity} unidades al carrito`);
    // }

    return (
        <>
            <Title greeting='Catalog' />
            <ItemList data={data} />
        </>
    );
}


export default ItemListContainer;