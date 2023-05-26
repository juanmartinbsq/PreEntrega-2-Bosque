import React, { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = (prodId) => {

    const [prod, setProd] = useState(null);

    useEffect(() => {
        getProductById(prodId)
            .then((resolve) => {
                setProd(resolve);
            })
    },[])
  return (
    <div>
        {prod && <ItemDetail prod={prod}/>}
    </div>
  )
}

export default ItemDetailContainer