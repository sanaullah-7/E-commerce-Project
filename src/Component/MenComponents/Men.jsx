import React from 'react'
import all_product from '../../../Ecommerce_Frontend_Assets (1)/Assets/all_product'
import { Link } from 'react-router-dom'

function Men() {
    // Filter products with category 'men' first
    const MenCategory = all_product.filter((item) => item.category === "men")

    return (
        <div className=' mx-16 place-items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-y-20 md:gap-x-28 lg:gap-x-22'>
                {MenCategory.map((item) => (
                    <div data-aos="fade-up" data-aos-delay={item.aosDelay}>
                        <div className='sm:w-[15rem] lg:w-[20rem] lg:h-[29rem] bg-gradient-to-r from-primary/30 rounded-lg to-secondary/30  p-4   shadow-2xl shadow-slate-400 dark:shadow-none hover:scale-110 duration-700'>
                            <Link to={`/product/${item.id}`}>
                                <img src={item.image} alt={item.name} className='w-full ' />

                                <div className='mt-2'>
                                    <h2 className='text-sm font-bold'>{item.name}</h2>
                                    <p className='text-base line-through text-gray-400'>${item.old_price}</p>
                                    <p className='text-base font-semibold text-green-600'>${item.new_price}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Men
