import React from 'react';

const Banner = () => {
    return (
        <>
            <div className='bg-body-tertiary pb-5' style={{zIndex: 0}}>
                <div className='container mt-5 pt-5 pb-5'>
                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <div>
                                <h1 className='fs-1 fw-bolder pb-5'>We Provide Best and Very Secure Cloud Services</h1>
                                <p style={{ fontFamily: "Roboto,sans-serif" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
                                <button className='btn btn-primary text-white ps-5 pe-5 pt-2 pb-2 mt-4 mb-5'>Read More</button>
                            </div>

                        </div>
                        <div className='col-md-6 d-flex justify-content-center' >
                            <img width='400px' src="./images/slider.png" className='img-fluid' alt="" />

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default Banner;