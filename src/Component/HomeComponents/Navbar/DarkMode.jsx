import React, { useEffect, useState } from 'react'
import LightButton from "./assets/light-mode-button.png"
import DarkButton from "./assets/dark-mode-button.png"

function DarkMode() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;

    // useEffect(() => {
    if (theme == "dark") {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    else {
        element.classList.remove("dark");
        localStorage.setItem("theme", "light")
    }
    // }, [theme])
    return (
        <button className='relative'>
            <img src={LightButton} alt="" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={`w-14 z-10 top-0  duration-500 absolute ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
            <img src={DarkButton} alt="" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="w-14  " />
        </button>
    )
}

export default DarkMode
