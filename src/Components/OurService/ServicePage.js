import React from 'react';
import { Link } from 'react-router-dom';
import AllServices from './AllServices';
import Service from './Service';

const ServicePage = () => {
    return (
        <div style={{ backgroundColor: "#f3f4f8" }} className='mb-5'>
            <div className='container mt-5 pt-5 mb-5 pb-5'>
                <h2 className='text-center text-primary' style={{ color: '#444', fontSize: '30px', fontWeight: '600' }}>Our Service</h2>
                <ul className='breadcrumb d-flex justify-content-center mt-3'>
                    <li className='breadcrumb-item'> <Link to="/"><i class="fa fa-home"></i> Home</Link></li>
                    <li className='breadcrumb-item active'><i class="fa fa-angle-double-right"></i> Services</li>
                </ul>


            </div>
            <AllServices />



        </div>
    );
};

export default ServicePage;