import React from 'react'
import all_product from '../../../Ecommerce_Frontend_Assets (1)/Assets/all_product'
import { Link } from 'react-router-dom'
import image from "./imagee.png"
import image1 from "./image1.png"
import image2 from "./image2.png"
import Slider from 'react-slick'
const data = [

    {
        img: image,
        title: (
            <>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FLAT 50% OF OFFERS</span>
            </>
        ),
        description: (
            <>
                <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>12</span> Hours<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 20 </span>Mins
            </>
        )
    },
    {
        img: image1,
        title: (
            <>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SPECIAL FLAT 50% OF OFFERS</span>
            </>
        ),
        description: (
            <>
                <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>12</span> Hours<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 20 </span>Mins
            </>
        )
    },
    {
        img: image2,
        title: (
            <>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LIMITED 50% OF OFFERS</span>
            </>
        ),
        description:
            (
                <>
                    <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>12</span> Hours<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 20 </span>Mins
                </>
            )
    }

]

function Men() {
    // Filter products with category 'men' first
    const MenCategory = all_product.filter((item) => item.category === "men")
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-shine",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <>
            <div className="relative overflow-hidden  min-h-[650px]    sm:min-h-screen bg-gray-100 flex justify-center items-center dark:bg-slate-900  duration-500  ">
                {/* background pattern */}
                <div className="h-[780px] w-[700px] bg-[#945d16] dark:bg-[#245583]    absolute -top-1/2 right-0 rounded-3xl rotate-45 "></div>
                <div className='container pb-8 sm:pb-0'>
                    <Slider {...settings}>
                        {data.map((item) => (
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-0 '>
                                    <div className='flex flex-col gap-4  justify-center order-2 sm:order-1 pt-11 sm:pt-0 text-center sm:text-left relative z-10 '>

                                        <h1 data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true" className='text-4xl sm:text-5xl lg:text-6xl font-bold '>
                                            {item.title}
                                        </h1>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                            data-aos-delay="100" className='text-2xl sm:text-3xl lg:text-4xl font-bold'>{item.description}</p>
                                        <div >
                                            <button

                                                data-aos="fade-up"
                                                data-aos-duration="500"
                                                data-aos-delay="300"

                                                className='bg-gradient-to-r from-primary to-secondary sm:text-xl font-semibold text-white dark:text-black px-10 p-5 tex-xl rounded-2xl  shadow-inner hover:scale-120 duration-300 shadow-black '>
                                                Explore Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* image */}
                                    <div className='order-1 sm:order-2'>
                                        <div className='relative z-10'
                                            data-aos="zoom-in"
                                            data-aos-once="true">
                                            <img src={item.img} alt="" className='h-[300px] w-[200px] mt-16 sm:h-[350px] sm:w-[400px] sm:scale-105 lg:scale-150 object-contain mx-auto' />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        ))}
                    </Slider>

                </div >
            </div >
            <div className=' mx-16 place-items-center '>
                <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 place-items-center  md:gap-x-28 lg:gap-x-22'>
                    {MenCategory.map((item) => (
                        <div data-aos="fade-up" data-aos-delay={item.aosDelay}>
                            <div className='sm:w-[15rem] lg:w-[20rem] mt-24 lg:h-[29rem] bg-gradient-to-r from-primary/30 rounded-lg to-secondary/30  p-4   shadow-2xl shadow-slate-400 dark:shadow-none hover:scale-110 duration-700'>
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
        </>
    )
}

export default Men
