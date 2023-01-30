import React from 'react';

const CardSection = () => {
    return (
        <div className='container m-auto'>
            <div className='row'>
                <div className='col d-flex shadow p-3 mb-5 bg-white rounded me-3' style={{marginTop:'-50px',zIndex: 999}}>
                    <div className='me-3 d-flex align-items-center'>
                        <img width='75' className='img-fluid' src="./images/data-transfer.svg" alt="" />
                    </div>
                    <div>
                        <h1 className='fs-6 fw-semibold'>High Data Security</h1>
                        <span>It is a long established fact that a reader will be distracted by the.</span>
                    </div>
                    

                </div>
                <div className='col d-flex shadow p-3 mb-5 bg-white rounded me-3' style={{marginTop:'-50px',zIndex: 999}}>
                    <div className='me-3 d-flex align-items-center'>
                        <img width='75' className='img-fluid' src="./images/cloud-network.svg" alt="" />
                    </div>
                    <div>
                        <h1 className='fs-6 fw-semibold'>Multiple Data Centers</h1>
                        <span>It is a long established fact that a reader will be distracted by the.</span>
                    </div>
                    

                </div>
                <div className='col d-flex shadow p-3 mb-5 bg-white rounded' style={{marginTop:'-50px',zIndex: 999}}>
                    <div className='me-3 d-flex align-items-center'>
                        <img width='75' className='img-fluid' src="./images/support.svg" alt="" />
                    </div>
                    <div>
                        <h1 className='fs-6 fw-semibold'>24 x 7 Support</h1>
                        <span>It is a long established fact that a reader will be distracted by the.</span>
                    </div>
                    

                </div>

            </div>
        </div>
    );
};

export default CardSection;