import React from 'react'
import new_collections from '../../../Ecommerce_Frontend_Assets (1)/Assets/new_collections'
import { FaStar } from 'react-icons/fa6'

function NewCollection() {
    return (
        <div className='container'>
            <div data-aos="fade-zoom-in" className='mt-36 flex flex-col items-center font-sans font-bold   '>
                <h1 className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl'>Visit TO Our New Collection</h1>
                <h2 className='text-3xl sm:text-3xl lg:text-5xl '>Collections</h2>
                <p className='font-normal text-sm line-1 flex text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-x-5  '>

                {new_collections.map((item) => (
                    <div className='bg-white hover:dark:bg-gradient-to-r text-black  from-primary to-secondary hover:shadow-2xl hover:shadow-[#584f4f] mx-16 sm:mx-0 p-3 flex flex-col items-center rounded-lg hover:scale-150 mt-10  sm:mt-20 cursor-pointer '
                        data-aos="zoom-in"
                        data-aos-delay="500">

                        <img src={item.image} alt="" className=' object-cover rounded-md '></img>
                        <div className=''>
                            <h1 className='font-bold line-clamp-2  '>{item.name}</h1>
                            <p >{item.color}</p>
                            <div className=' gap-1 items-center'>
                                <div className='flex'>
                                    <FaStar className='text-yellow-400' /><FaStar className="text-[orange] " /> <FaStar className="text-[#859485] " />
                                </div>
                                <span className='line-through font-semibold '>{item.old_price} </span>
                                <span className='font-bold '> Discount with {item.new_price}</span>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default NewCollection
