import React, {useEffect, useState} from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';

const producto = {id: 1, image: "https://cdn.shopify.com/s/files/1/0245/5116/1905/products/Euphoria-2_Natural_Berries_Mockup.png?v=1643094643", title: "EUPHORIA 2.0", detail: "PRE WORKOUT", price: "$54.99 USD"}


export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(producto)
      }, 3000);
    });

    getData.then(res => setData(res));
  }, [])


  return (
    <ItemDetail data={data} />
  );
}


export default ItemDetailContainer;