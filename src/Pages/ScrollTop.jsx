import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();//Jab bhi route (pathname) change ho, yeh kaam karo.

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"  // ✅ smooth animation
        });
    }, [pathname]);

    //   return null; //Yeh component kuch bhi screen par render nahi karega. Sirf kaam karega (like scroll).
}
// Tumne ek ScrollToTop component banaya jo har route change pe window.scrollTo(0, 0) chalata hai.
// Ab jab user koi page change karta hai, page automatic top pe chala jata hai.
