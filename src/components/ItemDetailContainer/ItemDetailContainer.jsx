import React, {useEffect, useState} from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

// const products = [
//   {id: 1, price: 54.99, image: "https://cdn.shopify.com/s/files/1/0245/5116/1905/products/Euphoria-2_Natural_Berries_Mockup.png?v=1643094643", title: "EUPHORIA 2.0", detail: "PRE WORKOUT", description1: "Maxed Out Formula", description2: "Organically Flavored", description3: "Naturally Sweetened", btn1: "Add to Cart", btn2: "Buy Now"},
//   {id: 2, price: 54.99, image: "https://cdn.shopify.com/s/files/1/0245/5116/1905/products/Euphoria-2_Natural_Berries_STIM-FREE_Mockup.png?v=1643094864", title: "EUPHORIA 2.0 STIM-FREE", detail: "PRE WORKOUT", description1: "Maxed Out Formula", description2: "Organically Flavored", description3: "Naturally Sweetened", btn1: "Add to Cart", btn2: "Buy Now"}
// ];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {detailId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', detailId);
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
  }, [detailId])


  return (
    <ItemDetail data={data} />
  );
}


export default ItemDetailContainer;
