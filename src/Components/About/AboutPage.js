import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Employee from './Employee';
import Features from './Features';

const AboutPage = () => {
    return (
        <div style={{ backgroundColor: "#f3f4f8" }} className='mb-5'>

            <div className='container mt-5 pt-5 mb-5 pb-5'>
                <h2 className='text-center' style={{ color: '#444', fontSize: '30px', fontWeight: '600' }}>About Us</h2>
                <ul className='breadcrumb d-flex justify-content-center mt-3'>
                    <li className='breadcrumb-item'> <Link className='me-2' to="/"><i class="fa fa-home"></i> Home</Link></li>
                    <li className='breadcrumb-item active'><i class="fa fa-angle-double-right"></i> About</li>
                </ul>


            </div>
            <Features />
            <Employee />
        </div>
    );
};

export default AboutPage;