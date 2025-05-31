import React from 'react'
import all_product from '../../../Ecommerce_Frontend_Assets (1)/Assets/all_product'

function kid() {
    // Filter products with category 'kid' first
    const MenCategory = all_product.filter((item) => item.category === "kid")

    return (
        <div className=' mx-16 place-items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-y-20 md:gap-x-28 lg:gap-x-22'>
                {MenCategory.map((item) => (
                    <div data-aos="zoom-in" key={item.id} className='sm:w-[15rem] lg:w-[20rem] lg:h-[29rem] bg-gradient-to-r from-primary/30 rounded-lg to-secondary/30  p-4  shadow-2xl hover:scale-110 duration-700'>
                        <div>
                            <img src={item.image} alt={item.name} className='w-full ' />
                        </div>
                        <div className='mt-2'>
                            <h2 className='text-sm font-bold'>{item.name}</h2>
                            <p className='text-base line-through text-gray-400'>${item.old_price}</p>
                            <p className='text-base font-semibold text-green-600'>${item.new_price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default kid
