import React from 'react';
import AllServices from './AllServices';

const Service = () => {
    return (
        <div className='container-fluid pt-5' style={{backgroundColor:"#f3f4f8"}}>
            <div className='container mb-5'>
                <h1 className='text-center '>Our Services</h1>
                <p className='text-center w-50 m-auto'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                </p>
                <AllServices />
            

            </div>
            
        </div>
    );
};

export default Service;