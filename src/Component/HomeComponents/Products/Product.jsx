import React from 'react'
import image1 from "./assets/women.png"
import image2 from "./assets/women2.jpg"
import image3 from "./assets/women3.jpg"
import image4 from "./assets/women4.jpg"
import image5 from "./assets/p1_product.png"
import image6 from "./assets/product_1.png"
import image7 from "./assets/product_9.png"
import image8 from "./assets/product_12.png"
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ProductData = [
    {
        img: image1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0"
    },
    {
        img: image2,
        title: "Women Western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200"
    },
    {
        img: image3,
        title: "Googles",
        rating: 4.7,
        color: "Brown",
        aosDelay: "400"
    },
    {
        img: image4,
        title: "Printed T-Shirt",
        rating: 4.2,
        color: "Yellow",
        aosDelay: "0"
    },
    {
        img: image5,
        title: "Fashion T-shirt",
        rating: 4.2,
        color: "Pink",
        aosDelay: "200"
    },
    {
        img: image6,
        title: "Fashion T-shirt",
        rating: 4.2,
        color: "Pink",
        aosDelay: "400"
    },
    {
        img: image7,
        title: "Fashion T-shirt",
        rating: 4.2,
        color: "Pink",
        aosDelay: "600"
    },
    {
        img: image8,
        title: "Fashion T-shirt",
        rating: 4.2,
        color: "Pink",
        aosDelay: "800"
    },
]

function Product() {
    return (
        <>
            <div data-aos="fade-up" className='mt-16 flex flex-col items-center font-sans font-bold text-2xl sm:text-3xl  '>
                <h1 className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Top Selling Products for You</h1>
                <h2 className='text-3xl sm:text-5xl '>Products</h2>
                <p className='font-normal text-sm line-1 flex text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center lg:gap-x-5 lg:mx-10 '>

                {ProductData.map((item) => (
                    <div className='bg-white dark:bg-gradient-to-r from-primary to-secondary shadow-lg shadow-slate-400 dark:shadow-none hover:shadow-2xl hover:shadow-[#584f4f] p-3 rounded-lg hover:scale-150 mt-20 cursor-pointer '
                        data-aos="fade-up"
                        data-aos-delay={item.aosDelay}>

                        <img src={item.img} alt="" className='h-[270px] w-[250px] object-cover rounded-md '></img>
                        <div className=''>
                            <h1 className='font-bold'>{item.title}</h1>
                            <p >{item.color}</p>
                            <div className='flex gap-1 items-center'>
                                <FaStar className='text-yellow-400' /><FaStar className="text-[orange] " /> <FaStar className="text-[#859485] " />
                                <span>{item.rating}</span>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className='flex justify-center mt-10 font-semibold md:font-bold sm:text-xl '>
                <Link to={"/womens"}> <button className='p-3 md:p-5 rounded-xl hover:scale-105 duration-200 bg-gradient-to-r from-primary to-secondary ' data-aos="fade-up">View All Products</button></Link>
            </div>
        </>
    )
}

export default Product
