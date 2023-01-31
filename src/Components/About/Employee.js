import React from 'react';

const Employee = () => {
    return (
        <div className='container mb-5'>
          <h2>Our Team</h2>
            <div className='row row-cols-1 row-cols-md-4 g-3 mt-2'>
                <div className='col'>
                    <img src="./images/team/team-memb1.jpg" alt="" width='267px'/>
                    <div className='bg-primary text-white' style={{padding:'20px'}}>
                        <h4>David Karnel</h4>
                        <p className='fst-italic'>Director</p>
                    </div>


                </div>
                <div className='col'>
                <img src="./images/team/team-memb2.jpg" alt="" width='267px'/>
                    <div className='bg-primary text-white' style={{padding:'20px'}}>
                        <h4>David Karnel</h4>
                        <p className='fst-italic'>Director</p>
                    </div>

                </div>
                <div className='col'>
                <img src="./images/team/team-memb3.jpg" alt="" width='267px'/>
                    <div className='bg-primary text-white' style={{padding:'20px'}}>
                        <h4>David Karnel</h4>
                        <p className='fst-italic'>Frontend Engineer</p>
                    </div>

                </div>
                <div className='col'>
                <img src="./images/team/team-memb4.jpg" alt="" width='267px'/>
                    <div className='bg-primary text-white' style={{padding:'20px'}}>
                        <h4>David Karnel</h4>
                        <p className='fst-italic'>Director</p>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Employee;