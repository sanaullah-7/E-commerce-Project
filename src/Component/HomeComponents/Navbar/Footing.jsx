
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom"

export default function Footeer() {
    return (
        <>
            <div className=" bg-[#0c0303]">
                <main className="  dark:bg-[#0c0303] text-white mt-16 md:px-10 lg:px-20 bg-[#333c64] ">
                    <div data-aos="zoom-in" className="flex flex-col items-center sm:flex sm:flex-row justify-between p-5  md:p-10">
                        <div >
                            <h1 className="text-xl text-center sm:text-start font-sans font-bold">WEB LOGO</h1>
                            <p className="w-52 text-sm mt-4 ml-16 sm:ml-0">Lorem ipsum dolor sit amet consectetur.
                                Duis lorem purus ipsum sed id tortor
                                vulputate iaculis. Aliquam bibendum dictu
                                felis aenean nisl duis.</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-sans font-bold mt-5 sm:mt-0">QUICK LINKS</h1>
                            <div className=" sm:mt-4 text-center sm:text-start font-semibold text-lg ">
                                <h1><Link to={"/womens"}>Womens</Link></h1>
                                <h1><Link to={"/"}>Home</Link></h1>
                                <h1><Link to={"/mens"}>Mens</Link></h1>
                                <h1><Link to={"/kids"}>Kids</Link></h1>
                            </div>
                        </div>
                        <div className=" space-y-4">
                            <h1 className="text-lg sm:text-xl font-bold font-sans mt-5 sm:mt-0 ml-[3rem] sm:ml-10 ">FOllOW US ON</h1>
                            <div className="space-y-3">
                                <div className="mt-4 flex justify-center gap-6 sm:gap-0 sm:justify-evenly sm:mb-2 text-xl sm:text-3xl">
                                    <FaFacebook />
                                    < FaInstagram />
                                    <FaLinkedin />


                                </div>
                                <div className="ml-[2rem] sm:ml-10 space-y-2 py-1 w-full text-sm">
                                    <div className="flex items-center gap-2  sm:gap-4"> <FaMapLocationDot />Indore, Madhya Pradesh</div>
                                    <div className="flex items-center gap-2 ml-3 sm:ml-0 sm:gap-4"> <IoCall />+92 3449828233</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main >
                <hr />
                <footer className="py-6 px-4 text-center text-white font-semibold shadow-inner dark:bg-[#111]">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
                        <p className="text-lg">
                            &copy; {new Date().getFullYear()}{" "}
                            <span className="font-bold text-orange-400">Sana Ullah Tech</span>
                        </p>
                        <span className="hidden sm:block">|</span>
                        <p className="text-sm opacity-70">
                            All Rights Reserved
                        </p>
                        <span className="hidden sm:block">|</span>
                        <p className="text-sm opacity-70 cursor-pointer hover:text-orange-400 transition-colors">
                            Privacy Policy
                        </p>
                        <span className="hidden sm:block">|</span>
                        <p className="text-sm opacity-70 cursor-pointer hover:text-orange-400 transition-colors">
                            Contact Us
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}