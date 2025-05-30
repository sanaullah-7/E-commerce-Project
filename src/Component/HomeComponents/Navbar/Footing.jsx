
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom"

export default function Footeer() {
    return (
        <main className="bg-[black] text-white mt-16 md:px-10 lg:px-20 ">
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
                    <div className=" sm:mt-4 text-center sm:text-start ">
                        <h1><Link to={"/"}>Home</Link></h1>
                        <h1><Link to={"/kids"}>Kids</Link></h1>
                        <h1><Link to={"/mens"}>Mens</Link></h1>
                        <h1><Link to={"/womens"}>Womens</Link></h1>
                    </div>
                </div>
                <div className=" space-y-4">
                    <h1 className="text-xl font-bold font-sans mt-5 sm:mt-0 ml-10 ">FOllOW US ON</h1>
                    <div className="space-y-3">
                        <div className="mt-4 flex justify-evenly sm:mb-2 text-3xl">
                            <FaFacebook />
                            < FaInstagram />
                            <FaLinkedin />


                        </div>
                        <div className="ml-10 space-y-2 py-1 w-full">
                            <div className="flex items-center gap-4"> <FaMapLocationDot />Indore, Madhya Pradesh</div>
                            <div className="flex items-center gap-4"> <IoCall />+92 3449828233</div>
                        </div>
                    </div>
                </div>
            </div>

        </main >
    )
}