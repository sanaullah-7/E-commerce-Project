import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

function Popup({ orderPopup, SetOrderPopup }) {

    return (
        <>

            {orderPopup && (
                <div className='popup'>
                    <div className="h-screen w-screen fixed top-0 bg-black/50 z-30 backdrop-blur-sm">
                        <div className='fixed bg-gradient-to-r from-primary to-[#0d9c6c] p-4 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[300px] duration-200 rounded-md'>
                            <div className=' flex justify-between items-center mb-4 dark:text-black '>
                                <div>
                                    <h1>Order Now</h1>
                                </div>
                                <div>
                                    <IoCloseOutline onClick={() => SetOrderPopup(false)}
                                        className='text-2xl cursor-pointer'
                                    />
                                </div>
                            </div>
                            <div>
                                <input type="text" name="" placeholder='Name' id="" className=' w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' />
                                <input type="number" name="" placeholder='Phone No' className=' w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' id="" />
                                <input type="email" name="" placeholder='Email' className=' w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' id="" />
                                <input type="text" name="" placeholder='Address' className=' w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' id="" />
                                <div className='flex items-center justify-center'>
                                    <button className='bg-gradient-to-r from-primary to-secondary hover:scale-125 duration-700 font-bold py-1 px-4 rounded-full dark:text-black shadow-2xl shadow-black ' onClick={() => SetOrderPopup(false)}>Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Popup
