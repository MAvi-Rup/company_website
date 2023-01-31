import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div style={{ backgroundColor: "#f3f4f8" }} className='mb-5'>
            <div className='container mt-5 pt-5 mb-5 pb-5'>
                <h2 className='text-center' style={{ color: '#444', fontSize: '30px', fontWeight: '600' }}>Contact Us</h2>
                <ul className='breadcrumb d-flex justify-content-center mt-3'>
                    <li className='breadcrumb-item'> <Link to="/"><i class="fa fa-home"></i> Home</Link></li>
                    <li className='breadcrumb-item active'><i class="fa fa-angle-double-right"></i> Contact Us</li>
                </ul>


            </div>
            <div className='mb-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.804502648669!2d90.40014081445656!3d23.789974993181385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b1b4727385%3A0xbd0fb5d50206945f!2sShah%20%26%20Associates%20(Southeast%20Int&#39;l)!5e0!3m2!1sbn!2sbd!4v1675160630323!5m2!1sbn!2sbd" width='100%' height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div style={{padding:'20px'}} >
                            <h2 className='mt-5'>Contact Form</h2> <br/>
                                <div class="row g-5">
                                    <div class="col-sm-4 form-label mb-3"><label>Enter Name </label><span>:</span></div>
                                    <div class="col-sm-8 mb-3"><input type="text" placeholder="Enter Name" name="name" class="form-control input-sm"  /></div>
                                </div>
                                <div class="row cont-row">
                                    <div class="col-sm-4 form-label mb-3"><label>Email Address </label><span>:</span></div>
                                    <div class="col-sm-8 mb-3"><input type="text" name="name" placeholder="Enter Email Address" class="form-control input-sm"  /></div>
                                </div>
                                <div class="row cont-row">
                                    <div class="col-sm-4 form-label mb-3"><label>Mobile Number</label><span>:</span></div>
                                    <div class="col-sm-8 mb-3"><input type="text" name="name" placeholder="Enter Mobile Number" class="form-control input-sm"  /></div>
                                </div>
                                <div class="row cont-row">
                                    <div class="col-sm-4 form-label"><label>Enter Message</label><span>:</span></div>
                                    <div class="col-sm-8 mb-3">
                                        <textarea rows="5" placeholder="Enter Your Message" class="form-control input-sm"></textarea>
                                    </div>
                                </div>
                                <div class="row pt-5">
                                    <div class="col-sm-4 pt-5"><label></label></div>
                                    <div class="col-sm-8">
                                        <button class="btn btn-success btn-sm">Send Message</button>
                                    </div>
                                </div>
                        </div>
 
                    </div>

                    <div className='col-md-4 ps-5 mt-4' style={{color:'#212529'}}>
                        <h2 className='mt-5 '>Address</h2>
                        <span className='fs-4'>H-41, Road-07, <br/> Block-F, Banani, Suite #1, <br/> Dhaka-1213</span>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ContactUs;