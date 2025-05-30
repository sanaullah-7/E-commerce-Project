import React from 'react'
import BannerImg from "./assets/banner.jpg"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <div className=" min-h-[550px] flex justify-center  items-center py-12 sm:py-0 mt-16">
      <div className="container">
        <div className=' grid grid:cols-1 sm:grid-cols-2  items-center gap-6'>

          {/* image */}
          <div data-aos="zoom-in">
            <img src={BannerImg} alt="" className=" max-w-[400px] h-[350px] w-full object-cover mx-auto" />
          </div>

          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className="font-bold text-3xl sm:text-4xl">Winter Sale Upto 50% off</h1>
            <p data-aos="fade-up" className='text-sm text-[gray] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non repellat minus velit exercitationem corrupti perferendis porro provident?</p>




            <div className='flex flex-col gap-4 '>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="cursor-pointer hover:scale-125 duration-500 text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-300 dark:bg-violet-500" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="cursor-pointer hover:scale-125 duration-500 text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200 dark:bg-orange-500" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="cursor-pointer hover:scale-125 duration-500 text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 dark:bg-green-500" />
                <p>Easy Payment Method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="cursor-pointer hover:scale-125 duration-500 text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-200 dark:bg-yellow-500" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
