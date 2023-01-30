import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='mb-5 pb-5'>
            <nav class="navbar navbar-expand-lg fixed-top bg-white mb-5">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="./images/logo.png" className='pt-2 pb-2' alt="Bootstrap" width="100" height="100" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link pt-2 pb-2" aria-current="page" href="#">Home</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link ms-3 pt-2 pb-2" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3 pt-2 pb-2" href="#">Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3 pt-2 pb-2" href="#">Contact Us</a>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;