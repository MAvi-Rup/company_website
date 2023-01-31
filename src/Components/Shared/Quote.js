import React from 'react';

const Quote = () => {
    return (
        <div className='container-fluid bg-primary'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 pt-4 pb-4'>
                        <div>
                            <span className='text-white ms-auto fs-4'>Are you looking for a consultant for your Business</span>
                        </div>

                    </div>
                    <div className='col-md-6 pt-4 pb-4'>
                        <div className='d-flex justify-content-end '>
                            <button className='btn btn-light'>Quote</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Quote;