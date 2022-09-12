import React, {useEffect, useState} from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const products = [
  {id: 1, image: "https://cdn.shopify.com/s/files/1/0245/5116/1905/products/Euphoria-2_Natural_Berries_Mockup.png?v=1643094643", title: "EUPHORIA 2.0", detail: "PRE WORKOUT", price: "$54.99 USD"},
  {id: 2, image: "https://cdn.shopify.com/s/files/1/0245/5116/1905/products/Euphoria-2_Natural_Berries_STIM-FREE_Mockup.png?v=1643094864", title: "EUPHORIA 2.0 STIM-FREE", detail: "PRE WORKOUT", price: "$54.99 USD"}
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {detailId} = useState();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      }, 3000);
    });

    getData.then(res => setData(res.find(product => product.id === parseInt(detailId))));
  }, [])


  return (
    <ItemDetail data={data} />
  );
}


export default ItemDetailContainer;