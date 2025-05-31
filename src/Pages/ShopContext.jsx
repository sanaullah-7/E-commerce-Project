import React from 'react'
import { createContext } from 'react'
import all_product from '../../Ecommerce_Frontend_Assets (1)/Assets/all_product'
import Men from '../Component/MenComponents/Men'
import Women from '../Component/WomenComponents/Women'
import Kids from '../Component/KidsComponents/kid'

export const ShopContextData = createContext()
function ShopContext() {
    return (
        <div>
            <ShopContextData.Provider value={all_product}>
                <Men />
                <Women />
                <Kids />

            </ShopContextData.Provider>
        </div>
    )
}

export default ShopContext
