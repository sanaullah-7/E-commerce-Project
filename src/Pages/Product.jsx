import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../../Ecommerce_Frontend_Assets (1)/Assets/all_product';
import { ShopContextData } from '../Pages/ShopContext';  // adjust the import path accordingly
import arrow_icon from "../assets/breadcrum_arrow.png";
import star_icon from "../assets/star_icon.png";




function Product() {
    const Unique = useParams() //useParams extracts the dynamic parts of the URL so you can render data or components specific to that URL.
    //Faida kya hai?
    //✅ Tum URL ke hisaab se data fetch kar sakte ho.
    //✅ Har dynamic page (jaise product page) ko alag data ke sath dikha sakte ho.
    //✅ Har route ko manually define nahi karna padta.
    const { AddToCart } = useContext(ShopContextData);


    const specficData = all_product.find((user) => user.id === +Unique.id)
    console.log('specficData: ', specficData);
    return (
        <div className="pt-28 px-4 md:px-8 lg:px-20 xl:px-28"> {/* push content below navbar (adjust pt-28 as needed) */}
            <div>
                <div className='flex flex-col sm:flex-row justify-start items-start    text-sm text-gray-400 gap-2'>
                    <div className='flex gap-2 '>
                        <span className='hover:text-[orange] cursor-pointer'>HOME</span>
                        <img src={arrow_icon} className='w-3' alt="" />
                        <span className='hover:text-[orange] cursor-pointer'>SHOP</span>
                        <img src={arrow_icon} className='w-3' alt="" />
                        <span className='hover:text-[orange] cursor-pointer'>{specficData.category}</span>
                        <img src={arrow_icon} className='w-3' alt="" />
                    </div>
                    <div>
                        <span className='text-black dark:text-white font-bold' >{specficData.name}</span>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:flex-row gap-10 overflow-hidden  mt-5'>
                    <div className='flex gap-6 sm:gap-14'>
                        <div className=' w-20 gap-4 flex flex-col '>
                            <img className='hover:scale-110 shadow-2xl shadow-slate-500 dark:shadow-none duration-500 rounded-md' src={specficData.image} alt="" />
                            <img className='hover:scale-110 shadow-2xl shadow-slate-500 dark:shadow-none duration-500 rounded-md' src={specficData.image} alt="" />
                            <img className='hover:scale-110 shadow-2xl shadow-slate-500 dark:shadow-none duration-500 rounded-md' src={specficData.image} alt="" />
                            <img className='hover:scale-110 shadow-2xl shadow-slate-500 dark:shadow-none duration-500 rounded-md' src={specficData.image} alt="" />
                        </div>
                        <div >
                            <img className='h-full w-[20rem] max-w-[100%] sm:max-w-[80rem] hover:scale-105 shadow-xl shadow-slate-400  dark:shadow-none duration-500  rounded-md' src={specficData.image} alt="" />
                        </div>
                    </div>
                    <div className='flex-col flex mx-10 sm:mx-10'>
                        <div className='font-bold text-2xl'>
                            <h1>{specficData.name}</h1>
                        </div>
                        <div className='flex gap-1 mt-5'>
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <p className='text-gray-500 text-md ml-3'>(122 reviews)</p>
                        </div>
                        <div className='font-bold gap-5 mt-3  flex'>
                            <span className='line-through text-gray-500 text-lg'>${specficData.old_price}</span>
                            <span className='text-[green] text-xl'>${specficData.new_price}</span>
                        </div>
                        <p className='text-gray-600 text-sm leading-relaxed mt-2'>
                            "Uncover the elegance and style of this must-have item! Click now to explore detailed images, premium materials, and unbeatable prices. Elevate your wardrobe with this exceptional piece and experience luxury like never before. Your perfect pick awaits!"
                        </p>
                        <div>
                            <h1 className='font-semibold mt-4'>Select Size</h1>
                            <div className='flex gap-2 mt-3'>
                                <h1 className='border-2 py-1 px-4 text-lg hover:bg-gray-200 dark:hover:text-black cursor-pointer'>S</h1>
                                <h1 className='border-2 py-1 px-4 text-lg hover:bg-gray-200 dark:hover:text-black cursor-pointer'>M</h1>
                                <h1 className='border-2 py-1 px-4 text-lg hover:bg-gray-200 dark:hover:text-black cursor-pointer'>L</h1>
                                <h1 className='border-2 py-1 px-4 text-lg hover:bg-gray-200 dark:hover:text-black cursor-pointer'>XL</h1>
                                <h1 className='border-2 py-1 px-4 text-lg hover:bg-gray-200 dark:hover:text-black cursor-pointer'>XXL</h1>
                            </div>
                        </div>
                        <button onClick={() => AddToCart(specficData.id)} className='mt-5 p-2 font-bold w-full rounded-lg bg-gradient-to-r from-primary hover:bg-orange-800  to-secondary'>ADD TO CART</button>
                        <div className='mt-4 text-gray-600 text-sm'>
                            <p><span className='font-semibold'>Category : </span>{specficData.category}</p>
                            <p><span className='font-semibold'>Tags : </span>Modern , Latest</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
