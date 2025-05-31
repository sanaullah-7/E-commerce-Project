import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from './DarkMode';
import { Link, useLocation } from 'react-router-dom';
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdClose } from "react-icons/io"; // Import close icon
import Logo from "../../../assets/logo_big.png"

function Nvabr({ handleOrderPopup }) {
    const [Open, SetOpen] = useState(false);
    const Location = useLocation();

    function HandleToggle() {
        SetOpen(!Open);
    }

    return (
        <>
            {/* Large Screen Navbar */}
            <div className='hidden sm:flex items-center justify-between w-full fixed z-10 shadow-2xl backdrop-blur-none p-5 font-bold bg-gradient-to-r from-primary/40 to-secondary/40 dark:bg-[#080808]'>
                <h1 className='text-2xl lg:mx-10 flex items-center '><img className='h-12 -mt-2' src={Logo} alt="" />ShopMe</h1>
                <div className='flex sm:gap-5 lg:gap-10'>
                    <Link className={`hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[orange] hover:to-[red]${Location.pathname === "/" ? " border-b-2 border-blue-500 text-blue-500 " : ""}`} to={"/"}>Home</Link>
                    <Link className={`hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[orange] hover:to-[red] ${Location.pathname === "/mens" ? "border-b-2 border-blue-500 text-blue-500" : ""}`} to={"/mens"}>Mens </Link>
                    <Link className={`hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[orange] hover:to-[red] ${Location.pathname === "/womens" ? "border-b-2 border-blue-500 text-blue-500" : ""}`} to="/womens" >Women </Link>
                    <Link className={`hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[orange] hover:to-[red] ${Location.pathname === "/kids" ? "border-b-2 border-blue-500 text-blue-500" : ""}`} to={"/kids"}>Kids </Link>
                </div>

                <div className='flex sm:gap-8 md:gap-2 lg:gap-4'>
                    <div className='relative hidden md:flex'>
                        <input type="text" className="border-e-black rounded-3xl hover:w-[200px] duration-500 w-[150px] py-1 dark:bg-white bg-[#374566] font-normal px-3 dark:border-gray-500 text-white dark:text-black " placeholder='Search' />
                        <IoMdSearch className='absolute right-2 top-2 text-lg dark:text-[black] text-white' />
                    </div>

                    <div>
                        <button onClick={() => handleOrderPopup()} className='flex font-semibold bg-gradient-to-r from-primary to-secondary rounded-full py-1 px-4 gap-4 text-white group shadow-inner shadow-[#312b2b] '>
                            <FaCartShopping className='text-3xl ' />
                        </button>
                        <div className="cursor-pointer w-[22px] h-[22px] flex justify-center items-center -mt-[45px] ml-10 relative z-10 rounded-full bg-[red] text-white ">0</div>
                    </div>
                    <div className='items-center flex'>
                        <DarkMode />
                    </div>
                </div>
            </div>

            {/* Small Screen Navbar */}
            <div className='sm:hidden flex items-center justify-between w-full fixed z-10 shadow-2xl backdrop-blur-none p-5 font-bold bg-gradient-to-r from-primary/70 to-secondary/70 dark:bg-[#080808]'>
                <h1 className='text-2xl flex items-center gap-1'><img className='h-12 -mt-2' src={Logo} alt="" />ShopMe</h1>
                <div onClick={HandleToggle} className='cursor-pointer text-2xl'>
                    {Open ? <IoMdClose /> : <SlOptionsVertical />}
                </div>
            </div>

            {/* Sliding Menu */}
            {Open && (
                <div className='sm:hidden   z-10 h-full fixed w-1/2  shadow-2xl backdrop-blur-none p-5 font-bold bg-gradient-to-r from-primary/90 to-secondary/80 dark:bg-[#080808]  '>
                    <div className=' grid mt-12 gap-y-8'>
                        <Link onClick={HandleToggle} className={` ${Location.pathname === "/" ? "      border-b-2 border-blue-500 text-blue-600 " : ""}`} to={"/"}>Home</Link>
                        <Link className={` ${Location.pathname === "/kids" ? "  border-b-2 border-blue-500 text-blue-600" : ""}`} to={"/kids"}>Kids </Link>
                        <Link className={` ${Location.pathname === "/mens" ? "  border-b-2 border-blue-500 text-blue-600" : ""}`} to={"/mens"}>Mens </Link>
                        <Link className={` ${Location.pathname === "/womens" ? "border-b-2 border-blue-500 text-blue-600" : ""}`} to="/womens" >Women </Link>
                    </div>
                    <div className='flex justify-between gap-4 items-center mt-5'>
                        <div className='flex'>
                            <button onClick={() => handleOrderPopup()} className='flex font-semibold bg-gradient-to-r from-primary to-secondary rounded-full py-1 px-4 gap-4 text-white group shadow-inner shadow-[#312b2b] '>
                                <FaCartShopping className='text-3xl ' />
                            </button>
                            <div className="cursor-pointer w-5 h-5 sm:w-[22px] sm:h-[22px] flex justify-center items-center relative z-10 rounded-full -ml-6 -mt-1  bg-[red] text-white text-sm sm:text-lg">0</div>
                        </div>
                        <DarkMode />

                    </div>

                    <div className='mt-8 relative '>
                        <input type="text" className="border-e-black rounded-3xl w-full py-1 dark:bg-white bg-[#374566] font-normal px-3 dark:border-gray-500 text-white dark:text-black " placeholder='Search' />
                        <IoMdSearch className='absolute right-2 top-2 text-lg dark:text-[black] text-white' />
                    </div>

                </div>
            )}
        </>
    );
}

export default Nvabr;
