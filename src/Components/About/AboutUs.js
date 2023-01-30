import React from 'react';
import Features from './Features';

const AboutUs = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='text-center '>About Us</h1>
                <p className='text-center w-50 m-auto'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.
                </p>
                <Features />
            

            </div>
        </div>
    );
};

export default AboutUs;