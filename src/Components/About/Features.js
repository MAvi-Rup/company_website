import React from 'react';

const Features = () => {
    return (
        <div>
            <div className='container mt-5 pt-5 mb-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img width='400px' src="./images/slider.png" className='img-fluid' alt="" />

                    </div>
                    <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        <div>
                            <h1 className='fs-1 fw-bolder pb-5'>We Provide Best Cloud Service</h1>
                            <p style={{ fontFamily: "Roboto,sans-serif", color: '#212529' }}>Empowering businesses to soar to new heights, Cloud 360 Services is the go-to partner for AWS solutions, software engineering and managed services. With a proven track record and 40+ years of combined experience in our leadership team, we are dedicated to delivering exceptional results to our clients. As an AWS Consulting Partner with our own development centre in Dhaka, Bangladesh, we bring a unique blend of technical expertise and local knowledge to support your digital transformation journey. Let's work together to achieve your business goals with Cloud 360 Services.</p>
                            <div className='row mt-5'>
                                <div className='col-md-6'>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'>Data Hosting on Cloud</span>
                                    </div>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'> Data Security</span>
                                    </div>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'>Cost Optimization</span>
                                    </div>

                                </div>
                                <div className='col-md-6'>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'> Website Development</span>
                                    </div>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'>Digital Marketing</span>
                                    </div>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'>AWS Managed Services</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Features;