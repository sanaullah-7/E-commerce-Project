import React from 'react'
import { useParams } from 'react-router-dom'
import all_product from '../../Ecommerce_Frontend_Assets (1)/Assets/all_product'

function Product() {
    const Unique = useParams()
    const specficData = all_product.find((user) => user.id === +Unique.id)
    console.log('specficData: ', specficData);
    return (
        <div>

        </div>
    )
}

export default Product
