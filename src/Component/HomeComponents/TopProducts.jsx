import React from 'react'
import image1 from "../../assets/shirt/shirt.png"
import image2 from "../../assets/shirt/shirt2.png"
import image3 from "../../assets/shirt/shirt3.png"
import { FaS, FaStar } from 'react-icons/fa6'

const ProductData = [
    {
        img: image1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",
        Button: "Order"
    },
    {
        img: image2,
        title: "Printed Shirt",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",
        Button: "Order"
    },
    {
        img: image3,
        title: "Woemen Shirt",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",
        Button: "Order"
    },
    {
        img: image1,
        title: "Printed Shirt",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",
        Button: "Order"
    },
    {
        img: image2,
        title: "Printed Shirt",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",
        Button: "Order",
    },
    {
        img: image3,
        title: "Printed Shirt",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",
        Button: "Order"
    },

]
function TopProducts({ handleOrderPopup }) {
    return (
        <>
            <div className='container mt-32'>
                <div data-aos="fade-up" className=' items-center font-sans font-bold text-xxl sm:text-2xl mt-10 '>
                    <h1 className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Top Related  Products for You</h1>
                    <h2 className='text-2xl sm:text-4xl '>Best Products</h2>
                    <p className='font-normal text-sm '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>
            </div>

            <div className='mx-28 sm:mx-12 lg:gap-x-60 lg:mx-32 gap-y-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-8  md:gap-20 place-items-center '>

                {ProductData.map((item) => (
                    <div data-aos="zoom-in" data-aos-duration="900" className='w-[15rem] lg:w-[20rem] p-3 mt-28  justify-center items-center place-items-center shadow-xl shadow-[#d6cece] gap-10 rounded-2xl hover:bg-black hover:text-white group hover:bg-gradient-to-r from-primary to-secondary dark:bg-[#423434] dark:hover:bg-primary/40 dark:shadow-black '>
                        <div className='h-[100px] sm:h-[200px]'>
                            <img src={item.img} alt="" className=' duration-300  -translate-y-28 group-hover:scale-105   h-[220px] sm:h-[300px] mx-auto' />
                        </div>
                        <div className='text-center '>
                            <div className='flex  justify-center'>
                                <FaStar className='text-yellow-500 text-xl' />
                                <FaStar className='text-yellow-500 text-xl' />
                                <FaStar className='text-yellow-500 text-xl' />
                                <FaStar className='text-yellow-500 text-xl' />
                            </div>
                            <h1 className='font-bold text-xl sm:text-2xl'>{item.title}</h1>
                            <p className='text-sm line-clamp-3 sm:line-clamp-2'>{item.description}</p>
                            <button className="mt-4 bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1  px-8 text-xl font-bold rounded-full" onClick={(handleOrderPopup)}>{item.Button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TopProducts
