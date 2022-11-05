import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import OurTeam from '../OurTeam/OurTeam';
import PopularProduct from '../PopularProduct/PopularProduct';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Contact />
            <PopularProduct />
            <OurTeam />
            <Testimonial />
        </div>
    );
};

export default Home;