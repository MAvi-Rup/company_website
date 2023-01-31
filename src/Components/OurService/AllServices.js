import React from 'react';
import './Service.css'

const AllServices = () => {
    return (
        <div className='container mt-5'>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                <div className='col'>
                    <div class="card" style={{ height: "420px" }}>
                        <div style={{ padding: '30px' }}>
                            <img src="http://www.cloud360services.com/images/cloud-migration-icon.svg" width='110px' alt="..." />
                            <div class="card-body">
                                <h4>AWS Cloud Migration</h4>
                                <p>Using our comprehensive services from strategy, design, planning and execution, our customers can migrate any workload - applications, websites, databases, storage, physical or virtual servers with speed to market.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="card"  style={{ height: "420px" }}>
                        <div style={{ padding: '30px' }}>
                            <img src="http://www.cloud360services.com/images/cloud-storage-icon.svg" width='110px' alt="..." />
                            <div class="card-body">
                                <h4>AWS Cloud Native Development</h4>
                                <p>With our Agile, DevOps-Centric methodology and Serverless architectures, we help our customers be more dynamic and accelerate go-to-market with AWS</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col mb-3'>
                    <div class="card " style={{ height: "420px" }}>
                        <div style={{ padding: '30px' }}>
                            <img src="http://www.cloud360services.com/images/data-analysis-icon.svg" width='110px' alt="..." />
                            <div class="card-body">
                                <h4>Data Analytics on AWS</h4>
                                <p>Using our experience and expertise, customers can unlock new data value chains via AWS native data and analytics solution. </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                <div className='col'>
                    <div class="card" style={{ height: "350px" }}>
                        <div style={{ padding: '30px' }}>
                            <img src="images/services/s1.png" width='110px' alt="..." />
                            <div class="card-body">
                                <h4>Fully Transparent</h4>
                                <p>Accurate information of work. Visualization achieved through the board.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="card" style={{ height: "350px" }} >
                        <div style={{ padding: '30px' }}>
                            <img src="images/services/s2.png" width='110px' alt="..." />
                            <div class="card-body">
                                <h4>Continuous Improvement</h4>
                                <p>Accurate information of work. Visualization achieved through the board.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col'>
                    <div class="card " style={{ height: "350px" }}>
                        <div style={{ padding: '30px' }}>
                            <img src="images/services/s3.png" width='110px' alt="..." />
                            <div class="card-body">
                                <h4>Fully Responsive</h4>
                                <p>Accurate information of work. Visualization achieved through the board.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='row row-cols-1 row-cols-md-3 g-3 mt-2'>
                <div className='col'>
                    <div class="card" style={{ height: "350px" }}>
                        <div style={{ padding: '30px' }}>
                            <img src="images/services/s4.png" width='110px' alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">Cloud Based</h4>
                                <p>Accurate information of work. Visualization achieved through the board.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="card" style={{ height: "350px" }}>
                        <div style={{ padding: '30px' }}>
                            <img src="images/services/s5.png" width='110px' alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">Easy to Use</h4>
                                <p>Accurate information of work. Visualization achieved through the board.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col'>
                    <div class="card" style={{ height: "350px" }}>
                        <div style={{ padding: '30px' }}>
                            <img src="images/services/s6.png" width='110px' alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">24 x 7 Support</h4>
                                <p>Accurate information of work. Visualization achieved through the board.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default AllServices;