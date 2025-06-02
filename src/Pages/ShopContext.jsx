import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'// Ye ek naya context banata hai jise hum global data share karne ke liye use karte hain.
import all_product from '../../Ecommerce_Frontend_Assets (1)/Assets/all_product'

export const ShopContextData = createContext()//Humne ek ShopContextData banaya jo  createContext k data sahring k functionally ko save kar k pir poori app mein cart data ko share karega.

function getDefaultCart() {
    let cart = {};//cart naam ka ek khaali object banaya.
    // Har product ke index liye 0 quantity set karta hai (empty cart).
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;//cart object ke andar index ko key bana do. Uska value set kar do 0.
    }
    return cart;
}
function ShopContext({ children })//Hum App.js may  ShopContext ko kuch nested components diye hue hain, to ye automatically {children} prop ke andar mil jaate hain.
{
    //cartItem state banate hain, jo initially empty cart hota hai.
    const [cartItem, setCartItem] = useState(getDefaultCart());//useState(getDefaultCart()) means: shuru mein cart empty hai.

    function AddToCart(itemId) {

        setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));//{ ...prev } →  saari purani cheezein le lo (spread operator) 
        // [itemId]: prev[itemId] + 1 → us item ka quantity 1 barhao..
    }

    function RemoveFromCart(itemId) {
        setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const contextValue = // contextValue ak object ha aur Ye object kuch properties rakhta hai, jo baad mein dusre components ko provide ki jati hain.
    {
        all_product,//Ye sabhi products ka array ya data hota hai – jo tumhare app mein dikhte hain.
        cartItem,//Ye cart ka current state hota hai, jismein har product ki quantity store hoti hai.
        AddToCart,//Ye ek function hai jo kisi product ko cart mein add karta hai.
        RemoveFromCart,//Ye ek function hai jo cart mein se kisi product ko remove karta hai.


    };

    return (
        <div>
            <ShopContextData.Provider value={contextValue}>

                {children}
                {/* "Jo bhi nested components aayein (App.js say jo hum nay ShopContext wrap kia ), wo yahan render karo." Matlab: jitne bhi nested components hain, unko contextValue ka data milta rahega! */}
            </ShopContextData.Provider>
        </div>
    )
}

export default ShopContext
