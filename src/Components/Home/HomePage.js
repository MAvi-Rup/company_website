import React from 'react';
import AboutUs from '../About/AboutUs';
import Service from '../OurService/Service';
import Banner from './Banner';
import CardSection from './CardSection';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <CardSection />
            <AboutUs />
            <Service />

            
        </div>
    );
};

export default HomePage;