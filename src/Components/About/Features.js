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
                            <h1 className='fs-1 fw-bolder pb-5'>We are the Leading Cloud Service Provider</h1>
                            <p style={{ fontFamily: "Roboto,sans-serif", color: '#212529' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
                            <div className='row mt-5'>
                                <div className='col-md-6'>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'>Boost SEO Sharing</span>
                                    </div>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'> Marketing</span>
                                    </div>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'>Visual Review</span>
                                    </div>

                                </div>
                                <div className='col-md-6'>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'> Social Sharing</span>
                                    </div>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'>Retention</span>
                                    </div>
                                    <div className='d-flex align-items-center mt-2 mb-2'>
                                        <i class="fa fa-check"></i>
                                        <span className='ms-3'>Review Generation</span>
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