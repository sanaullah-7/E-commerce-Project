import React from 'react'
import image1 from "./assets/sale.png"
import image2 from "./assets/shopping.png"
import image3 from "./assets/product_28.png"
import image4 from "./assets/women.png"
import Slider from 'react-slick'

const data = [
    {
        img: image1,
        title: "Upto 50% off on all Men's Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam hic dolore quisquam, minima eveniet culpa. Eligendi quo illum voluptas explicabo autem consequuntur suscipit quaerat  consectet quia?"
    },
    {
        img: image2,
        title: "Upto 50% off on all Women's Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam hic dolore quisquam, minima eveniet culpa. Eligendi quo  quaerat  consectet quia?"
    },
    {
        img: image3,
        title: "Upto 60% off on all Kid's Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam hic dolore quisquam, minima eveniet culpa. Eligendi quo illum voluptas explicabo autem  consectet quia?"
    },
    {
        img: image4,
        title: "80% off on all Products Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam hic dolore quisquam, minima eveniet culpa. Eligendi quo illum voluptas explicabo autem consequuntur suscipit quaerat  consectet quia?"
    },
]

function Hero({ handleOrderPopup }) {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className="relative overflow-hidden  min-h-[650px]    sm:min-h-screen bg-gray-100 flex justify-center items-center dark:bg-slate-900  duration-500  ">
            {/* background pattern */}
            <div className="h-[780px] w-[700px] bg-gradient-to-r from-primary to-secondary  absolute -top-1/2 right-0 rounded-3xl rotate-45 "></div>
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {data.map((item) => (
                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-0 '>
                                <div className='flex flex-col gap-4  justify-center order-2 sm:order-1 pt-11 sm:pt-0 text-center sm:text-left relative z-10 '>

                                    <h1 data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true" className='text-4xl sm:text-5xl lg:text-7xl font-bold '>
                                        {item.title}
                                    </h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100" className='text-sm'>{item.description}</p>
                                    <div >
                                        <button
                                            onClick={() => handleOrderPopup()}
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                            data-aos-delay="300"

                                            className='bg-gradient-to-r from-primary to-secondary font-bold p-3 tex-xl rounded-full shadow-inner hover:scale-120 duration-300 shadow-black '>
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* image */}
                                <div className='order-1 sm:order-2'>
                                    <div className='relative z-10'
                                        data-aos="zoom-in"
                                        data-aos-once="true">
                                        <img src={item.img} alt="" className='h-[300px] w-[300px] sm:h-[450px] sm:[450px] sm:scale-105 lg:scale-150 object-contain mx-auto' />
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}
                </Slider>

            </div >
        </div >
    )

}

export default Hero
