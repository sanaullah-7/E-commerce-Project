import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home"
import Kids from "./Component/KidsComponents/kid";
import Men from "./Component/MenComponents/Men";
import Women from "./Component/WomenComponents/Women";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Component/HomeComponents/Navbar/Nvabr";;
import Footing from "./Component/HomeComponents/Navbar/Footing";
import Product from "./Pages/Product";
import ScrollTop from "./Pages/ScrollTop";
import ShopContext from "./Pages/ShopContext";
import Cart from "./Component/HomeComponents/Navbar/Cart"
// import Checkout from "./Component/HomeComponents/Navbar/checkout"

const App = () => {
  const [orderPopup, SetOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    SetOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-shine ",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <ShopContext>
        <div className="dark:bg-[#101429] bg-white text-black dark:text-white duration-500">

          <BrowserRouter>
            <ScrollTop />
            <Navbar handleOrderPopup={handleOrderPopup} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mens" element={<Men />} />
              <Route path="/womens" element={<Women />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="/checkout" element={<Checkout />} /> */}

            </Routes>
            <Footing />
          </BrowserRouter>

        </div>
      </ShopContext>



    </>
  );
};

export default App;
