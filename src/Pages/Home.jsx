import React from 'react'

import Hero from '../Component/HomeComponents/Hero/Hero';
import Products from '../Component/HomeComponents/Products/Product';
import TopProducts from '../Component/HomeComponents/TopProducts';
import Banner from '../Component/HomeComponents/Banner/Banner';
import Testimonials from '../Component/HomeComponents/Testimonial';
import Popup from "../Component/HomeComponents/Popup"
import NewCollection from '../Component/HomeComponents/NewCollection';


function Home() {
    const [orderPopup, SetOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        SetOrderPopup(!orderPopup);
    };

    return (
        <div>
            <Hero handleOrderPopup={handleOrderPopup} />
            <Products />
            <TopProducts handleOrderPopup={handleOrderPopup} />
            <NewCollection />
            <Banner />
            <Testimonials />
            <Popup orderPopup={orderPopup} SetOrderPopup={SetOrderPopup} />

        </div>
    )
}

export default Home
