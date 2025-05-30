import React from 'react'
import image1 from "../../assets/Testnomial/image 1.png"
import image2 from "../../assets/Testnomial/image 2 .png"
import image3 from "../../assets/Testnomial/image 3.png"
import image4 from "../../assets/Testnomial/image 4.png"
import image5 from "../../assets/Testnomial/image 5.jpg"
import image6 from "../../assets/Testnomial/image 6.jpg"
import image7 from "../../assets/Testnomial/image 7.png"
import image8 from "../../assets/Testnomial/image 8.png"
import image9 from "../../assets/Testnomial/image 9.png"
import Slider from 'react-slick'
const data = [
    {
        img: image1,
        name: "John",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",

    },
    {
        img: image2,
        name: "Shahid Afridi",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",

    },
    {
        img: image3,
        name: "khan",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",

    },
    {
        img: image4,
        name: "Laiba",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",

    },
    {
        img: image5,
        name: "Hiker",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",

    },
    {
        img: image6,
        name: "Travler",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",

    },
    {
        img: image7,
        name: "Vector",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",

    },
    {
        img: image8,
        name: "Khan",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",

    },
    {
        img: image9,
        name: "Bow",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum atque nulla sed, consequuntur ...",

    },

]

function Testimonial() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,

        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <><div className=" container px-8 py-8 mb-16">

            <div data-aos="fade-up" className='m-16 flex flex-col items-center font-sans  sm:font-bold text-xl '>
                <h1 className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ' >What our customers are saying

                </h1>
                <h2 className='text-3xl md:text-4xl font-bold '>Testimonials</h2>
                <p className='font-normal text-sm line-clamp-1 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} data-aos="zoom-in" className="my-6">
                        <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-6 rounded-xl hover:dark:bg-gradient-to-r from-primary to-secondary bg-[#ddd0d0]/60 relative transition-transform duration-300 hover:scale-105">
                            <div className="mb-4 flex justify-center">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="rounded-full w-20 h-20 object-cover"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-4 text-center">
                                <p className="text-xs ">{item.description}</p>
                                <h1 className="text-xl font-bold ">{item.name}</h1>
                            </div>
                            <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>




        </>
    )
}

export default Testimonial
